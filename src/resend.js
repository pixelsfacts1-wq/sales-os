import dotenv from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const execAsync = promisify(exec);

const RESEND_DEFAULT_FROM = process.env.RESEND_DEFAULT_FROM || 'Bhupeesh Prajapati <hello@ceo.pixelsdensitystudio.com>';
const RESEND_PRIMARY_TEMPLATE_ID = process.env.RESEND_PRIMARY_TEMPLATE_ID || '1e2fbe31-2c7b-4e1f-b27c-c1ec7b7c38f5';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const log = (message) => {
  console.log(`[Resend ${new Date().toISOString()}] ${message}`);
};

const logError = (message, error) => {
  console.error(`[Resend ${new Date().toISOString()}] ERROR: ${message}`, error);
};

/**
 * Sends a single email via Resend API or composio proxy.
 * @param {Object} options
 * @param {string} options.to Recipient email
 * @param {string} options.subject Email subject
 * @param {string} options.html Email HTML content
 * @param {string} [options.from] Sender email (defaults to RESEND_DEFAULT_FROM)
 * @returns {Promise<{id: string}|null>} Sent email ID
 */
export async function sendEmail({ to, subject, html, from }) {
  const sender = from || RESEND_DEFAULT_FROM;
  log(`Sending email to ${to} (Subject: "${subject}")`);

  const payload = {
    from: sender,
    to: [to],
    subject,
    html
  };

  try {
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      const result = await response.json();
      return result;
    } else {
      // Fallback to composio proxy
      const payloadStr = JSON.stringify(payload).replace(/'/g, "'\\''");
      cmd = `composio proxy "https://api.resend.com/emails" -X POST -H "Content-Type: application/json" -d '${payloadStr}' --toolkit resend`;
      const { stdout } = await execAsync(cmd);
      return JSON.parse(stdout);
    }
  } catch (err) {
    logError(`Failed to send email to ${to}`, err);
    return null;
  }
}

/**
 * Sends an email using a Resend template ID.
 * @param {Object} options
 * @param {string} options.to Recipient email
 * @param {string} options.subject Email subject
 * @param {string} [options.templateId] Resend Template ID
 * @param {Object} [options.variables] Variables for template substitution
 * @param {string} [options.from] Sender email
 * @returns {Promise<{id: string}|null>} Sent email ID
 */
export async function sendWithTemplate({ to, subject, templateId, variables, from }) {
  const sender = from || RESEND_DEFAULT_FROM;
  const tplId = templateId || RESEND_PRIMARY_TEMPLATE_ID;
  log(`Sending email with template ${tplId} to ${to}`);
  
  const payload = {
    from: sender,
    to: [to],
    subject,
    template_id: tplId,
    // Pass template variables using the data field
    data: variables || undefined
  };

  try {
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      const result = await response.json();
      return result;
    } else {
      const payloadStr = JSON.stringify(payload).replace(/'/g, "'\\''");
      cmd = `composio proxy "https://api.resend.com/emails" -X POST -H "Content-Type: application/json" -d '${payloadStr}' --toolkit resend`;
      const { stdout } = await execAsync(cmd);
      return JSON.parse(stdout);
    }
  } catch (err) {
    logError(`Failed to send template email to ${to}`, err);
    return null;
  }
}

/**
 * Convenience function to send a welcome email.
 * Reads HTML template from disk if available, falls back to default.
 * @param {Object} options
 * @param {string} options.to Recipient email
 * @param {string} [options.firstName] Recipient first name
 * @param {string} options.unsubscribeLink Unsubscribe URL
 * @returns {Promise<{id: string}|null>}
 */
export async function sendWelcomeEmail(to, firstName, unsubscribeLink) {
  log(`Preparing welcome email for ${to}`);
  
  let html = '';
  try {
    const templatePath = path.join(process.cwd(), 'email_preview.html');
    const fileContent = await fs.readFile(templatePath, 'utf8');
    html = fileContent;
  } catch (err) {
    log(`Warning: email_preview.html not found, using default welcome template`);
    const nameStr = firstName ? ` ${firstName}` : '';
    html = `
      <div>
        <h1>Welcome ${nameStr}!</h1>
        <p>Thank you for joining Pixels Density Studio.</p>
        <br />
        <p><a href="{{{UNSUBSCRIBE_LINK}}}">Unsubscribe</a></p>
      </div>
    `;
  }

  // Replace unsubscribe placeholder
  html = html.replace(/{{{UNSUBSCRIBE_LINK}}}/g, unsubscribeLink || '#');
  if (firstName) {
    html = html.replace(/{{FIRST_NAME}}/g, firstName);
  }

  return sendEmail({
    to,
    subject: 'Welcome to Pixels Density Studio!',
    html
  });
}
