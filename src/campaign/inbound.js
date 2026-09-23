import { db } from './db.js';
import { classifyIntent, generateContextualReply, INTENTS } from './ai-analyzer.js';
import { sendEmail } from '../resend.js';
import { findContactByEmail, setDND } from '../ghl.js';

/**
 * Handles incoming email replies, analyzes intent with AI, updates CRM/Suppression, and sends contextual responses.
 */
export async function handleInboundReply({ from, to, subject, text, messageId }) {
  const email = from ? from.replace(/.*<([^>]+)>.*/, '$1').trim().toLowerCase() : '';
  console.log(`\n======================================================`);
  console.log(`📥 Inbound Email Received from: ${email}`);
  console.log(`Subject: "${subject}" );
  console.log(`======================================================\n`);

  if (!email || !email.includes('@')) {
    console.error(`[Inbound] Invalid sender email:`, from);
    return { success: false, error: 'Invalid email' };
  }

  // 1. Fetch Contact & History
  const contact = db.getContact(email) || { name: '', company: '', email };
  const history = db.getConversationHistory(email);

  // 2. Classify Intent with AI
  const analysis = classifyIntent(text);
  console.log(`[AI Analyzer] Detected Intent: "${analysis.intent.toUpperCase()}" (Confidence: ${(analysis.confidence * 100).toFixed(0)}%)`);

  // Record incoming message in DB
  db.addMessage(email, {
    role: 'user',
    subject,
    body: text,
    messageId,
    intent: analysis.intent
  });

  // 3. Action based on Intent

  // Safety Rule: Unsubscribe / STOP
  if (analysis.intent === INTENTS.UNSUBSCRIBE) {
    console.log(`[Safety Guard] 🛑 Adding ${email} to Suppression List & Updating GHL DND...`);
    db.suppress(email, 'Inbound email unsubscribe request');

    // Update GHL CRM
    try {
      const ghlContact = await findContactByEmail(email);
      if (ghlContact && ghlContact.id) {
        await setDND(ghlContact.id, 'Email', true);
        console.log(`[GHL Sync] ✅ DND status updated for contact ${ghlContact.id}`);
      }
    } catch (err) {
      console.warn(`[GHL Sync] Warning: Could not update GHL DND for ${email}:`, err.message);
    }

    db.recordReply(email, { intent: analysis.intent, incomingText: text });
    return {
      success: true,
      intent: analysis.intent,
      action: 'suppressed',
      autoReplied: false
    };
  }

  // Record normal reply and halt follow-ups
  db.recordReply(email, { intent: analysis.intent, incomingText: text });

  // Out of Office / Wrong Person / Spam -> No automated reply needed
  if (!analysis.shouldAutoReply) {
    console.log(`[Inbound] Action taken: ${analysis.action}. No automated reply sent.`);
    return {
      success: true,
      intent: analysis.intent,
      action: analysis.action,
      autoReplied: false
    };
  }

  // Generate & Send Contextual AI Reply
  const replyContent = generateContextualReply({
    intent: analysis.intent,
    name: contact.name,
    company: contact.company,
    incomingText: text,
    history
  });

  if (!replyContent) {
    console.log(`[Inbound] Marked for manual review. No automated reply generated.`);
    return {
      success: true,
      intent: analysis.intent,
      action: 'manual_review',
      autoReplied: false
    };
  }

  console.log(`[AI Reply] 🤖 Generated contextual auto-reply for "${analysis.intent}":\n`);
  console.log(`Subject: ${replyContent.subject}`);
  console.log(`Body:\n${replyContent.body}\n`);

  // Format simple HTML body for reply
  const replyHtml = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #1a202c;">
      ${replyContent.body.replace(/\n/g, '<br>')}
    </div>
  `;

  // Dispatch single automated reply
  const sendRes = await sendEmail({
    to: email,
    subject: replyContent.subject,
    html: replyHtml
  });

  if (sendRes && sendRes.id) {
    console.log(`[AI Reply] ✅ Auto-reply sent successfully to ${email} (Msg ID: ${sendRes.id})`);
    db.addMessage(email, {
      role: 'assistant',
      subject: replyContent.subject,
      body: replyContent.body,
      messageId: sendRes.id,
      isAutoReply: true
    });

    db.logEmail({
      email,
      name: contact.name,
      status: 'Sent',
      messageId: sendRes.id,
      action: 'ai_auto_reply'
    });

    return {
      success: true,
      intent: analysis.intent,
      action: 'auto_replied',
      messageId: sendRes.id,
      autoReplied: true
    };
  } else {
    console.error(`[AI Reply] ❌ Failed to dispatch auto-reply to ${email}`);
    return {
      success: false,
      intent: analysis.intent,
      error: 'Failed to send auto-reply'
    };
  }
}
