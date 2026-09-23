/* ============================================
   SalesOS â€” Application Logic & Interactions
   Aligned with Impeccable Design Standards
   ============================================ */

const ACCOUNT_UUID = '6b70e96b-cdb5-42ea-8e0f-76698abb5714';
const CAMPAIGN_UUID = 'da747cb8-6dba-44e6-b16c-00704f84d589';

let CAMPAIGNS = [
  {
    name: 'ICP 1 â€” Founder-Led B2B SaaS (US)',
    uuid: 'da747cb8-6dba-44e6-b16c-00704f84d589',
    status: 'active',
    prospects: 248,
    sent: 186,
    accepted: 68,
    replied: 14,
    replyRate: 7.5,
    meetings: 5,
    health: 88,
    icp: 'ICP 1',
  },
  {
    name: 'ICP 2 â€” VP of Sales / CRO Track',
    uuid: 'c29f3a12-8e4b-4d1c-9c3f-2a8b5e6d7f90',
    status: 'active',
    prospects: 312,
    sent: 245,
    accepted: 82,
    replied: 16,
    replyRate: 6.5,
    meetings: 4,
    health: 82,
    icp: 'ICP 2',
  },
  {
    name: 'ICP 2 â€” Director of Sales Dev',
    uuid: 'e47a1b23-5c6d-4e8f-a1b2-3c4d5e6f7g80',
    status: 'active',
    prospects: 189,
    sent: 142,
    accepted: 52,
    replied: 8,
    replyRate: 5.6,
    meetings: 2,
    health: 75,
    icp: 'ICP 2',
  },
  {
    name: 'ICP 3 â€” PLG SaaS Upmarket',
    uuid: 'f58b2c34-6d7e-4f9g-b2c3-4d5e6f7g8h91',
    status: 'paused',
    prospects: 95,
    sent: 72,
    accepted: 24,
    replied: 4,
    replyRate: 5.6,
    meetings: 1,
    health: 65,
    icp: 'ICP 3',
  },
  {
    name: 'Warm Leads â€” Conference Austin 2026',
    uuid: 'g69c3d45-7e8f-5g0h-c3d4-5e6f7g8h9i02',
    status: 'paused',
    prospects: 42,
    sent: 38,
    accepted: 18,
    replied: 7,
    replyRate: 18.4,
    meetings: 3,
    health: 94,
    icp: 'Warm',
  },
];

let COMPANIES = [
  { name: 'RevFlow', industry: 'Fintech', arr: '$2.1M', headcount: 28, sdrs: 0, stage: 'Seed', city: 'Austin', tech: ['HubSpot', 'Calendly', 'Notion'], color: '#4C9AFF', icp: 'ICP 1', status: 'Contacted', contacts: 2 },
  { name: 'PeoplePulse', industry: 'HR / People', arr: '$8.5M', headcount: 120, sdrs: 6, stage: 'Series A', city: 'Boston', tech: ['Salesforce', 'Outreach', 'Gong'], color: '#A78BFA', icp: 'ICP 2', status: 'Meeting Booked', contacts: 3 },
  { name: 'HealthBridge', industry: 'Healthtech', arr: '$4.2M', headcount: 85, sdrs: 3, stage: 'Series A', city: 'Denver', tech: ['HubSpot Enterprise', 'Salesloft'], color: '#3CBE8C', icp: 'ICP 2', status: 'Replied', contacts: 1 },
  { name: 'DevStack.io', industry: 'DevTools', arr: '$1.8M', headcount: 22, sdrs: 0, stage: 'Pre-Seed', city: 'San Francisco', tech: ['Linear', 'Notion', 'Calendly'], color: '#FB923C', icp: 'ICP 1', status: 'In Sequence', contacts: 1 },
  { name: 'ShopLayer', industry: 'Vertical SaaS', arr: '$12M', headcount: 180, sdrs: 8, stage: 'Series B', city: 'New York', tech: ['Salesforce', 'Outreach', 'ZoomInfo'], color: '#F87171', icp: 'ICP 2', status: 'Contacted', contacts: 2 },
  { name: 'Cloudinate', industry: 'DevTools', arr: '$6.8M', headcount: 95, sdrs: 4, stage: 'Series A', city: 'Seattle', tech: ['HubSpot', 'Apollo', 'Gong'], color: '#22D3EE', icp: 'ICP 2', status: 'Meeting Held', contacts: 2 },
  { name: 'PayPivot', industry: 'Fintech', arr: '$950K', headcount: 15, sdrs: 0, stage: 'Seed', city: 'Chicago', tech: ['Notion', 'Calendly', 'Slack'], color: '#FBBF24', icp: 'ICP 1', status: 'Interested', contacts: 1 },
  { name: 'NurseNet', industry: 'Healthtech', arr: '$15M', headcount: 210, sdrs: 10, stage: 'Series B', city: 'Atlanta', tech: ['Salesforce', 'Outreach', 'Gong', 'ZoomInfo'], color: '#A78BFA', icp: 'ICP 3', status: 'New', contacts: 0 },
];

let MESSAGES = [
  { id: 1, name: 'Alex Turner', company: 'RevFlow', title: 'CEO & Founder', avatar: '#4C9AFF', initials: 'AT', preview: 'This sounds interesting. I would love to see a demo...', time: '2h ago', unread: true, tag: 'demo', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Alex â€” saw you\'re building RevFlow, love the progress in Fintech. Would love to connect here.', time: '3 days ago' },
      { type: 'sent', text: 'Alex â€” RevFlow looks like it\'s still at the stage where most new meetings trace back to you personally. That works right up until the week you spend on product or a raise. I build outbound demand gen systems for early-stage B2B SaaS so meeting flow stops depending on the founder\'s calendar. Worth 10 minutes?', time: '3 days ago' },
      { type: 'received', text: 'This sounds interesting. I would love to see a demo of your AI workflows. Can we hop on a call?', time: '2h ago' },
    ]
  },
  { id: 2, name: 'Jessica Park', company: 'PeoplePulse', title: 'VP of Sales', avatar: '#A78BFA', initials: 'JP', preview: 'Thanks for the teardown video. The observation about our...', time: '4h ago', unread: true, tag: 'interested', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Jessica â€” you\'ve got 6 SDR³ and 2 open reqs. If meetings per rep is flat while headcount climbs, the bottleneck is almost never the reps. 15 minutes to show you what I\'d change?', time: '5 days ago' },
      { type: 'sent', text: 'Jessica â€” made you a short video instead of writing another email. 4 minutes on how I\'d build outbound for PeoplePulse specifically. [Loom Link]', time: '3 days ago' },
      { type: 'received', text: 'Thanks for the teardown video. The observation about our targeting in the mid-market was spot on. Let me check my calendar for next week.', time: '4h ago' },
    ]
  },
  { id: 3, name: 'Ryan Mitchell', company: 'HealthBridge', title: 'CRO', avatar: '#3CBE8C', initials: 'RM', preview: 'How does pricing work for the 60-day sprint?', time: '1d ago', unread: false, tag: 'info', channel: 'email',
    messages: [
      { type: 'sent', text: 'Ryan â€” HealthBridge has 3 SDRs and it looks like you\'re scaling the team. I rebuild the upstream layer for Series A/B SaaS. Measurable inside a quarter.', time: '6 days ago' },
      { type: 'received', text: 'How does pricing work for the 60-day sprint? We\'ve been burned by agencies before so I want to understand the structure.', time: '1 day ago' },
    ]
  },
  { id: 4, name: 'Sarah Chen', company: 'DevStack.io', title: 'Founder', avatar: '#FB923C', icp: 'ICP 1', status: 'In Sequence', contacts: 1 },
  { name: 'ShopLayer', industry: 'Vertical SaaS', arr: '$12M', headcount: 180, sdrs: 8, stage: 'Series B', city: 'New York', tech: ['Salesforce', 'Outreach', 'ZoomInfo'], color: '#F87171', icp: 'ICP 2', status: 'Contacted', contacts: 2 },
  { name: 'Cloudinate', industry: 'DevTools', arr: '$6.8M', headcount: 95, sdrs: 4, stage: 'Series A', city: 'Seattle', tech: ['HubSpot', 'Apollo', 'Gong'], color: '#22D3EE', icp: 'ICP 2', status: 'Meeting Held', contacts: 2 },
  { name: 'PayPivot', industry: 'Fintech', arr: '$950K', headcount: 15, sdrs: 0, stage: 'Seed', city: 'Chicago', tech: ['Notion', 'Calendly', 'Slack'], color: '#FBBF24', icp: 'ICP 1', status: 'Interested', contacts: 1 },
  { name: 'NurseNet', industry: 'Healthtech', arr: '$15M', headcount: 210, sdrs: 10, stage: 'Series B', city: 'Atlanta', tech: ['Salesforce', 'Outreach', 'Gong', 'ZoomInfo'], color: '#A78BFA', icp: 'ICP 3', status: 'New', contacts: 0 },
];

let MESSAGES = [
  { id: 1, name: 'Alex Turner', company: 'RevFlow', title: 'CEO & Founder', avatar: '#4C9AFF', initials: 'AT', preview: 'This sounds interesting. I would love to see a demo...', time: '2h ago', unread: true, tag: 'demo', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Alex â€” saw you\'re building RevFlow, love the progress in Fintech. Would love to connect here.', time: '3 days ago' },
      { type: 'sent', text: 'Alex â€” RevFlow looks like it\'s still at the stage where most new meetings trace back to you personally. That works right up until the week you spend on product or a raise. I build outbound demand gen systems for early-stage B2B SaaS so meeting flow stops depending on the founder\'s calendar. Worth 10 minutes?', time: '3 days ago' },
      { type: 'received', text: 'This sounds interesting. I would love to see a demo of your AI workflows. Can we hop on a call?', time: '2h ago' },
    ]
  },
  { id: 2, name: 'Jessica Park', company: 'PeoplePulse', title: 'VP of Sales', avatar: '#A78BFA', initials: 'JP', preview: 'Thanks for the teardown video. The observation about our...', time: '4h ago', unread: true, tag: 'interested', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Jessica â€” you\'ve got 6 SDR³ and 2 open reqs. If meetings per rep is flat while headcount climbs, the bottleneck is almost never the reps. 15 minutes to show you what I\'d change?', time: '5 days ago' },
      { type: 'sent', text: 'Jessica â€” made you a short video instead of writing another email. 4 minutes on how I\'d build outbound for PeoplePulse specifically. [Loom Link]', time: '3 days ago' },
      { type: 'received', text: 'Thanks for the teardown video. The observation about our targeting in the mid-market was spot on. Let me check my calendar for next week.', time: '4h ago' },
    ]
  },
  { id: 3, name: 'Ryan Mitchell', company: 'HealthBridge', title: 'CRO', avatar: '#3CBE8C', initials: 'RM', preview: 'How does pricing work for the 60-day sprint?', time: '1d ago', unread: false, tag: 'info', channel: 'email',
    messages: [
      { type: 'sent', text: 'Ryan â€” HealthBridge has 3 SDRs and it looks like you\'re scaling the team. I rebuild the upstream layer for Series A/B SaaS. Measurable inside a quarter.', time: '6 days ago' },
      { type: 'received', text: 'How does pricing work for the 60-day sprint? We\'ve been burned by agencies before so I want to understand the structure.', time: '1 day ago' },
    ]
  },
  { id: 4, name: 'Sarah Chen', company: 'DevStack.io', title: 'Founder', avatar: '#FB923C', initials: 'SC', preview: 'Not the right time for us â€” heads down on product...', time: '1d ago', unread: false, tag: 'objection', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Sarah â€” saw you\'re building DevStack.io. Would love to connect.', time: '7 days ago' },
      { type: 'received', text: 'Not the right time for us â€” heads down on product right now. Maybe revisit in Q1.', time: '1 day ago' },
    ]
  },
  { id: 5, name: 'David Kim', company: 'ShopLayer', title: 'Director of Sales Dev', avatar: '#F87171', initials: 'DK', preview: 'Can you send more details about your approach to...', time: '2d ago', unread: false, tag: 'info', channel: 'email',
    messages: [
      { type: 'sent', text: 'David â€” ShopLayer is growing fast. Your SDR team of 8 is impressive but if meetings per rep is flat, the bottleneck is upstream.', time: '8 days ago' },
      { type: 'received', text: 'Can you send more details about your approach to targeting? We\'re evaluating several options right now.', time: '2 days ago' },
    ]
  },
  { id: 6, name: 'Mark Stevens', company: 'Cloudinate', title: 'VP of Sales', avatar: '#22D3EE', initials: 'MS', preview: 'Booked! See you Thursday at 2pm ET.', time: '3d ago', unread: false, tag: 'interested', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Mark â€” Cloudinate\'s growth to $6.8M ARR is impressive. I noticed your SDR team is at 4 and you have open reqs. 15 minutes to show you what I\'d change?', time: '10 days ago' },
      { type: 'sent', text: 'Mark â€” pulled your last 3 SDR job posts and recorded 4 minutes on where I\'d expect the drop-off. [Loom Link]', time: '7 days ago' },
      { type: 'received', text: 'Great video. Let\'s talk.', time: '5 days ago' },
      { type: 'sent', text: 'Awesome! Grab any slot that works: https://calendly.com/pixelsfacts1/30min', time: '5 days ago' },
      { type: 'received', text: 'Booked! See you Thursday at 2pm ET.', time: '3 days ago' },
    ]
  },
  { id: 7, name: 'Samantha Reed', company: 'TechVibe', title: 'CEO', avatar: '#F87171', initials: 'SR', preview: 'Please stop emailing me and unsubscribe me from...', time: '5d ago', unread: false, tag: 'unsubscribe', channel: 'email',
    messages: [
      { type: 'sent', text: 'Samantha â€” TechVibe looks like it\'s growing. I build outbound demand gen systems for early-stage B2B SaaS.', time: '7 days ago' },
      { type: 'received', text: 'Please stop emailing me and unsubscribe me from your list.', time: '5 days ago' },
    ]
  },
  { id: 8, name: 'Tom Andersen', company: 'PayPivot', title: 'Co-Founder', avatar: '#FBBF24', initials: 'TA', preview: 'This is really interesting â€” we\'ve been struggling...', time: '6h ago', unread: true, tag: 'interested', channel: 'linkedin',
    messages: [
      { type: 'sent', text: 'Tom â€” saw you\'re building PayPivot. Would love to connect here.', time: '4 days ago' },
      { type: 'sent', text: 'Tom â€” PayPivot looks like it\'s still at the stage where most new meetings trace back to you personally. Worth 10 minutes?', time: '2 days ago' },
      { type: 'received', text: 'This is really interesting â€” we\'ve been struggling with outbound. The SDR hire we\'re considering is exactly the risk you described. Let\'s chat.', time: '6h ago' },
    ]
  },
];

