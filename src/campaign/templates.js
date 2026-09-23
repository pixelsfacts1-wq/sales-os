/**
 * Email Templates with Dynamic Personalization for Pixels Density Studio
 */

export function generateEmailContent({ name, company, email, stage = 0 }) {
  const firstName = name ? name.trim().split(' ')[0] : 'there';
  const companyPhrase = company && company.trim() ? ` at ${company.trim()}` : '';
  const unsubscribeUrl = `https://pixelsdensitystudio.com/unsubscribe.html?email=${encodeURIComponent(email)}`;

  const brandStyles = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1a202c;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  `;

  const footerHtml = `
    <div style="margin-top: 36px; padding-top: 18px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
      <p style="margin: 0 0 8px 0;">
        <strong>Bhupeesh Prajapati</strong><br>
        Founder & CEO, <a href="https://pixelsdensitystudio.com" style="color: #3CBE8C; text-decoration: none;">Pixels Density Studio</a><br>
        AI Automation & Digital Engineering
      </p>
      <p style="margin: 12px 0 0 0;">
        If you'd prefer not to receive these emails, you can 
        <a href="${unsubscribeUrl}" style="color: #718096; text-decoration: underline;">unsubscribe here</a>.
      </p>
    </div>
  `;

  // Stage 0: Initial Outreach
  if (stage === 0) {
    const subject = company 
      ? `Quick question regarding AI automation at ${company.trim()}?`
      : `Streamlining manual workflows for ${firstName}`;

    const bodyHtml = `
      <div style="${brandStyles}">
        <p>Hi ${firstName},</p>
        <p>
          I came across your work${companyPhrase} and wanted to reach out directly.
        </p>
        <p>
          At <strong>Pixels Density Studio</strong>, we help fast-growing teams automate repetitive back-office tasks, CRM synchronization, and client outreach using intelligent AI workflows.
        </p>
        <p>
          Most teams we partner with reduce 15–20 hours of manual data handling each week while accelerating their customer response times.
        </p>
        <p>
          Would you be open to a brief 10-minute chat this week to explore if this could free up bandwidth for your team?
        </p>
        <p>
          Best regards,<br>
          <strong>Bhupeesh</strong>
        </p>
        ${footerHtml}
      </div>
    `;

    return { subject, html: bodyHtml, stage: 0 };
  }

  // Stage 1: Follow-up #1 (Day 3)
  if (stage === 1) {
    const subject = `Following up: AI automation for ${firstName}`;
    const bodyHtml = `
      <div style="${brandStyles}">
        <p>Hi ${firstName},</p>
        <p>
          Just following up on my previous note. I know your schedule is busy${companyPhrase}.
        </p>
        <p>
          We recently built an automated lead qualification system for a client that doubled their pipeline response rate within 14 days without hiring extra headcount.
        </p>
        <p>
          Let me know if you'd like me to share a quick 2-minute overview video of how it works.
        </p>
        <p>
          Best,<br>
          <strong>Bhupeesh</strong>
        </p>
        ${footerHtml}
      </div>
    `;

    return { subject, html: bodyHtml, stage: 1 };
  }

  // Stage 2: Follow-up #2 (Day 7)
  if (stage === 2) {
    const subject = `Idea for ${company ? company.trim() : firstName}`;
    const bodyHtml = `
      <div style="${brandStyles}">
        <p>Hi ${firstName},</p>
        <p>
          I put together a few concrete workflow automation ideas that typically deliver immediate ROI for operations${companyPhrase}:
        </p>
        <ul>
          <li><strong>Instant Lead Routing:</strong> Zero-delay sync between website forms and CRM sequences</li>
          <li><strong>Automated AI Inbound Triage:</strong> Smart categorization of customer emails with drafted replies</li>
          <li><strong>Autonomous Follow-up Engines:</strong> Multi-channel follow-ups that halt upon response</li>
        </ul>
        <p>
          Happy to walk you through how we implement this if you're interested.
        </p>
        <p>
          Cheers,<br>
          <strong>Bhupeesh</strong>
        </p>
        ${footerHtml}
      </div>
    `;

    return { subject, html: bodyHtml, stage: 2 };
  }

  // Stage 3: Follow-up #3 (Day 14 - Breakup email)
  if (stage === 3) {
    const subject = `Closing the loop, ${firstName}`;
    const bodyHtml = `
      <div style="${brandStyles}">
        <p>Hi ${firstName},</p>
        <p>
          I don't want to clutter your inbox, so I'll assume timing isn't right for AI automation initiatives${companyPhrase} right now.
        </p>
        <p>
          If your priorities shift in the future and you'd like to explore scaling your operations with custom AI agents, feel free to reach out anytime.
        </p>
        <p>
          Wishing you and the team all the best!
        </p>
        <p>
          Warm regards,<br>
          <strong>Bhupeesh Prajapati</strong>
        </p>
        ${footerHtml}
      </div>
    `;

    return { subject, html: bodyHtml, stage: 3 };
  }

  throw new Error(`Invalid campaign stage: ${stage}`);
}
