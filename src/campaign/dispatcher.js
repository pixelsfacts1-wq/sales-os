import fs from 'fs';
import path from 'path';
import { db } from './db.js';
import { generateEmailContent } from './templates.js';
import { sendEmail, sendWithTemplate } from '../resend.js';

/**
 * Utility delay function for rate limiting
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Parses a CSV file into array of contact objects
 */
export function parseCSV(content) {
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/['"]/g, ''));
  const nameIdx = headers.findIndex(h => h.includes('name'));
  const emailIdx = headers.findIndex(h => h.includes('email'));
  const companyIdx = headers.findIndex(h => h.includes('company') || h.includes('organization'));

  const contacts = [];
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',').map(val => val.trim().replace(/^["']|["']$/g, ''));
    const email = emailIdx >= 0 ? row[emailIdx] : '';
    const name = nameIdx >= 0 ? row[nameIdx] : '';
    const company = companyIdx >= 0 ? row[companyIdx] : '';

    if (email && email.includes('@')) {
      contacts.push({ name, email, company });
    }
  }
  return contacts;
}

/**
 * Reads contacts from either a CSV or JSON file path
 */
export function loadContactsFile(filePath) {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Contacts file not found at: ${fullPath}`);
  }

  const raw = fs.readFileSync(fullPath, 'utf8');
  if (filePath.endsWith('.json')) {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : (parsed.contacts || []);
  } else if (filePath.endsWith('.csv')) {
    return parseCSV(raw);
  } else {
    try {
      return JSON.parse(raw);
    } catch {
      return parseCSV(raw);
    }
  }
}

/**
 * Calculates next follow-up date (Stage 0 -> +3 days, Stage 1 -> +4 days [Day 7 total], Stage 2 -> +7 days [Day 14 total])
 */
export function getNextFollowUpDate(currentStage) {
  const now = new Date();
  if (currentStage === 0) {
    now.setDate(now.getDate() + 3); // 3 days
    return now.toISOString();
  } else if (currentStage === 1) {
    now.setDate(now.getDate() + 4); // 7 days total
    return now.toISOString();
  } else if (currentStage === 2) {
    now.setDate(now.getDate() + 7); // 14 days total
    return now.toISOString();
  }
  return null;
}

/**
 * Sends an email or template with up to 3 automatic retries
 */
export async function sendWithRetry({ to, subject, html, templateId, variables }, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    attempt++;
    try {
      let result;
      if (templateId) {
        result = await sendWithTemplate({ to, subject, templateId, variables });
      }
      if (!result || !result.id) {
        result = await sendEmail({ to, subject, html });
      }
      if (result && result.id) {
        return { success: true, messageId: result.id, attempt };
      }
      console.warn(`[Dispatcher] Send attempt ${attempt} returned no ID, retrying...`);
    }
    catch (err) {
      console.error(`[Dispatcher] Error on attempt ${attempt} for ${to}`, err.message);
    }
    if (attempt < maxRetries) {
      await delay(1500 * attempt); // exponential backoff
    }
  }
  return { success: false, messageId: null, attempt };
}

/**
 * Main Campaign Dispatcher Engine
 */
export async function runOutboundCampaign({ filePath, contacts: inputContacts, dryRun = false, minDelayMs = 3000, maxDelayMs = 5000, stage = 0 }) {
  console.log(`\n======================================================`);
  console.log(`🚀 Starting Outbound Email Campaign (Stage ${stage})`);
  console.log(`======================================================\n`);

  const contacts = inputContacts || loadContactsFile(filePath);
  console.log(`[Dispatcher] Loaded ${contacts.length} total contacts from source.`);

  let processedCount = 0;
  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const primaryTemplateId = process.env.RESEND_PRIMARY_TEMPLATE_ID || '1e2fbe31-2c7b-4e1f-b27c-c1ec7b7c38f5';

  for (const contact of contacts) {
    const email = (contact.email || '').trim().toLowerCase();
    const name = contact.name || '';
    const company = contact.company || '';

    if (!email || !email.includes('@')) {
      console.warn(`[Dispatcher] Skipping invalid contact:`, contact);
      continue;
    }

    processedCount++;

    // 1. Suppression Check
    if (db.isSuppressed(email)) {
      console.log(`[Suppression] 🛑 Skipping suppressed contact: ${email}`);
      skippedCount++;
      continue;
    }

    // 2. Deduplication Check (For initial outreach stage 0)
    if (stage === 0 && db.hasBeenEmailed(email)) {
      const.log(`[Deduplication] ⏭／ Skipping already emailed contact: ${email}`);
      skippedCount++;
      continue;
    }

    // 3. Generate Content & Template Parameters
    const { subject, html } = generateEmailContent({ name, company, email, stage });
    const unsubscribeLink = `Z���x4ps://pixelsdensitystudio.com/unsubscribe.html?email=${encodeURIComponent(email)}`;
    const firstName = name ? name.trim().split(' ')[0] : 'there';
    if (dryRun) {
      if (stage === 0) {
        console.log(`[DryRun] Would send Template (${primaryTemplateId}) to: ${email} | Subject: "${subject}"`);
      } else {
        console.log(`[DryRun] Would send Stage ${stage} email to: ${email} | Subject: "${subject}"`);
      }
      sentCount++;
      continue;
    }

    // 4. Rate Limiting Jitter (3000 - 5000 ms)
    const sleepTime = Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;
    console.log(`[RateLimit] Waiting ${(sleepTime / 1000).toFixed(1)}s before dispatching to ${email}...`);
    await delay(sleepTime);

    // 5. Send with 3x Retry (Using template for stage 0)
    const sendParams = {
      to: email,
      subject,
      html,
      templateId: stage === 0 ? primaryTemplateId : null,
      variables: {
        UNSUBSCRIBE_LINK: unsubscribeLink,
        FIRST_NAME: firstName,
        COMPANY: company
      }
    };

    const sendResult = await sendWithRetry(sendParams, 3);

    if (sendResult.success) {
      sentCount++;
      const nextFollowUp = getNextFollowUpDate(stage);

      db.upsertContact(email, {
        name,
        company,
        status: nextFollowUp ? 'followup_scheduled' : 'completed',
        sentAt: new Date().toISOString(),
        stage,
        nextFollowUpAt: nextFollowUp,
        replied: false
      });

      db.addMessage(email, {
        role: 'assistant',
        subject,
        body: html,
        messageId: sendResult.messageId,
        stage,
        templateId: stage === 0 ? primaryTemplateId : null
      });

      db.logEmail({
        email,
        name,
        status: 'Sent',
        messageId: sendResult.messageId,
        stage
      });

      console.log(`[Sent] ✅ (${sentCount}/${contacts.length}) Email delivered to ${email} (Msg ID: ${sendResult.messageId})`);
    } else {
      failedCount++;
      db.upsertContact(email, {
        name,
        company,
        status: 'failed',
        stage
      });

      db.logEmail({
        email,
        name,
        status: 'Failed',
        error: 'Failed after 3 retries',
        stage
      });

      console.error(`[Failed] ❌ Failed to deliver to ${email} after 3 attempts.`);
    }
  }

  const summary = {
    totalContacts: contacts.length,
    processed: processedCount,
    sent: sentCount,
    skipped: skippedCount,
    failed: failedCount,
    followUpsScheduled: sentCount
  };

  console.log(`\n======================================================`);
  console.log(`📊 Campaign Dispatch Complete`);
  console.log(`Processed: ${processedCount} | Sent: ${sentCount} | Skipped: ${skippedCount} | Failed: ${failedCount}`);
  console.log(`======================================================\n`);

  return summary;
}