/* Authored SVG Icons for Suggestions (Craft Floor Compliant â€” No Emoji) */
const SVG_ICONS = {
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`
};

const SUGGESTIONS = [
  {
    id: 'sug-1', icon: SVG_ICONS.target, iconBg: 'var(--accent-green-dim)', iconColor: 'var(--accent-green)',
    priority: 'high', title: 'Increase ICP 2 Connection Request Volume',
    desc: 'Your ICP 2 VP of Sales campaign is performing 23% above average reply rates but only using 72% of your daily connection quota. Increase volume to 18/day to maximize meetings.',
    impact: '+3-4 meetings/month', category: 'targeting'
  },
  {
    id: 'sug-2', icon: SVG_ICONS.clock, iconBg: 'var(--accent-orange-dim)', iconColor: 'var(--accent-orange)',
    priority: 'high', title: 'Optimize Follow-up Timing for ICP 1',
    desc: 'Data shows ICP 1 founders respond 40% more to messages sent between 7-9 AM local time. Shift Touch 1 timing from 11 AM to early morning.',
    impact: '+1.2% reply rate', category: 'timing'
  },
  {
    id: 'sug-3', icon: SVG_ICONS.message, iconBg: 'var(--accent-blue-dim)', iconColor: 'var(--accent-blue)',
    priority: 'medium', title: 'A/B Test "Calendar Whiplash" vs "Pipeline Gap" Hook',
    desc: 'Your ICP 1 Founder sequence uses the "calendar whiplash" pain hook. Test against a "pipeline gap after fundraising" angle to lift response rates.',
    impact: '+0.8% reply rate', category: 'messaging'
  },
  {
    id: 'sug-4', icon: SVG_ICONS.refresh, iconBg: 'var(--accent-purple-dim)', iconColor: 'var(--accent-purple)',
    priority: 'medium', title: 'Re-engage Stalled ICP 2 Prospects',
    desc: '23 prospects viewed your Loom teardown but haven\'t replied. Send a personalized LinkedIn DM referencing the specific observation from their video.',
    impact: '+5-7 replies', category: 'engagement'
  },
  {
    id: 'sug-5', icon: SVG_ICONS.shield, iconBg: 'var(--accent-cyan-dim)', iconColor: 'var(--accent-cyan)',
    priority: 'low', title: 'Domain Health Check â€” Bounce Rate Rising',
    desc: 'Your ceo.pixelsdensitystudio.com domain bounce rate is at 2.4%, approaching the 3% ceiling. Run re-verification on your next 500-lead batch.',
    impact: 'Protect domain reputation', category: 'safety'
  },
  {
    id: 'sug-6', icon: SVG_ICONS.cpu, iconBg: 'var(--accent-yellow-dim)', iconColor: 'var(--accent-yellow)',
    priority: 'low', title: 'Enable AI Variable Personalization',
    desc: 'SalesRobot AI variables can auto-generate personalized opening lines using prospect LinkedIn activity. Enable {{aiOpener}} merge tags.',
    impact: '+2.1% acceptance rate', category: 'ai'
  },
];

const GOALS = [
  { title: 'Meetings Booked', current: 12, target: 25, unit: '', status: 'at-risk', color: 'var(--accent-green)', breakdown: [{ label: 'ICP 1', value: 5 }, { label: 'ICP 2', value: 6 }, { label: 'Warm', value: 1 }] },
  { title: 'Meetings Held', current: 9, target: 18, unit: '', status: 'on-track', color: 'var(--accent-blue)', breakdown: [{ label: 'Held', value: 9 }, { label: 'No-Show', value: 2 }, { label: 'Rescheduled', value: 1 }] },
  { title: 'New Prospects Added', current: 482, target: 600, unit: '', status: 'on-track', color: 'var(--accent-purple)', breakdown: [{ label: 'LinkedIn', value: 312 }, { label: 'CSV', value: 128 }, { label: 'Manual', value: 42 }] },
  { title: 'Reply Rate (ICP 2)', current: 6.8, target: 8.0, unit: '%', status: 'on-track', color: 'var(--accent-cyan)', breakdown: [{ label: 'VP Sales', value: '7.5%' }, { label: 'Dir. SDR', value: '5.6%' }, { label: 'Avg', value: '6.8%' }] },
  { title: 'Acceptance Rate', current: 34.2, target: 35.0, unit: '%', status: 'achieved', color: 'var(--accent-orange)', breakdown: [{ label: 'ICP 1', value: '38%' }, { label: 'ICP 2', value: '32%' }, { label: 'ICP 3', value: '28%' }] },
  { title: 'Pipeline Revenue', current: 84, target: 150, unit: 'K', status: 'at-risk', color: 'var(--accent-yellow)', breakdown: [{ label: 'Qualified', value: '$42K' }, { label: 'Proposal', value: '$28K' }, { label: 'Negotiation', value: '$14K' }] },
];

const AB_TESTS = [
  {
    title: 'ICP 1 Subject Line: "Calendar Whiplash" vs "Pipeline Gap"',
    status: 'running',
    startDate: 'Sep 5, 2026',
    sampleSize: '186 prospects',
    duration: '15 days',
    variants: [
      {
        letter: 'A', name: 'Calendar Whiplash (Control)',
        preview: 'Subject: your calendar is the pipeline\n\n{{FirstName}} â€” {{Company}} looks like it\'s still at the stage where most new meetings trace back to you personally...',
        openRate: 42.3, replyRate: 7.5, meetings: 5, class: 'variant-a', winner: true
      },
      {
        letter: 'B', name: 'Pipeline Gap After Raise',
        preview: 'Subject: post-{{FundingRound}} pipeline at {{Company}}\n\n{{FirstName}} â€” saw the {{FundingRound}} close. Most founders at this stage immediately put that capital toward hiring an SDR...',
        openRate: 38.1, replyRate: 5.8, meetings: 3, class: 'variant-b', winner: false
      },
    ],
    confidence: 78,
  },
  {
    title: 'ICP 2 Touch 2: Loom Teardown vs Case Study PDF',
    status: 'running',
    startDate: 'Sep 8, 2026',
    sampleSize: '124 prospects',
    duration: '12 days',
    variants: [
      {
        letter: 'A', name: 'Personalized Loom Teardown',
        preview: '{{FirstName}} â€” made you a short video instead of writing another email â€” 4 minutes on how I\'d build outbound for {{Company}} specifically...',
        openRate: 56.2, replyRate: 9.1, meetings: 4, class: 'variant-a', winner: true
      },
      {
        letter: 'B', name: 'Generic Case Study PDF',
        preview: '{{FirstName}} â€” attached a case study on how we helped a Series A SaaS move pipeline coverage from 1.8Ã— to 3.2Ã— in 60 days...',
        openRate: 41.8, replyRate: 4.2, meetings: 1, class: 'variant-b', winner: false
      },
    ],
    confidence: 92,
  },
  {
    title: 'Connection Request: Short vs Value-Add Message',
    status: 'completed',
    startDate: 'Aug 15, 2026',
    sampleSize: '200 prospects',
    duration: '21 days',
    variants: [
      {
        letter: 'A', name: 'Short & Casual',
        preview: '{{FirstName}} â€” saw you\'re building {{Company}}, love the progress in {{Industry}}. Would love to connect here.',
        openRate: null, replyRate: null, meetings: null, acceptRate: 36.8, class: 'variant-a', winner: true
      },
      {
        letter: 'B', name: 'Value Proposition Lead',
        preview: '{{FirstName}} â€” I help B2B SaaS companies like {{Company}} 2-3Ã— their appointment booking. Would love to share some insights.',
        openRate: null, replyRate: null, meetings: null, acceptRate: 28.4, class: 'variant-b', winner: false
      },
    ],
    confidence: 96,
  },
];

const ACTIVITY_FEED = [
  { text: '<strong>Alex Turner</strong> from RevFlow requested a demo', color: 'green', minutesAgo: 24 },
  { text: '<strong>Jessica Park</strong> from PeoplePulse viewed your Loom teardown', color: 'blue', minutesAgo: 95 },
  { text: 'Campaign <strong>ICP 1 - Founder-Led</strong> sent 18 connection requests', color: 'blue', minutesAgo: 180 },
  { text: '<strong>Tom Andersen</strong> from PayPivot replied â€” interested in a call', color: 'green', minutesAgo: 320 },
  { text: '<strong>Mark Stevens</strong> from Cloudinate â€” meeting held âœ“', color: 'green', minutesAgo: 1440 },
  { text: '<strong>Samantha Reed</strong> from TechVibe unsubscribed â€” suppressed', color: 'red', minutesAgo: 1560 },
  { text: '<strong>Ryan Mitchell</strong> from HealthBridge asked about pricing', color: 'purple', minutesAgo: 1820 },
  { text: '<strong>Sarah Chen</strong> from DevStack.io â€” timing objection, tagged for Q1 follow-up', color: 'orange', minutesAgo: 2100 },
  { text: 'Campaign <strong>ICP 2 - VP Sales</strong> reached 245 sent milestone', color: 'blue', minutesAgo: 2880 },
  { text: '<strong>David Kim</strong> from ShopLayer requesting more details', color: 'purple', minutesAgo: 3100 },
  { text: 'Domain bounce rate alert: 2.4% on ceo.pixelsdensitystudio.com', color: 'orange', minutesAgo: 3400 },
  { text: 'New batch of 50 prospects verified â€” 98.2% valid emails', color: 'green', minutesAgo: 4320 },
];

const FUNNEL_DATA = [
  { label: 'Prospects Added', value: 886, pct: '100%', color: 'var(--accent-blue)', width: '100%' },
  { label: 'Connection Sent', value: 683, pct: '77%', color: 'var(--accent-purple)', width: '77%' },
  { label: 'Connected', value: 244, pct: '35.7%', color: 'var(--accent-cyan)', width: '35.7%' },
  { label: 'Replied', value: 49, pct: '7.2%', color: 'var(--accent-green)', width: '18%' },
  { label: 'Meeting Booked', value: 15, pct: '2.2%', color: 'var(--accent-orange)', width: '10%' },
  { label: 'Meeting Held', value: 9, pct: '1.3%', color: 'var(--accent-yellow)', width: '6%' },
];

let activeThreadId = 1;

// ============================================
// INITIALIZATION
// ============================================
// ============================================
// THEME SYSTEM (Day Mode / Night Mode Only)
// ============================================

const THEMES = ['night', 'day'];
const THEME_LABELS = { night: 'Night Mode', day: 'Day Mode' };

function getStoredTheme() {
  try {
    const saved = localStorage.getItem('salesos-theme');
    if (saved === 'day' || saved === 'light') return 'day';
    return 'night'; // Default to Night Mode
  } catch {
    return 'night';
  }
}

function applyTheme(theme) {
  if (theme !== 'day' && theme !== 'night') theme = 'night';
  const root = document.documentElement;

  if (theme === 'day') {
    root.setAttribute('data-theme', 'day');
  } else {
    root.setAttribute('data-theme', 'night');
  }

  // Persist choice
  try {
    localStorage.setItem('salesos-theme', theme);
  } catch { /* storage unavailable */ }

  // Update toggle tooltip
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const nextLabel = theme === 'night' ? 'Day Mode' : 'Night Mode';
    toggle.title = `Switch to ${nextLabel}`;
  }

  // Destroy and recreate charts for theme-aware grid colors
  if (typeof initCharts === 'function' && typeof Chart !== 'undefined') {
    try {
      Object.values(Chart.instances || {}).forEach(c => c?.destroy?.());
      initCharts();
    } catch { /* first load, charts init later */ }
  }
}

function initTheme() {
  const saved = getStoredTheme();
  applyTheme(saved);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = getStoredTheme();
      const next = current === 'night' ? 'day' : 'night';
      applyTheme(next);
      showToast(`Switched to ${THEME_LABELS[next]}`);
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initToastContainer();
  initTheme();
  initNavigation();
  initSidebarCollapse();
  initKeyboardShortcuts();
  initDate();
  initTimeTicker();
  initTimezoneModal();
  renderDashboard();
  renderCompanies();
  renderMessages();
  renderSuggestions();
  renderGoals();
  renderABTests();
  renderAlerts();
  renderCampaignsTable();
  renderTodayRespondents();
  initAgencyControls();
  initViralPostStudio();
  initCharts();
  initScoreRing();
  syncAgencyOSRealtimeData(false);
  setInterval(() => syncAgencyOSRealtimeData(false), 30000);
});

// ============================================
// TOAST NOTIFICATION SYSTEM
// ============================================

function initToastContainer() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    constainer.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-dot"></span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===========================================
// KEYBOARD SHORTCUTS
// ===========================================

™[˜İ[Ûˆ[š]Ù^X›Ø\™ÚÜİ]Ê
HÂˆÚ[™İË˜Y]™[\İ[™\Š	ÚÙ^YİÛ‰Ë
JHOˆÂˆËÈ8£&ˆÜˆİ›
ĞˆÈÙÙÛHÚYX˜\ˆÛÛ\ÙBˆYˆ

K›Y]RÙ^HK˜İ›Ù^JH	‰ˆ
KšÙ^HOOH	Ø‰ÈKšÙ^HOOH	Ğ‰ÊJHÂˆKœ™]™[Y˜][

NÂˆÙÙÛTÚYX˜\ÛÛ\ÙJ
NÂˆ™]\›ÂˆB‚ˆËÈ8£&ÈÜˆÈÈ›Øİ\ÈÙX\˜ÚˆYˆ

K›Y]RÙ^HK˜İ›Ù^JH	‰ˆKšÙ^HOOH	ÚÉÈ
KšÙ^HOOH	ËÉÈ	‰ˆØİ[Y[˜Xİ]™Q[[Y[YÓ˜[YHOOH	ÒS”U	ÊJHÂˆKœ™]™[Y˜][

NÂˆÛÛœİÙX\˜ÚHØİ[Y[œ]Y\TÙ[XİÜ[
	ËœÙX\˜ÚZ[œ]	ÊNÂˆYˆ
ÙX\˜Ú
HÂˆÙX\˜Ú™›Øİ\Ê
NÂˆÚİÕØ\İ
	ÔÙX\˜Ú›Øİ\ÙY
8£&ÊIÊNÂˆBˆB‚ˆËÈ\ØØ\HÛÜÙ\È˜]Ù\‚ˆYˆ
KšÙ^HOOH	Ñ\ØØ\IÊHÂˆÛÛœİ˜]Ù\ˆHØİ[Y[™Ù][[Y[RY
	ØÛÛ\[Q˜]Ù\‰ÊNÂˆYˆ
˜]Ù\ˆ	‰ˆ˜]Ù\‹˜Û\ÜÓ\İ˜ÛÛZ[œÊ	ÛÜ[‰ÊJHÂˆ˜]Ù\‹˜Û\ÜÓ\İœ™[[İ™J	ÛÜ[‰ÊNÂˆBˆB‚ˆËÈ[Y\šXÈ˜]šYØ][Ûˆ
KMÊHÚ[ˆ›İ\[™È[ˆ[ˆ[œ]ˆYˆ
VÉÒS”U	Ë	ÕVT‘PIË	ÔÑSPÕ	×Kš[˜ÛY\ÊØİ[Y[˜Xİ]™Q[[Y[YÓ˜[YJJHÂˆÛÛœİYÙ\ÈHÉÙ\Ú›Ø\™	Ë	ØÛÛ\[IË	ÛY\ÜØYÙ\ÉË	ÜİYÙÙ\İ[ÛœÉË	ÙÛØ[ÉË	ØX\İ[™ÉË	ÜÙ][™ÜÉ×NÂˆÛÛœİ[HH\œÙR[
KšÙ^JNÂˆYˆ
[HHH	‰ˆ[HHYÙ\Ë›[™İ
HÂˆKœ™]™[Y˜][

NÂˆ˜]šYØ]UÔYÙJYÙ\ÖÛ[HHWJNÂˆB‚ˆËÈ‹ÚÈY\ÜØYÙH˜]šYØ][Û‚ˆYˆ
KšÙ^HOOH	Ú‰ÈKšÙ^HOOH	ÚÉÊHÂˆÛÛœİXİ]™TYÙHHØİ[Y[œ]Y\TÙ[XİÜŠ	ËœYÙK˜Xİ]™IÊNÂˆYˆ
Xİ]™TYÙH	‰ˆXİ]™TYÙKšYOOH	ÜYÙK[Y\ÜØYÙ\ÉÊHÂˆKœ™]™[Y˜][

NÂˆÛÛœİİ\œ™[[™^HQTÔĞQÑTË™š[™[™^
HOˆKšYOOHXİ]™U™XYY
NÂˆ]™]Ò[™^Hİ\œ™[[™^ÂˆYˆ
KšÙ^HOOH	Ú‰ÊH™]Ò[™^HX]›Z[ŠQTÔĞQÑTË›[™İHKİ\œ™[[™^
ÈJNÂˆYˆ
KšÙ^HOOH	ÚÉÊH™]Ò[™^HX]›X^
İ\œ™[[™^HJNÂˆYˆ
™]Ò[™^OOHİ\œ™[[™^
HÂˆÙ[Xİ™XY
QTÔĞQÑTÖÛ™]Ò[™^KšY
NÂˆBˆBˆBˆBˆJNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈÒQPTˆÓÓTÑH	ˆ‘TÔÓ”ÒU‘HÑÑÓB‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[ÛˆÙÙÛTÚYX˜\ÛÛ\ÙJ
HÂˆÛÛœİ\ĞÛÛ\\ÜÙYHØİ[Y[˜›ÙK˜Û\ÜÓ\İÙÙÛJ	ÜÚYX˜\‹XÛÛ\ÙY	ÊNÂˆØØ[İÜ˜YÙKœÙ]][J	ÜØ[\ÛÜË\ÚYX˜\‹XÛÛ\ÙY	Ë\ĞÛÛ\\ÜÙYÈ	İYIÈˆ	Ù˜[ÙIÊNÂˆÛÛœİˆHØİ[Y[™Ù][[Y[RY
	ÜÚYX˜\ˆÛÛ\ÙP‰ÊNÂˆYˆ
ŠHÂˆ‹œÙ]]šX]J	Ø\šXKY^[™Y	ËZ\ĞÛÛ\ÙY
NÂˆ‹œÙ]]šX]J	İ]IË\ĞÛÛ\\ÜÙYÈ	Ñ^[™ÚYX˜\ˆ
8£&ŠIÈˆ	ĞÛÛ\ÙHÚYX˜\ˆ
8£&ŠIÊNÂˆBˆÚİÕØ\İ
\ĞÛÛ\ÙYÈ	ÔÚYX˜\ˆÛÛ\ÙY
8£&ŠIÈˆ	ÔÚYX˜\ˆ^[™Y
8£&ŠIÊNÂˆÙ][Y[İ]


HOˆÂˆÚ[™İË™\Ü]Ú]™[
™]È]™[
	Ü™\Ú^™IÊJNÂˆKŒ
NÂŸB‚™[˜İ[Ûˆ[š]ÚYX˜\ÛÛ\ÙJ
HÂˆÛÛœİØ]™Yİ]HHØØ[İÜ˜YÙK™Ù]][J	ÜØ[\ÛÜË\ÚYX˜\‹XÛÛ\ÙY	ÊNÂˆYˆ
Ø]™Yİ]HOOH	İYIÊHÂˆØİ[Y[˜›ÙK˜Û\ÜÓ\İ˜Y
	ÜÚYX˜\‹XÛÛ\ÙY	ÊNÂˆÛÛœİˆHØİ[Y[™Ù][[Y[RY
	ÜÚYX˜\ÛÛ\ÙP‰ÊNÂˆYˆ
ŠHÂˆ‹œÙ]]šX]J	Ø\šXKY^[™Y	Ë	Ù˜[ÙIÊNÂˆ‹œÙ]]šX]J	İ]IË	Ñ^[™ÚYX˜\ˆ
8£&ŠIÊNÂˆBˆB‚ˆÛÛœİÛÛ\ÙPˆHØİ[Y[™Ù][[Y[RY
	ÜÚYX˜\ÛÛ\ÙP‰ÊNÂˆÛÛ\ÙPË˜Y]™[\İ[™\Š	ØÛXÚÉË
JHOˆÂˆKœİÜ›ÜYØ][ÛŠ
NÂˆÙÙÛTÚYX˜\ÛÛ\ÙJ
NÂˆJNÂ‚ˆÛÛœİY[UÙÙÛHHØİ[Y[™Ù][[Y[RY
	ÛY[UÙÙÛIÊNÂˆÛÛœİÚYX˜\ˆHØİ[Y[™Ù][[Y[RY
	ÜÚYX˜\‰ÊNÂ‚ˆY[UÙÙÛOË˜Y]™[\İ[™\Š	ØÛXÚÉË
JHOˆÂˆKœİÜ›ÜYØ][ÛŠ
NÂˆYˆ
Ú[™İËš[›™\•ÚYHL
HÂˆÚYX˜\Ë˜Û\ÜÓ\İÙÙÛJ	Û[Øš[K[Ü[‰ÊNÂˆH[ÙHÂˆÙÙÛTÚYX˜\ÛÛ\ÙJ
NÂˆBˆJNÂ‚ˆØİ[Y[˜Y]™[\İ[™\Š	ØÛXÚÉË
JHOˆÂˆYˆ
Ú[™İËš[›™\•ÚYHL	‰ˆ
ÚYX˜\Ë˜Û\ÜÓ\İ˜ÛÛZ[œÊ	Û[Øš[K[Ü[‰ÊHÚYX˜\Ë˜Û\ÜÓ\İ˜ÛÛZ[œÊ	ÛÜ[‰ÊJJHÂˆYˆ
\ÚYX˜\‹˜ÛÛZ[œÊK\™Ù]
H	‰ˆK\™Ù]OOHY[UÙÙÛJHÂˆÚYX˜\‹˜Û\ÜÓ\İœ™[[İ™J	Û[Øš[K[Ü[‰ÊNÂˆÚYX˜\‹˜Û\ÜÓ\İœ™[[İ™J	ÛÜ[‰ÊNÂˆBˆBˆJNÂŸB‚™[˜İ[Ûˆ˜]šYØ]UÔYÙJYÙRÙ^JHÂˆÛÛœİ\™Ù]][HHØİ[Y[œ]Y\TÙ[XİÜŠ›˜]‹Z][VÙ]K\YÙOH‰ÜYÙRÙ^_H—X
NÂˆYˆ
\™Ù]][JH\™Ù]][K˜ÛXÚÊ
NÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈ‘PSUSQHQÑSÖHÔÈÖSÈS‘ÒS‘B‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚›]\Ô™X[[YTŞ[˜Ú[™ÈH˜[ÙNÂ‚˜\Ş[˜È[˜İ[ÛˆŞ[˜ĞYÙ[˜ŞSÔÔ™X[[YQ]JÚİÑ™YY˜XÚÈH˜[ÙJHÂˆYˆ
\Ô™X[[YTŞ[˜Ú[™ÊH™]\›Âˆ\Ô™X[[YTŞ[˜Ú[™ÈHYNÂ‚ˆÛÛœİ™Yœ™\ÚˆHØİ[Y[™Ù][[Y[RY
	Ü™Yœ™\Ú‰ÊNÂˆÛÛœİŞ[˜Ğ˜YÙHHØİ[Y[™Ù][[Y[RY
	ÜŞ[˜Ôİ]\Ğ˜YÙIÊNÂˆYˆ
™Yœ™\ÚŠHÂˆ™Yœ™\Ú‹œİ[K˜[œÙ›Ü›HH	Ü›İ]JÍŒYÊIÎÂˆ™Yœ™\Ú‹œİ[K˜[œÚ][ÛˆH	İ˜[œÙ›Ü›HœÈX\ÙIÎÂˆB‚ˆHÂˆÛÛœİÜİ[[X\T™\ËØ[\ZYÛœÔ™\Ë[˜›Ş™\ËÙ^T™\×HH]ØZ]›ÛZ\ÙK˜[
Âˆ™]Ú
	ËØ\KÜ™X[[YKÜİ[[X\IÊK[ŠˆOˆ‹šœÛÛŠ
JK˜Ø]Ú


HOˆ[
Kˆ™]Ú
	ËØ\KÜ™X[[YKØØ[\ZYÛœÉÊK[ŠˆOˆ‹šœÛÛŠ
JK˜Ø]Ú


HOˆ[
Kˆ™]Ú
	ËØ\KÜ™X[[YKÚ[˜›Ş	ÊK[ŠˆOˆ‹šœÛÛŠ
JK˜Ø]Ú


HOˆ[
Kˆ™]Ú
	ËØ\KÜ™X[[YKİÙ^K\\™›Ü›X[˜ÙIÊK[ŠˆOˆ‹šœÛÛŠ
JK˜Ø]Ú


HOˆ[
BˆJNÂ‚ˆÛÛœİ›İÈH™]È]J
NÂˆÛÛœİ[YTİˆH›İËÓØØ[U[YTİš[™Ê×KÈİ\ˆ	Ì‹YYÚ]	ËZ[]Nˆ	Ì‹YYÚ]	ËÙXÛÛ™ˆ	Ì‹YYÚ]	ÈJNÂˆYˆ
Ş[˜Ğ˜YÙJHÂˆŞ[˜Ğ˜YÙK^ÛÛ[HŞ[˜ÙY	İ[YTİŸXÂˆB‚ˆYˆ
İ[[X\T™\È	‰ˆİ[[X\T™\ËœİXØÙ\ÜÊHÂˆÛÛœİÜ\ÈHİ[[X\T™\ËšÜ\ÎÂˆÛÛœİXØÛİ[Hİ[[X\T™\Ë˜XØÛİ[Â‚ˆÛÛœİ\ÓYY][™ÜÈHØİ[Y[™Ù][[Y[RY
	Ü\Ë[YY][™ÜÉÊNÂˆÛÛœİ\Ô™\Y\ÈHØİ[Y[™Ù][[Y[RY
	Ü\Ë\™\Y\ÉÊNÂˆÛÛœİ\Ô›ÜÜXİÈHØİ[Y[™Ù][[Y[RY
	Ü\Ë\›ÜÜXİÉÊNÂ‚ˆYˆ
\ÓYY][™ÜÈ	‰ˆÜ\Ë›YY][™ÜÕ\ÕÙYZÈOOH[™Yš[™Y
H\ÓYY][™ÜË^ÛÛ[HÜ\Ë›YY][™ÜÕ\ÕÙYZÎÂˆYˆ
\Ô™\Y\È	‰ˆÜ\Ë›™]Ô™\Y\ÈOOH[™Yš[™Y
H\Ô™\Y\Ë^ÛÛ[HÜ\Ë›™]Ô™\Y\ÎÂˆYˆ
\Ô›ÜÜXİÈ	‰ˆÜ\Ëİ[›ÜÜXİÈOOH[™Yš[™Y
H\Ô›ÜÜXİË^ÛÛ[HÜ\Ëİ[›ÜÜXİËÓØØ[Tİš[™Ê
NÂ‚ˆËÈ\]Hİ™\šY]ÈÔHØ\™ÂˆÛÛœİÜPÛÛ›ˆHØİ[Y[™Ù][[Y[RY
	ÚÜPÛÛ›™Xİ[Û”™\]Y\İÉÊNÂˆÛÛœİÜPXØÙ\HØİ[Y[™Ù][[Y[RY
	ÚÜPXØÙ\[˜ÙT˜]IÊNÂˆÛÛœİÜT™\HHØİ[Y[™Ù][[Y[RY
	ÚÜT™\T˜]IÊNÂˆÛÛœİÜSYY]HØİ[Y[™Ù][[Y[RY
	ÚÜSYY][™ÜĞ›ÛÚÙY	ÊNÂ‚ˆYˆ
ÜPÛÛ›ˆ	‰ˆÜ\Ë˜Xİ]™T›ÜÜXİÊHÜPÛÛ›‹^ÛÛ[HÜ\Ë˜Xİ]™T›ÜÜXİËÓØØ[Tİš[™Ê
NÂˆYˆ
ÜPXØÙ\
HÜPXØÙ\^ÛÛ[H	ÌÍŒ‰IÎÂˆYˆ
ÜT™\JHÜT™\K^ÛÛ[H	Í‹	IÎÂˆYˆ
ÜSYY]	‰ˆÜ\Ë›YY][™ÜÕ\ÕÙYZÊHÜSYY]^ÛÛ[HÜ\Ë›YY][™ÜÕ\ÕÙYZÎÂ‚ˆÛÛœİ˜YÙUÙ^HHØİ[Y[œ]Y\TÙ[XİÜŠ	Ë›˜]‹Z][VÙ]K\YÙOHš[˜›ŞX[˜[\Ú\È—H›˜]‹X˜YÙIÊNÂˆYˆ
˜YÙUÙ^H	‰ˆÙ^T™\ÏËİ[Ûİ[
H˜YÙUÙ^K^ÛÛ[HÙ^T™\Ëİ[Ûİ[Â‚ˆÛÛœİ˜YÙR[˜›ŞHØİ[Y[œ]Y\TÙ[XİÜŠ	Ë›˜]‹Z][VÙ]K\YÙOH›Y\ÜØYÙ\È—H›˜]‹X˜YÙIÊNÂˆYˆ
˜YÙR[˜›Ş	‰ˆÜ\Ë›™]Ô™\Y\ÊH˜YÙR[˜›Ş^ÛÛ[HÜ\Ë›™]Ô™\Y\ÈˆNHÈ	ÎNJÉÈˆÜ\Ë›™]Ô™\Y\ÎÂ‚ˆÛÛœİ˜YÙPØ[\ZYÛœÈHØİ[Y[œ]Y\TÙ[XİÜŠ	Ë›˜]‹Z][VÙ]K\YÙOH˜Ø[\ZYÛœÈ—H›˜]‹X˜YÙIÊNÂˆYˆ
˜YÙPØ[\ZYÛœÈ	‰ˆÜ\Ëİ[Ø[\ZYÛœÊH˜YÙPØ[\ZYÛœË^ÛÛ[HÜ\Ëİ[Ø[\ZYÛœÎÂ‚ˆÛÛœİ\Ù\“˜[YHHØİ[Y[œ]Y\TÙ[XİÜŠ	Ë\Ù\‹Z[™›È\Ù\‹[˜[YIÊNÂˆYˆ
\Ù\“˜[YH	‰ˆXØÛİ[›˜[YJH\Ù\“˜[YK^ÛÛ[HXØÛİ[›˜[YNÂ‚ˆÛÛœİ\Ù\]˜]\ˆHØİ[Y[œ]Y\TÙ[XİÜŠ	Ë\Ù\‹\›Ùš[H˜]˜]\‹Z[š]X[ÉÊNÂˆYˆ
\Ù\]˜]\ˆ	‰ˆXØÛİ[›˜[YJHÂˆ\Ù\]˜]\‹^ÛÛ[HXØÛİ[›˜[YKœÜ]
	È	ÊK›X\
ˆOˆ–ÌJKš›Ú[Š	ÉÊKœÛXÙJŠKÕ\\Ø\ÙJ
NÂˆB‚ˆÛÛœİXØÓ˜[YQ[HØİ[Y[œ]Y\TÙ[XİÜŠ	ÈÜYÙK\Ù][™ÜÈœÙ][™Ë]˜[YN››İ
›[Û›ÊIÊNÂˆYˆ
XØÓ˜[YQ[	‰ˆXØÛİ[›˜[YJHXØÓ˜[YQ[^ÛÛ[HXØÛİ[›˜[YNÂ‚ˆÛÛœİXØÕ]ZY[HØİ[Y[œ]Y\TÙ[XİÜŠ	ÈÜYÙK\Ù][™ÜÈœÙ][™Ë]˜[YK›[Û›ÉÊNÂˆYˆ
XØÕ]ZY[	‰ˆXØÛİ[]ZY
HXØÕ]ZY[^ÛÛ[HXØÛİ[]ZYÂˆB‚ˆYˆ
Ø[\ZYÛœÔ™\È	‰ˆØ[\ZYÛœÔ™\ËœİXØÙ\ÜÈ	‰ˆ\œ˜^Kš\Ğ\œ˜^JØ[\ZYÛœÔ™\Ë˜Ø[\ZYÛœÊH	‰ˆØ[\ZYÛœÔ™\Ë˜Ø[\ZYÛœË›[™İˆ
HÂˆĞSTRQÓ”ÈHØ[\ZYÛœÔ™\Ë˜Ø[\ZYÛœÎÂˆ™[™\Ø[\ZYÛ•X›J
NÂ‚ˆĞSTRQÓ”×ÔT‘“Ô“PSÑWÑUHHØ[\ZYÛœÔ™\Ë˜Ø[\ZYÛœË›X\
ÈOˆ
Âˆ˜[YNˆË›˜[YKˆ[˜[YNˆË™[˜[YHË›˜[YKˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]H
YÙ[˜ŞHÛÛ[X[™\ŠIËˆÛY[Ù^Nˆ	Ğš\Y\Ú˜Z˜\]IËˆİ]\ÎˆËœ˜]Ôİ]\È
Ëœİ]\ÈOOH	ØXİ]™IÈÈ	ÔÕT•Q	Èˆ	ÔUTÑQ	ÊKˆ›ÙÜ™\ÜÎˆËœ›ÜÜXİÈˆÈX]›Z[ŠLX]œ›İ[™

ËœÙ[ÈËœ›ÜÜXİÊH
ˆL
JHˆˆÙ[ˆËœÙ[ˆXØÙ\Yˆ	ØË˜XØÙ\YH
	ØËœÙ[ˆÈX]œ›İ[™

Ë˜XØÙ\YÈËœÙ[
H
ˆL
HˆIJXˆXØÙ\YİˆËœÙ[ˆÈX]œ›İ[™

Ë˜XØÙ\YÈËœÙ[
H
ˆL
Hˆˆ™\Y\ÎˆËœ™\YYˆ™\T˜]NˆËœ™\T˜]BˆJJNÂˆ™[™\Ø[\ZYÛœÕX›J
NÂˆB‚ˆYˆ
[˜›Ş™\È	‰ˆ[˜›Ş™\ËœİXØÙ\ÜÈ	‰ˆ\œ˜^Kš\Ğ\œ˜^J[˜›Ş™\Ë™XYÊH	‰ˆ[˜›Ş™\Ë™XYË›[™İˆ
HÂˆQTÔĞQÑTÈH[˜›Ş™\Ë™XYÎÂˆ™[™\“Y\ÜØYÙ\Ê
NÂ‚ˆËÈ^˜Xİ[š\]YHÛÛ\[šY\È›ÜˆÛÛ\[šY\ÈX‚ˆÛÛœİ[š\]YPÛÛ\ÈH×NÂˆÛÛœİÙY[ˆH™]ÈÙ]

NÂˆ[˜›Ş™\Ë™XYË™›Ü‘XXÚ

JHOˆÂˆÛÛœİÛÛ\˜[YHH˜ÛÛ\[H	Ñ[\œš\ÙH\™\‰ÎÂˆYˆ
\ÙY[‹š\ÊÛÛ\˜[YJH	‰ˆÛÛ\˜[YHOOH	ĞÛÜœÜ˜]HÛY[	È	‰ˆÛÛ\˜[YHOOH	Ñ[\œš\ÙH\™\‰ÊHÂˆÙY[‹˜Y
ÛÛ\˜[YJNÂˆÛÛœİÛÛÜœÈHÉÈÍÎPQ‘‰Ë	ÈĞMÎ‘IË	ÈÌĞĞ‘NÉË	ÈÑLŒĞÉË	ÈÑÌMÌIË	ÈÌŒ‘ÑQIË	ÈÑ‘Œ	×NÂˆ[š\]YPÛÛ\Ëœ\Ú
Âˆ˜[YNˆÛÛ\˜[YKˆ[™\İNˆ˜Ø[\ZYÛËš[˜ÛY\Ê	ÕÙ[™\ÜÉÊHÈ	ÕÙ[™\ÜÈ	ˆÛØXÚ[™ÉÈˆ	ÕXÚ›ÛÙŞHÈÛÛœİ[[™ÉËˆ\œˆ	É‹SHH	LIËˆXYÛİ[ˆL
È
H
ˆLŠH	HŒˆÙœÎˆ
H	H
KˆİYÙNˆ	ÑÜ›İİ	ËˆÚ]Nˆ	ÕTÈ	ˆÛØ˜[	ËˆXÚˆÉÔØ[\Ô›Ø›İ	Ë	Ó[šÙY[‰Ë	ÔØ[\È˜]šYØ]Ü‰×KˆÛÛÜˆÛÛÜœÖÚH	HÛÛÜœË›[™İKˆXÜˆ	ĞXİ]™HPÔ	Ëˆİ]\ÎˆYÈOOH	Ú[\™\İY	ÈÈ	Ô™\YY	Èˆ	ĞÛÛXİY	ËˆÛÛXİÎˆBˆJNÂˆBˆJNÂˆYˆ
[š\]YPÛÛ\Ë›[™İˆ
HÂˆÓÓTS’QTÈH[š\]YPÛÛ\ÎÂˆ™[™\ÛÛ\[šY\Ê
NÂˆBˆB‚ˆYˆ
Ù^T™\È	‰ˆÙ^T™\ËœİXØÙ\ÜÈ	‰ˆ\œ˜^Kš\Ğ\œ˜^JÙ^T™\Ëœ™\ÜÛ™[ÊH	‰ˆÙ^T™\Ëœ™\ÜÛ™[Ë›[™İˆ
HÂˆÑVWÔ‘TÔÓ‘S•×ÑUHHÙ^T™\Ëœ™\ÜÛ™[Ë›X\

‹JHOˆ
ÂˆYˆ‹šY™\ÜIÚ_Xˆ˜[YNˆ‹›˜[YKˆ[š]X[Îˆ‹š[š]X[Ëˆ]Nˆ	Ü‹]_H]	Ü‹˜ÛÛ\[_Xˆš[Üš]Nˆ‹œÙ[[Y[OOH	Ò[\™\İY	ÈÈ	ÒQÒ	Èˆ	ÓQQUSIËˆY\ÜØYÙNˆ‹œÛš\]ˆ[YNˆ‹[YKˆÙ[[Y[ˆ‹œÙ[[Y[ˆÚ[›™[ˆ	Ó[šÙY[‰ËˆØ[\ZYÛˆ‹˜Ø[\ZYÛ‚ˆJJNÂˆ™[™\•Ù^T™\ÜÛ™[Ê
NÂˆB‚ˆYˆ
ÚİÑ™YY˜XÚÊHÂˆÚİÕØ\İ
	Ô™X[][YH]HŞ[˜Ú›Ûš^™YÚ]Ø[\Ô›Ø›İ	ˆÒ	ÊNÂˆBˆHØ]Ú
\œŠHÂˆÛÛœÛÛK™\œ›ÜŠ	ÖÔ™X[[YHŞ[˜È\œ›Ü—IË\œŠNÂˆYˆ
ÚİÑ™YY˜XÚÊHÂˆÚİÕØ\İ
	ÔŞ[˜È›İXÙNˆ	È
È\œ‹›Y\ÜØYÙJNÂˆBˆHš[˜[HÂˆ\Ô™X[[YTŞ[˜Ú[™ÈH˜[ÙNÂˆYˆ
™Yœ™\ÚŠHÂˆÙ][Y[İ]


HOˆÂˆ™Yœ™\Ú‹œİ[K˜[œÙ›Ü›HH	ÉÎÂˆKŒ
NÂˆBˆBŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈU’QĞUSÓ‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ[š]˜]šYØ][ÛŠ
HÂˆÛÛœİ˜]’][\ÈHØİ[Y[œ]Y\TÙ[XİÜ[
	Ë›˜]‹Z][VÙ]K\YÙWIÊNÂˆÛÛœİYÙ\ÈHØİ[Y[œ]Y\TÙ[XİÜ[
	ËœYÙIÊNÂˆÛÛœİœ™XYÜ[XˆHØİ[Y[™Ù][[Y[RY
	Øœ™XYÜ[Xİ\œ™[	ÊNÂˆÛÛœİÚYX˜\ˆHØİ[Y[™Ù][[Y[RY
	ÜÚYX˜\‰ÊNÂ‚ˆ˜]’][\Ë™›Ü‘XXÚ
][HOˆÂˆ][K˜Y]™[\İ[™\Š	ØÛXÚÉË
JHOˆÂˆKœ™]™[Y˜][

NÂˆÛÛœİYÙHH][K™]\Ù]œYÙNÂ‚ˆ˜]’][\Ë™›Ü‘XXÚ
ˆOˆ‹˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊJNÂˆ][K˜Û\ÜÓ\İ˜Y
	ØXİ]™IÊNÂ‚ˆYÙ\Ë™›Ü‘XXÚ
Oˆ˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊJNÂˆÛÛœİ\™Ù]YÙHHØİ[Y[™Ù][[Y[RY
YÙKIÜYÙ_X
NÂˆYˆ
\™Ù]YÙJH\™Ù]YÙK˜Û\ÜÓ\İ˜Y
	ØXİ]™IÊNÂ‚ˆÛÛœİX™[ÈHÂˆ\Ú›Ø\™ˆ	Óİ™\šY]ÉËˆ	Ú[˜›ŞX[˜[\Ú\ÉÎˆ•Ù^IÜÈ\™›Ü›X[˜ÙH‹ˆY\ÜØYÙ\Îˆ	Ò[˜›Ş	ËˆÛÛ\[Nˆ	ĞÛY[ÉËˆØ[\ZYÛœÎˆ	ĞYÙ[˜ŞHØ[\ZYÛˆ\™›Ü›X[˜ÙIËˆ[\Îˆ	ĞYÙ[˜ŞHÜ\˜][Û˜[[\ÉËˆ	İš\˜[\ÜİÉÎˆ	Õš\˜[ÜİİY[ÉËˆİYÙÙ\İ[ÛœÎˆ	ĞRHİYÙÙ\İ[ÛœÉËˆÛØ[Îˆ	Ó[ÛHÛØ[ÉËˆX\İ[™Îˆ	ĞKĞˆ\İ[™ÉËˆÙ][™ÜÎˆ	ÔŞ\İ[HÛÛ™šYİ\˜][Û‰ÂˆNÂˆœ™XYÜ[X‹^ÛÛ[HX™[ÖÜYÙWHYÙNÂ‚ˆYˆ
Ú[™İËš[›™\•ÚYHL
HÂˆÚYX˜\‹˜Û\ÜÓ\İœ™[[İ™J	Û[Øš[K[Ü[‰ÊNÂˆÚYX˜\‹˜Û\ÜÓ\İœ™[[İ™J	ÛÜ[‰ÊNÂˆBˆJNÂˆJNÂ‚ˆØİ[Y[™Ù][[Y[RY
	Ü™Yœ™\Ú‰ÊOË˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆŞ[˜ĞYÙ[˜ŞSÔÔ™X[[YQ]JYJNÂˆJNÂ‚ˆËÈY\ÜØYÙHXœÈš[\‚ˆØİ[Y[œ]Y\TÙ[XİÜ[
	Ë›\ÙË]X‰ÊK™›Ü‘XXÚ
XˆOˆÂˆX‹˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆØİ[Y[œ]Y\TÙ[XİÜ[
	Ë›\ÙË]X‰ÊK™›Ü‘XXÚ
Oˆ˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊJNÂˆX‹˜Û\ÜÓ\İ˜Y
	ØXİ]™IÊNÂˆÛÛœİÚ[›™[HX‹™]\Ù]š[˜›ŞÂˆš[\“Y\ÜØYÙ\ÊÚ[›™[
NÂˆJNÂˆJNÂŸB‚˜ÛÛœİT×ÕSQV“Ó‘TÈHÂˆÈÙ^Nˆ	ÑTÕ	ËX™[ˆ	ÕTÈX\İ\›‰Ëˆ	Ğ[Y\šXØKÓ™]×Ö[ÜšÉËÚ]Nˆ	Ó™]È[ÜšË–IÈKˆÈÙ^Nˆ	ĞÔÕ	ËX™[ˆ	ÕTÈÙ[˜[	Ëˆ	Ğ[Y\šXØKĞÚXØYÛÉËÚ]Nˆ	ĞÚXØYÛËS	ÈKˆÈÙ^Nˆ	ÓTÕ	ËX™[ˆ	ÕTÈ[İ[Z[‰Ëˆ	Ğ[Y\šXØKÑ[™\‰ËÚ]Nˆ	Ñ[™\‹ÓÉÈKˆÈÙ^Nˆ	ÔÕ	ËX™[ˆ	ÕTÈXÚYšXÉËˆ	Ğ[Y\šXØKÓÜ×Ğ[™Ù[\ÉËÚ]Nˆ	ÔØ[ˆœ˜[˜Ú\ØÛËĞIÈK—NÂ‚™[˜İ[Ûˆ]˜[X]UÚ[™İÑ›Ü•Š[YV›Û™JHÂˆÛÛœİ›İÈH™]È]J
NÂˆÛÛœİ›Ü›X]\ˆH™]È[‘]U[YQ›Ü›X]
	Ù[‹UTÉËÂˆ[YV›Û™KˆÙYZÙ^Nˆ	ÜÚÜ	Ëˆİ\ˆ	Û[Y\šXÉËˆZ[]Nˆ	Û[Y\šXÉËˆÙXÛÛ™ˆ	Û[Y\šXÉËˆİ\ŒLˆ˜[ÙKˆJNÂˆÛÛœİ\ÈHØš™Xİ™œ›ÛQ[šY\Ê›Ü›X]\‹™›Ü›X]Ô\Ê›İÊK›X\
OˆÜ\K˜[YWJJNÂˆÛÛœİÙYZÙ^HH\ËÙYZÙ^NÂˆÛÛœİİ\ˆH\œÙR[
\Ëšİ\‹L
NÂˆÛÛœİZ[]HH\œÙR[
\Ë›Z[]KL
NÂˆÛÛœİİ[Z[œÈHİ\ˆ
ˆŒ
ÈZ[]NÂˆÛÛœİ\ÕÙYZÙ[™HÙYZÙ^HOOH	ÔØ]	ÈÙYZÙ^HOOH	Ôİ[‰ÎÂ‚ˆÛÛœİÚ[™İÔİ\H
ˆŒ
ÈÌÈËÈŒÌˆÛÛœİÚ[™İÑ[™HMÈ
ˆŒ
ÈÌÈËÈMÎŒÌˆÛÛœİ\ÓÜ[ˆHZ\ÕÙYZÙ[™	‰ˆİ[Z[œÈHÚ[™İÔİ\	‰ˆİ[Z[œÈÚ[™İÑ[™ÂˆÛÛœİ\Ôš[YPHHZ\ÕÙYZÙ[™	‰ˆİ[Z[œÈH
ˆŒ
ÈÌ	‰ˆİ[Z[œÈHL
ˆŒ
ÈMNÂˆÛÛœİ\Ôš[YPˆHZ\ÕÙYZÙ[™	‰ˆİ[Z[œÈHLÈ
ˆŒ
ÈH	‰ˆİ[Z[œÈHMH
ˆŒ
ÈÌÂ‚ˆ]İ]\Ğ˜YÙHH	Ôİ[™IÎÂˆ]˜YÙPÛÛÜˆH	Ø[X™\‰ÎÂˆYˆ
\ÕÙYZÙ[™
HÂˆİ]\Ğ˜YÙHH	ÕÙYZÙ[™]\ÙIÎÂˆ˜YÙPÛÛÜˆH	Ø›YIÎÂˆH[ÙHYˆ
\Ôš[YPJHÂˆİ]\Ğ˜YÙHH	Ôš[YHÚ[™İÈIÎÂˆ˜YÙPÛÛÜˆH	ÙÜ™Y[‰ÎÂˆH[ÙHYˆ
\Ôš[YPŠHÂˆİ]\Ğ˜YÙHH	Ôš[YHÚ[™İÈ‰ÎÂˆ˜YÙPÛÛÜˆH	ÙÜ™Y[‰ÎÂˆH[ÙHYˆ
\ÓÜ[ŠHÂˆİ]\Ğ˜YÙHH	ĞXİ]™HÚ[™İÉÎÂˆ˜YÙPÛÛÜˆH	ÙÜ™Y[‰ÎÂˆB‚ˆ™]\›ˆÂˆ[YTİš[™Îˆ	Ü\Ëšİ\ŸN‰Ü\Ë›Z[]_N‰Ü\ËœÙXÛÛ™XˆÚÜ[YNˆ	Ü\Ëšİ\ŸN‰Ü\Ë›Z[]_XˆÙYZÙ^Kˆ\ÕÙYZÙ[™ˆ\ÓÜ[‹ˆİ]\Ğ˜YÙKˆ˜YÙPÛÛÜ‹ˆNÂŸB‚™[˜İ[Ûˆ\]S]™U[YJ
HÂˆÛÛœİ›İÈH™]È]J
NÂˆˆËÈØØ[[YBˆÛÛœİİ\œÈHİš[™Ê›İË™Ù]İ\œÊ
JKœYİ\
‹	Ì	ÊNÂˆÛÛœİZ[]\ÈHİš[™Ê›İË™Ù]Z[]\Ê
JKœYİ\
‹	Ì	ÊNÂˆÛÛœİÙXÛÛ™ÈHİš[™Ê›İË™Ù]ÙXÛÛ™Ê
JKœYİ\
‹	Ì	ÊNÂˆÛÛœİ]™PÛØÚÑ[HØİ[Y[™Ù][[Y[RY
	Û]™PÛØÚÉÊNÂˆYˆ
]™PÛØÚÑ[
H]™PÛØÚÑ[^ÛÛ[H	Úİ\œßN‰ÛZ[]\ßN‰ÜÙXÛÛ™ßXÂ‚ˆËÈØØ[[Y^›Û™H˜YÙBˆÛÛœİØØ[˜YÙQ[HØİ[Y[™Ù][[Y[RY
	ÛØØ[˜YÙIÊNÂˆYˆ
ØØ[˜YÙQ[
HÂˆHÂˆÛÛœİÚÜˆH™]È[‘]U[YQ›Ü›X]
	Ù[‹UTÉËÈ[YV›Û™S˜[YNˆ	ÜÚÜ	ÈJBˆ™›Ü›X]Ô\Ê›İÊBˆ™š[™
Oˆ\HOOH	İ[YV›Û™S˜[YIÊOË˜[YH	ÓĞĞS	ÎÂˆØØ[˜YÙQ[^ÛÛ[HÚÜÂˆHØ]ÚÂˆØØ[˜YÙQ[^ÛÛ[H	ÓĞĞS	ÎÂˆBˆB‚ˆËÈTÈX\šÙ]
TÕ
H[YBˆÛÛœİ\İİ]\ÈH]˜[X]UÚ[™İÑ›Ü•Š	Ğ[Y\šXØKÓ™]×Ö[ÜšÉÊNÂˆÛÛœİX\šÙ]ÛØÚÑ[HØİ[Y[™Ù][[Y[RY
	ÛX\šÙ]ÛØÚÉÊNÂˆYˆ
X\šÙ]ÛØÚÑ[
HX\šÙ]ÛØÚÑ[^ÛÛ[H	Ù\İİ]\ËœÚÜ[Y_HQÂ‚ˆËÈ[]BˆÛÛœİ^\ÈHÉÔİ[™^IË	Ó[Û™^IË	ÕY\Ù^IË	ÕÙY™\Ù^IË	Õ\œÙ^IË	ÑœšY^IË	ÔØ]\™^I×NÂˆÛÛœİ[ÛÈHÉÒ˜[‰Ë	Ñ™X‰Ë	ÓX\‰Ë	Ğ\‰Ë	ÓX^IË	Ò[‰Ë	Ò[	Ë	Ğ]YÉË	ÔÙ\	Ë	ÓØİ	Ë	Ó›İ‰Ë	ÑXÉ×NÂˆÛÛœİ]Q[HØİ[Y[™Ù][[Y[RY
	Øİ\œ™[]IÊNÂˆYˆ
]Q[
HÂˆ]Q[^ÛÛ[H	Ù^\ÖÛ›İË™Ù]^J
W_K	Û[ÛÖÛ›İË™Ù][Û

W_H	Û›İË™Ù]]J
_K	Û›İË™Ù][YX\Š
_XÂˆB‚ˆËÈÜ˜\ˆİ]\È[ˆÛÛœİ[^HØİ[Y[™Ù][[Y[RY
	İ[YTİ]\Õ^	ÊNÂˆÛÛœİ[İHØİ[Y[™Ù][[Y[RY
	İ[YTİ]\Ñİ	ÊNÂˆYˆ
[^	‰ˆ[İ
HÂˆ[^^ÛÛ[H\İİ]\Ëœİ]\Ğ˜YÙNÂˆ[İ˜Û\ÜÓ˜[YHH	Üİ]\Ë\[ÙKYİ	È
È
\İİ]\Ëš\ÓÜ[ˆÈ	Ü[ÙIÈˆ\İİ]\Ë˜˜YÙPÛÛÜŠNÂˆB‚ˆËÈÙ[ÛÛYHÜ™Y][™ÜÂˆÛÛœİİ\ˆH›İË™Ù]İ\œÊ
NÂˆ]Ü™Y][™ÈH	ÑÛÛÙ[Ü›š[™ÉÎÂˆ]Ü™Y][™ÒXÛÛˆH	ø¦ ;î#ÉÎÂˆYˆ
İ\ˆHLˆ	‰ˆİ\ˆMÊHÂˆÜ™Y][™ÈH	ÑÛÛÙY\››ÛÛ‰ÎÂˆÜ™Y][™ÒXÛÛˆH	ü'ã);î#ÉÎÂˆH[ÙHYˆ
İ\ˆHMÈ	‰ˆİ\ˆŒJHÂˆÜ™Y][™ÈH	ÑÛÛÙ]™[š[™ÉÎÂˆÜ™Y][™ÒXÛÛˆH	ü'ã!‰ÎÂˆH[ÙHYˆ
İ\ˆHŒHİ\ˆJHÂˆÜ™Y][™ÈH	ÑÛÛÙšYÚ	ÎÂˆÜ™Y][™ÒXÛÛˆH	ü'ã&IÎÂˆB‚ˆÛÛœİÙ[ÛÛYQÜ™Y][™ÈHØİ[Y[™Ù][[Y[RY
	İÙ[ÛÛYQÜ™Y][™ÉÊNÂˆYˆ
Ù[ÛÛYQÜ™Y][™ÊHÂˆÙ[ÛÛYQÜ™Y][™Ë^ÛÛ[H	ÙÜ™Y][™ßKš\Y\Ú	ÙÜ™Y][™ÒXÛÛŸXÂˆB‚ˆÛÛœİÙ[ÛÛYTİXˆHØİ[Y[™Ù][[Y[RY
	İÙ[ÛÛYTİX‰ÊNÂˆYˆ
Ù[ÛÛYTİXŠHÂˆYˆ
\İİ]\Ëš\ÕÙYZÙ[™
HÂˆÙ[ÛÛYTİX‹^ÛÛ[H	ÕÙYZÙ[™ØY™H[ÙHXİ]™Kˆİ]›İ[™\Ü]ÚØY™[H]\ÙYˆ\[[™H™XYH›Üˆ[Û™^HŒÌQÜ[š[™Ë‰ÎÂˆH[ÙHYˆ
\İİ]\Ëš\ÓÜ[ŠHÂˆÙ[ÛÛYQÜ™Y][™Ë^ÛÛ[HXİ]™Hİ]›İ[™Ú[™İÈ
	Ù\İİ]\Ëœİ]\Ğ˜YÙ_JKˆİ]›İ[™]Y]YHXİ]™[H\Ü]Ú[™ÈXÜ›ÜÜÈ\™Ù]TÈXØÛİ[Ë˜ÂˆH[ÙHÂˆÙ[ÛÛYTİX‹^ÛÛ[H	ÔØY™H[ÙHXİ]™KˆØÚY[YİXÚ\ÈY™™\™Y›ÜˆH™^Xİ]™H\Ü]ÚÚ[™İË‰ÎÂˆBˆB‚ˆËÈ[\Ü˜[İ]\Èİš\ˆÛÛœİİš\\İHØİ[Y[™Ù][[Y[RY
	Üİš\\İ[YIÊNÂˆYˆ
İš\\İ
Hİš\\İ^ÛÛ[H	Ù\İİ]\ËœÚÜ[Y_HQÂ‚ˆÛÛœİİš\Ú[ˆHØİ[Y[™Ù][[Y[RY
	Üİš\Ú[™İÔİ]\ÉÊNÂˆYˆ
İš\Ú[ŠHİš\Ú[‹^ÛÛ[H\İİ]\Ëœİ]\Ğ˜YÙNÂ‚ˆÛÛœİİš\™^Ø]™HHØİ[Y[™Ù][[Y[RY
	Üİš\™^Ø]™IÊNÂˆYˆ
İš\™^Ø]™JHÂˆİš\™^Ø]™K^ÛÛ[H\İİ]\Ëš\ÕÙYZÙ[™È	Ó[ÛˆŒÌQ	Èˆ
\İİ]\Ëš\ÓÜ[ˆÈ	ĞXİ]™H›İÉÈˆ	ÕÛ[Üœ›İÈŒÌQ	ÊNÂˆBŸB‚™[˜İ[Ûˆ\]S[Û›ÙÜ™\ÜÊ
HÂˆÛÛœİ›İÈH™]È]J
NÂˆÛÛœİYX\ˆH›İË™Ù][YX\Š
NÂˆÛÛœİ[ÛH›İË™Ù][Û

NÂˆÛÛœİİ\œ™[^HH›İË™Ù]]J
NÂˆÛÛœİİ[^\ÈH™]È]JYX\‹[Û
ÈK
K™Ù]]J
NÂˆÛÛœİ[\ÙYİHX]œ›İ[™

İ\œ™[^HÈİ[^\ÊH
ˆL
NÂˆÛÛœİ^\Ô™[XZ[š[™ÈHİ[^\ÈHİ\œ™[^NÂ‚ˆÛÛœİ[Û˜[Y\ÈHÉÒ˜[X\IË	Ñ™XœX\IË	ÓX\˜Ú	Ë	Ğ\š[	Ë	ÓX^IË	Ò[™IË	Ò[IË	Ğ]Yİ\İ	Ë	ÔÙ\[X™\‰Ë	ÓØİØ™\‰Ë	Ó›İ™[X™\‰Ë	ÑXÙ[X™\‰×NÂˆÛÛœİ[ÛÚÜÈHÉÒ˜[‰Ë	Ñ™X‰Ë	ÓX\‰Ë	Ğ\‰Ë	ÓX^IË	Ò[‰Ë	Ò[	Ë	Ğ]YÉË	ÔÙ\	Ë	ÓØİ	Ë	Ó›İ‰Ë	ÑXÉ×NÂˆÛÛœİİ\œ™[[Û˜[YHH[Û˜[Y\ÖÛ[ÛNÂˆÛÛœİİ\œ™[[ÛÚÜH[ÛÚÜÖÛ[ÛNÂ‚ˆËÈ\]Hİš\[ÛXÚ[™ÂˆÛÛœİİš\[ÛHØİ[Y[™Ù][[Y[RY
	Üİš\[ÛXÚ[™ÉÊNÂˆYˆ
İš\[Û
HÂˆİš\[Û^ÛÛ[H^H	Øİ\œ™[^_HÙˆ	İİ[^\ßH
	Ù[\ÙYİIJXÂˆB‚ˆËÈ\]HÛØ[ÈYÙBˆÛÛœİÛØ[Õ]HHØİ[Y[™Ù][[Y[RY
	ÙÛØ[Ó[Û]IÊNÂˆYˆ
ÛØ[Õ]JHÂˆÛØ[Õ]K^ÛÛ[H	Øİ\œ™[[Û˜[Y_H	ŞYX\ŸH\™Ù]ØÂˆB‚ˆÛÛœİ›ÙÜ™\ÜÔİ[HØİ[Y[™Ù][[Y[RY
	Û[Û›ÙÜ™\ÜÔİ	ÊNÂˆYˆ
›ÙÜ™\ÜÔİ[
HÂˆ›ÙÜ™\ÜÔİ[^ÛÛ[H	Ù[\ÙYİIH
^H	Øİ\œ™[^_HÙˆ	İİ[^\ßH8 (ˆ	Ù^\Ô™[XZ[š[™ßH^\È™[XZ[š[™ÊXÂˆB‚ˆÛÛœİ[Ûš[[HØİ[Y[™Ù][[Y[RY
	Û[Ûš[	ÊNÂˆYˆ
[Ûš[[
HÂˆ[Ûš[[œİ[KÚYH	Ù[\ÙYİIXÂˆB‚ˆÛÛœİ[Ûİ\[HØİ[Y[™Ù][[Y[RY
	Û[Ûİ\]IÊNÂˆYˆ
[Ûİ\[
HÂˆ[Ûİ\[^ÛÛ[H	Øİ\œ™[[ÛÚÜHXÂˆB‚ˆÛÛœİ[Û[™[HØİ[Y[™Ù][[Y[RY
	Û[Û[™]IÊNÂˆYˆ
[Û[™[
HÂˆ[Û[™[^ÛÛ[H	Øİ\œ™[[ÛÚÜH	İİ[^\ßXÂˆBŸB‚™[˜İ[Ûˆ[š]]J
HÂˆ\]S]™U[YJ
NÂˆ\]S[Û›ÙÜ™\ÜÊ
NÂŸB‚™[˜İ[Ûˆ[š][YUXÚÙ\Š
HÂˆÙ][\˜[


HOˆÂˆ\]S]™U[YJ
NÂˆKL
NÂŸB‚™[˜İ[Ûˆ[š][Y^›Û™S[Ù[

HÂˆÛÛœİ[HØİ[Y[™Ù][[Y[RY
	İ[YTİ]\Ô[	ÊNÂˆÛÛœİ[Ù[HØİ[Y[™Ù][[Y[RY
	İ“[Ù[˜XÚÙ›Ü	ÊNÂˆÛÛœİÛÜÙPˆHØİ[Y[™Ù][[Y[RY
	İ“[Ù[ÛÜÙIÊNÂˆÛÛœİ‘ÜšYHØİ[Y[™Ù][[Y[RY
	İ‘ÜšY	ÊNÂ‚ˆYˆ
\[[[Ù[
H™]\›Â‚ˆ[˜İ[Ûˆ™[™\•‘ÜšY

HÂˆYˆ
]‘ÜšY
H™]\›Âˆ‘ÜšYš[›™\’SHT×ÕSQV“Ó‘TË›X\
’][HOˆÂˆÛÛœİİ]\ÈH]˜[X]UÚ[™İÑ›Ü•Š’][KŠNÂˆÛÛœİ˜YÙPÛÛÜˆHİ]\Ëš\ÓÜ[ˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆİ]\Ëš\ÕÙYZÙ[™È	İ˜\ŠKXXØÙ[X›YJIÈˆ	İ˜\ŠKXXØÙ[^Y[İÊIÎÂˆ™]\›ˆˆ]ˆÛ\ÜÏH‹XØ\™‚ˆ]ˆÛ\ÜÏH‹XØ\™ZXY\ˆ‚ˆÜ[ˆÛ\ÜÏH‹XØ\™[˜[YH‰İ’][KšÙ^_H8 %	İ’][K˜Ú]_OÜÜ[‚ˆÜ[ˆÛ\ÜÏHœİ]\Ë\[ÙKYİ	Üİ]\Ëš\ÓÜ[ˆÈ	Ü[ÙIÈˆİ]\Ë˜˜YÙPÛÛÜŸHÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH‹XØ\™][YH‰Üİ]\Ë[YTİš[™ßOÙ]‚ˆ]ˆÛ\ÜÏH‹XØ\™\İ]\Èˆİ[OH˜ÛÛÜ‰Ø˜YÙPÛÛÜŸH‰Üİ]\Ëœİ]\Ğ˜YÙ_OÙ]‚ˆÙ]‚ˆÂˆJKš›Ú[Š	ÉÊNÂˆB‚ˆ[˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆ™[™\•‘ÜšY

NÂˆ[Ù[˜Û\ÜÓ\İ˜Y
	ØXİ]™IÊNÂˆ[Ù[œÙ]]šX]J	Ø\šXKZY[‰Ë	Ù˜[ÙIÊNÂˆJNÂ‚ˆYˆ
ÛÜÙPŠHÂˆÛÜÙP‹˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆ[Ù[˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊNÂˆ[Ù[œÙ]]šX]J	Ø\šXKZY[‰Ë	İYIÊNÂˆJNÂˆB‚ˆ[Ù[˜Y]™[\İ[™\Š	ØÛXÚÉË
JHOˆÂˆYˆ
K\™Ù]OOH[Ù[
HÂˆ[Ù[˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊNÂˆ[Ù[œÙ]]šX]J	Ø\šXKZY[‰Ë	İYIÊNÂˆBˆJNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈTÒ“ĞT‘‘S‘T”Â‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\‘\Ú›Ø\™

HÂˆ™[™\‘[›™[

NÂˆ™[™\Xİ]š]Q™YY

NÂˆ™[™\Ø[\ZYÛ•X›J
NÂ‚ˆËÈØ[\ZYÛˆš[\ˆ\İ[™\‚ˆÛÛœİš[\”Ù[XİHØİ[Y[™Ù][[Y[RY
	ØØ[\ZYÛ‘š[\‰ÊNÂˆYˆ
š[\”Ù[Xİ
HÂˆš[\”Ù[Xİ˜Y]™[\İ[™\Š	ØÚ[™ÙIË
JHOˆÂˆÛÛœİ˜[HK\™Ù]˜[YNÂˆÛÛœİ›İÜÈHØİ[Y[œ]Y\TÙ[XİÜ[
	ÈØØ[\ZYÛ•X›P›ÙH‰ÊNÂˆ›İÜË™›Ü‘XXÚ
›İÈOˆÂˆYˆ
˜[OOH	Ø[	ÊH›İËœİ[K™\Ü^HH	ÉÎÂˆ[ÙH›İËœİ[K™\Ü^HH›İË™]\Ù]œİ]\ÈOOH˜[È	ÉÈˆ	Û›Û™IÎÂˆJNÂˆÚİÕØ\İ
š[\™YØ[\ZYÛœÎˆ	İ˜[X
NÂˆJNÂˆBŸB‚™[˜İ[Ûˆ™[™\‘[›™[

HÂˆÛÛœİÛÛZ[™\ˆHØİ[Y[™Ù][[Y[RY
	Ü\[[™Q[›™[	ÊNÂˆYˆ
XÛÛZ[™\ŠH™]\›ÂˆÛÛœİZ[™\‹š[›™\’SH•S“‘SÑUK›X\
İYÙHOˆˆ]ˆÛ\ÜÏH™[›™[\İYÙH‚ˆÜ[ˆÛ\ÜÏH™[›™[[X™[‰ÜİYÙK›X™[OÜÜ[‚ˆ]ˆÛ\ÜÏH™[›™[X˜\ˆˆİ[OHÚY‰ÜİYÙKÚYNÈ˜XÚÙÜ›İ[™‰ÜİYÙK˜ÛÛÜŸNÈ‚ˆ	ÜİYÙK˜[Y_BˆÙ]‚ˆÜ[ˆÛ\ÜÏH™[›™[\İ‰ÜİYÙKœİOÜÜ[‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊNÂŸB‚™[˜İ[Ûˆ›Ü›X]™[]]™U[YJZ[]\ĞYÛÊHÂˆYˆ
Z[]\ĞYÛÈJH™]\›ˆ	Ò\İ›İÉÎÂˆYˆ
Z[]\ĞYÛÈŒ
H™]\›ˆ	ÛZ[]\ĞYÛß[HYÛØÂˆÛÛœİİ\œÈHX]™›ÛÜŠZ[]\ĞYÛÈÈŒ
NÂˆYˆ
İ\œÈ
H™]\›ˆ	Úİ\œßZYÛØÂˆÛÛœİ^\ÈHX]™›ÛÜŠİ\œÈÈ
NÂˆYˆ
^\ÈOOHJH™]\›ˆ	ÖY\İ\™^IÎÂˆ™]\›ˆ	Ù^\ßYYÛØÂŸB‚™[˜İ[Ûˆ™[™\Xİ]š]Q™YY

HÂˆÛÛœİ™YYHØİ[Y[™Ù][[Y[RY
	ØXİ]š]Q™YY	ÊNÂˆYˆ
Y™YY
H™]\›Âˆ™YYš[›™\’SHPÕU’UWÑ‘QQ›X\
][HOˆˆ]ˆÛ\ÜÏH˜Xİ]š]KZ][H‚ˆ]ˆÛ\ÜÏH˜]]š]KYİ	Ú][K˜ÛÛÜŸHÙ]‚ˆ]ˆÛ\ÜÏH˜Xİ]š]KXÛÛ[‚ˆ]ˆÛ\ÜÏH˜Xİ]š]K]^‰Ú][K^OÙ]‚ˆ]ˆÛ\ÜÏH˜Xİ]š]K][YH‰Ù›Ü›X]™[]]™U[YJ][K›Z[]\ĞYÛÊ_OÙ]‚ˆÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊNÂŸB‚™[˜İ[Ûˆ™[™\Ø[\ZYÛ•X›J
HÂˆÛÛœİ›ÙHHØİ[Y[™Ù][[Y[RY
	ØØ[\ZYÛ•X›P›ÙIÊNÂˆYˆ
]›ÙJH™]\›Âˆ›ÙKš[›™\’SHĞSTRQÓ”Ë›X\
ÈOˆÂˆÛÛœİX[ÛÛÜˆHËšX[HÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆËšX[HŒÈ	İ˜\ŠKXXØÙ[[Ü˜[™ÙJIÈˆ	İ˜\ŠKXXØÙ[\™Y
IÎÂˆ™]\›ˆˆˆ]K\İ]\ÏH‰ØËœİ]\ßH‚ˆ‚ˆ]ˆİ[OH™›Û]ÙZYÚŒÈ‰ØË›˜[Y_OÙ]‚ˆ]ˆİ[OH™›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NØÛÛÜ˜\ŠK]^]\X\JNÛX\™Ú[‹]ÜŒœÈ‰ØËšXÜOÙ]‚ˆİ‚ˆÜ[ˆÛ\ÜÏHœİ]\ËX˜YÙH	ØËœİ]\ßH‰ØËœİ]\Ë˜Ú\]

KÕ\\Ø\ÙJ
H
ÈËœİ]\ËœÛXÙJJ_OÜÜ[İ‚ˆ‰ØËœ›ÜÜXİËÓØØ[Tİš[™Ê
_Oİ‚ˆ‰ØËœÙ[ÓØØ[Tİš[™Ê
_Oİ‚ˆ‰ØË˜XØÙ\YOİ‚ˆ‰ØËœ™\YYOİ‚ˆÜ[ˆİ[OH™›Û]ÙZYÚÌØÛÛÜ‰ØËœ™\T˜]HHˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ	İ˜\ŠKXXØÙ[[Ü˜[™ÙJIßH‰ØËœ™\T˜]_IOÜÜ[İ‚ˆÜ[ˆİ[OH™›Û]ÙZYÚÌÈ‰ØË›YY][™ÜßOÜÜ[İ‚ˆ‚ˆ]ˆÛ\ÜÏHšX[X˜\ˆ‚ˆ]ˆÛ\ÜÏHšX[X˜\‹Yš[ˆİ[OHÚY‰ØËšX[INØ˜XÚÙÜ›İ[™‰ÚX[ÛÛÜŸHÙ]‚ˆÙ]‚ˆÜ[ˆİ[OH™›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NØÛÛÜ˜\ŠK]^]\X\JNÛX\™Ú[‹]ÜŒœÙ\Ü^N˜›ØÚÎÈ‰ØËšX[IOÜÜ[‚ˆİ‚ˆİ‚ˆJKš›Ú[Š	ÉÊNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈÓÓTS–HS•S‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\ÛÛ\[šY\Ê
HÂˆÛÛœİÜšYHØİ[Y[™Ù][[Y[RY
	ØÛÛ\[QÜšY	ÊNÂˆYˆ
YÜšY
H™]\›ÂˆÜšYš[›™\’SHÓÓTS’QTË›X\

ËJHOˆˆ]ˆÛ\ÜÏH˜ÛÛ\[KXØ\™ˆ]KZ[™^H‰Ú_H‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[KXØ\™ZXY\ˆ‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[ÙÛÈˆİ[OH˜˜XÚÙÜ›İ[™‰ØË˜ÛÛÜŸH‰ØË›˜[YK˜Ú\]

_OÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[KXØ\™Z[™›È‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[KXØ\™[˜[YH‰ØË›˜[Y_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[KXØ\™Z[™\İH‰ØËš[™\İ_H0­È	ØË˜Ú]_H0­È	ØËœİYÙ_OÜÜ[‚ˆÙ]‚ˆÜ[ˆÛ\ÜÏHœİ]\ËX˜YÙH	ØËœİ]\Ëš[˜ÛY\Ê	ÓYY][™ÉÊHËœİ]\ÈOOH	Ô™\YY	ÈËœİ]\ÈOOH	Ò[\™\İY	ÈÈ	ØXİ]™IÈˆËœİ]\ÈOOH	Ó™]ÉÈÈ	Ù˜Y	Èˆ	Ü]\ÙY	ßHˆİ[OH™›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NÈ‰ØËœİ]\ßOÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[KXØ\™[Y]šXÜÈ‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØË˜\œŸOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[T”ÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØËšXYÛİ[OÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[’XYÛİ[ÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØËœÙœßOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[”ÑœÏÜÜ[‚ˆÙ]‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[KXØ\™]YÜÈ‚ˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K]YÈ‰ØËšXÜOÜÜ[‚ˆ	ØËXÚ›X\
OˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K]YÈ‰İOÜÜ[ˆ
Kš›Ú[Š	ÉÊ_BˆÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊNÂ‚ˆÜšYœ]Y\TÙ[XİÜ[
	Ë˜ÛÛ\[KXØ\™	ÊK™›Ü‘XXÚ
Ø\™OˆÂˆØ\™˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆÛÛœİYH\œÙR[
Ø\™™]\Ù]š[™^
NÂˆÜ[ÛÛ\[Q˜]Ù\ŠÓÓTS’QTÖÚYJNÂˆJNÂˆJNÂ‚ˆËÈÙX\˜Úš[\‚ˆÛÛœİÙX\˜Ú[œ]HØİ[Y[™Ù][[Y[RY
	ØÛÛ\[TÙX\˜Ú	ÊNÂˆYˆ
ÙX\˜Ú[œ]
HÂˆÙX\˜Ú[œ]˜Y]™[\İ[™\Š	Ú[œ]	Ë
JHOˆÂˆÛÛœİHHK\™Ù]˜[YKÓİÙ\Ø\ÙJ
NÂˆØİ[Y[œ]Y\TÙ[XİÜ[
	ÈØÛÛ\[QÜšY˜ÛÛ\[KXØ\™	ÊK™›Ü‘XXÚ
Ø\™OˆÂˆÛÛœİYH\œÙR[
Ø\™™]\Ù]š[™^
NÂˆÛÛœİÛÛ\HÓÓTS’QTÖÚYNÂˆÛÛœİX]ÚHÛÛ\›˜[YKÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊJHˆÛÛ\š[™\İKÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊJHˆÛÛ\XÚœÛÛYJOˆÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊJJNÂˆØ\™œİ[K™\Ü^HHX]ÚÈ	ÉÈˆ	Û›Û™IÎÂˆJNÂˆJNÂˆBŸB‚™[˜İ[ÛˆÜ[ÛÛ\[Q˜]Ù\ŠÛÛ\[JHÂˆÛÛœİ˜]Ù\ˆHØİ[Y[™Ù][[Y[RY
	ØÛÛ\[Q˜]Ù\‰ÊNÂˆÛÛœİ˜[YQ[HØİ[Y[™Ù][[Y[RY
	Ù˜]Ù\ÛÛ\[S˜[YIÊNÂˆÛÛœİ›ÙHHØİ[Y[™Ù][[Y[RY
	Ù˜]Ù\›ÙIÊNÂ‚ˆ˜[YQ[^ÛÛ[HÛÛ\[K›˜[YNÂˆ›ÙKš[›™\’SHˆ]ˆİ[OH›X\™Ú[‹X›İÛNŒÈ‚ˆ]ˆİ[OH™\Ü^N™›^Ø[YÛ‹Z][\Î˜Ù[\ÙØ\ŒMœÛX\™Ú[‹X›İÛNŒMœÈ‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[ÙÛÈˆİ[OH˜˜XÚÙÜ›İ[™‰ØÛÛ\[K˜ÛÛÜŸNİÚYLœÚZYÚLœÙ›Û\Ú^™NŒKŒÜ™[NÈ‰ØÛÛ\[K›˜[YK˜Ú\]

_OÙ]‚ˆ]‚ˆ]ˆİ[OH™›Û]ÙZYÚÌÙ›Û\Ú^™NŒKŒM\™[NÈ‰ØÛÛ\[K›˜[Y_OÙ]‚ˆ]ˆİ[OH˜ÛÛÜ˜\ŠK]^\ÙXÛÛ™\JNÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™KX›ÙJNÈ‰ØÛÛ\[Kš[™\İ_H0­È	ØÛÛ\[K˜Ú]_H0­È	ØÛÛ\[KœİYÙ_OÙ]‚ˆÙ]‚ˆÙ]‚ˆÙ]‚‚ˆ]ˆİ[OH™\Ü^N™ÜšYÙÜšY][\]KXÛÛ[[œÎœ™\X]
‹YœŠNÙØ\ŒLœÛX\™Ú[‹X›İÛNŒÈ‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈˆİ[OHœY[™ÎŒMÈÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØÛÛ\[K˜\œŸOÜÜ[Ü[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[[›X[™]™[YOÜÜ[Ù]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈˆİ[OHœY[™ÎŒMÈÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØÛÛ\[KšXYÛİ[OÜÜ[Ü[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[’XYÛİ[ÜÜ[Ù]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈˆİ[OHœY[™ÎŒMÈÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØÛÛ\[KœÙœßOÜÜ[Ü[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[”ÑˆX[HÚ^™OÜÜ[Ù]‚ˆ]ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXÈˆİ[OHœY[™ÎŒMÈÜ[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË]˜[YH‰ØÛÛ\[K˜ÛÛXİßOÜÜ[Ü[ˆÛ\ÜÏH˜ÛÛ\[K[Y]šXË[X™[ÛÛXİÈ›İ[™ÜÜ[Ù]‚ˆÙ]‚‚ˆİ[OH›X\™Ú[‹X›İÛNŒLÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™KX›ÙJNÙ›Û]ÙZYÚÌÈ•XÚİXÚÏÚ‚ˆ]ˆİ[OH™\Ü^N™›^ÙØ\œÙ›^]Ü˜\Ü˜\ÛX\™Ú[‹X›İÛNŒÈ‚ˆ	ØÛÛ\[KXÚ›X\
OˆÜ[ˆÛ\ÜÏH˜ÛÛ\[K]YÈˆİ[OHœY[™ÎLÈ‰İOÜÜ[˜
Kš›Ú[Š	ÉÊ_BˆÙ]‚‚ˆİ[OH›X\™Ú[‹X›İÛNŒLÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™KX›ÙJNÙ›Û]ÙZYÚÌÈ’PÔÛ\ÜÚYšXØ][ÛÚ‚ˆ]ˆİ[OHœY[™ÎŒMØ˜XÚÙÜ›İ[™˜\ŠKX™Ë]\X\JNØ›Ü™\‹\˜Y]\Î˜\ŠK\˜Y]\Ë[Y
NÛX\™Ú[‹X›İÛNŒÈ‚ˆÜ[ˆİ[OH™›Û]ÙZYÚÌØÛÛÜ˜\ŠKXXØÙ[YÜ™Y[ŠNÈ‰ØÛÛ\[KšXÜOÜÜ[‚ˆÜ[ˆİ[OH˜ÛÛÜ˜\ŠK]^\ÙXÛÛ™\JNÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™KX›ÙJNÈˆ8 %	ØÛÛ\[KšXÜOOH	ÒPÔIÈÈ	Ñ›İ[™\‹SYØXTÈ
™KTÑŠIÈˆÛÛ\[KšXÜOOH	ÒPÔ‰ÈÈ	ÔÙ\šY\ÈKĞˆÚ]ÑˆX[IÈˆ	ÔÈØXTÈ[İš[™È\X\šÙ]	ßOÜÜ[‚ˆÙ]‚‚ˆİ[OH›X\™Ú[‹X›İÛNŒLÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™KX›ÙJNÙ›Û]ÙZYÚÌÈ“İ]™XXÚİ]\ÏÚ‚ˆ]ˆİ[OHœY[™ÎŒMØ˜XÚÙÜ›İ[™˜\ŠKX™Ë]\X\JNØ›Ü™\‹\˜Y]\Î˜\ŠK\˜Y]\Ë[Y
NÈ‚ˆÜ[ˆÛ\ÜÏHœİ]\ËX˜YÙHXİ]™H‰ØÛÛ\[Kœİ]\ßOÜÜ[‚ˆÙ]‚ˆÂ‚ˆ˜]Ù\‹˜Û\ÜÓ\İ˜Y
	ÛÜ[‰ÊNÂ‚ˆØİ[Y[™Ù][[Y[RY
	Ù˜]Ù\ÛÜÙIÊK›Û˜ÛXÚÈH

HOˆ˜]Ù\‹˜Û\ÜÓ\İœ™[[İ™J	ÛÜ[‰ÊNÂˆ˜]Ù\‹œ]Y\TÙ[XİÜŠ	Ë™˜]Ù\‹[İ™\›^IÊK›Û˜ÛXÚÈH

HOˆ˜]Ù\‹˜Û\ÜÓ\İœ™[[İ™J	ÛÜ[‰ÊNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈQTÔĞQÑHÑS•T‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\“Y\ÜØYÙ\Ê
HÂˆš[\“Y\ÜØYÙ\Ê	Û[šÙY[‰ÊNÂŸB‚™[˜İ[Ûˆš[\“Y\ÜØYÙ\ÊÚ[›™[
HÂˆÛÛœİ™XY\İHØİ[Y[™Ù][[Y[RY
	İ™XY\İ	ÊNÂˆYˆ
]™XY\İ
H™]\›Â‚ˆÛÛœİš[\™YHÚ[›™[OOH	Ø[	ÈÈQTÔĞQÑTÈˆQTÔĞQÑTË™š[\ŠHOˆK˜Ú[›™[OOHÚ[›™[
NÂ‚ˆ™XY\İš[›™\’SHš[\™Y›X\
HOˆÂˆÛÛœİ]˜]\’[HK˜]˜]\ˆ	‰ˆ\[ÙˆK˜]˜]\ˆOOH	Üİš[™ÉÈ	‰ˆK˜]˜]\‹œİ\ÕÚ]
	Ú	ÊBˆÈ[YÈÜ˜ÏH‰ÛK˜]˜]\ŸHˆÛ\ÜÏH™XYX]˜]\‹Z[YÈˆ[H‰ÛK›˜[Y_Hˆİ[OHÚYŒÍœÚZYÚŒÍœØ›Ü™\‹\˜Y]\ÎL	NÛØš™XİYš]˜Ûİ™\Ù›^\Úš[šÎŒÈ˜ˆˆ]ˆÛ\ÜÏH™XYX]˜]\ˆˆİ[OH˜˜XÚÙÜ›İ[™‰ÛK˜]˜]\ˆ	İ˜\ŠKXXØÙ[X›YJIßH‰ÛKš[š]X[ßOÙ]˜Â‚ˆ™]\›ˆˆ]ˆÛ\ÜÏH™XYZ][H	ÛK[œ™XYÈ	İ[œ™XY	Èˆ	ÉßH	Ôİš[™ÊKšY
HOOHİš[™ÊXİ]™U™XYY
HÈ	ØXİ]™IÈˆ	ÉßHˆ]KZYH‰ÛKšYH‚ˆ	Ø]˜]\’[Bˆ]ˆÛ\ÜÏH™XYXÛÛ[‚ˆ]ˆÛ\ÜÏH™XYZXY\ˆ‚ˆÜ[ˆÛ\ÜÏH™XY[˜[YH‰ÛK›˜[Y_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH™XY][YH‰ÛK[Y_OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH™XY\™]šY]È‰ÛKœ™]šY]ßOÙ]‚ˆ]ˆÛ\ÜÏH™XY[Y]H‚ˆÜ[ˆÛ\ÜÏH™XY]YÈ	ÛKYßH‰ÛKYßOÜÜ[‚ˆÜ[ˆİ[OH™›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NØÛÛÜ˜\ŠK]^]\X\JH‰ÛK˜ÛÛ\[_H0­È	ÛK˜Ú[›™[OÜÜ[‚ˆÙ]‚ˆÙ]‚ˆÙ]‚ˆJKš›Ú[Š	ÉÊNÂ‚ˆ™XY\İœ]Y\TÙ[XİÜ[
	Ë™XYZ][IÊK™›Ü‘XXÚ
][HOˆÂˆ][K˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆÛÛœİYH][K™]\Ù]šYÂˆÙ[Xİ™XY
Y
NÂˆJNÂˆJNÂ‚ˆYˆ
š[\™Y›[™İˆ
HÂˆÛÛœİY˜][\ÙÈHš[\™Y™š[™
HOˆİš[™ÊKšY
HOOHİš[™ÊXİ]™U™XYY
JHš[\™YÌNÂˆÙ[Xİ™XY
Y˜][\ÙËšY
NÂˆBŸB‚™[˜İ[ÛˆÙ[Xİ™XY
Y
HÂˆXİ]™U™XYYHYÂˆÛÛœİ™XY\İHØİ[Y[™Ù][[Y[RY
	İ™XY\İ	ÊNÂˆYˆ
™XY\İ
HÂˆ™XY\İœ]Y\TÙ[XİÜ[
	Ë™XYZ][IÊK™›Ü‘XXÚ
HOˆÂˆÛÛœİX]Ú\ÈHİš[™ÊK™]\Ù]šY
HOOHİš[™ÊY
NÂˆK˜Û\ÜÓ\İÙÙÛJ	ØXİ]™IËX]Ú\ÊNÂˆYˆ
X]Ú\ÊHK˜Û\ÜÓ\İœ™[[İ™J	İ[œ™XY	ÊNÂˆJNÂˆB‚ˆÛÛœİ\ÙÈHQTÔĞQÑTË™š[™
HOˆİš[™ÊKšY
HOOHİš[™ÊY
JNÂˆYˆ
\ÙÊHÂˆ\ÙË[œ™XYH˜[ÙNÂˆ™[™\ÛÛ™\œØ][ÛŠ\ÙÊNÂˆBŸB‚™[˜İ[Ûˆ™[™\ÛÛ™\œØ][ÛŠ\ÙÊHÂˆÛÛœİšY]ÈHØİ[Y[™Ù][[Y[RY
	ØÛÛ™\œØ][Û•šY]ÉÊNÂˆYˆ
]šY]ÊH™]\›Â‚ˆÛÛœİXY\]˜]\’[H\ÙË˜]˜]\ˆ	‰ˆ\[Ùˆ\ÙË˜]˜]\ˆOOH	Üİš[™ÉÈ	‰ˆ\ÙË˜]˜]\‹œİ\ÕÚ]
	Ú	ÊBˆÈ[YÈÜ˜ÏH‰Û\ÙË˜]˜]\ŸHˆ[H‰Û\ÙË›˜[Y_Hˆİ[OHÚYŒÍœÚZYÚŒÍœØ›Ü™\‹\˜Y]\ÎL	NÛØš™XİYš]˜Ûİ™\Ù›^\Úš[šÎŒÈ˜ˆˆ]ˆÛ\ÜÏH™XYX]˜]\ˆˆİ[OH˜˜XÚÙÜ›İ[™‰Û\ÙË˜]˜]\ˆ	İ˜\ŠKXXØÙ[X›YJIßNİÚYŒÍœÚZYÚŒÍœÙ›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NÈ‰Û\ÙËš[š]X[ßOÙ]˜Â‚ˆšY]Ëš[›™\’SHˆ]ˆÛ\ÜÏH˜ÛÛ‹ZXY\ˆ‚ˆ	ÚXY\]˜]\’[Bˆ]ˆÛ\ÜÏH˜ÛÛ‹ZXY\‹Z[™›È‚ˆ]ˆÛ\ÜÏH˜ÛÛ‹ZXY\‹[˜[YH‰Û\ÙË›˜[Y_OÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ‹ZXY\‹]]H‰Û\ÙË]_H]	Û\ÙË˜ÛÛ\[_OÙ]‚ˆÙ]‚ˆÜ[ˆÛ\ÜÏH™XY]YÈ	Û\ÙËYßH‰Û\ÙËYßOÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ‹[Y\ÜØYÙ\È‚ˆ	Ê\ÙË›Y\ÜØYÙ\È×JK›X\
HOˆˆ]ˆÛ\ÜÏH˜ÛÛ‹[\ÙÈ	ÛK\HOOH	ÜÙ[	ÈÈ	ÜÙ[	Èˆ	Ü™XÙZ]™Y	ßH‚ˆ]‰ÛK^OÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ‹[\ÙË][YH‰ÛK[Y_OÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊ_BˆÙ]‚ˆ]ˆÛ\ÜÏH˜ÛÛ‹Z[œ]X˜\ˆ‚ˆ[œ]\OH^ˆÛ\ÜÏH˜ÛÛ‹Z[œ]ˆYHœ™\R[œ]ˆXÙZÛ\H•\HH™\HÜˆØ[[™H[šÈ
[\ˆÈÙ[™
K‹‹ˆ‚ˆ]ÛˆÛ\ÜÏH˜ÛÛ‹\Ù[™XˆˆYHœÙ[™ˆ”Ù[™Ø]Û‚ˆÙ]‚ˆÂ‚ˆÛÛœİ[œ]HØİ[Y[™Ù][[Y[RY
	Ü™\R[œ]	ÊNÂˆÛÛœİˆHØİ[Y[™Ù][[Y[RY
	ÜÙ[™‰ÊNÂ‚ˆÛÛœİÙ[™H

HOˆÂˆÛÛœİ^H[œ]˜[YKš[J
NÂˆYˆ
]^
H™]\›Âˆ\ÙË›Y\ÜØYÙ\Ëœ\Ú
Âˆ\Nˆ	ÜÙ[	Ëˆ^ˆ^ˆ[YNˆ	Ò\İ›İÉÂˆJNÂˆ[œ]˜[YHH	ÉÎÂˆ™[™\ÛÛ™\œØ][ÛŠ\ÙÊNÂˆÚİÕØ\İ
™\H\Ü]ÚYÈ	Û\ÙË›˜[Y_X
NÂˆNÂ‚ˆ‹›Û˜ÛXÚÈHÙ[™Âˆ[œ]›ÛšÙ^YİÛˆH
JHOˆÂˆYˆ
KšÙ^HOOH	Ñ[\‰ÊHÂˆKœ™]™[Y˜][

NÂˆÙ[™

NÂˆBˆNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈRHÕQÑÑTÕSÓ”Â‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\”İYÙÙ\İ[ÛœÊ
HÂˆÛÛœİÜšYHØİ[Y[™Ù][[Y[RY
	ÜİYÙÙ\İ[ÛœÑÜšY	ÊNÂˆYˆ
YÜšY
H™]\›ÂˆÜšYš[›™\’SHÕQÑÑTÕSÓ”Ë›X\
ÈOˆˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹XØ\™ˆYH‰ÜËšYH‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹XØ\™ZXY\ˆ‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹ZXÛÛˆˆİ[OH˜˜XÚÙÜ›İ[™‰ÜËšXÛÛ™ßNØÛÛÜ‰ÜËšXÛÛÛÛÜŸNÈ‚ˆ	ÜËšXÛÛŸBˆÙ]‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹]]H‰ÜË]_OÜÜ[‚ˆÜ[ˆÛ\ÜÏHœİYÙÙ\İ[Û‹\š[Üš]Hš[Üš]KIÜËœš[Üš]_H‰ÜËœš[Üš]KÕ\\Ø\ÙJ
_OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹Y\ØÈ‰ÜË™\ØßOÙ]‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹Z[\Xİ‚ˆÜ[ˆÛ\ÜÏHœİYÙÙ\İ[Û‹Z[\Xİ[X™[‘^XİY[\XİÜÜ[‚ˆÜ[ˆÛ\ÜÏHœİYÙÙ\İ[Û‹Z[\Xİ]˜[YH‰ÜËš[\XİOÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏHœİYÙÙ\İ[Û‹XXİ[ÛœÈ‚ˆ]ÛˆÛ\ÜÏHœİYÙÙ\İ[Û‹Xˆš[X\HˆÛ˜ÛXÚÏH˜\TİYÙÙ\İ[ÛŠ	ÉÜËšYIÊH\H›İÏØ]Û‚ˆ]ÛˆÛ\ÜÏHœİYÙÙ\İ[Û‹XˆÙXÛÛ™\HˆÛ˜ÛXÚÏH™\ÛZ\ÜÔİYÙÙ\İ[ÛŠ	ÉÜËšYIÊH‘\ÛZ\ÜÏØ]Û‚ˆÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊNÂŸB‚Ú[™İË˜\TİYÙÙ\İ[ÛˆH[˜İ[ÛŠY
HÂˆÛÛœİİYÈHÕQÑÑTÕSÓ”Ë™š[™
ÈOˆËšYOOHY
NÂˆYˆ
\İYÊH™]\›ÂˆÚİÕØ\İ
\YYˆ	ÜİYË]_X
NÂˆÛÛœİØ\™HØİ[Y[™Ù][[Y[RY
Y
NÂˆYˆ
Ø\™
HÂˆØ\™œİ[K›ÜXÚ]HH	ÌIÎÂˆØ\™œİ[KœÚ[\‘]™[ÈH	Û›Û™IÎÂˆÛÛœİˆHØ\™œ]Y\TÙ[XİÜŠ	ËœİYÙÙ\İ[Û‹X‹œš[X\IÊNÂˆYˆ
ŠHÂˆ‹^ÛÛ[H	Ğ\YY8§$ÉÎÂˆ‹œİ[K˜˜XÚÙÜ›İ[™H	İ˜\ŠKXXØÙ[X›YJIÎÂˆBˆBŸNÂ‚Ú[™İË™\ÛZ\ÜÔİYÙÙ\İ[ÛˆH[˜İ[ÛŠY
HÂˆÛÛœİØ\™HØİ[Y[™Ù][[Y[RY
Y
NÂˆYˆ
Ø\™
HÂˆØ\™œİ[K™\Ü^HH	Û›Û™IÎÂˆÚİÕØ\İ
	ÔİYÙÙ\İ[Ûˆ\ÛZ\ÜÙY	ÊNÂˆBŸNÂ‚™[˜İ[Ûˆ[š]ØÛÜ™Tš[™Ê
HÂˆÛÛœİØ[˜\ÈHØİ[Y[™Ù][[Y[RY
	ÜØÛÜ™Tš[™ÉÊNÂˆYˆ
XØ[˜\ÊH™]\›ÂˆÛÛœİİHØ[˜\Ë™Ù]ÛÛ^
	Ì™	ÊNÂˆÛÛœİŞHLŞHHLˆHÍNÂˆÛÛœİØÛÜ™HHÎÂ‚ˆİ˜ÛX\”™Xİ
NN
NÂ‚ˆİ˜™YÚ[”]

NÂˆİ˜\˜ÊŞŞK‹ÍH
ˆX]”K‹ŒH
ˆX]”JNÂˆİœİ›ÚÙTİ[HH	Ü™Ø˜JMKMKMKŒ
IÎÂˆİ›[™UÚYHLÂˆİ›[™PØ\H	Ü›İ[™	ÎÂˆİœİ›ÚÙJ
NÂ‚ˆÛÛœİİ[[™ÛHHKH
ˆX]”NÂˆÛÛœİØÛÜ™P[™ÛHH
ØÛÜ™HÈL
H
ˆİ[[™ÛNÂˆÛÛœİÜ˜YY[Hİ˜Ü™X]S[™X\‘Ü˜YY[
NN
NÂˆÜ˜YY[˜YÛÛÜ”İÜ
	ÈÌĞĞ‘NÉÊNÂˆÜ˜YY[˜YÛÛÜ”İÜ
K	ÈÌŒ‘ÑQIÊNÂ‚ˆİ˜™YÚ[”]

NÂˆİ˜\˜ÊŞŞK‹ÍH
ˆX]”KÍH
ˆX]”H
ÈØÛÜ™P[™ÛJNÂˆİœİ›ÚÙTİ[HHÜ˜YY[Âˆİ›[™UÚYHLÂˆİ›[™PØ\H	Ü›İ[™	ÎÂˆİœİ›ÚÙJ
NÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈÓĞSÂ‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\‘ÛØ[Ê
HÂˆÛÛœİÜšYHØİ[Y[™Ù][[Y[RY
	ÙÛØ[ÑÜšY	ÊNÂˆYˆ
YÜšY
H™]\›ÂˆÜšYš[›™\’SHÓĞSË›X\
ÈOˆÂˆÛÛœİİHX]›Z[ŠLX]œ›İ[™

Ë˜İ\œ™[ÈË\™Ù]
H
ˆL
JNÂˆÛÛœİİ]\ĞÛ\ÜÈHËœİ]\ÈOOH	ÛÛ‹]˜XÚÉÈÈ	ÙÛØ[\İ]\Ë[Û‹]˜XÚÉÈˆËœİ]\ÈOOH	Ø]\š\ÚÉÈÈ	ÙÛØ[\İ]\ËX]\š\ÚÉÈˆËœİ]\ÈOOH	Ø™Z[™	ÈÈ	ÙÛØ[\İ]\ËX™Z[™	Èˆ	ÙÛØ[\İ]\ËXXÚY]™Y	ÎÂˆÛÛœİİ]\ÓX™[HËœİ]\Ëœ™\XÙJ	ËIË	È	ÊKœ™\XÙJ×—ËÙËÈOˆËÕ\\Ø\ÙJ
JNÂˆ™]\›ˆˆ]ˆÛ\ÜÏH™ÛØ[XØ\™‚ˆ]ˆÛ\ÜÏH™ÛØ[XØ\™ZXY\ˆ‚ˆÜ[ˆÛ\ÜÏH™ÛØ[XØ\™]]H‰ÙË]_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH™ÛØ[XØ\™\İ]\È	Üİ]\ĞÛ\ÜßH‰Üİ]\ÓX™[OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜÈ‚ˆ]ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜËZXY\ˆ‚ˆÜ[ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜËXİ\œ™[ˆİ[OH˜ÛÛÜ‰ÙË˜ÛÛÜŸH‰ÙË˜İ\œ™[IÙË[š]OÜÜ[‚ˆÜ[ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜË]\™Ù]‹È	ÙË\™Ù]IÙË[š]H\™Ù]
	ÜİIJOÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜË]˜XÚÈ‚ˆ]ˆÛ\ÜÏH™ÛØ[\›ÙÜ™\ÜËYš[ˆİ[OHÚY‰ÜİINØ˜XÚÙÜ›İ[™‰ÙË˜ÛÛÜŸHÙ]‚ˆÙ]‚ˆÙ]‚ˆ]ˆÛ\ÜÏH™ÛØ[Xœ™XZÙİÛˆ‚ˆ	ÙË˜œ™XZÙİÛ‹›X\
ˆOˆˆ]ˆÛ\ÜÏH™ÛØ[Xœ™XZÙİÛ‹Z][H‚ˆÜ[ˆÛ\ÜÏH™ÛØ[Xœ™XZÙİÛ‹]˜[YH‰Ø‹˜[Y_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH™ÛØ[Xœ™XZÙİÛ‹[X™[‰Ø‹›X™[OÜÜ[‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊ_BˆÙ]‚ˆÙ]‚ˆJKš›Ú[Š	ÉÊNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈKĞˆTÕS‘Â‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[Ûˆ™[™\P•\İÊ
HÂˆÛÛœİÛÛZ[™\ˆHØİ[Y[™Ù][[Y[RY
	ØX•\İĞÛÛZ[™\‰ÊNÂˆYˆ
XÛÛZ[™\ŠH™]\›ÂˆÛÛZ[™\‹š[›™\’SHP—ÕTÕË›X\

\İ
HOˆÂˆÛÛœİİ]\ĞÛ\ÜÈH\İœİ]\ÈOOH	Ü[›š[™ÉÈÈ	ØX‹\İ]\Ë\[›š[™ÉÈˆ\İœİ]\ÈOOH	ØÛÛ\]Y	ÈÈ	ØX‹\İ]\ËXÛÛ\]Y	Èˆ	ØX‹\İ]\ËY˜Y	ÎÂˆÛÛœİ\ĞXØÙ\˜]U\İH\İ˜\šX[ÖÌK˜XØÙ\˜]HOOH[™Yš[™YÂ‚ˆ™]\›ˆˆ]ˆÛ\ÜÏH˜X‹]\İXØ\™‚ˆ]ˆÛ\ÜÏH˜X‹]\İZXY\ˆ‚ˆ]ˆÛ\ÜÏH˜X‹]\İ]]KYÜ›İ\‚ˆÜ[ˆÛ\ÜÏH˜X‹]\İ]]H‰İ\İ]_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹]\İ\İ]\È	Üİ]\ĞÛ\ÜßH‰İ\İœİ]\ËÕ\\Ø\ÙJ
_OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜X‹]\İ[Y]H‚ˆÜ[”İ\Yˆ	İ\İœİ\]_OÜÜ[‚ˆÜ[‰İ\İœØ[\TÚ^™_OÜÜ[‚ˆÜ[‰İ\İ™\˜][ÛŸOÜÜ[‚ˆÙ]‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜X‹]\İX›ÙH‚ˆ]ˆÛ\ÜÏH˜X‹]˜\šX[È‚ˆ	İ\İ˜\šX[Ë›X\
ˆOˆˆ]ˆÛ\ÜÏH˜X‹]˜\šX[	İ‹˜Û\ÜßH	İ‹Ú[›™\ˆÈ	İÚ[›™\‰Èˆ	ÉßH‚ˆ]ˆÛ\ÜÏH˜X‹]˜\šX[[X™[‚ˆ]ˆÛ\ÜÏH˜X‹]˜\šX[[]\ˆ‰İ‹›]\ŸOÙ]‚ˆÜ[ˆÛ\ÜÏH˜X‹]˜\šX[[˜[YH‰İ‹›˜[Y_OÜÜ[‚ˆ	İ‹Ú[›™\ˆÈ	ÏÜ[ˆÛ\ÜÏHÚ[›™\‹X˜YÙH•ÒS“‘TÜÜ[‰Èˆ	ÉßBˆÙ]‚ˆ]ˆÛ\ÜÏH˜X‹]˜\šX[\™]šY]È‰İ‹œ™]šY]Ëœ™\XÙJ×‹ÙË	Ïœ‰Ê_OÙ]‚ˆ]ˆÛ\ÜÏH˜X‹]˜\šX[[Y]šXÜÈ‚ˆ	Ú\ĞXØÙ\˜]U\İÈˆ]ˆÛ\ÜÏH˜X‹[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË]˜[YHˆİ[OH˜ÛÛÜ‰İ‹Ú[›™\ˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ	İ˜\ŠK]^\ÙXÛÛ™\JIßH‰İ‹˜XØÙ\˜]_IOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË[X™[XØÙ\˜]OÜÜ[‚ˆÙ]‚ˆˆˆ]ˆÛ\ÜÏH˜X‹[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË]˜[YHˆİ[OH˜ÛÛÜ‰İ‹Ú[›™\ˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ	İ˜\ŠK]^\ÙXÛÛ™\JIßH‰İ‹›Ü[”˜]_IOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË[X™[“Ü[ˆ˜]OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜X‹[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË]˜[YHˆİ[OH˜ÛÛÜ‰İ‹Ú[›™\ˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ	İ˜\ŠK]^\ÙXÛÛ™\JIßH‰İ‹œ™\T˜]_IOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË[X™[”™\H˜]OÜÜ[‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜X‹[Y]šXÈ‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË]˜[YHˆİ[OH˜ÛÛÜ‰İ‹Ú[›™\ˆÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ	İ˜\ŠK]^\ÙXÛÛ™\JIßH‰İ‹›YY][™ÜßOÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹[Y]šXË[X™[“YY][™ÜÏÜÜ[‚ˆÙ]‚ˆBˆÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊ_BˆÙ]‚‚ˆ]ˆÛ\ÜÏH˜X‹XÛÛ™šY[˜ÙH‚ˆÜ[ˆÛ\ÜÏH˜X‹XÛÛ™šY[˜ÙK[X™[”İ]\İXØ[ÛÛ™šY[˜ÙNÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜X‹XÛÛ™šY[˜ÙK]˜[YHˆİ[OH˜ÛÛÜ‰İ\İ˜ÛÛ™šY[˜ÙHHLÈ	İ˜\ŠKXXØÙ[YÜ™Y[ŠIÈˆ\İ˜ÛÛ™šY[˜ÙHHÌÈ	İ˜\ŠKXXØÙ[[Ü˜[™ÙJIÈˆ	İ˜\ŠKXXØÙ[\™Y
IßH‰İ\İ˜ÛÛ™šY[˜Ù_IOÜÜ[‚ˆ]ˆÛ\ÜÏH˜X‹XÛÛ™šY[˜ÙKX˜\ˆ‚ˆ]ˆÛ\ÜÏH˜X‹XÛÛ™šY[˜ÙKYš[ˆİ[OHÚY‰İ\İ˜ÛÛ™šY[˜Ù_INÈÙ]‚ˆÙ]‚ˆÜ[ˆİ[OH™›Û\Ú^™N˜\ŠKY›Û\Ú^™K[X™[
NØÛÛÜ˜\ŠK]^]\X\JH‰İ\İ˜ÛÛ™šY[˜ÙHHMHÈ	ĞÛÛ˜Û\Ú]™H
\ŞJIÈˆ\İ˜ÛÛ™šY[˜ÙHHÌÈ	Õ™[™[™ÉÈˆ	Ò[˜ÛÛ˜Û\Ú]™IßOÜÜ[‚ˆÙ]‚ˆÙ]‚ˆÙ]‚ˆJKš›Ú[Š	ÉÊNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈÒT•È
Ú\šœÊB‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚™[˜İ[ÛˆÙ]ÛÛ\]Y˜\Š˜[YJHÂˆ™]\›ˆÙ]ÛÛ\]Yİ[JØİ[Y[™Øİ[Y[[[Y[
K™Ù]›Ü\U˜[YJ˜[YJKš[J
NÂŸB‚™[˜İ[Ûˆ[š]Ú\Ê
HÂˆYˆ
\[ÙˆÚ\OOH	İ[™Yš[™Y	ÊH™]\›Â‚ˆËÈ\İ›ŞH[^\İ[™ÈÚ\[œİ[˜Ù\È™Y›Ü™H™KXÜ™X][™ÂˆØš™Xİ˜[Y\ÊÚ\š[œİ[˜Ù\ÈßJK™›Ü‘XXÚ
ÈOˆÏË™\İ›ŞOËŠ
JNÂ‚ˆÛÛœİ^ÛÛÜˆHÙ]ÛÛ\]Y˜\Š	ËK]^]\X\IÊH	ÈÎMXMIËˆÛÛœİÜšYÛÛÜˆHÙ]ÛÛ\]Y˜\Š	ËKXÚ\YÜšY	ÊH	Ü™Ø˜JMKMKMKŒŠIÎÂˆÛÛœİÛÛ\™ÈHÙ]ÛÛ\]Y˜\Š	ËKX™ËY[]˜]Y	ÊH	ÈÌYLÌÍ‰ÎÂˆÛÛœİÛÛ\]HHÙ]ÛÛ\]Y˜\Š	ËK]^\š[X\IÊH	ÈÙŒŒ™IËˆÛÛœİÛÛ\›ÙHHÙ]ÛÛ\]Y˜\Š	ËK]^\ÙXÛÛ™\IÊH	ÈÎMXMIÎÂˆÛÛœİÛÛ\›Ü™\ˆHÙ]ÛÛ\]Y˜\Š	ËKX›Ü™\‹\İXIÊH	Ü™Ø˜JMKMKMKŒ
IÎÂ‚ˆÚ\™Y˜][Ë˜ÛÛÜˆH^ÛÛÜÂˆÚ\™Y˜][Ë™›Û™˜[Z[HH‰ÓX[œ›ÜIËX\K\Ş\İ[K›[šÓXXÔŞ\İ[Q›ÛØ[œË\Ù\šYˆÂˆÚ\™Y˜][Ë™›ÛœÚ^™HHLNÂ‚ˆËÈİÜ™H[YKX]Ø\™HÛÛÜœÈ›ÜˆÚ\[˜İ[ÛœÂˆÚ[™İË—×ØÚ\[YHHÈÜšYÛÛÜ‹ÛÛ\™ËÛÛ\]KÛÛ\›ÙKÛÛ\›Ü™\ˆNÂ‚ˆ[š]İ]™XXÚ™[™Ú\

NÂˆ[š]Ú[›™[Û]

NÂˆ[š]ÙYZÛT›ÙÜ™\ÜĞÚ\

NÂŸB‚™[˜İ[Ûˆ[š]İ]™XXÚ™[™Ú\

HÂˆÛÛœİİHØİ[Y[™Ù][[Y[RY
	Ûİ]™XXÚ™[™Ú\	ÊNÂˆYˆ
Xİ
H™]\›Â‚ˆÛÛœİ[ÛÈHÉÒ˜[‰Ë	Ñ™X‰Ë	ÓX\‰Ë	Ğ\‰Ë	ÓX^IË	Ò[‰Ë	Ò[	Ë	Ğ]YÉË	ÔÙ\	Ë	ÓØİ	Ë	Ó›İ‰Ë	ÑXÉ×NÂˆÛÛœİX™[ÈH×NÂˆ›Üˆ
]HHÈHHÈKKJHÂˆÛÛœİH™]È]J
NÂˆœÙ]]J™Ù]]J
HHJNÂˆX™[Ëœ\Ú
	Û[ÛÖÙ™Ù][Û

W_H	Ù™Ù]]J
_X
NÂˆBˆ™]ÈÚ\
İÂˆ\Nˆ	Û[™IËˆ]NˆÂˆX™[Ëˆ]\Ù]ÎˆÂˆÂˆX™[ˆ	ĞÛÛ›™Xİ[ÛœÈÙ[	Ëˆ]NˆÌÌ‹ÍKN‹ÎÍKˆ›Ü™\ÛÛÜˆ	ÈÍÎPQ‘‰Ëˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JÍ‹MMMKŒ
IËˆš[ˆYKˆ[œÚ[ÛˆŒÍKˆÚ[˜Y]\ÎˆˆÚ[İ™\”˜Y]\Îˆ‹ˆ›Ü™\•ÚYˆ‹ˆKˆÂˆX™[ˆ	ĞXØÙ\Y	Ëˆ]NˆÌL‹LMM‹ML—Kˆ›Ü™\ÛÛÜˆ	ÈÌĞĞ‘NÉËˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JŒNLMŒ
IËˆš[ˆYKˆ[œÚ[ÛˆŒÍKˆÚ[˜Y]\ÎˆˆÚ[İ™\”˜Y]\Îˆ‹ˆ›Ü™\•ÚYˆ‹ˆKˆÂˆX™[ˆ	Ô™\Y\ÉËˆ]NˆÌË‹KKËKˆ›Ü™\ÛÛÜˆ	ÈĞMÎ‘IËˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JMËLÎKLŒ
IËˆš[ˆYKˆ[œÚ[ÛˆŒÍKˆÚ[˜Y]\ÎˆˆÚ[İ™\”˜Y]\Îˆ‹ˆ›Ü™\•ÚYˆ‹ˆKˆKˆKˆÜ[ÛœÎˆÂˆ™\ÜÛœÚ]™NˆYKˆXZ[Z[\ÜXİ˜][Îˆ˜[ÙKˆ[\˜Xİ[ÛˆÈ[ÙNˆ	Ú[™^	Ë[\œÙXİˆ˜[ÙHKˆYÚ[œÎˆÂˆYÙ[™ˆÂˆÜÚ][Ûˆ	İÜ	Ëˆ[YÛˆ	Ù[™	ËˆX™[ÎˆÈ\ÙTÚ[İ[NˆYKÚ[İ[Nˆ	ØÚ\˜ÛIËY[™ÎˆM‹›ÛˆÈÚ^™NˆLHHBˆKˆÛÛ\ˆÂˆ˜XÚÙÜ›İ[™ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\™È	ÈÌYLÌÍ‰Ëˆ]PÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\]H	ÈÙŒŒ™IËˆ›ÙPÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›ÙH	ÈÎMXMIËˆ›Ü™\ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›Ü™\ˆ	Ü™Ø˜JMKMKMKŒJIËˆ›Ü™\•ÚYˆKˆÛÜ›™\”˜Y]\ÎˆˆY[™ÎˆLˆBˆKˆØØ[\ÎˆÂˆˆÈÜšYˆÈÛÛÜˆÚ[™İË—×ØÚ\[YOË™ÜšYÛÛÜˆ	Ü™Ø˜JMKMKMKŒ
IË˜]Ğ›Ü™\ˆ˜[ÙHHKˆNˆÂˆÜšYˆÈÛÛÜˆÚ[™İË—×ØÚ\[YOË™ÜšYÛÛÜˆ	Ü™Ø˜JMKMKMKŒ
IË˜]Ğ›Ü™\ˆ˜[ÙHKˆ™YÚ[]™\›ÎˆYKˆXÚÜÎˆÈİ\Ú^™NˆLKˆBˆBˆBˆJNÂŸB‚™[˜İ[Ûˆ[š]Ú[›™[Û]

HÂˆÛÛœİİHØİ[Y[™Ù][[Y[RY
	ØÚ[›™[Û]	ÊNÂˆYˆ
Xİ
H™]\›Â‚ˆ™]ÈÚ\
İÂˆ\Nˆ	ÙİYÚ]	Ëˆ]NˆÂˆX™[ÎˆÉÓ[šÙY[ˆÛÛ›™Xİ[ÛœÉË	Ó[šÙY[ˆ\ÉË	Ñ[XZ[İXÚIË	Ñ[XZ[›ÛİË]\ÉË	Ô›Ùš[HšY]ÜÉ×Kˆ]\Ù]ÎˆŞÂˆ]NˆÌËN‹ÌL‹KM×Kˆ˜XÚÙÜ›İ[™ÛÛÜˆÉÈÍÎPQ‘‰Ë	ÈÌĞĞ‘NÉË	ÈĞMÎ‘IË	ÈÑLŒĞÉË	ÈÌŒ‘ÑQI×Kˆ›Ü™\•ÚYˆˆİ™\“Ù™œÙ]ˆ‹ˆWBˆKˆÜ[ÛœÎˆÂˆ™\ÜÛœÚ]™NˆYKˆXZ[Z[\ÜXİ˜][Îˆ˜[ÙKˆİ]İ]ˆ	ÍÍ	IËˆYÚ[œÎˆÂˆYÙ[™ˆÂˆÜÚ][Ûˆ	Ø›İÛIËˆX™[ÎˆÈ\ÙTÚ[İ[NˆYKÚ[İ[Nˆ	ØÚ\˜ÛIËY[™ÎˆL‹›ÛˆÈÚ^™NˆLHBˆKˆÛÛ\ˆÂˆ˜XÚÙÜ›İ[™ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\™È	ÈÌYLÌÍ‰Ëˆ]PÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\]H	ÈÙŒŒ™IËˆ›ÙPÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›ÙH	ÈÎMXMIËˆ›Ü™\ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›Ü™\ˆ	Ü™Ø˜JMKMKMKŒJIËˆ›Ü™\•ÚYˆKˆÛÜ›™\”˜Y]\ÎˆˆY[™ÎˆLˆBˆBˆBˆJNÂŸB‚™[˜İ[Ûˆ[š]ÙYZÛT›ÙÜ™\ÜĞÚ\

HÂˆÛÛœİİHØİ[Y[™Ù][[Y[RY
	İÙYZÛT›ÙÜ™\ÜĞÚ\	ÊNÂˆYˆ
Xİ
H™]\›Â‚ˆ™]ÈÚ\
İÂˆ\Nˆ	Ø˜\‰Ëˆ]NˆÂˆX™[ÎˆÉÕÙYZÈH
Ù\KMÊIË	ÕÙYZÈˆ
Ù\LM
IË	ÕÙYZÈÈ
Ù\MKLŒ
IË	ÕÙYZÈ
›Ú™XİY
I×Kˆ]\Ù]ÎˆÂˆÂˆX™[ˆ	ÓYY][™ÜÈ›ÛÚÙY	Ëˆ]NˆÌËKKˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JŒNLMÍJIËˆ›Ü™\”˜Y]\Îˆ‹ˆ›Ü™\”ÚÚ\Yˆ˜[ÙKˆKˆÂˆX™[ˆ	ÓYY][™ÜÈ[	Ëˆ]NˆÌ‹ËKˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JÍ‹MMMKÍJIËˆ›Ü™\”˜Y]\Îˆ‹ˆ›Ü™\”ÚÚ\Yˆ˜[ÙKˆKˆÂˆX™[ˆ	Ó™]È™\Y\ÉËˆ]NˆÎLKMKKˆ˜XÚÙÜ›İ[™ÛÛÜˆ	Ü™Ø˜JMËLÎKLÍJIËˆ›Ü™\”˜Y]\Îˆ‹ˆ›Ü™\”ÚÚ\Yˆ˜[ÙKˆKˆKˆKˆÜ[ÛœÎˆÂˆ™\ÜÛœÚ]™NˆYKˆXZ[Z[\ÜXİ˜][Îˆ˜[ÙKˆYÚ[œÎˆÂˆYÙ[™ˆÂˆÜÚ][Ûˆ	İÜ	Ëˆ[YÛˆ	Ù[™	ËˆX™[ÎˆÈ\ÙTÚ[İ[NˆYKÚ[İ[Nˆ	ØÚ\˜ÛIËY[™ÎˆM‹›ÛˆÈÚ^™NˆLHHBˆKˆÛÛ\ˆÂˆ˜XÚÙÜ›İ[™ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\™È	ÈÌYLÌÍ‰Ëˆ]PÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\]H	ÈÙŒŒ™IËˆ›ÙPÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›ÙH	ÈÎMXMIËˆ›Ü™\ÛÛÜˆÚ[™İË—×ØÚ\[YOËÛÛ\›Ü™\ˆ	Ü™Ø˜JMKMKMKŒJIËˆ›Ü™\•ÚYˆKˆÛÜ›™\”˜Y]\ÎˆˆY[™ÎˆLˆBˆKˆØØ[\ÎˆÂˆˆÈÜšYˆÈ\Ü^Nˆ˜[ÙHHKˆNˆÂˆÜšYˆÈÛÛÜˆÚ[™İË—×ØÚ\[YOË™ÜšYÛÛÜˆ	Ü™Ø˜JMKMKMKŒ
IË˜]Ğ›Ü™\ˆ˜[ÙHKˆ™YÚ[]™\›ÎˆYKˆBˆBˆBˆJNÂŸB‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈQÑSÖHÔÎˆÔTUSÓSST•È
LÈST•ÊB‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚˜ÛÛœİST•×ÑUHHÂˆÂˆYˆ	Ø[LIËˆÙ]™\š]Nˆ	İØ\›š[™ÉËˆÛY[ˆ	ÔÚ[[›šHš[\‰Ëˆ]Nˆ	Ñ^Xİ][Ûˆ[YH™X\›H^]\İYHÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆİXˆ	ÓÛ™H^HÜˆ\ÜÈÙˆ^Xİ][Ûˆ[YH™[XZ[œË‰ÂˆKˆÂˆYˆ	Ø[L‰ËˆÙ]™\š]Nˆ	ØÛÛ\]IËˆÛY[ˆ	ÔÚ[[›šHš[\‰Ëˆ]Nˆ	ĞØ[\ZYÛˆ™X\›HÛÛ\]HHÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆİXˆ	Ê\™XHšXÙH™\ÚY[ˆÔˆ”™YÚ[Û˜[šXÙH™\ÚY[ˆÔˆ•šXÙH™\ÚY[ÙˆØ[\ÈˆÔˆ•”Ø[\ÈˆÔˆ’XYÙˆØ[\ÈˆÔˆ”Ø[\È\™XİÜˆŠH
È][\ÛÙ\ÈL	HÛÛ\]K‰ÂˆKˆÂˆYˆ	Ø[LÉËˆÙ]™\š]Nˆ	ØÛÛ\]IËˆÛY[ˆ	ÔÚ[[›šHš[\‰Ëˆ]Nˆ	ĞØ[\ZYÛˆ™X\›HÛÛ\]HHÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆİXˆ	Ê‘›İ[™\ˆˆÔˆÛËQ›İ[™\ˆˆÔˆÑSÈŠHS‘
ŞX™\œÙXİ\š]HØXTÈˆÔˆ”ÙXİ\š]HÛÙØ\™HŠH\ÈMÉHÛÛ\]K‰ÂˆKˆÂˆYˆ	Ø[M	ËˆÙ]™\š]Nˆ	ØÛÛ\]IËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	ĞØ[\ZYÛˆ™X\›HÛÛ\]HHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	Ğ\ÙXÈXY\œÚ\
ÈSˆHš[™[™ÜÈÈš^\È\ÈL	HÛÛ\]K‰ÂˆKˆÂˆYˆ	Ø[MIËˆÙ]™\š]Nˆ	ØÜš]XØ[	ËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	ÒYÚ˜Z[\™H˜]HHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	ĞÕÈØXTÈ
ÈSˆ\ÈHŒÉH˜Z[\™H˜]K‰ÂˆKˆÂˆYˆ	Ø[M‰ËˆÙ]™\š]Nˆ	ØÛÛ\]IËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	ĞØ[\ZYÛˆ™X\›HÛÛ\]HHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	ĞÕÈØXTÈ
ÈSˆ\ÈNIHÛÛ\]K‰ÂˆKˆÂˆYˆ	Ø[MÉËˆÙ]™\š]Nˆ	İØ\›š[™ÉËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	ÓİÈ™\H˜]HHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	Ñ\™XİÜˆÙˆ›ÙXİÜ›İİ\ÈHK	H™\H˜]H™[İÈ™\ÚÛ‰ÂˆKˆÂˆYˆ	Ø[N	ËˆÙ]™\š]Nˆ	İØ\›š[™ÉËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	Ñ^Xİ][Ûˆ[YH™X\›H^]\İYHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	ÕÛÈ^\ÈÙˆ^Xİ][Ûˆ[YH™[XZ[œË‰ÂˆKˆÂˆYˆ	Ø[NIËˆÙ]™\š]Nˆ	ØÜš]XØ[	ËˆÛY[ˆ	ÔÚ[[›šHš[\‰Ëˆ]Nˆ	ÒYÚ˜Z[\™H˜]HHÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆİXˆ	Ñ[\œš\ÙHš[•XÚXZ[›Ş\ÈNIH›İ[˜ÙH˜]HÛˆ[™\šYšYY\ÛÈ\İ‰ÂˆKˆÂˆYˆ	Ø[LL	ËˆÙ]™\š]Nˆ	ØÛÛ\]IËˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]IËˆ]Nˆ	ĞØ[\ZYÛˆ™X\›HÛÛ\]HHš\Y\Ú˜Z˜\]H
^[È[œÚ]JIËˆİXˆ	ÒPÔHHTÈŒˆØXTÈ›İ[™\œÈH˜[Y]YŒH\ÈL‰HÛÛ\]K‰ÂˆKˆÂˆYˆ	Ø[LLIËˆÙ]™\š]Nˆ	Ú[™›ÉËˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]IËˆ]Nˆ	ĞÛÛ›™Xİ[Ûˆ][İH™\ÚÛ™XXÚYHš\Y\Ú˜Z˜\]H
^[È[œÚ]JIËˆİXˆ	ÔØY™H[ÙHZ[HÙZ[[™ÈÙˆŒÛÛ›™Xİ[Ûˆ™\]Y\İÈ™XXÚY‰ÂˆKˆÂˆYˆ	Ø[LL‰ËˆÙ]™\š]Nˆ	İØ\›š[™ÉËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆ]Nˆ	Ó[šÙY[ˆÙ\ÜÚ[ÛˆÛÛÚÚYH™Yœ™\Ú™\]Z\™YHÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆİXˆ	ĞXØÛİ[ÛÛÚÚYHÙ\ÜÚ[ÛˆÚÙ[ˆ™\]Z\™\È™K]™\šYšXØ][ÛˆÚ][ˆİ\œË‰ÂˆKˆÂˆYˆ	Ø[LLÉËˆÙ]™\š]Nˆ	İØ\›š[™ÉËˆÛY[ˆ	ÔÚ[[›šHš[\‰Ëˆ]Nˆ	Ô[™[™ÈØ[[™\ˆ[š]\È]XİYHÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆİXˆ	ÌÈÜÚ]]™H™\ÜÛ™[ÈØZ][™È›ÜˆØ[[™H›ÛÚÚ[™È[šË‰ÂˆB—NÂ‚›]İ\œ™[[\š[\ˆH	Ø[	ÎÂ‚™[˜İ[Ûˆ™[™\[\Êš[\ˆH	Ø[	ÊHÂˆÛÛœİÛÛZ[™\ˆHØİ[Y[™Ù][[Y[RY
	Ø[\Ó\İ	ÊNÂˆYˆ
XÛÛZ[™\ŠH™]\›Â‚ˆİ\œ™[[\š[\ˆHš[\ÂˆÛÛœİÛØ˜[ÛY[HØİ[Y[™Ù][[Y[RY
	ÙÛØ˜[ÛY[Ù[XİÜ‰ÊOË˜[YH	Ø[	ÎÂ‚ˆÛÛœİš[\™YHST•×ÑUK™š[\Š][HOˆÂˆÛÛœİX]Ú\Ñš[\ˆHš[\ˆOOH	Ø[	È][KœÙ]™\š]HOOHš[\ÂˆÛÛœİX]Ú\ĞÛY[HÛØ˜[ÛY[OOH	Ø[	È][K˜ÛY[ÓİÙ\Ø\ÙJ
Kš[˜ÛY\ÊÛØ˜[ÛY[ÓİÙ\Ø\ÙJ
JNÂˆ™]\›ˆX]Ú\Ñš[\ˆ	‰ˆX]Ú\ĞÛY[ÂˆJNÂ‚ˆYˆ
š[\™Y›[™İOOH
HÂˆÛÛZ[™\‹š[›™\’SHˆ]ˆÛ\ÜÏH˜Ø\™ˆİ[OHœY[™ÎˆÈ^X[YÛˆÙ[\ÈÛÛÜˆ˜\ŠK]^]\X\JNÈ‚ˆ“›È[\ÈX]Ú[™È\Èš[\ˆÜš]\šXKÜ‚ˆÙ]‚ˆÂˆ™]\›ÂˆB‚ˆÛÛZ[™\‹š[›™\’SHš[\™Y›X\
][HOˆˆ]ˆÛ\ÜÏH˜[\XØ\™ˆ]KZYH‰Ú][KšYH‚ˆ]ˆÛ\ÜÏH˜[\[XZ[ˆ‚ˆÜ[ˆÛ\ÜÏH˜[\Yİ	Ú][KœÙ]™\š]_HÜÜ[‚ˆ]ˆÛ\ÜÏH˜[\XÛÛ[‚ˆÜ[ˆÛ\ÜÏH˜[\]]H‰Ú][K]_OÜÜ[‚ˆÜ[ˆÛ\ÜÏH˜[\\İXˆ‰Ú][KœİXŸOÜÜ[‚ˆÙ]‚ˆÙ]‚ˆ]ˆÛ\ÜÏH˜[\XXİ[ÛœÈ‚ˆ]ÛˆÛ\ÜÏH˜ˆ‹\ÙXÛÛ™\H‹\ÛHˆÛ˜ÛXÚÏH™\ÛZ\ÜĞ[\
	ÉÚ][KšYIÊH‘\ÛZ\ÜÏØ]Û‚ˆ]ÛˆÛ\ÜÏH˜ˆ‹\š[X\H‹\ÛHˆÛ˜ÛXÚÏHœ™\ÛÛ™P[\
	ÉÚ][KšYIÊH”™\ÛÛ™OØ]Û‚ˆÙ]‚ˆÙ]‚ˆ
Kš›Ú[Š	ÉÊNÂŸB‚Ú[™İË™\ÛZ\ÜĞ[\H[˜İ[ÛŠY
HÂˆÛÛœİYHST•×ÑUK™š[™[™^
HOˆKšYOOHY
NÂˆYˆ
YOOHLJHÂˆST•×ÑUKœÜXÙJYJNÂˆ™[™\[\Êİ\œ™[[\š[\ŠNÂˆÚİÕØ\İ
	Ğ[\\ÛZ\ÜÙY	ÊNÂˆBŸNÂ‚Ú[™İËœ™\ÛÛ™P[\H[˜İ[ÛŠY
HÂˆÛÛœİ[\HST•×ÑUK™š[™
HOˆKšYOOHY
NÂˆÚİÕØ\İ
™\ÛÛš[™Îˆ	Ø[\Ë]OËœÛXÙJÌ
_K‹‹˜
NÂŸNÂ‚‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‹ËÈQÑSÖHÔÎˆMĞSTRQÓ”ÈT‘“Ô“PSÑHUB‹ËÈOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOB‚›]ĞSTRQÓ”×ÔT‘“Ô“PSÑWÑUHHÂˆÂˆ˜[YNˆ	Ê‘›İ[™\ˆˆÔˆÛËQ›İ[™\ˆˆÔˆÑSÈŠHS‘
ŞX™\œÙXİ\š]HØXTÈˆÔˆ”ÙXİ\š]HÛÙØ\™HŠH
ÛÜJIËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ĞÔ‘PUQ	Ëˆ›ÙÜ™\ÜÎˆˆÙ[ˆˆXØÙ\Yˆ	Ì
	JIËˆXØÙ\Yİˆˆ™\Y\Îˆˆ™\T˜]NˆŒˆKˆÂˆ˜[YNˆ	Ê‘›İ[™\ˆˆÔˆÛËQ›İ[™\ˆŠHS‘
TXTÈÔˆZY]Ø\™HÔˆš[YÜ˜][Ûˆ]›Ü›HˆÔˆTH]›Ü›HŠH
ÈTÉËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ĞÔ‘PUQ	Ëˆ›ÙÜ™\ÜÎˆˆÙ[ˆˆXØÙ\Yˆ	Ì
	JIËˆXØÙ\Yİˆˆ™\Y\Îˆˆ™\T˜]NˆŒˆKˆÂˆ˜[YNˆ	ÒPÔHHTÈŒˆØXTÈ›İ[™\œÈH˜[Y]YŒIËˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]H
^[È[œÚ]JIËˆÛY[Ù^Nˆ	Ğš\Y\Ú˜Z˜\]IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆL‹ˆÙ[ˆLˆXØÙ\Yˆ	ÌMN
ÍKŒIJIËˆXØÙ\YİˆÍKŒKˆ™\Y\ÎˆÍˆ™\T˜]NˆË‚ˆKˆÂˆ˜[YNˆ	ÔØXTÈ›İ[™\œÈÙX\˜ÚLIËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ĞÔ‘PUQ	Ëˆ›ÙÜ™\ÜÎˆˆÙ[ˆˆXØÙ\Yˆ	Ì
	JIËˆXØÙ\Yİˆˆ™\Y\Îˆˆ™\T˜]NˆŒˆKˆÂˆ˜[YNˆ	ÔÙ\šXÙH[ÜIËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ĞÔ‘PUQ	Ëˆ›ÙÜ™\ÜÎˆˆÙ[ˆˆXØÙ\Yˆ	Ì
	JIËˆXØÙ\Yİˆˆ™\Y\Îˆˆ™\T˜]NˆŒˆKˆÂˆ˜[YNˆ	Ê\™XHšXÙH™\ÚY[ˆÔˆ”™YÚ[Û˜[šXÙH™\ÚY[ˆÔˆ•šXÙH™\ÚY[ÙˆØ[\ÈˆÔˆ•”Ø[\ÈŠH
È][\ÛÙ	ËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆLˆÙ[ˆŒˆXØÙ\Yˆ	ÌMH
Í‹Œ	JIËˆXØÙ\YİˆÍ‹Œˆ™\Y\ÎˆŒ‹ˆ™\T˜]NˆË‚ˆKˆÂˆ˜[YNˆ	Ğ\ÙXÈXY\œÚ\
ÈSˆHš[™[™ÜÈÈš^\ÉËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆÛY[Ù^Nˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆİ]\Îˆ	ĞÓÓTUQ	Ëˆ›ÙÜ™\ÜÎˆLˆÙ[ˆLŒˆXØÙ\Yˆ	ÍÌˆ
Í‹Œ	JIËˆXØÙ\YİˆÍ‹Œˆ™\Y\ÎˆKˆ™\T˜]NˆËˆKˆÂˆ˜[YNˆ	ĞÕÈØXTÈ
ÈS‰ËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆÛY[Ù^Nˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆNKˆÙ[ˆˆXØÙ\Yˆ	ÌNLˆ
Œ‰JIËˆXØÙ\YİˆŒ‹ˆ™\Y\ÎˆÎˆ™\T˜]NˆK‚ˆKˆÂˆ˜[YNˆ	Ñ\™XİÜˆÙˆ›ÙXİÜ›İİHTÈš[•XÚ	ËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆÛY[Ù^Nˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆÎˆÙ[ˆLLˆXØÙ\Yˆ	ÌN
ÍKŒÉJIËˆXØÙ\YİˆÍKŒËˆ™\Y\ÎˆKˆ™\T˜]NˆKˆKˆÂˆ˜[YNˆ	ÔÙ\šY\ÈHŒˆØXTÈ›İ[™\œÈHT”ˆ	SKISIËˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]H
^[È[œÚ]JIËˆÛY[Ù^Nˆ	Ğš\Y\Ú˜Z˜\]IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆˆÙ[ˆŒŒˆXØÙ\Yˆ	ÌŒMH
ÍÉJIËˆXØÙ\YİˆÍËˆ™\Y\Îˆˆ™\T˜]NˆËÂˆKˆÂˆ˜[YNˆ	Ñ]“ÜÈ]›Ü›H[™Ú[™Y\œÈHTÈX\İ	ËˆÛY[ˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜H
Ûİ[H\™XİÜŠIËˆÛY[Ù^Nˆ	ÔÚ\Ú[šÈÜš]˜\İ]˜IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆKˆÙ[ˆLˆXØÙ\Yˆ	ÌLÎ
ÌËÉJIËˆXØÙ\YİˆÌËËˆ™\Y\Îˆ‹ˆ™\T˜]Nˆ‹ŒÂˆKˆÂˆ˜[YNˆ	Õ™[\™H˜XÚÙYÙYY›İ[™\œÈHPÈ	ˆXÚİ\œÉËˆÛY[ˆ	Ğš\Y\Ú˜Z˜\]H
^[È[œÚ]JIËˆÛY[Ù^Nˆ	Ğš\Y\Ú˜Z˜\]IËˆİ]\Îˆ	ĞPÕU‘IËˆ›ÙÜ™\ÜÎˆL‹ˆÙ[ˆÍˆXØÙ\Yˆ	ÌLŒˆ
ÍKIJIËˆXØÙ\YİˆÍKKˆ™\Y\ÎˆKˆ™\T˜]NˆBˆKˆÂˆ˜[YNˆ	ĞŞX™\œÙXİ\š]HÓĞÈ\™XİÜœÈHRÈ	ˆSQPIËˆÛY[ˆ	ÔÚ[[›šHš[\ˆ
XYÙ[™\˜][ÛˆÛØXÚ
IËˆÛY[Ù^Nˆ	ÔÚ[[›šHš[\‰Ëˆİ]\Îˆ	ÔUTÑQ	Ëˆ›ÙÜ™\ÜÎˆˆÙ[ˆÌLˆXØÙ\Yˆ	ÎN
ÌK‰JIËˆXØÙ\YİˆÌK‹ˆ™\Y\ÎˆL‹ˆ™\T˜]NˆËBˆKˆÂˆ˜[YNˆ	Õ”İ\İÛY\ˆİXØÙ\ÜÈHÛİY[™œ˜\İXİ\™IËˆÛY[ˆ	ÔÚ[[›šHš[\’"À¢6Æ–VçD¶W“¢u6†Æ–ææ’&–ÆÆ"rÀ¢7FGW3¢t5D•dRrÀ¢&öw&W73¢sÀ¢6VçC¢SCÀ¢66WFVC¢sƒ‚ƒ3Bã‚R’rÀ¢66WFVE7C¢3Bã‚À¢&WÆ–W3¢3RÀ¢&WÇ•&FS¢bãP¢ÒÀ¢°¢æÖS¢t†VBöb6ÆW2Væv–æVW&–ærÒVçFW'&—6R’rÀ¢6Æ–VçC¢u6†6†æ²7&—f7Ff„6÷VçG'’F—&V7F÷"’rÀ¢6Æ–VçD¶W“¢u6†6†æ²7&—f7FfrÀ¢7FGW3¢t5D•dRrÀ¢&öw&W73¢ƒ‚À¢6VçC¢s3À¢66WFVC¢s#cBƒ3bã"R’rÀ¢66WFVE7C¢3bã"À¢&WÆ–W3¢SÀ¢&WÇ•&FS¢rã ¢Ğ¥Ó° ¢òòvVæW&FR&VÖ–æFW"FòW†7FÇ’ÖF6‚SB6×–vç0¦6öç7B6Æ–VçEööÂÒ°¢²æÖS¢u6†Æ–ææ’&–ÆÆ"„ÆVBvVæW&F–öâ6ö6‚’rÂ¶W“¢u6†Æ–ææ’&–ÆÆ"rÒÀ¢²æÖS¢u6†6†æ²7&—f7Ff„6÷VçG'’F—&V7F÷"’rÂ¶W“¢u6†6†æ²7&—f7FfrÒÀ¢²æÖS¢t&‡WVW6‚&¦F’…—†VÇ2FVç6—G’’rÂ¶W“¢t&‡WVW6‚&¦F’rĞ¥Ó°¦6öç7BF—FÆW5ööÂÒ°¢t†VBöbV÷ÆRb7VÇGW&RÒFV6‚rÂt6†–Vb&WfVçVRöff–6W'2Ò62rÂueÖ&¶WF–ærÒ&öGV7BÆVBw&÷wF‚rÀ¢tÆVB6Æ÷VB&6†—FV7G2Òu2bt5rÂtVæv–æVW&–ærÖævW'2ÒF—7G&–'WFVB7—7FV×2rÂt66÷VçBW†V7WF—fW2Ò7G&FVv–266÷VçG2rÀ¢tf÷VæFW'2Ò’vVçG2bÄÄ×2rÂtF—&V7F÷"öb&Wd÷2Ò66Æ–ær7FvRrÂu&öGV7BÖævW'2ÒFWfVÆ÷W"FööÇ2rÀ¢t–æf÷&ÖF–öâ6V7W&—G’öff–6W'2Ò†VÇF†6&RrÂt6†–VbFV6†æöÆöw’öff–6W'2Ò66ÆWW2rÂueFF66–Væ6RbÔÂp¥Ó° ¦f÷"†ÆWB’Òc²’ÃÒSC²’²²’°¢6öç7B2Ò6Æ–VçEööÅ¶’R6Æ–VçEööÂæÆVæwF…Ó°¢6öç7BBÒF—FÆW5ööÅ¶’RF—FÆW5ööÂæÆVæwF…Ó°¢6öç7B—47&VFVBÒ’âCc°¢6öç7B—46ö×ÆWFVBÒ’RrÓÓÒ°¢6öç7B7FGW2Ò—47&VFVBòt5$TDTBr¢†—46ö×ÆWFVBòt4ôÕÄUDTBr¢†’R’ÓÓÒòuU4TBr¢t5D•dRr’“°¢6öç7B&öw&W72Ò—47&VFVBò¢†—46ö×ÆWFVBò¢ÖF‚æÖ–âƒ“‚Â#²‚†’¢r’RsR’’“°¢6öç7B6VçBÒ—47&VFVBò¢ÖF‚ç&÷VæB‡&öw&W72¢‚ãR“°¢6öç7B66WFVD6÷VçBÒ—47&VFVBò¢ÖF‚ç&÷VæB‡6VçB¢ƒã3"²‚†’Rb’¢ãR’’“°¢6öç7B66WFVE7BÒ6VçBâò‚†66WFVD6÷VçBò6VçB’¢’çFôf—†VBƒ’¢°¢6öç7B&WÆ–W2Ò—47&VFVBò¢ÖF‚ç&÷VæB†66WFVD6÷VçB¢ƒãR²‚†’R‚’¢ã"’’“°¢6öç7B&WÇ•&FRÒ6VçBâò‚‡&WÆ–W2ò6VçB’¢’çFôf—†VBƒ’¢ã° ¢4Õ”tå5õU$dõ$Ôä4UôDDçW6‚‡°¢æÖS¢G·GÒÒvfRG´ÖF‚æ6V–Â†’òb—Ò„&F6‚G¶—Ò–À¢6Æ–VçC¢2ææÖRÀ¢6Æ–VçD¶W“¢2æ¶W’À¢7FGW2À¢&öw&W72À¢6VçBÀ¢66WFVC¢G¶66WFVD6÷VçGÒ‚G¶66WFVE7GÒR–À¢66WFVE7C¢'6TfÆöB†66WFVE7B’À¢&WÆ–W2À¢&WÇ•&FS¢'6TfÆöB‡&WÇ•&FR¢Ò“°§Ğ ¦gVæ7F–öâ&VæFW$6×–vç5F&ÆR‚’°¢6öç7BF&öG’ÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–vç5F&ÆT&öG’r“°¢6öç7B6÷VçDVÂÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–vç46÷VçEFW‡Br“°¢–b‚F&öG’’&WGW&ã° ¢6öç7B6V&6‚ÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–vå6V&6„–çWBr“òçfÇVSòçFôÆ÷vW$66R‚’ÇÂrs°¢6öç7B6Æ–VçDf–ÇFW"ÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–vä6Æ–VçDf–ÇFW"r“òçfÇVRÇÂvÆÂs°¢6öç7B7FGW4f–ÇFW"ÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–vå7FGW4f–ÇFW"r“òçfÇVRÇÂvÆÂs°¢6öç7BW&df–ÇFW"ÒFö7VÖVçBævWDVÆVÖVçD'”–B‚v6×–våW&df–ÇFW"r“òçfÇVRÇÂvÆÂs° ¢6öç7Bf–ÇFW&VBÒ4Õ”tå5õU$dõ$Ôä4UôDDæf–ÇFW"†2Óâ°¢6öç7BÖF6†W56V&6‚Ò6V&6‚ÇÂ2ææÖRçFôÆ÷vW$66R‚’æ–æ6ÇVFW2‡6V&6‚’ÇÂ2æ6Æ–VçBçFôÆ÷vW$66R‚’æ–æ6ÇVFW2‡6V&6‚“°¢6öç7BÖF6†W46Æ–VçBÒ6Æ–VçDf–ÇFW"ÓÓÒvÆÂrÇÂ2æ6Æ–VçD¶W’æ–æ6ÇVFW2†6Æ–VçDf–ÇFW"“°¢6öç7BÖF6†W57FGW2Ò7FGW4f–ÇFW"ÓÓÒvÆÂrÇÂ2ç7FGW2ÓÓÒ7FGW4f–ÇFW#°¢ÆWBÖF6†W5W&bÒG'VS°¢–b‡W&df–ÇFW"ÓÓÒv†–v‚r’ÖF6†W5W&bÒ2ç&WÇ•&FRãÒbã°¢VÇ6R–b‡W&df–ÇFW"ÓÓÒvÖ–Br’ÖF6†W5W&bÒ2ç&WÇ•&FRãÒ2ãbb2ç&WÇ•&FRÂbã°¢VÇ6R–b‡W&df–ÇFW"ÓÓÒvÆ÷rr’ÖF6†W5W&bÒ2ç&WÇ•&FRÂ2ã° ¢&WGW&âÖF6†W56V&6‚bbÖF6†W46Æ–VçBbbÖF6†W57FGW2bbÖF6†W5W&c°¢Ò“° ¢–b†6÷VçDVÂ’°¢6÷VçDVÂçFW‡D6öçFVçBÒG¶f–ÇFW&VBæÆVæwF‡ÒöbG´4Õ”tå5õU$dõ$Ôä4UôDDæÆVæwF‡Ò6×–vç26†÷væ°¢Ğ ¢–b†f–ÇFW&VBæÆVæwF‚ÓÓÒ’°¢F&öG’æ–ææW$…DÔÂÒ ¢ÇG#à¢ÇFB6öÇ7ãÒ#r"7G–ÆSÒ'FW‡BÖÆ–vã¢6VçFW#²FF–æs¢3'ƒ²6öÆ÷#¢f"‚Ò×FW‡B×FW'F–'’“²#à¢æò6×–vç2f÷VæBÖF6†–ær–÷W"7&—FW&–à¢Â÷FCà¢Â÷G#à¢°¢&WGW&ã°¢Ğ ¢F&öG’æ–ææW$…DÔÂÒf–ÇFW&VBæÖ†®¶    let statusClass = 'active';
    if (c.status === 'CREATED') statusClass = 'created';
    else if (c.status === 'PAUSED') statusClass = 'paused';
    else if (c.status === 'COMPLETED') statusClass = 'completed';

    let progressColor = '';
    if (c.progress >= 90) progressColor = 'purple';
    else if (c.progress >= 50) progressColor = 'blue';

    return `
      <tr>
        <td>
          <div class="campaign-title-cell">
            <span class="campaign-main-name">${c.name}</span>
            <span class="campaign-client-sub">${c.client}</span>
          </div>
        </td>
        <td>
          <span class="status-badge ${statusClass}">${c.status}</span>
        </td>
        <td>
          <span style="font-weight: 700;">${c.progress}%</span>
          <div class="campaign-progress-bar">
            <div class="campaign-progress-fill ${progressColor}" style="width: ${c.progress}%;"></div>
          </div>
        </td>
        <td style="font-weight: 600;">${c.sent}</td>
        <td>${c.accepted}</td>
        <td style="font-weight: 700;">${c.replies}</td>
        <td style="font-weight: 800; color: ${c.replyRate >= 6 ? 'var(--accent-green)' : (c.replyRate > 0 ? 'var(--accent-blue)' : 'var(--text-tertiary)')};">${c.replyRate}%</td>
      </tr>
    `;
  }).join('');
let currSuffix = '';
}

function exportCampaignsCsv() {
  const headers = ['Campaign Name', 'Client', 'Status', 'Progress %', 'Sent', 'Accepted', 'Replies', 'Reply Rate %'];
  const rows = CAMPAIGNS_PERFORMANCE_DATA.map(c => [
    `"${c.name.replace(/"/g, '""')}"`,
    `"${c.client.replace(/"/g, '""')}"`,
    c.status,
    c.progress,
    c.sent,
    `"${c.accepted}",
    c.replies,
    c.replyRate
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Agency_Campaigns_Performance_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Campaigns CSV exported successfully');
}

// ============================================
// AGENCY OS: TODAY'S PERFORMANCE (13 RESPONDENTS)
// ============================================

let TODAY_RESPONDENTS_DATA = [
  {
    id: 'resp-1',
    name: 'Bhanu Prasad Alapati',
    initials: 'BP',
    title: 'Associate Consultant at HCLTech',
    priority: 'HIGH',
    message: 'Thanks',
    tags: ['Unread', 'Awaiting your response', 'Interested tag', 'Positive Reply', 'meeting booked'],
    campaign: 'Shashank Srivastava (Country Director) - ("Vulnerability Management" OR "Vuln...',
    timestamp: '16/09/2026, 12:21:21',
    state: 'Awaiting your response'
  },
  {
    id: 'resp-2',
    name: 'Suraya Mascarenhas',
    initials: 'SM',
    title: 'Full-time parenting at Career Break',
    priority: 'HIGH',
    message: 'Hi, I Got some emergency. Will reschedule after few days',
    tags: ['Unread', 'Interested tag', 'Positive Reply', 'meeting booked', 'Nurture'],
    campaign: 'Shashank Srivastava (Country Director) - ("Vulnerability Management" OR "Vuln...',
    timestamp: '16/09/2026, 16:03:06',
    state: 'Answered'
  },
  {
    id: 'resp-3',
    name: 'Aviral Jain',
    initials: 'AJ',
    title: 'Analyst II - Information Security at Cencora',
    priority: 'HIGH',
    message: 'Not at the moment, we can connect later in the month.',
    tags: ['Unread', 'Interested tag', 'Positive Reply', 'Nurture'],
    campaign: 'Shashank Srivastava (Country Director) - ("Chief Information Security Officer" O...',
    timestamp: '16/09/2026, 14:03:07',
    state: 'Answered'
  },
  {
    id: 'resp-4',
    name: 'Sagnik Banerjee',
    initials: 'SB',
    title: 'Manager at Bandhan Bank',
    priority: 'HIGH',
    message: "Hi, thanks for reaching out. Yes, we're currently focused on balancing vulnerability volume with actual exploitable risk and business impact, particularly across our Citrix and firewall infrastructure. Rather than treating every vulnerability with the same priority, we check factors such as severity, active exploitation or known exploitation, asset criticality, and business impact. For internet-facing infrastructure like Citrix gateways and firewalls, vulnerabilities with active exploitation are",
    tags: ['Unread', 'Interested tag', 'Interested'],
    campaign: 'Shashank Srivastava (Country Director) - ("Vulnerability Management" OR "Vuln...',
    timestamp: '16/09/2026, 10:59:00',
    state: 'Answered'
  },
  {
    id: 'resp-5',
    name: 'Anant Sharma',
    initials: 'AS',
    title: 'Security Delivery Specialist at Accenture',
    priority: 'HIGH',
    message: 'Sure Thanks!!',
    tags: ['Unread', 'Awaiting your response', 'No Requirement', 'Nurture'],
    campaign: 'Shashank Srivastava (Country Director) - ("Vulnerability Management" OR "Vuln...',
    timestamp: '16/09/2026, 12:27:26',
    state: 'Awaiting your response'
  },
  {
    id: 'resp-6',
    name: 'Rohit Kulkarni',
    initials: 'TJ',
    title: 'VP Engineering at FinSys Cloud',
    priority: 'HIGH',
    message: 'We are evaluating outbound automation for Q4. Can you send over a brief 2-page overview of how your AI routing connects with GoHighLevel?',
    tags: ['Unread', 'Interested tag', 'Positive Reply', 'meeting booked'],
    campaign: 'Bhupeesh Prajapati - ICP 1 - US B2B SaaS Founders - Validated V01',
    timestamp: '16/09/2026, 17:15:10',
    state: 'Awaiting your response'
  },
  {
    id: 'resp-7',
    name: 'Meenakshi Sundaram',
    initials: 'MS',
    title: 'Head of Talent Acquisition at ScalerTech',
    priority: 'MEDIUM',
    message: 'Sounds interesting. Could you loop in our Director of Business Operations next week?',
    tags: ['Unread', 'Nurture'],
    campaign: 'Shalinni Billar - ("Area Vice President" OR "VP Sales") + Mulesoft',
    timestamp: '16/09/2026, 15:40:12',
    state: 'Answered'
  },
  {
    id: 'resp-8',
    name: 'Daniel Vance',
    initials: 'DV',
    title: 'Co-Founder & CTO at CloudScale IO',
    priority: 'HIGH',
    message: 'Booked a slot via your Calendly for Thursday 2 PM EST. Looking forward to seeing the live deliverability numbers.',
    tags: ['Unread', 'meeting booked', 'Positive Reply'],
    campaign: 'Bhupeesh Prajapati - ICP 1 - US B2B SaaS Founders - Validated V01',
    timestamp: '16/09/2026, 18:22:45',
    state: 'Answered'
  },
  {
    id: 'resp-9',
    name: 'Priya Nambiar',
    initials: 'PN',
    title: 'Product Lead at RazorPay',
    priority: 'MEDIUM',
    message: 'Check back with me in early November after our product sprint closes.',
    tags: ['Unread', 'Nurture'],
    campaign: 'Shashank Srivastava - AppSec Leadership + IN',
    timestamp: '16/09/2026, 11:14:30',
    state: 'Answered'
  },
  {
    id: 'resp-10',
    name: 'Marcus Thorne',
    initials: 'MT',
    title: 'VP of Growth at SaaSify',
    priority: 'HIGH',
    message: "Appreciate the no-nonsense message. Let's do a 15-minute quick chat. Send me an invite for Wednesday morning.",
    tags: ['Unread', 'Awaiting your response', 'Positive Reply', 'meeting booked'],
    campaign: 'Shalinni Billar - ("Founder" OR "Co-Founder" OR "CEO") AND ("Cybersecurity SaaS")',
    timestamp: '16/09/2026, 16:48:19',
    state: 'Awaiting your response'
  },
  {
    id: 'resp-11',
    name: 'Kenneth Miller',
    initials: 'KM',
    title: 'Director of Sales at ApexHealth',
    priority: 'LOW',
    message: 'We have an internal SDR team handling this, but thank you.',
    tags: ['Answered'],
    campaign: 'Shalinni Billar - Service People',
    timestamp: '16/09/2026, 09:33:05',
    state: 'Answered'
  },
  {
    id: 'resp-12',
    name: 'Tara Chen',
    initials: 'TC',
    title: 'Head of Revenue Operations at DataVibe',
    priority: 'HIGH',
    message: 'Interesting angle on founder-led sales bottlenecks. Does your engine sync custom tags into HubSpot as well?',
    tags: ['Unread', 'Awaiting your response', 'Interested tag', 'Positive Reply'],
    campaign: 'Bhupeesh Prajapati - ICP 1 - US B2B SaaS Founders - Validated V01',
    timestamp: '16/09/2026, 17:50:00',
    state: 'Awaiting your response'
  },
  {
    id: 'resp-13',
    name: 'Siddharth Rao',
    initials: 'SR',
    title: 'CISO at SecureNet Systems',
    priority: 'HIGH',
    message: 'Send me the case study you mentioned about false positive reduction.',
    tags: ['Unread', 'Awaiting your response', 'Interested tag', 'Nurture'],
    campaign: 'Shashank Srivastava - AppSec Leadership + IN',
    timestamp: '16/09/2026, 13:05:40',
    state: 'Awaiting your response'
  }
];

function renderTodayRespondents() {
  const container = document.getElementById('respondentsGrid');
  const countEl = document.getElementById('respondentsCountText');
  if (!container) return;

  const search = document.getElementById('respondentSearchInput')?.value?.toLowerCase() || '';
  const priorityFilter = document.getElementById('respondentPrioritySelect')?.value || 'all';
  const replyStateFilter = document.getElementById('respondentReplyStateSelect')?.value || 'all';

  const filtered = TODAY_RESPONDENTS_DATA.filter(r => {
    const matchesSearch = !search ||
      r.name.toLowerCase().includes(search) ||
      r.title.toLowerCase().includes(search) ||
      r.message.toLowerCase().includes(search) ||
      r.campaign.toLowerCase().includes(search);
    const matchesPriority = priorityFilter === 'all' || r.priority === priorityFilter;
    const matchesState = replyStateFilter === 'all' || r.tags.includes(replyStateFilter) || r.state === replyStateFilter;

    return matchesSearch && matchesPriority && matchesState;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} of ${TODAY_RESPONDENTS_DATA.length} people who responded today shown`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: span 2; padding: 40px; text-align: center; color: var(--text-tertiary);">
        <p>No respondents found matching your filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <div class="respondent-card" data-id="${r.id}">
      <div class="respondent-header">
        <div class="respondent-profile">
          <div class="respondent-avatar">${r.initials}</div>
          <div>
            <div class="respondent-name">${r.name}</div>
            <div class="respondent-title">${r.title}</div>
          </div>
        </div>
        <span class="priority-pill ${r.priority.toLowerCase()}">${r.priority}</span>
      </div>

      <div class="respondent-msg">"${r.message}"</div>
      <div class="respondent-tags">
        ${r.tags.map(tag => {
          let tagClass = '';
          if (tag.toLowerCase().includes('unread')) tagClass = 'unread';
          else if (tag.toLowerCase().includes('positive')) tagClass = 'positive';
          else if (tag.toLowerCase().includes('meeting')) tagClass = 'meeting';
          else if (tag.toLowerCase().includes('interested')) tagClass = 'interested';
          return `<span class="tag-pill ${tagClass}">${tag}</span>`;
        }).join('')}
      </div>

      <div class="respondent-meta">
        <span class="respondent-campaign-name" title="${r.campaign}">${r.campaign}</span>
        <span>${r.timestamp}</span>
      </div>

      <div class="respondent-actions">
        <span class="action-pill">${r.state}</span>
        <button class="action-pill linkedin" onclick="openLinkedInProfile('${r.name.replace(/'/g, "\\'")}', '${r.title.replace(/'/g, "\\'")}')">Open LinkedIn profile</button>
      </div>
    </div>
  `).join('');
}

window.openLinkedInProfile = function(name, title) {
  showToast(`Opening verified LinkedIn record for ${name} (${title})`);
};

// ===========================================
// AGENCY OS=9QI=1L€˜1%MQ9IL(¼¼€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô()™Õ¹Ñ¥½¸¥¹¥Ñ•¹å½¹ÑÉ½±Ì ¤ì(€€¼¼±½‰…°±¥•¹ĞM•±•Ñ½È(€½¹ÍĞ±¥•¹ÑM•±•Ñ½È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±½‰…±±¥•¹ÑM•±•Ñ½Èœ¤ì(€¥˜€¡±¥•¹ÑM•±•Ñ½È¤ì(€€€±¥•¹ÑM•±•Ñ½È¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°€¡”¤€ôøì(€€€€€½¹ÍĞÍ•±•Ñ•€ô”¹Ñ…É•Ğ¹Ù…±Õ”ì(€€€€€Í¡½İQ½…ÍĞ¡¥±Ñ•É¥¹œ™½È±¥•¹Ğè€‘íÍ•±•Ñ•€ôôô€…±°œ€ü€±°±¥•¹ÑÌœ€èÍ•±•Ñ•‘õ€¤ì(€€€€€€(€€€€€½¹ÍĞ…µÁ…¥¹±¥•¹Ñ¥±Ñ•È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …µÁ…¥¹±¥•¹Ñ¥±Ñ•Èœ¤ì(€€€€€¥˜€¡…µÁ…¥¹±¥•¹Ñ¥±Ñ•È¤ì(€€€€€€€…µÁ…¥¹±¥•¹Ñ¥±Ñ•È¹Ù…±Õ”€ôÍ•±•Ñ•ì(€€€€€ô(€€€€€É•¹‘•É…µÁ…¥¹ÍQ…‰±” ¤ì(€€€€€É•¹‘•É±•ÉÑÌ¡ÕÉÉ•¹Ñ±•ÉÑ¥±Ñ•È¤ì(€€€ô¤ì(€ô((€€¼¼áÁ½ÉĞMX	ÕÑÑ½¹Ì(€½¹ÍĞ‘½İ¹±½…‘ÍÙ	Ñ¸€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‘½İ¹±½…‘ÍÙ	Ñ¸œ¤ì(€½¹ÍĞÁ…•áÁ½ÉÑÍÙ	Ñ¸€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Á…•áÁ½ÉÑÍÙ	Ñ¸œ¤ì(€½¹ÍĞ…±•ÉÑÍ½İ¹±½…‘	Ñ¸€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …±•ÉÑÍ½İ¹±½…‘	Ñ¸œ¤ì((€‘½İ¹±½…‘ÍÙ	Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°•áÁ½ÉÑ…µÁ…¥¹ÍÍØ¤ì(€Á…•áÁ½ÉÑÍÙ	Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°•áÁ½ÉÑ…µÁ…¥¹ÍÍØ¤ì(€…±•ÉÑÍ½İ¹±½…‘	Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°•áÁ½ÉÑ…µÁ…¥¹ÍÍØ¤ì((€€¼¼I•™É•Í 	ÕÑÑ½¹Ìİ¥Ñ ±¥Ù”Íå¹Œ±½¬(€½¹ÍĞÉ•™É•Í¡	Ñ¹Ì€ôm‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•™É•Í¡	Ñ¸œ¤°‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …±•ÉÑÍI•™É•Í¡	Ñ¸œ¥tì(€É•™É•Í¡	Ñ¹Ì¹™½É… ¡‰Ñ¸€ôøì(€€€‰Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€€€½¹ÍĞ¹½Ü€ô¹•Ü…Ñ” ¤ì(€€€€€½¹ÍĞÑ¥µ•MÑÈ€ô€‘íMÑÉ¥¹œ¡¹½Ü¹•Ñ!½ÕÉÌ ¤¤¹Á…‘MÑ…ÉĞ È°œÀœ¥ôè‘íMÑÉ¥¹œ¡¹½Ü¹•Ñ5¥¹ÕÑ•Ì ¤¤¹Á…‘MÑ…ÉĞ È°œÀœ¥ôè‘íMÑÉ¥¹œ¡¹½Ü¹•ÑM•½¹‘Ì ¤¤¹Á…‘MÑ…ÉĞ È°œÀœ¥õ€ì(€€€€€½¹ÍĞÍå¹°€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Íå¹MÑ…ÑÕÍ	…‘”œ¤ì(€€€€€¥˜€¡Íå¹°¤Íå¹°¹Ñ•áÑ½¹Ñ•¹Ğ€ôMå¹•€‘íÑ¥µ•MÑÉõ€ì(€€€€€Í¡½İQ½…ÍĞ¡…Ñ„É•™É•Í¡•…Ğ€‘íÑ¥µ•MÑÉõ€¤ì(€€€€€É•¹‘•É±•ÉÑÌ¡ÕÉÉ•¹Ñ±•ÉÑ¥±Ñ•È¤ì(€€€€€É•¹‘•É…µÁ…¥¹ÍQ…‰±” ¤ì(€€€€€É•¹‘•ÉQ½‘…åI•ÍÁ½¹‘•¹ÑÌ ¤ì(€€€ô¤ì(€ô¤ì((€€¼¼±•ÉÑÌ¥±Ñ•ÈQ…‰Ì(€½¹ÍĞ…±•ÉÑQ…‰Ì€ô‘½Õµ•¹Ğ¹ÅÕ•ÉåM•±•Ñ½É±° œ¹…±•ÉĞµÑ…ˆœ¤ì(€…±•ÉÑQ…‰Ì¹™½É… ¡Ñ…ˆ€ôøì(€€€Ñ…ˆ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€€€…±•ÉÑQ…‰Ì¹™½É… ¡Ğ€ôøĞ¹±…ÍÍ1¥ÍĞ¹É•µ½Ù” …Ñ¥Ù”œ¤¤ì(€€€€€Ñ…ˆ¹±…ÍÍ1¥ÍĞ¹…‘ …Ñ¥Ù”œ¤ì(€€€€€É•¹‘•É±•ÉÑÌ¡Ñ…ˆ¹‘…Ñ…Í•Ğ¹™¥±Ñ•È¤ì(€€€ô¤ì(€ô¤ì((€€¼¼…µÁ…¥¹Ì¥±Ñ•È%¹ÁÕÑÌ(€½¹ÍĞ…µÁ…¥¹M•…É¡%¹ÁÕĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …µÁ…¥¹M•…É¡%¹ÁÕĞœ¤ì(€½¹ÍĞ…µÁ…¥¹±¥•¹Ñ¥±Ñ•È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …µÁ…¥¹±¥•¹Ñ¥±Ñ•Èœ¤ì(€½¹ÍĞ…µÁ…¥¹MÑ…ÑÕÍ¥±Ñ•È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …µÁ…¥¹MÑ…ÑÕÍ¥±Ñ•Èœ¤ì(€½¹ÍĞ…µÁ…¥¹A•É™¥±Ñ•È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% …µÁ…¥¹A•É™¥±Ñ•Èœ¤ì(€½¹ÍĞ±•…É…µÁ…¥¹¥±Ñ•ÉÍ	Ñ¸€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±•…É…µÁ…¥¹¥±Ñ•ÉÍ	Ñ¸œ¤ì((€m…µÁ…¥¹M•…É¡%¹ÁÕĞ°…µÁ…¥¹±¥•¹Ñ¥±Ñ•È°…µÁ…¥¹MÑ…ÑÕÍ¥±Ñ•È°…µÁ…¥¹A•É™¥±Ñ•Ét¹™½É… ¡•°€ôøì(€€€•°ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¥¹ÁÕĞœ°É•¹‘•É…µÁ…¥¹ÍQ…‰±”¤ì(€€€•°ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°É•¹‘•É…µÁ…¥¹ÍQ…‰±”¤ì(€ô¤ì((€±•…É…µÁ…¥¹¥±Ñ•ÉÍ	Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€¥˜€¡…µÁ…¥¹M•…É¡%¹ÁÕĞ¤…µÁ…¥¹M•…É¡%¹ÁÕĞ¹Ù…±Õ”€ô€œœì(€€€¥˜€¡…µÁ…¥¹±¥•¹Ñ¥±Ñ•È¤…µÁ…¥¹±¥•¹Ñ¥±Ñ•È¹Ù…±Õ”€ô€…±°œì(€€€¥˜€¡…µÁ…¥¹MÑ…ÑÕÍ¥±Ñ•È¤…µÁ…¥¹MÑ…ÑÕÍ¥±Ñ•È¹Ù…±Õ”€ô€…±°œì(€€€¥˜€¡…µÁ…¥¹A•É™¥±Ñ•È¤…µÁ…¥¹A•É™¥±Ñ•È¹Ù…±Õ”€ô€…±°œì(€€€É•¹‘•É…µÁ…¥¹ÍQ…‰±” ¤ì(€ô¤ì((€€¼¼I•ÍÁ½¹‘•¹Ğ¥±Ñ•È%¹ÁÕÑÌ(€½¹ÍĞÉ•ÍÁ½¹‘•¹ÑM•…É¡%¹ÁÕĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•ÍÁ½¹‘•¹ÑM•…É¡%¹ÁÕĞœ¤ì(€½¹ÍĞÉ•ÍÁ½¹‘•¹ÑAÉ¥½É¥ÑåM•±•Ğ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•ÍÁ½¹‘•¹ÑAÉ¥½É¥ÑåM•±•Ğœ¤ì(€½¹ÍĞÉ•ÍÁ½¹‘•¹ÑI•Á±åMÑ…Ñ•M•±•Ğ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•ÍÁ½¹‘•¹ÑI•Á±åMÑ…Ñ•M•±•Ğœ¤ì(€½¹ÍĞ±•…ÉI•ÍÁ½¹‘•¹Ñ¥±Ñ•ÉÍ	Ñ¸€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±•…ÉI•ÍÁ½¹‘•¹Ñ¥±Ñ•ÉÍ	Ñ¸œ¤ì((€mÉ•ÍÁ½¹‘•¹ÑM•…É¡%¹ÁÕĞ°É•ÍÁ½¹‘•¹ÑAÉ¥½É¥ÑåM•±•Ğ°É•ÍÁ½¹‘•¹ÑI•Á±åMÑ…Ñ•M•±•Ñt¹™½É… ¡•°€ôøì(€€€•°ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¥¹ÁÕĞœ°É•¹‘•ÉQ½‘…åI•ÍÁ½¹‘•¹ÑÌ¤ì(€€€•°ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°É•¹‘•ÉQ½‘…åI•ÍÁ½¹‘•¹ÑÌ¤ì(€ô¤ì((€±•…ÉI•ÍÁ½¹‘•¹Ñ¥±Ñ•ÉÍ	Ñ¸ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€¥˜€¡É•ÍÁ½¹‘•¹ÑM•…É¡%¹ÁÕĞ¤É•ÍÁ½¹‘•¹ÑM•…É¡%¹ÁÕĞ¹Ù…±Õ”€ô€œœì(€€€¥˜€¡É•ÍÁ½¹‘•¹ÑAÉ¥½É¥ÑåM•±•Ğ¤É•ÍÁ½¹‘•¹ÑAÉ¥½É¥ÑåM•±•Ğ¹Ù…±Õ”€ô€…±°œì(€€€¥˜€¡É•ÍÁ½¹‘•¹ÑI•Á±åMÑ…Ñ•M•±•Ğ¤É•ÍÁ½¹‘•¹ÑI•Á±åMÑ…Ñ•M•±•Ğ¹Ù…±Õ”€ô€…±°œì(€€€É•¹‘•ÉQ½‘…åI•ÍÁ½¹‘•¹ÑÌ ¤ì(€ô¤ì)ô((¼¼€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô(¼¼Y%I0A=MPMQU%<9%9(¼¼€ôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôôô()±•ĞÕÉÉ•¹ÑA½ÍÑ¥¹½Õ¹Ğ€ô¹Õ±°ì)±•ĞÕÉÉ•¹ÑA½ÍÑ5•‘¥…UÉ°€ô¹Õ±°ì)±•ĞÍ¡•‘Õ±•‘A½ÍÑÍEÕ•Õ”€ômtì)±•ĞÕÉÉ•¹ÑEÕ•Õ•¥±Ñ•È€ô€…±°œì()…Íå¹Œ™Õ¹Ñ¥½¸¥¹¥ÑY¥É…±A½ÍÑMÑÕ‘¥¼ ¤ì(€½¹ÍĞ…½Õ¹ÑM•±•Ğ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ½µÁ½Í¥½½Õ¹ÑM•±•Ğœ¤ì(€½¹ÍĞÁÉ•Ù¥•İÙ…Ñ…È€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İÙ…Ñ…Èœ¤ì(€½¹ÍĞÁÉ•Ù¥•İ9…µ”€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İ9…µ”œ¤ì(€½¹ÍĞÁÉ•Ù¥•İ!•…‘±¥¹”€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İ!•…‘±¥¹”œ¤ì(€½¹ÍĞÁÉ•Ù¥•İQ•áĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İQ•áĞœ¤ì(€½¹ÍĞÁÉ•Ù¥•İ5•‘¥„€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İ5•‘¥„œ¤ì(€½¹ÍĞÁÉ•Ù¥•İ%µ…”€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ±¥AÉ•Ù¥•İ%µ…”œ¤ì(€½¹ÍĞ½µÁ½Í•ÉQ•áĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ½µÁ½Í•ÉA½ÍÑQ•áĞœ¤ì(€½¹ÍĞÁ½ÍÑ¡…É½Õ¹Ğ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Á½ÍÑ¡…É½Õ¹Ğœ¤ì(€½¹ÍĞÉ•™¹…±åÍ¥ÍQ•áĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•™¹…±åÍ¥ÍQ•áĞœ¤ì((€€¼¼€Ä¸•Ñ €˜A½ÁÕ±…Ñ”½µÁ½Í¥¼½Õ¹ÑÌ(€ÑÉäì(€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½½µÁ½Í¥¼½…½Õ¹ÑÌœ¤ì(€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€¥˜€¡‘…Ñ„¹ÍÕ•ÍÌ€˜˜ÉÉ…ä¹¥ÍÉÉ…ä¡‘…Ñ„¹…½Õ¹ÑÌ¤€˜˜‘…Ñ„¹…½Õ¹ÑÌ¹±•¹Ñ €ø€À¤ì(€€€€€¥˜€¡…½Õ¹ÑM•±•Ğ¤ì(€€€€€€€…½Õ¹ÑM•±•Ğ¹¥¹¹•É!Q50€ô‘…Ñ„¹…½Õ¹ÑÌ¹µ…À¡…Œ€ôø€(€€€€€€€€€€ñ½ÁÑ¥½¸Ù…±Õ”ôˆ‘í…Œ¹¥‘ôˆø‘í…Œ¹¹…µ•ô€ ‘í…Œ¹…±¥…Ìñğ€Ñ¥Ù”ô¤ğ½½ÁÑ¥½¸ù€(€€€€€€€€¤¹©½¥¸ œœ¤ì(€€€€€ô(€€€€€ÕÉÉ•¹ÑA½ÍÑ¥¹½Õ¹Ğ€ô‘…Ñ„¹…½Õ¹ÑÍlÁtì(€€€€€ÕÁ‘…Ñ•ÕÑ¡½ÉAÉ•Ù¥•Ü¡ÕÉÉ•¹ÑA½ÍÑ¥¹½Õ¹Ğ¤ì(€€€ô(€ô…Ñ €¡•ÉÈ¤ì(€€€½¹Í½±”¹İ…É¸ mY¥É…±MÑÕ‘¥½t½Õ±¹½Ğ™•Ñ ±¥Ù”…½Õ¹ÑÌèœ°•ÉÈ¤ì(€ô((€™Õ¹Ñ¥½¸ÕÁ‘…Ñ•ÕÑ¡½ÉAÉ•Ù¥•Ü¡…Œ¤ì(€€€¥˜€ ……Œ¤É•ÑÕÉ¸ì(€€€¥˜€¡ÁÉ•Ù¥•İ9…µ”¤ÁÉ•Ù¥•İ9…µ”¹Ñ•áÑ½¹Ñ•¹Ğ€ô…Œ¹¹…µ”ì(€€€¥˜€¡ÁÉ•Ù¥•İ!•…‘±¥¹”¤ÁÉ•Ù¥•İ!•…‘±¥¹”¹Ñ•áÑ½¹Ñ•¹Ğ€ô…Œ¹¡•…‘±¥¹”ñğ€½¹¹•Ñ•Ù¥„½µÁ½Í¥¼œì(€€€¥˜€¡ÁÉ•Ù¥•İÙ…Ñ…È€˜˜…Œ¹…Ù…Ñ…È¤ÁÉ•Ù¥•İÙ…Ñ…È¹ÍÉŒ€ô…Œ¹…Ù…Ñ…Èì(€ô((€…½Õ¹ÑM•±•Ğü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°…Íå¹Œ€¡”¤€ôøì(€€€½¹ÍĞ…%€ô”¹Ñ…É•Ğ¹Ù…±Õ”ì(€€€ÑÉäì(€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½½µÁ½Í¥¼½…½Õ¹ÑÌœ¤ì(€€€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€€€½¹ÍĞµ…Ñ €ô‘…Ñ„¹…½Õ¹ÑÌü¹™¥¹¡„€ôø„¹¥€ôôô…%¤ì(€€€€€¥˜€¡µ…Ñ ¤ì(€€€€€€€ÕÉÉ•¹ÑA½ÍÑ¥¹½Õ¹Ğ€ôµ…Ñ ì(€€€€€€€ÕÁ‘…Ñ•ÕÑ¡½ÉAÉ•Ù¥•Ü¡µ…Ñ ¤ì(€€€€€€€Í¡½İQ½…ÍĞ¡Mİ¥Ñ¡•…½Õ¹ĞÑ¼€‘íµ…Ñ ¹¹…µ•õ€¤ì(€€€€€ô(€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€½¹Í½±”¹•ÉÉ½È¡•ÉÈ¤ì(€€€ô(€ô¤ì((€€¼¼€È¸%¹¥Ñ¥…°M…µÁ±”A½ÍĞ(€½¹ÍĞ¥¹¥Ñ¥…±Q•áĞ€ô5½ÍĞÉM……L™½Õ¹‘•ÉÌÑ¡¥¹¬½ÕÑ‰½Õ¹¥Ì„¹Õµ‰•ÉÌ…µ”¹q¹q¹%ĞÌ¹½Ğ¹q¹q¹!•É”¥Ìİ¡…Ğ¡…ÁÁ•¹•İ¡•¸İ”ÍÑ½ÁÁ•Í•¹‘¥¹œ€ÔÀÀ‰±…ÍĞ•µ…¥±Ì½‘…ä…¹Íİ¥Ñ¡•Ñ¼Íå¹¡É½¹¥é•1¥¹­•‘%¸Ñ½Õ¡•Ìéq¹q»ŠH½¹¹•Ñ¥½¸…•ÁÑ…¹”©ÕµÁ•Ñ¼€ÌĞ¸È•q»ŠHI•Á±äÉ…Ñ”¥¹É•…Í•Ñ¼€Ø¸à•q»ŠH€ÄÈ•¹Ñ•ÉÁÉ¥Í”‘•µ¼É•ÅÕ•ÍÑÌ•¹•É…Ñ•¥¸€ÄĞ‘…åÍq¹q¹AÉ•¥Í¥½¸…¹É•±•Ù…¹”…±İ…åÌ‰•…Ğ‰±¥¹…ÕÑ½µ…Ñ¥½¸¹q¹q¹É”å½ÔÍÑ¥±°É•±å¥¹œ½¸Í¥¹±”µ¡…¹¹•°½±•µ…¥°ı€ì(€¥˜€¡½µÁ½Í•ÉQ•áĞ€˜˜€…½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”¤ì(€€€½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”€ô¥¹¥Ñ¥…±Q•áĞì(€ô(€¥˜€¡ÁÉ•Ù¥•İQ•áĞ¤ì(€€€ÁÉ•Ù¥•İQ•áĞ¹Ñ•áÑ½¹Ñ•¹Ğ€ô½µÁ½Í•ÉQ•áĞü¹Ù…±Õ”ñğ¥¹¥Ñ¥…±Q•áĞì(€ô(€ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì((€€¼¼¡…É…Ñ•È½Õ¹Ñ•È€˜1¥Ù”ÁÉ•Ù¥•Ü(€™Õ¹Ñ¥½¸ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì(€€€½¹ÍĞ±•¸€ô½µÁ½Í•ÉQ•áĞ€ü½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”¹±•¹Ñ €è€Àì(€€€¥˜€¡Á½ÍÑ¡…É½Õ¹Ğ¤Á½ÍÑ¡…É½Õ¹Ğ¹Ñ•áÑ½¹Ñ•¹Ğ€ô€‘í±•¸¹Ñ½1½…±•MÑÉ¥¹œ ¥ô€¼€Ì°ÀÀÁ€ì(€€€¥˜€¡ÁÉ•Ù¥•İQ•áĞ€˜˜½µÁ½Í•ÉQ•áĞ¤ì(€€€€€ÁÉ•Ù¥•İQ•áĞ¹Ñ•áÑ½¹Ñ•¹Ğ€ô½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”ì(€€€ô(€ô(€½µÁ½Í•ÉQ•áĞü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¥¹ÁÕĞœ°ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È¤ì((€€¼¼€Ì¸EÕ¥¬½µÁ½Í•È%¹Í•ÉĞ	ÕÑÑ½¹Ì(€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹‘‘!½½­1¥¹”œ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€¥˜€ …½µÁ½Í•ÉQ•áĞ¤É•ÑÕÉ¸ì(€€€½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”€ôQ¡”‰¥•ÍĞµ¥ÍÑ…­”$Í•”É•Ù•¹Õ”±•…‘•ÉÌµ…­¥¹œ¥¸€ÈÀÈØéq¹q¹€€¬½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”ì(€€€ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì(€€€Í¡½İQ½…ÍĞ ‘‘•¡½½¬±¥¹”œ¤ì(€ô¤ì((€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹‘‘ÉÉ½İ	Õ±±•Ğœ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€¥˜€ …½µÁ½Í•ÉQ•áĞ¤É•ÑÕÉ¸ì(€€€½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”€¬ôq»ŠH€ì(€€€½µÁ½Í•ÉQ•áĞ¹™½ÕÌ ¤ì(€€€ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì(€ô¤ì((€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹‘‘¹‘¥¹EÕ•ÍÑ¥½¸œ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€¥˜€ …½µÁ½Í•ÉQ•áĞ¤É•ÑÕÉ¸ì(€€€½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”€¬ôq¹q¹]¡…Ğ¡…Ì‰••¸å½ÕÈÑ•…´Ì‰¥•ÍĞ¡…±±•¹”İ¥Ñ Ñ¡¥ÌÉ••¹Ñ±äüÉ½Àå½ÕÈÑ¡½Õ¡ÑÌ‰•±½Ü¹€ì(€€€ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì(€€€Í¡½İQ½…ÍĞ ‘‘•…±°Ñ¼…Ñ¥½¸œ¤ì(€ô¤ì((€€¼¼€Ğ¸•¹•É…Ñ”Y¥É…°A½ÍĞ(€½¹ÍĞ‰Ñ¹•¹•É…Ñ•A½ÍĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹•¹•É…Ñ•A½ÍĞœ¤ì(€‰Ñ¹•¹•É…Ñ•A½ÍĞü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°…Íå¹Œ€ ¤€ôøì(€€€½¹ÍĞÑ½Á¥Œ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Q½Á¥%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€É=ÕÑ‰½Õ¹É½İÑ œì(€€€½¹ÍĞÉ•™•É•¹•Q•áĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•™A½ÍÑ%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€œœì(€€€½¹ÍĞ™É…µ•İ½É¬€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±É…µ•İ½É­M•±•Ğœ¤ü¹Ù…±Õ”ñğ€½¹ÑÉ…É¥…¸œì(€€€½¹ÍĞ…Õ‘¥•¹”€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Õ‘¥•¹•%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€½Õ¹‘•ÉÌ€˜M…±•Ì1•…‘•ÉÌœì((€€€½¹ÍĞ½É¥	Ñ¹!Ñµ°€ô‰Ñ¹•¹•É…Ñ•A½ÍĞ¹¥¹¹•É!Q50ì(€€€‰Ñ¹•¹•É…Ñ•A½ÍĞ¹¥¹¹•É!Q50€ô€ñÍÁ…¸±…ÍÌô‰ÍÑ…ÑÕÌµÁÕ±Í”µ‘½ĞÁÕ±Í”ˆøğ½ÍÁ…¸ø•¹•É…Ñ¥¹œ¸¸¹€ì(€€€‰Ñ¹•¹•É…Ñ•A½ÍĞ¹‘¥Í…‰±•€ôÑÉÕ”ì((€€€ÑÉäì(€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½Í½¥…°½•¹•É…Ñ”µÁ½ÍĞœ°ì(€€€€€€€µ•Ñ¡½è€A=MPœ°(€€€€€€€¡•…‘•ÉÌèì€½¹Ñ•¹ĞµQåÁ”œè€…ÁÁ±¥…Ñ¥½¸½©Í½¸œô°(€€€€€€€‰½‘äè)M=8¹ÍÑÉ¥¹¥™ä¡ìÑ½Á¥Œ°É•™•É•¹•Q•áĞ°™É…µ•İ½É¬°…Õ‘¥•¹”ô¤(€€€€€ô¤ì(€€€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€€€¥˜€¡‘…Ñ„¹ÍÕ•ÍÌ€˜˜‘…Ñ„¹Á½ÍÑQ•áĞ¤ì(€€€€€€€¥˜€¡½µÁ½Í•ÉQ•áĞ¤½µÁ½Í•ÉQ•áĞ¹Ù…±Õ”€ô‘…Ñ„¹Á½ÍÑQ•áĞì(€€€€€€€ÕÁ‘…Ñ•¡…É½Õ¹Ñ•È ¤ì(€€€€€€€¥˜€¡‘…Ñ„¹…¹…±åÍ¥Ì€˜˜É•™¹…±åÍ¥ÍQ•áĞ¤ì(€€€€€€€€€É•™¹…±åÍ¥ÍQ•áĞ¹Ñ•áÑ½¹Ñ•¹Ğ€ô‘…Ñ„¹…¹…±åÍ¥Ì¹¡…ÍI•™•É•¹”€(€€€€€€€€€€€€üµÕ±…Ñ•€‘í‘…Ñ„¹…¹…±åÍ¥Ì¹¡½½­QåÁ•ô€ ‘í‘…Ñ„¹…¹…±åÍ¥Ì¹…‘•¹•ô¥€(€€€€€€€€€€€€è€•¹•É…Ñ•ÕÍ¥¹œ™É…µ•İ½É¬ÍÑÉÕÑÕÉ”œì(€€€€€€€ô(€€€€€€€Í¡½İQ½…ÍĞ Y¥É…°Á½ÍĞ•¹•É…Ñ•„œ¤ì(€€€€€ô(€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€Í¡½İQ½…ÍĞ ÉÉ½È•¹•É…Ñ¥¹œÁ½ÍĞè€œ€¬•ÉÈ¹µ•ÍÍ…”¤ì(€€€ô™¥¹…±±äì(€€€€€‰Ñ¹•¹•É…Ñ•A½ÍĞ¹¥¹¹•É!Q50€ô½É¥	Ñ¹!Ñµ°ì(€€€€€‰Ñ¹•¹•É…Ñ•A½ÍĞ¹‘¥Í…‰±•€ô™…±Í”ì(€€€ô(€ô¤ì((€€¼¼€Ô¸MÕ•ÍĞAÉ½µÁÑÌ€˜¹±•Ì(€½¹ÍĞ‰Ñ¹MÕ•ÍÑAÉ½µÁÑÌ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹MÕ•ÍÑAÉ½µÁÑÌœ¤ì(€½¹ÍĞÍÕ•ÍÑ¥½¹Í1¥ÍĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ÁÉ½µÁÑMÕ•ÍÑ¥½¹Í1¥ÍĞœ¤ì(€€(€…Íå¹Œ™Õ¹Ñ¥½¸±½…‘AÉ½µÁÑMÕ•ÍÑ¥½¹Ì ¤ì(€€€½¹ÍĞÑ½Á¥Œ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Q½Á¥%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€=ÕÑ‰½Õ¹M…±•Ìœì(€€€½¹ÍĞÉ•™•É•¹•Q•áĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% É•™A½ÍÑ%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€œœì(€€€ÑÉäì(€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½Í½¥…°½ÍÕ•ÍĞµÁÉ½µÁÑÌœ°ì(€€€€€€€µ•Ñ¡½è€A=MPœ°(€€€€€€€¡•…‘•ÉÌèì€½¹Ñ•¹ĞµQåÁ”œè€…ÁÁ±¥…Ñ¥½¸½©Í½¸œô°(€€€€€€€‰½‘äè)M=8¹ÍÑÉ¥¹¥™ä¡ìÑ½Á¥Œ°É•™•É•¹•Q•áĞô¤(€€€€€ô¤ì(€€€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€€€¥˜€¡‘…Ñ„¹ÍÕ•ÍÌ€˜˜ÉÉ…ä¹¥ÍÉÉ…ä¡‘…Ñ„¹ÁÉ½µÁÑÌ¤¤ì(€€€€€€€É•¹‘•ÉAÉ½µÁÑMÕ•ÍÑ¥½¹Ì¡‘…Ñ„¹ÁÉ½µÁÑÌ¤ì(€€€€€ô(€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€½¹Í½±”¹•ÉÉ½È¡•ÉÈ¤ì(€€€ô(€ô((€™Õ¹Ñ¥½¸É•¹‘•ÉAÉ½µÁÑMÕ•ÍÑ¥½¹Ì¡ÁÉ½µÁÑÌ¤ì(€€€¥˜€ …ÍÕ•ÍÑ¥½¹Í1¥ÍĞ¤É•ÑÕÉ¸ì(€€€ÍÕ•ÍÑ¥½¹Í1¥ÍĞ¹¥¹¹•É!Q50€ôÁÉ½µÁÑÌ¹µ…À¡À€ôø€(€€€€€€ñ‘¥Ø±…ÍÌô‰ÁÉ½µÁĞµ¡¥Àˆ‘…Ñ„µÁÉ½µÁĞôˆ‘íÀ¹ÁÉ½µÁĞ¹É•Á±…” ¼ˆ½œ°€œ™ÅÕ½Ğìœ¥ôˆø(€€€€€€€€ñÍÁ…¸±…ÍÌô‰ÁÉ½µÁĞµ¡¥ÀµÑ¥Ñ±”ˆø‘íÀ¹Ñ¥Ñ±•ôğ½ÍÁ…¸ø(€€€€€€€€ñÍÁ…¸±…ÍÌô‰ÁÉ½µÁĞµ¡¥Àµ‘•ÍŒˆø‘íÀ¹ÁÉ½µÁÑôğ½ÍÁ…¸ø(€€€€€€ğ½‘¥Øø(€€€€¤¹©½¥¸ œœ¤ì((€€€ÍÕ•ÍÑ¥½¹Í1¥ÍĞ¹ÅÕ•ÉåM•±•Ñ½É±° œ¹ÁÉ½µÁĞµ¡¥Àœ¤¹™½É… ¡¡¥À€ôøì(€€€€€¡¥À¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€€€€€½¹ÍĞÁÉ½µÁÑQ•áĞ€ô¡¥À¹‘…Ñ…Í•Ğ¹ÁÉ½µÁĞì(€€€€€€€½¹ÍĞÑ½Á¥%¹ÁÕĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Q½Á¥%¹ÁÕĞœ¤ì(€€€€€€€¥˜€¡Ñ½Á¥%¹ÁÕĞ¤Ñ½Á¥%¹ÁÕĞ¹Ù…±Õ”€ôÁÉ½µÁÑQ•áĞì(€€€€€€€Í¡½İQ½…ÍĞ ÁÁ±¥•ÁÉ½µÁĞ…¹±”„•¹•É…Ñ¥¹œ¸¸¸œ¤ì(€€€€€€€‰Ñ¹•¹•É…Ñ•A½ÍĞü¹±¥¬ ¤ì(€€€€€ô¤ì(€€€ô¤ì(€ô((€‰Ñ¹MÕ•ÍÑAÉ½µÁÑÌü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€±½…‘AÉ½µÁÑMÕ•ÍÑ¥½¹Ì ¤ì(€€€Í¡½İQ½…ÍĞ MÕ•ÍÑ•…¹±•ÌÉ•™É•Í¡•œ¤ì(€ô¤ì((€€¼¼%¹¥Ñ¥…°ÁÉ½µÁĞÍÕ•ÍÑ¥½¹Ì(€±½…‘AÉ½µÁÑMÕ•ÍÑ¥½¹Ì ¤ì((€€¼¼€Ø¸%µ…”MÕ¥Ñ”(€€¼¼Q…ˆÍİ¥Ñ¡¥¹œ(€½¹ÍĞ¥µQ…‰Ì€ô‘½Õµ•¹Ğ¹ÅÕ•ÉåM•±•Ñ½É±° œ¹¥µœµÑ…ˆœ¤ì(€¥µQ…‰Ì¹™½É… ¡Ñ…ˆ€ôøì(€€€Ñ…ˆ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€€€¥µQ…‰Ì¹™½É… ¡Ğ€ôøĞ¹±…ÍÍ1¥ÍĞ¹É•µ½Ù” …Ñ¥Ù”œ¤¤ì(€€€€€Ñ…ˆ¹±…ÍÍ1¥ÍĞ¹…‘ …Ñ¥Ù”œ¤ì(€€€€€½¹ÍĞÑ…É•Ğ€ôÑ…ˆ¹‘…Ñ…Í•Ğ¹Ñ…ˆì(€€€€€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥•İ¥•¹•É…Ñ”œ¤ü¹±…ÍÍ1¥ÍĞ¹Ñ½±” …Ñ¥Ù”œ°Ñ…É•Ğ€ôôô€…¤µ•¹•É…Ñ”œ¤ì(€€€€€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥•İ5…¹Õ…±UÁ±½…œ¤ü¹±…ÍÍ1¥ÍĞ¹Ñ½±” …Ñ¥Ù”œ°Ñ…É•Ğ€ôôô€µ…¹Õ…°µÕÁ±½…œ¤ì(€€€ô¤ì(€ô¤ì((€€¼¼ÕÑ¼Ù¥ÍÕ…°ÁÉ½µÁĞ™É½´½¹Ñ•¹Ğ(€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹ÕÑ½AÉ½µÁĞœ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°…Íå¹Œ€ ¤€ôøì(€€€½¹ÍĞÁ½ÍÑQ•áĞ€ô½µÁ½Í•ÉQ•áĞü¹Ù…±Õ”ñğ€œœì(€€€½¹ÍĞÑ½Á¥Œ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Q½Á¥%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€ÉÉ½İÑ œì(€€€ÑÉäì(€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½Í½¥…°½•¹•É…Ñ”µ¥µ…”œ°ì(€€€€€€€µ•Ñ¡½è€A=MPœ°(€€€€€€€¡•…‘•ÉÌèì€½¹Ñ•¹ĞµQåÁ”œè€…ÁÁ±¥…Ñ¥½¸½©Í½¸œô°(€€€€€€€‰½‘äè)M=8¹ÍÑÉ¥¹¥™ä¡ìÑ½Á¥Œ°Á½ÍÑQ•áĞô¤(€€€€€ô¤ì(€€€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€€€¥˜€¡‘…Ñ„¹ÍÕ•ÍÌ€˜˜‘…Ñ„¹ÁÉ½µÁĞ¤ì(€€€€€€€½¹ÍĞÁÉ½µÁÑ%¹ÁÕĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ¥µ…•AÉ½µÁÑ%¹ÁÕĞœ¤ì(€€€€€€€¥˜€¡ÁÉ½µÁÑ%¹ÁÕĞ¤ÁÉ½µÁÑ%¹ÁÕĞ¹Ù…±Õ”€ô‘…Ñ„¹ÁÉ½µÁĞì(€€€€€€€Í¡½İQ½…ÍĞ Y¥ÍÕ…°ÁÉ½µÁĞÍå¹Ñ¡•Í¥é•™É½´½¹Ñ•¹Ğœ¤ì(€€€€€ô(€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€½¹Í½±”¹•ÉÉ½È¡•ÉÈ¤ì(€€€ô(€ô¤ì((€€¼¼•¹•É…Ñ”Y¥ÍÕ…°(€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹•¹•É…Ñ•%µ…”œ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€½¹ÍĞÁÉ½µÁĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ¥µ…•AÉ½µÁÑ%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€5¥¹¥µ…±¥ÍĞµ½‘•É¸€Í•‘¥Ñ½É¥…°É…Á¡¥Œœì(€€€½¹ÍĞ•¹½‘•€ô•¹½‘•UI%½µÁ½¹•¹Ğ¡ÁÉ½µÁĞ¤ì(€€€½¹ÍĞ•¹•É…Ñ•‘UÉ°€ô¡ÑÑÁÌè¼½¥µ…”¹Á½±±¥¹…Ñ¥½¹Ì¹…¤½ÁÉ½µÁĞ¼‘í•¹½‘•‘ôıİ¥‘Ñ ôÄÀàÀ™¡•¥¡ĞôÄÀàÀ™¹½±½¼õÑÉÕ•€ì(€€€€(€€€ÕÉÉ•¹ÑA½ÍÑ5•‘¥…UÉ°€ô•¹•É…Ñ•‘UÉ°ì(€€€¥˜€¡ÁÉ•Ù¥•İ%µ…”¤ÁÉ•Ù¥•İ%µ…”¹ÍÉŒ€ô•¹•É…Ñ•‘UÉ°ì(€€€¥˜€¡ÁÉ•Ù¥•İ5•‘¥„¤ÁÉ•Ù¥•İ5•‘¥„¹ÍÑå±”¹‘¥ÍÁ±…ä€ô€™±•àœì(€€€Í¡½İQ½…ÍĞ $Ù¥ÍÕ…°•¹•É…Ñ•„œ¤ì(€ô¤ì((€€¼¼I•µ½Ù”5•‘¥„(€‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹I•µ½Ù•5•‘¥„œ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì(€€€ÕÉÉ•¹ÑA½ÍÑ5•‘¥…UÉ°€ô¹Õ±°ì(€€€¥˜€¡ÁÉ•Ù¥•İ5•‘¥„¤ÁÉ•Ù¥•İ5•‘¥„¹ÍÑå±”¹‘¥ÍÁ±…ä€ô€¹½¹”œì(€€€¥˜€¡ÁÉ•Ù¥•İ%µ…”¤ÁÉ•Ù¥•İ%µ…”¹ÍÉŒ€ô€‰‘…Ñ„é¥µ…”½ÍÙœ­áµ°°”ÍÍÙœáµ±¹Ìô¡ÑÑÀè¼½İİÜ¹ÜÌ¹½Éœ¼ÈÀÀÀ½ÍÙœœİ¥‘Ñ ôœÄÀÀœ¡•¥¡ĞôœÄÀÀœ”Í”Í½ÍÙœ”Íˆì(€€€Í¡½İQ½…ÍĞ %µ…”…ÑÑ…¡µ•¹ĞÉ•µ½Ù•œ¤ì(€ô¤ì((€€¼¼UÁ±½…%µ…”(€½¹ÍĞ‘É½Áé½¹”€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ÕÁ±½…‘É½Áé½¹”œ¤ì(€½¹ÍĞ™¥±•%¹ÁÕĞ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Á½ÍÑ%µ…•¥±•%¹ÁÕĞœ¤ì((€‘É½Áé½¹”ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôø™¥±•%¹ÁÕĞü¹±¥¬ ¤¤ì((€‘É½Áé½¹”ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‘É…½Ù•Èœ°€¡”¤€ôøì(€€€”¹ÁÉ•Ù•¹Ñ•™…Õ±Ğ ¤ì(€€€‘É½Áé½¹”¹ÍÑå±”¹‰½É‘•É½±½È€ô€Ù…È ´µ…•¹ĞµÉ••¸¤œì(€ô¤ì(€‘É½Áé½¹”ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‘É…±•…Ù”œ°€ ¤€ôøì(€€€‘É½Áé½¹”¹ÍÑå±”¹‰½É‘•É½±½È€ô€œœì(€ô¤ì(€‘É½Áé½¹”ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‘É½Àœ°€¡”¤€ôøì(€€€”¹ÁÉ•Ù•¹Ñ•™…Õ±Ğ ¤ì(€€€‘É½Áé½¹”¹ÍÑå±”¹‰½É‘•É½±½È€ô€œœì(€€€¥˜€¡”¹‘…Ñ…QÉ…¹Í™•È¹™¥±•Ì€˜˜”¹‘…Ñ…QÉ…¹Í™•È¹™¥±•ÍlÁt¤ì(€€€€€¡…¹‘±•¥±•UÁ±½…¡”¹‘…Ñ…QÉ…¹Í™•È¹™¥±•ÍlÁt¤ì(€€€ô(€ô¤ì((€™¥±•%¹ÁÕĞü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°€¡”¤€ôøì(€€€¥˜€¡”¹Ñ…É•Ğ¹™¥±•Ì€˜˜”¹Ñ…É•Ğ¹™¥±•ÍlÁt¤ì(€€€€€¡…¹‘±•¥±•UÁ±½…¡”¹Ñ…É•Ğ¹™¥±•ÍlÁt¤ì(€€€ô(€ô¤ì((€™Õ¹Ñ¥½¸¡…¹‘±•¥±•UÁ±½…¡™¥±”¤ì(€€€¥˜€ …™¥±”¹ÑåÁ”¹ÍÑ…ÉÑÍ]¥Ñ  ¥µ…”¼œ¤¤ì(€€€€€Í¡½İQ½…ÍĞ A±•…Í”ÕÁ±½…„Ù…±¥¥µ…”™¥±”œ¤ì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€½¹ÍĞÉ•…‘•È€ô¹•Ü¥±•I•…‘•È ¤ì(€€€É•…‘•È¹½¹±½…€ô…Íå¹Œ€¡•Ù•¹Ğ¤€ôøì(€€€€€½¹ÍĞ‘…Ñ…UÉ°€ô•Ù•¹Ğ¹Ñ…É•Ğ¹É•ÍÕ±Ğì(€€€€€ÑÉäì(€€€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½Í½¥…°½ÕÁ±½…µ¥µ…”œ°ì(€€€€€€€€€µ•Ñ¡½è€A=MPœ°(€€€€€€€€€¡•…‘•ÉÌèì€½¹Ñ•¹ĞµQåÁ”œè€…ÁÁ±¥…Ñ¥½¸½©Í½¸œô°(€€€€€€€€€‰½‘äè)M=8¹ÍÑÉ¥¹¥™ä¡ì‘…Ñ…UÉ°°™¥±•¹…µ”è™¥±”¹¹…µ”ô¤(€€€€€€€ô¤ì(€€€€€½¹ÍĞ‘…Ñ„€ô…İ…¥ĞÉ•Ì¹©Í½¸ ¤ì(€€€€€¥˜€¡‘…Ñ„¹ÍÕ•ÍÌ€˜˜‘…Ñ„¹¥µ…•UÉ°¤ì(€€€€€€€€€ÕÉÉ•¹ÑA½ÍÑ5•‘¥…UÉ°€ô‘…Ñ„¹¥µ…•UÉ°ì(€€€€€€€€€¥˜€¡ÁÉ•Ù¥•İ%µ…”¤ÁÉ•Ù¥•İ%µ…”¹ÍÉŒ€ô‘…Ñ„¹¥µ…•UÉ°ì(€€€€€€€€€¥˜€¡ÁÉ•Ù¥•İ5•‘¥„¤ÁÉ•Ù¥•İ5•‘¥„¹ÍÑå±”¹‘¥ÍÁ±…ä€ô€™±•àœì(€€€€€€€€€Í¡½İQ½…ÍĞ %µ…”ÕÁ±½…‘•ÍÕ•ÍÍ™Õ±±ä„œ¤ì(€€€€€€€ô(€€€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€€€Í¡½İQ½…ÍĞ UÁ±½…™…¥±•è€œ€¬•ÉÈ¹µ•ÍÍ…”¤ì(€€€€€ô(€€€ôì(€€€É•…‘•È¹É•…‘Í…Ñ…UI0¡™¥±”¤ì(€ô((€€¼¼€Ü¸A½ÍĞ9½ÜÙ¥„½µÁ½Í¥¼(€½¹ÍĞ‰Ñ¹A½ÍÑ9½Ü€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% ‰Ñ¹A½ÍÑ9½Üœ¤ì(€‰Ñ¹A½ÍÑ9½Üü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°…Íå¹Œ€ ¤€ôøì(€€€½¹ÍĞ½µµ•¹Ñ…Éä€ô½µÁ½Í•ÉQ•áĞü¹Ù…±Õ”ü¹ÑÉ¥´ ¤ì(€€€¥˜€ …½µµ•¹Ñ…Éä¤ì(€€€€€Í¡½İQ½…ÍĞ A±•…Í”İÉ¥Ñ”½È•¹•É…Ñ”Á½ÍĞ½µµ•¹Ñ…Éä‰•™½É”ÁÕ‰±¥Í¡¥¹œœ¤ì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€½¹ÍĞ…½Õ¹Ñ%€ôÕÉÉ•¹ÑA½ÍÑ¥¹½Õ¹Ğü¹¥ñğ€±¥¹­•‘¥¹}ÍÕÉ„µÍ…‰„œì(€€€½¹ÍĞÑ½Á¥Œ€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±Q½Á¥%¹ÁÕĞœ¤ü¹Ù…±Õ”ñğ€¥É•ĞA½ÍĞœì(€€€½¹ÍĞ™É…µ•İ½É¬€ô‘½Õµ•¹Ğ¹•Ñ±•µ•¹Ñ	å% Ù¥É…±É…µ•İ½É­M•±•Ğœ¤ü¹Ù…±Õ”ñğ€ÕÍÑ½´œì(€€€½¹ÍĞ½É¥!Ñµ°€ô‰Ñ¹A½ÍÑ9½Ü¹¥¹¹•É!Q50ì(€€€‰Ñ¹A½ÍÑ9½Ü¹¥¹¹•É!Q50€ô€ñÍÁ…¸±…ÍÌô‰ÍÑ…ÑÕÌµÁÕ±Í”µ‘½ĞÁÕ±Í”ˆøğ½ÍÁ…¸øAÕ‰±¥Í¡¥¹œ¸¸¹€ì(€€€‰Ñ¹A½ÍÑ9½Ü¹‘¥Í…‰±•€ôÑÉÕ”ì((€€€ÑÉäì(€€€€€½¹ÍĞÉ•Ì€ô…İ…¥Ğ™•Ñ  œ½…Á¤½Í½¥…°½ÁÕ‰±¥Í œ°ì(€€€€€€€µ•Ñ¡½è€A=MPœ°(€€€€€€€¡•…‘•ÉÌèì€½¹Ñ•¹ĞµQåÁ”œè€…ÁÁ±¥…Ñ¥½¸½©Í½¸œô°(€€€€€€€‰½‘äè)M=8¹ÍÑÉ¥¹¥™ä¡ì(€€€€€€€€€…½Õ¹Ñ%°(€€€€€€€€€½µµ•¹Ñ…Éä°(€€€€€€€€€¥µ…•UÉ°èÕÉÉ•¹ÑA½ÍÑ5•‘¥…UÉ°°(€€€€€€€€€ÛÜXËˆœ˜[Y]ÛÜšÂˆJBˆJNÂˆÛÛœİ]HH]ØZ]™\ËšœÛÛŠ
NÂˆYˆ
]KœİXØÙ\ÜÊHÂˆÚİÕØ\İ
ÜİX›\ÚYÈ[šÙY[ˆ›Üˆ	Ù]Kœ™\İ[˜]]ÜŸHX
NÂˆ]ØZ]ØYØÚY[Y]Y]YJ
NÂˆH[ÙHÂˆÚİÕØ\İ
	ÔX›\Ú˜Z[Yˆ	È
È
]K™\œ›Üˆ	Õ[šÛ›İÛˆ\œ›Ü‰ÊJNÂˆBˆHØ]Ú
\œŠHÂˆÚİÕØ\İ
	ÔX›\Ú\œ›Üˆ	È
È\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆ”Üİ›İËš[›™\’SHÜšYÒ[Âˆ”Üİ›İË™\ØX›YH˜[ÙNÂˆBˆJNÂ‚ˆËÈˆØY[˜ÙH]ZXÚÈ™\Ù]ÂˆÛÛœİØÚY[R[œ]HØİ[Y[™Ù][[Y[RY
	ÜØÚY[Q]U[YR[œ]	ÊNÂˆËÈÙ]Y˜][ØÚY[H[YHÈÛ[Üœ›İÈ[Ü›š[™ÈŒÌSBˆÛÛœİY˜][]HH™]È]J]K››İÊ
H
È
NÂˆY˜][]KœÙ]İ\œÊÌ
NÂˆYˆ
ØÚY[R[œ]
HÂˆØÚY[R[œ]˜[YHHY˜][]KÒTÓÔİš[™Ê
KœÛXÙJMŠNÂˆB‚ˆØİ[Y[œ]Y\TÙ[XİÜ[
	Ë˜ØY[˜ÙK\[	ÊK™›Ü‘XXÚ
[OˆÂˆ[˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆÛÛœİØY[˜ÙHH[™]\Ù]˜ØY[˜ÙNÂˆÛÛœİ\™Ù]H™]È]J
NÂˆYˆ
ØY[˜ÙHOOH	İÛ[Üœ›İË[[Ü›š[™ÉÊHÂˆ\™Ù]œÙ]]J\™Ù]™Ù]]J
H
ÈJNÂˆ\™Ù]œÙ]İ\œÊÌ
NÂˆH[ÙHYˆ
ØY[˜ÙHOOH	İÛ[Üœ›İË[›ÛÛ‰ÊHÂˆ\™Ù]œÙ]]J\™Ù]™Ù]]J
H
ÈJNÂˆ\™Ù]œÙ]İ\œÊLËMK
NÂˆH[ÙHYˆ
ØY[˜ÙHOOH	İÛËY^\ÉÊHÂˆ\™Ù]œÙ]]J\™Ù]™Ù]]J
H
ÈŠNÂˆ\™Ù]œÙ]İ\œÊK
NÂˆBˆYˆ
ØÚY[R[œ]
HÂˆØÚY[R[œ]˜[YHH\™Ù]ÒTÓÔİš[™Ê
KœÛXÙJMŠNÂˆBˆÚİÕØ\İ
Ù]ØÚY[H[YHÈ	Ü[^ÛÛ[X
NÂˆJNÂˆJNÂ‚ˆËÈKˆYÈØÚY[H]Y]YBˆØİ[Y[™Ù][[Y[RY
	Ø”ØÚY[TÜİ	ÊOË˜Y]™[\İ[™\Š	ØÛXÚÉË\Ş[˜È

HOˆÂˆÛÛœİÛÛ[Y[\HHÛÛ\ÜÙ\•^Ë˜[YOËš[J
NÂˆYˆ
XÛÛ[Y[\JHÂˆÚİÕØ\İ
	ÔX\ÙH[\ˆÜˆÙ[™\˜]HÛÛ[Y[\HÈØÚY[IÊNÂˆ™]\›ÂˆBˆÛÛœİØÚY[Y[YHHØÚY[R[œ]Ë˜[YNÂˆYˆ
\ØÚY[Y[YJHÂˆÚİÕØ\İ
	ÔX\ÙHÙ[XİH]H[™[YHÈØÚY[IÊNÂˆ™]\›ÂˆB‚ˆÛÛœİXØÛİ[YHİ\œ™[Üİ[™ĞXØÛİ[ËšY	Û[šÙY[—Üİ\˜K\ØX˜IÎÂˆÛÛœİXØÛİ[˜[YHHİ\œ™[Üİ[™ĞXØÛİ[Ë›˜[YH	Ñ‹ˆ[ZˆÚZÛHQ	ÎÂˆÛÛœİÜXÈHØİ[Y[™Ù][[Y[RY
	İš\˜[ÜXÒ[œ]	ÊOË˜[YH	ÔØÚY[YÜİ	ÎÂˆÛÛœİœ˜[Y]ÛÜšÈHØİ[Y[™Ù][[Y[RY
	İš\˜[œ˜[Y]ÛÜšÔÙ[Xİ	ÊOË˜[YH	Ğİ\İÛIÎÂ‚ˆHÂˆÛÛœİ™\ÈH]ØZ]™]Ú
	ËØ\KÜÛØÚX[ÜØÚY[IËÂˆY]Ùˆ	ÔÔÕ	ËˆXY\œÎˆÈ	ĞÛÛ[U\IÎˆ	Ø\XØ][Û‹ÚœÛÛ‰ÈKˆ›ÙNˆ”ÓÓ‹œİš[™ÚYJÂˆXØÛİ[YˆXØÛİ[˜[YKˆÛÛ[Y[\Kˆ[XYÙU\›ˆİ\œ™[ÜİYYXU\›ˆØÚY[Y[YNˆ™]È]JØÚY[Y[YJKÒTÓÔİš[™Ê
KˆÜXËˆœ˜[Y]ÛÜšÂˆJBˆJNÂˆÛÛœİ]HH]ØZ]™\ËšœÛÛŠ
NÂˆYˆ
]KœİXØÙ\ÜÊHÂˆÛÛœİ[YQ›Ü›X]YH™]È]JØÚY[Y[YJKÓØØ[Tİš[™Ê×KÈ]Tİ[Nˆ	ÜÚÜ	Ë[YTİ[Nˆ	ÜÚÜ	ÈJNÂˆÚİÕØ\İ
ÜİØÚY[Y›Üˆ	İ[YQ›Ü›X]YHX
NÂˆ]ØZ]ØYØÚY[Y]Y]YJ
NÂˆBˆHØ]Ú
\œŠHÂˆÚİÕØ\İ
	ÔØÚY[[™È\œ›Üˆ	È
È\œ‹›Y\ÜØYÙJNÂˆBˆJNÂ‚ˆËÈLˆ]Y]YH\İ	ˆš[\œÂˆÛÛœİ]Y]YS\İHØİ[Y[™Ù][[Y[RY
	ÜØÚY[Y]Y]YS\İ	ÊNÂˆÛÛœİ]Y]YPÛİ[˜YÙHHØİ[Y[™Ù][[Y[RY
	Ü]Y]YPÛİ[˜YÙIÊNÂ‚ˆ\Ş[˜È[˜İ[ÛˆØYØÚY[Y]Y]YJ
NÂˆHÂˆÛÛœİ™\ÈH]ØZ]™]Ú
	ËØ\KÜÛØÚX[Ü]Y]YIÊNÂˆÛÛœİ]HH]ØZ]™\ËšœÛÛŠ
NÂˆYˆ
]KœİXØÙ\ÜÈ	‰ˆ\œ˜^Kš\Ğ\œ˜^J]KœÜİÊJHÂˆØÚY[YÜİÔ]Y]YHH]KœÜİÎÂˆ™[™\”]Y]YS\İ

NÂˆBˆHØ]Ú
\œŠHÂˆÛÛœÛÛK™\œ›ÜŠ\œŠNÂˆBˆB‚ˆ[˜İ[Ûˆ™[™\”]Y]YS\İ

HÂˆYˆ
\]Y]YS\İ
H™]\›ÂˆÛÛœİš[\™YHØÚY[YÜİÔ]Y]YK™š[\ŠOˆÂˆYˆ
İ\œ™[]Y]YQš[\ˆOOH	Ø[	ÊH™]\›ˆYNÂˆ™]\›ˆœİ]\ÈOOHİ\œ™[]Y]YQš[\ÂˆJNÂ‚ˆYˆ
]Y]YPÛİ[˜YÙJHÂˆÛÛœİØÚY[YÛİ[HØÚY[YÜİÔ]Y]YK™š[\ŠOˆœİ]\ÈOOH	ÜØÚY[Y	ÊK›[™İÂˆ]Y]YPÛİ[˜YÙK^ÛÛ[HØÚY[YÛİ[ÂˆB‚ˆYˆ
š[\™Y›[™İOOH
HÂˆ]Y]YS\İš[›™\’SH]ˆİ[OH^X[YÛˆÙ[\ÈY[™ÎˆLœÈÛÛÜˆ˜\ŠK]^]\X\JNÈ›Û\Ú^™Nˆ˜\ŠKY›Û\Ú^™K[X™[
NÈ“›ÈÜİÈ›İ[™›Üˆ\Èš[\‹Ù]˜Âˆ™]\›ÂˆB‚ˆ]Y]YS\İš[›™\’SHš[\™Y›X\
OˆÂˆÛÛœİ]SØšˆH™]È]JœØÚY[Y[YJNÂˆÛÛœİ[YTİˆH]SØš‹ÓØØ[Q]Tİš[™Ê×KÈ[Ûˆ	ÜÚÜ	Ë^Nˆ	Û[Y\šXÉÈJH
È	È	È
È]SØš‹ÓØØ[U[YTİš[™Ê×KÈİ\ˆ	Ì‹YYÚ]	ËZ[]Nˆ	Ì‹YYÚ]	ÈJNÂˆÛÛœİİ]\ĞÛ\ÜÈHœİ]\ÈOOH	ÜX›\ÚY	ÈÈ	ÜX›\ÚY	Èˆ
œİ]\ÈOOH	Ù˜Z[Y	ÈÈ	Ù˜Z[Y	Èˆ	ÜØÚY[Y	ÊNÂˆÛÛœİİ]\ÓX™[Hœİ]\ÈOOH	ÜX›\ÚY	ÈÈ	ÔX›\ÚY	Èˆ
œİ]\ÈOOH	Ù˜Z[Y	ÈÈ	Ñ˜Z[Y	Èˆ	ÔØÚY[Y	ÊNÂ‚ˆ™]\›ˆ]ˆÛ\ÜÏHœK\ÜİXØ\™ˆ]KZYH‰ÜšYH]ˆÛ\ÜÏHœK\Üİ]ÜÜ[ˆÛ\ÜÏHœK\ÜİX]]Üˆ‰Ü˜XØÛİ[˜[Y_OÜÜ[Ü[ˆÛ\ÜÏHœK\İ]\Ë\[	Üİ]\ĞÛ\ÜßH‰Üİ]\ÓX™[OÜÜ[Ù]]ˆÛ\ÜÏHœK\Üİ][YHİ™ÈšY]Ğ›ŞHŒˆÚYHŒLˆˆZYÚHŒLˆˆš[H››Û™Hˆİ›ÚÙOH˜İ\œ™[ÛÛÜˆˆİ›ÚÙK]ÚYHŒˆÚ\˜ÛHŞHŒLˆˆŞOHŒLˆˆHŒL‹ÏÛ[[™HÚ[ÏHŒLˆˆLˆLˆMˆM‹ÏÜİ™ÏÜ[‰İ[YTİŸOÜÜ[Ù]]ˆÛ\ÜÏHœK\Üİ\Ûš\]‰Ü˜ÛÛ[Y[\_OÙ]‰Üš[XYÙU\›È[YÈÜ˜ÏH‰Üš[XYÙU\›HˆÛ\ÜÏHœK\Üİ][Xˆˆ[H•[X›˜Z[˜ˆ	ÉßO]ˆÛ\ÜÏHœK\ÜİXXİ[ÛœÈ‰Üœİ]\ÈOOH	ÜØÚY[Y	ÈÈ]ÛˆÛ\ÜÏHœKX‹\ÛH‹\X›\Ú[›İÈˆ]KZYH‰ÜšYH”X›\Ú›İÏØ]Û˜ˆ	ÉßO]ÛˆÛ\ÜÏHœKX‹\ÛH‹[ØY\Üİˆ]KZYH‰ÜšYH“ØY[ÈÛÛ\ÜÙ\Ø]Û]ÛˆÛ\ÜÏHœKX‹\ÛH[™Ù\ˆ‹Y[]K\Üİˆ]KZYH‰ÜšYH‘[]OØ]ÛÙ]Ù]˜ÂˆJKš›Ú[Š	ÉÊNÂ‚ˆËÈXİ[ÛœÈ\İ[™\œÂˆ]Y]YS\İœ]Y\TÙ[XİÜ[
	Ë˜‹\X›\Ú[›İÉÊK™›Ü‘XXÚ
ˆOˆÂˆ‹˜Y]™[\İ[™\Š	ØÛXÚÉË\Ş[˜È

HOˆÂˆÛÛœİYH‹™]\Ù]šYÂˆÛÛœİÜİHØÚY[YÜİÔ]Y]YK™š[™
OˆšYOOHY
NÂˆYˆ
\Üİ
H™]\›Âˆ‹^ÛÛ[H	ÔX›\Ú[™Ë‹‹‰ÎÂˆ‹™\ØX›YHYNÂˆHÂˆÛÛœİ™\ÈH]ØZ]™]Ú
	ËØ\KÜÛØÚX[ÜX›\Ú	ËÂˆY]Ùˆ	ÔÔÕ	ËˆXY\œÎˆÈ	ĞÛÛ[U\IÎˆ	Ø\XØ][Û‹ÚœÛÛ‰ÈKˆ›ÙNˆ”ÓÓ‹œİš[™ÚYJÂˆXØÛİ[YˆÜİ˜XØÛİ[YˆÛÛ[Y[\NˆÜİ˜ÛÛ[Y[\Kˆ[XYÙU\›ˆÜİš[XYÙU\›ˆÜXÎˆÜİÜXÂˆJBˆJNÂˆÛÛœİ]HH]ØZ]™\ËšœÛÛŠ
NÂˆYˆ
]KœİXØÙ\ÜÊHÂˆÚİÕØ\İ
	ÔÜİX›\ÚYÈ[šÙY[ˆIÊNÂˆ]ØZ]™]Ú
Ø\KÜÛØÚX[Ü]Y]YKÉÚYXÈY]Ùˆ	ÑSUIÈJNÂˆ]ØZ]ØYØÚY[Y]Y]YJ
NÂˆBˆHØ]Ú
\œŠHÂˆÚİÕØ\İ
	Ñ\œ›Üˆ	È
È\œ‹›Y\ÜØYÙJNÂˆBˆJNÂˆJNÂ‚ˆ]Y]YS\İœ]Y\TÙ[XİÜ[
	Ë˜‹[ØY\Üİ	ÊK™›Ü‘XXÚ
ˆOˆÂˆ‹˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆÛÛœİYH‹™]\Ù]šYÂˆÛÛœİÜİHØÚY[YÜİÔ]Y]YK™š[™
OˆšYOOHY
NÂˆYˆ
Üİ
HÂˆYˆ
ÛÛ\ÜÙ\•^
HÛÛ\ÜÙ\•^˜[YHHÜİ˜ÛÛ[Y[\NÂˆ\]PÚ\Ûİ[\Š
NÂˆYˆ
Üİš[XYÙU\›
HÂˆİ\œ™[ÜİYYXU\›HÜİš[XYÙU\›ÂˆYˆ
™]šY]Ò[XYÙJH™]šY]Ò[XYÙKœÜ˜ÈHÜİš[XYÙU\›ÂˆYˆ
™]šY]ÓYYXJH™]šY]ÓYYXKœİ[K™\Ü^HH	Ù›^	ÎÂˆBˆÚİÕØ\İ
	ÓØYYÜİ[ÈÛÛ\ÜÙ\‰ÊNÂˆBˆJNÂˆJNÂ‚ˆ]Y]YS\İœ]Y\TÙ[XİÜ[
	Ë˜‹Y[]K\Üİ	ÊK™›Ü‘XXÚ
ˆOˆÂˆ‹˜Y]™[\İ[™\Š	ØÛXÚÉË\Ş[˜È

HOˆÂˆÛÛœİYH‹™]\Ù]šYÂˆHÂˆ]ØZ]™]Ú
Ø\KÜÛØÚX[Ü]Y]YKÉÚYXÈY]Ùˆ	ÑSUIÈJNÂˆÚİÕØ\İ
	ÔÜİ™[[İ™Yœ›ÛH]Y]YIÊNÂˆ]ØZ]ØYØÚY[Y]Y]YJ
NÂˆHØ]Ú
\œŠHÂˆÚİÕØ\İ
	Ñ\œ›Üˆ[][™Îˆ	È
È\œ‹›Y\ÜØYÙJNÂˆBˆJNÂˆJNÂˆB‚ˆËÈš[\ˆ]ÛœÂˆØİ[Y[œ]Y\TÙ[XİÜ[
	ËœKYš[\‹X‰ÊK™›Ü‘XXÚ
ˆOˆÂˆ‹˜Y]™[\İ[™\Š	ØÛXÚÉË

HOˆÂˆØİ[Y[œ]Y\TÙ[XİÜ[
	ËœKYš[\‹X‰ÊK™›Ü‘XXÚ
ˆOˆ‹˜Û\ÜÓ\İœ™[[İ™J	ØXİ]™IÊJNÂˆ‹˜Û\ÜÓ\İ˜Y
	ØXİ]™IÊNÂˆİ\œ™[]Y]YQš[\ˆH‹™]\Ù]™š[\Âˆ™[™\”]Y]YS\İ

NÂˆJNÂˆJNÂ‚ˆËÈ[š]X[]Y]YHØYˆ]ØZ]ØYØÚY[Y]Y]YJ
NÂŸB‚