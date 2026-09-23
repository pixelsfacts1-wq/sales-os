/**
 * AI Viral Post Generation, Reference Post Analyzer & Prompt Suggestion Engine
 */

export const VIRAL_FRAMEWORKS = [
  {
    id: 'contrarian',
    name: 'The Contrarian Truth',
    desc: 'Challenges a widespread industry belief to immediately stop the scroll.'
  },
  {
    id: 'case_study',
    name: 'The Hard Numbers Case Study',
    desc: 'Uses real metrics, before/after figures, and tactical breakdowns.'
  },
  {
    id: 'playbook',
    name: 'The 5-Step Tactical Playbook',
    desc: 'Step-by-step actionable guide that people bookmark and share.'
  },
  {
    id: 'founder_story',
    name: 'The Vulnerable Founder Story',
    desc: 'High-authenticity story of failure, realization, and triumph.'
  },
  {
    id: 'micro_teardown',
    name: 'The Micro-Teardown',
    desc: 'Teardown of an outbound campaign, landing page, or sales tactic.'
  }
];

/**
 * Analyzes a reference post to extract its viral anatomy
 */
export function analyzeReferencePost(referenceText) {
  if (!referenceText || referenceText.trim().length < 20) {
    return {
      hasReference: false,
      hookType: 'Standard Question / Observation',
      cadence: 'Standard paragraph flow',
      keyElements: ['Direct statement', 'Value proposition', 'Closing call to engagement']
    };
  }

  const lines = referenceText.trim().split('\n').filter(l => l.trim().length > 0);
  const firstLine = lines[0] || '';
  const secondLine = lines[1] || '';

  let hookType = 'Contrarian Statement';
  if (firstLine.includes('?') || firstLine.toLowerCase().startsWith('why') || firstLine.toLowerCase().startsWith('how')) {
    hookType = 'Intriguing Open-Ended Question';
  } else if (firstLine.match(/\d+%|\$\d+|\d+ [a-z]+/i)) {
    hookType = 'High-Impact Metric / Numerical Proof';
  } else if (firstLine.toLowerCase().includes("don't") || firstLine.toLowerCase().includes('stop') || firstLine.toLowerCase().includes('not')) {
    hookType = 'Pattern Interrupt / Myth Buster';
  }

  const hasBullets = referenceText.includes('→') || referenceText.includes('•') || referenceText.includes('1.') || referenceText.includes('-');
  const hasShortLines = lines.some(l => l.length < 35);

  return {
    hasReference: true,
    firstLineExcerpt: firstLine.slice(0, 80),
    hookType,
    structure: hasBullets ? 'Bullet-Dense Tactical Breakdown' : 'Story Narrative with White Space',
    cadence: hasShortLines ? 'Rapid 1-2 sentence rhythm' : 'Structured paragraphs',
    avgLineLength: Math.round(referenceText.length / Math.max(1, lines.length))
  };
}

/**
 * Generates viral post copy using framework, reference structure, and topic
 */
