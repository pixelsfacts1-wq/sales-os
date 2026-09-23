import { db } from './db.js';
import { runOutboundCampaign } from './dispatcher.js';

/**
 * Checks database for contacts due for follow-up emails and executes them.
 */
export async function processDueFollowUps({ dryRun = false, forceAll = false } = {}) {
  const data = db.read();
  const now = new Date();
  const contacts = Object.values(data.contacts || {});

  console.log(`\n[FollowUp] Scanning ${contacts.length} total campaign contacts for due follow-ups...`);

  const dueByStage = {
    1: [], // Follow-up #1 (Day 3)
    2: [], // Follow-up #2 (Day 7)
    3: []  // Follow-up #3 (Day 14)
  };

  for (const c of contacts) {
    // 1. Skip if replied or suppressed
    if (c.replied || db.isSuppressed(c.email) || c.status === 'suppressed' || c.status === 'replied') {
      continue;
    }

    // 2. Check if follow-up is due
    if (c.nextFollowUpAt || forceAll) {
      const dueDate = new Date(c.nextFollowUpAt || now);
      if (dueDate <= now || forceAll) {
        const nextStage = (c.stage || 0) + 1;
        if (nextStage >= 1 && nextStage <= 3) {
          dueByStage[nextStage].push({
            name: c.name,
            email: c.email,
            company: c.company
          });
        }
      }
    }
  }

  let totalFollowUpsSent = 0;

  for (let stage = 1; stage <= 3; stage++) {
    const list = dueByStage[stage];
    if (list.length > 0) {
      console.log(`\n[FollowUp] Executing ${list.length} contacts for Stage ${stage} Follow-up...`);
      const res = await runOutboundCampaign({
        contacts: list,
        stage,
        dryRun
      });
      totalFollowUpsSent += res.sent;
    }
  }

  console.log(`[FollowUp] Completed. Total follow-ups dispatched: ${totalFollowUpsSent}`);
  return { totalFollowUpsSent, dueByStage };
}
