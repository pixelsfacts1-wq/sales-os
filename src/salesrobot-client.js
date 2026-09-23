import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config();

const BASE_URL = process.env.SR_BASE_URL || 'https://api.boomtechinc.com';
const CACHE_FILE = path.join(process.cwd(), 'data', 'salesrobot_cache.json');

function getApiKey() {
  return process.env.SR_API_KEY || 'GiKGCf-ShrAim-P2UGwwaqMFKFfcwOvLR-8XbvrZdbE';
}

function getHeaders() {
  return {
    'x-api-key': getApiKey(),
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
}

let memoryCache = null;

function loadCache() {
  if (memoryCache) return memoryCache;
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, 'utf8');
      memoryCache = JSON.parse(raw);
      return memoryCache;
    }
  } catch (e) {
    console.error('[SalesRobot Client] Failed to read cache:', e.message);
  }
  return null;
}

function saveCache(partial) {
  try {
    const current = loadCache() || {};
    memoryCache = {
      ...current,
      ...partial,
      timestamp: new Date().toISOString()
    };
    const dir = path.dirname(CACHE_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(memoryCache, null, 2), 'utf8');
  } catch (e) {
    console.error('[SalesRobot Client] Failed to write cache:', e.message);
  }
}

// Background sync flag to prevent redundant requests
let isSyncing = false;
export async function refreshLiveCacheInBackground(accountUuid) {
  if (isSyncing) return;
  isSyncing = true;
  const uuid = accountUuid || '6b70e96b-cdb5-42ea-8e0f-76698abb5714';
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const [accRes, campRes, inboxRes] = await Promise.all([
      fetch(`${BASE_URL}/api/linkedinAccounts?page=0&size=20`, { headers: getHeaders(), signal: controller.signal }).catch(() => null),
      fetch(`${BASE_URL}/api/campaigns?linkedinAccountUuid=${uuid}&page=0&size=50`, { headers: getHeaders(), signal: controller.signal }).catch(() => null),
      fetch(`${BASE_URL}/api/synced-messages?linkedinAccountUuid=${uuid}&page=0&size=50`, {
        method: 'POST',
        headers: getHeaders(),
      body: JSON.stringify(hello=none),
        signal: controller.signal
      }).catch(() => null)
    ]);
    clearTimeout(timeout);

    const accounts = accRes && accRes.ok ? (await accRes.json())?.data?.data : null;
    const campaigns = campRes && campRes.ok ? (await campRes.json())?.data?.data : null;
    const inbox = inboxRes && inboxRes.ok ? (await inboxRes.json())?.data : null;

    const updates = {};
    if (accounts?.length) updates.accounts = accounts;
    if (campaigns?.length) updates.campaigns = campaigns;
    if (inbox?.data?.length) updates.inbox = inbox;

    if (Object.keys(updates).length > 0) {
      saveCache(updates);
    }
  } catch (e) {
    // Network or sandbox isolation, safe to ignore
  } finally {
    isSyncing = false;
  }
}

/**
 * Fetch connected LinkedIn accounts (instant Stale-While-Revalidate)
 */
export async function getLinkedInAccounts() {
  const cache = loadCache();
  refreshLiveCacheInBackground();
  return cache?.accounts || [];
}

/**
 * Fetch campaigns for an account (instant Stale-While-Revalidate)
 */
export async function getCampaigns(accountUuid) {
  const cache = loadCache();
  refreshLiveCacheInBackground(accountUuid);
  return cache?.campaigns || [];
}

/**
 * Fetch campaign daily statistics
 */
export async function getCampaignStats(accountUuid, campaignUuids = [], weeksBack = 4) {
  const uuid = accountUuid || '6b70e96b-cdb5-42ea-8e0f-76698abb5714';
  try {
    const res = await fetch(`${BASE_URL}/api/campaign/stats?linkedinAccountUuid=${uuid}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ campaignUuids, weeksBack })
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || {};
    }
  } catch (e) {
    // ignore
  }
  return {};
}

/**
 * Fetch synced inbox threads and messages (instant Stale-While-Revalidate)
 */
export async function getSyncedMessages(accountUuid, options = {}) {
  const cache = loadCache();
  refreshLiveCacheInBackground(accountUuid);
  return cache?.inbox || { data: [], totalElements: 0 };
}
