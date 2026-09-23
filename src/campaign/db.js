import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'campaign_db.json');

const defaultSchema = {
  contacts: {},       // email -> { email, name, company, status, sentAt, messageIds: [], attempts: 0, stage: 0, nextFollowUpAt: null, lastRepliedAt: null, replied: false, intent: null }
  suppression: {},    // email -> { email, reason, timestamp }
  conversations: {},  // email -> [ { role: 'assistant' | 'user', subject, body, timestamp, messageId, intent } ]
  logs: [],           // [ { timestamp, email, name, status, messageId, error, action } ]
  stats: {
    totalProcessed: 0,
    successfulSends: 0,
    failedSends: 0,
    repliesReceived: 0,
    interestedProspects: 0,
    followUpsScheduled: 0,
    suppressedCount: 0
  }
};

class CampaignDB {
  constructor() {
    this.init();
  }

  init() {
    this.memoryData = defaultSchema;
    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }
      if (!fs.existsSync(DB_FILE)) {
        this.save(defaultSchema);
      }
    } catch (e) {
      // Serverless read-only filesystem
    }
  }

  read() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        this.memoryData = JSON.parse(raw);
        return this.memoryData;
      }
    } catch (e) {
      // Fall back to memoryData
    }
    return this.memoryData || defaultSchema;
  }

  save(data) {
    this.memoryData = data;
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
      // Serverless read-only filesystem
    }
  }

  isSuppressed(email) {
    const db = this.read();
    return !!db.suppression[email.toLowerCase().trim()];
  }

  suppress(email, reason = 'Unsubscribed') {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    db.suppression[cleanEmail] = {
      email: cleanEmail,
      reason,
      timestamp: new Date().toISOString()
    };
    if (db.contacts[cleanEmail]) {
      db.contacts[cleanEmail].status = 'suppressed';
      db.contacts[cleanEmail].nextFollowUpAt = null;
    }
    db.stats.suppressedCount = Object.keys(db.suppression).length;
    this.save(db);
  }

  hasBeenEmailed(email) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    const contact = db.contacts[cleanEmail];
    return contact && contact.sentAt && (contact.status === 'sent' || contact.status === 'replied' || contact.status === 'followup_scheduled');
  }

  getContact(email) {
    const db = this.read();
    return db.contacts[email.toLowerCase().trim()] || null;
  }

  upsertContact(email, data) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    db.contacts[cleanEmail] = {
      ...(db.contacts[cleanEmail] || {}),
      email: cleanEmail,
      ...data,
      updatedAt: new Date().toISOString()
    };
    this.save(db);
    return db.contacts[cleanEmail];
  }

  logEmail({ email, name, status, messageId = null, error = null, action = 'outbound_email', stage = 0 }) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    const entry = {
      timestamp: new Date().toISOString(),
      email: cleanEmail,
      name,
      status,
      messageId,
      error,
      action,
      stage
    };
    db.logs.push(entry);

    if (status === 'Sent') {
      db.stats.successfulSends++;
    } else if (status === 'Failed') {
      db.stats.failedSends++;
    }
    db.stats.totalProcessed = Object.keys(db.contacts).length;
    this.save(db);
  }

  addMessage(email, message) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    if (!db.conversations[cleanEmail]) {
      db.contacts[cleanEmail] = [];
    }
    db.conversations[cleanEmail].push({
      ...message,
      timestamp: new Date().toISOString()
    });
    this.save(db);
  }

  getConversationHistory(email) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    return db.conversations[cleanEmail] || [];
  }

  recordReply(email,
{ intent, replyBody, incomingText }) {
    const db = this.read();
    const cleanEmail = email.toLowerCase().trim();
    if (db.contacts[cleanEmail]) {
      db.contacts[cleanEmail].replied = true;
      db.contacts[cleanEmail].lastRepliedAt = new Date().toISOString();
      db.contacts[cleanEmail].intent = intent;
      db.contacts[cleanEmail].status = 'replied';
      db.contacts[cleanEmail].nextFollowUp[t = null; // Stop follow-ups
    }
    db.stats.repliesReceived++;
    if (['interested', 'wants_demo', 'wants_pricing', 'needs_more_information'].includes(intent)) {
      db.stats.interestedProspects++;
    }
    this.save(db);
  }

  getStats() {
    const db = this.read();
    return db.stats;
  }
}

export const db = new CampaignDB();
