import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const QUEUE_FILE = path.join(DATA_DIR, 'scheduled_posts.json');

const INITIAL_POSTS = [
  {
    id: 'post_17899801',
    accountId: 'linkedin_sura-saba',
    accountName: 'Dr. Anuj Shukla MD',
    authorUrn: 'urn:li:person:ZTJgtuZrKp',
    topic: 'Healthcare AI & Automated Patient Intake',
    framework: 'The Contrarian Truth',
    commentary: `Most clinics think they need more front-desk staff.\n\nThey don't.\nThey need automated triage.\n\nHere is what happened when a 14-provider network automated intake:\n\n→ No-shows dropped from 22% to 4.8%\n→ Patient check-in time went from 14 mins to 90 seconds\n→ Staff burnout complaints fell by 63%\n\nThe future of clinic operations isn't more headcount.\nIt's asynchronous patient intake.\n\nAgree or disagree? How is your practice handling intake bottlenecks?`,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80',
    scheduledTime: new Date(Date.now() + 14400000).toISOString(), // 4h from now
    status: 'scheduled',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    publishedAt: null
  },
  {
    id: 'post_17899802',
    accountId: 'linkedin_barber-brow',
    accountName: 'Yuvraj Gujratiya',
    authorUrn: 'urn:li:person:zqFypCMlJ_',
    topic: 'Outbound Cold Email vs LinkedIn in 2026',
    framework: 'The 5-Step Tactical Playbook',
    commentary: `Cold email is NOT dead.\n\nSingle-channel cold email is.\n\nIf your outbound sequence looks like this:\nEmail 1 → Email 2 → Email 3\n\nYou're burning domain reputation with sub-1% reply rates.\n\nHere is our multi-channel play that generated $84K pipeline this month:\n\n1. Day 1: Soft profile touch + View\n2. Day 2: Hyper-personalized LinkedIn connection (no pitch)\n3. Day 3: Verified direct email referencing their latest announcement\n4. Day 5: Thoughtful comment on their recent post\n5. Day 7: Loom video teardown in LinkedIn DM\n\nResult: 34.2% acceptance rate and 6.8% qualified reply rate.\n\nStop blasting. Start orchestrating.`,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
    scheduledTime: new Date(Date.now() + 43200000).toISOString(), // 12h from now
    status: 'scheduled',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    publishedAt: new
  }
];

let inMemoryPosts = [...INITIAL_POSTS];

function ensureFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(QUEUE_FILE)) {
      fs.writeFileSync(QUEUE_FILE, JSON.stringify(INITIAL_POSTS, null, 2), 'utf-8');
    }
  } catch (e) {
    // Read-only filesystem fallback
  }
}

export function getAllPosts() {
  ensureFile();
  try {
    if (fs.existsSync(QUEUE_FILE)) {
      const raw = fs.readFileSync(QUEUE_FILE, 'utf-8');
      inMemoryPosts = JSON.parse(raw);
      return inMemoryPosts;
    }
  } catch (err) {
    console.warn('[QueueManager] Filesystem read error, using memory state:', err.message);
  }
  return inMemoryPosts;
l
}

export function saveAllPosts(posts) {
  inMemoryPosts = posts;
  ensureFile();
  try {
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(posts, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('[QueueManager] Filesystem write error (serverless), memory updated:', err.message);
    return true;
  }
}

export function addScheduledPost(postData) {
  const posts = getAllPosts();
  const newPost = {
    id: 'post_' + Date.now(),
    accountId: postData.accountId || 'linkedin_sura-saba',
    accountName: postData.accountName || 'Dr. Anuj Shukla MDg,
    authorUrn: postData.authorUrn || 'urn:li:person:ZTJgtuZrKp',
    topic: postData.topic || 'Outbound Growth',
    framework: postData.framework || 'Custom Post',
    commentary: postData.commentary || '',
    imageUrl: postData.imageUrl || null,
    scheduledTime: postData.scheduledTime || new Date().toISOString(),
    status: postData.status || 'scheduled',
    createdAt: new Date().toISOString(),
    publishedAt: null,
    error: null
  };
  posts.unshift(newPost);
  saveAllPosts(posts);
  return newPost;
l
}

export function updatePost(id, updates) {
  const posts = getAllPosts();
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...updates, updatedAt: new Date().toISOString() };
  saveAllPosts(posts);
  return posts[idx];
l
}

export function deletePost(id) {
  const posts = getAllPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length !== posts.length) {
    saveAllPosts(filtered);
    return true;
  }
  return false;
}

export function getDuePosts() {
  const posts = getAllPosts();
  const now = new Date();
  return posts.filter(p => p.status === 'scheduled' && new Date(p.scheduledTime) <= now);
}