export async function generateViralPost({ topic, referenceText = '', framework = 'contrarian', audience = 'B2B Founders & Sales Leaders', tone = 'authoritative' }) {
  const analysis = analyzeReferencePost(referenceText);
  const cleanTopic = topic || 'Modern B2B Outbound';

  // If OPENAI_API_KEY or GEMINI_API_KEY is present in env, call LLM
  if (process.env.GEMINI_API_KEY) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an elite LinkedIn ghostwriter for B2B tech executives. Write a viral LinkedIn post about "${cleanTopic}" targeting ${audience}.
Style framework: ${framework}.
Tone: ${tone}.
${referenceText ? `Emulate the pacing, line spacing, and punchy hook style of this reference post:\n"""${referenceText}"""` : ''}

Rules:
- Hook in first 2 lines (before "see more" cutoff).
- Use clean double line breaks between short sentences.
- High visual readability with arrows (→) or clean numbered steps.
- Provide real, actionable insight.
- No cheesy corporate jargon or generic buzzwords.
- End with a sharp, natural conversation-starter question.
Output ONLY the post text.`
            }]
          }]
        })
      });
      const data = await response.json();
      const generated = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generated && generated.trim().length > 50) {
        return generated.trim();
      }
    } catch (err) {
      console.warn('[AIGenerator] Gemini call failed, falling back to curated viral engine:', err.message);
    }
  }

  // Curated High-Conversion Generation Engine
  switch (framework) {
    case 'contrarian':
      return `Most ${audience} are doing ${cleanTopic} completely backwards.\n\nThey think the solution is more volume.\nIt's not.\n\nHere is the hard truth nobody wants to admit:\n\n→ 90% of outreach fails not because of deliverability, but relevance\n→ Prospects don't ignore cold touches; they ignore generic pitches\n→ 1 hyper-researched observation beats 100 automated templates every single time\n\nWhen we shifted from "mass automation" to "multi-channel orchestration":\n• Acceptance rates jumped from 14% to 34.2%\n• Qualified meeting hold rates increased by 2.4x\n• Unsubscribe rates plummeted below 0.3%\n\nStop playing a numbers game in a relationship market.\n\nWhat is your biggest frustration with ${cleanTopic} right now?`;

    case 'case_study':
      return `How we scaled ${cleanTopic} to 12 qualified enterprise meetings in 14 days:\n\n(Without hiring another SDR or burning our domain)\n\nThe old way:\n❌ 500 emails/day sent blindly\n❌ Zero LinkedIn synchronization\n❌ Response rate: 0.8%\n\nThe new SalesOS playbook:\n\n1. Day 1: Profile view + ICP engagement\n2. Day 2: Hyper-personalized LinkedIn invite based on their hiring post\n3. Day 3: Verified direct email arriving during their local peak hours (9:15 AM EST)\n4. Day 5: 30-second Loom teardown of their exact pipeline bottleneck\n\nThe Result:\n→ 247 Connection requests sent\n→ 34.2% Acceptance rate\n→ 34 Positive replies\n→ $84,000 in pipeline revenue\n\nPrecision always beats spray-and-pray.\n\nWould you test this cadence for your team?`;

    case 'playbook':
      return `The 5-step playbook for mastering ${cleanTopic} in 2026:\n\nBookmark this before your competitors do.\n\nStep 1: Focus on the "Unhappy Trigger"\nDon't reach out randomly. Target accounts that just raised a seed round, hired a VP of Sales, or posted an SDR opening.\n\nStep 2: The Two-Sentence LinkedIn Hook\nNever pitch in the connection request. State one specific observation and ask if it's on their radar.\n\nStep 3: Multi-Touch Temporal Alignment\nSend communications when prospects are actually at their desks (08:30 – 17:30 local time in their timezone).\n\nStep 4: Asynchronous Loom Proof\nShow, don't tell. A 45-second screen recording has a 4x higher reply rate than plain text.\n\nStep 5: Respect the Silence\nIf they don't reply by Touch 3, gracefully bow out. Your reputation is worth more than a desperate follow-up.\n\nWhich of these 5 steps is your team executing best today?`;

    case 'founder_story':
      return `Last year, we lost 3 enterprise deals because our ${cleanTopic} approach was completely broken.\n\nI was convinced we needed a bigger sales team.\nI was wrong.\n\nWe were sending 1,000 messages a week.\nPeople were unsubscribing.\nDomains were getting flagged.\nAnd our calendar was empty.\n\nI sat down on a Sunday night, deleted our 8-step email drip, and did something radical:\n\nWe reduced our outreach by 75%.\nWe spent 8 minutes researching each individual prospect.\nWe synced LinkedIn touches directly with email dispatches.\n\nWithin 30 days:\n→ Qualified meetings booked doubled\n→ Deal sizes increased by 40%\n→ Prospects started thanking us for our outreach\n\nSpeed and scale mean nothing if you're sprinting in the wrong direction.\n\nHave you ever had to tear down a sales process and start from scratch?`;

    case 'micro_teardown':
    default:
      return `A quick teardown on why 95% of strategies in ${cleanTopic} are underperforming:\n\nHere is the fatal flaw:\n\nPeople treat communication like an announcement.\nTop performers treat communication like a conversation.\n\nNotice the difference:\n\n❌ "We are the leading AI platform helping companies optimize their revenue operations." (Self-centered)\n\n✅ "Saw you're expanding your SDR pod this quarter — usually that creates a temporary calendar bottleneck for the first 60 days. Curious how you're navigating that?" (Prospect-centered)\n\nFlip the spotlight from what you sell to what they are experiencing.\n\nAgree or disagree? Drop your thoughts below.`;
  }
}

/**
 * Suggests 3-5 creative prompt angles based on topic and reference
 */
export function suggestPromptAngles({ topic = 'Outbound Sales', referenceText = '' }) {
  const cleanTopic = topic || 'B2B Outbound';
  return [
    {
      title: 'The Uncomfortable Metric',
      prompt: `Write a post revealing why the traditional metrics in ${cleanTopic} (open rates, volume) are deceptive, and introduce the 3 metrics top 1% teams track instead.`
    },
    {
      title: 'The 3-Year Evolution',
      prompt: `Compare how ${cleanTopic} worked in 2023 vs how it actually works today in 2026. Emphasize AI automation, buyer fatigue, and trust verification.`
    },
    {
      title: 'The "Never Do This" Warning',
      prompt: `Outline the 3 most common mistakes founders make when scaling ${company}, and give the exact fix for each mistake in bullet points.`
    },
    {
      title: 'The Behind-The-Scenes Experiment',
      prompt: `Share a mini case study of testing 2 completely opposite hypotheses in ${company} over 30 days, revealing the unexpected winner with data.`
    }
  ];
}

/**
 * Generates an image prompt and resolves a visual URL
 */
export function generateImagePrompt(postText, topic = 'Technology & Growth') {
  // Synthesize visual description
  const cleanTopic = (topic || 'B2B Tech').replace(/[^a-zA-Z0-9 ]/g, '');
  const prompt = `Minimalist modern 3D editorial graphic representing ${cleanTopic}, clean futuristic aesthetic, studio lighting, emerald green and electric blue accents, professional corporate wallpaper, 4k quality, clean composition`;

  // Pollinations.ai instant FLUX/SDXL image URL
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1080&height=1080&nologo=true`;

  return {
    prompt,
    imageUrl
  };
}
