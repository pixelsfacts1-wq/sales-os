import dotenv from 'dotenv';
dotenv.config();

const GHL_TOKEN = process.env.GHL_TOKEN;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE_URL = process.env.GHL_BASE_URL;
const GHL_API_VERSION = process.env.GHL_API_VERSION;

const getHeaders = () => ({
  'Authorization': `Bearer ${GHL_TOKEN}`,
  'Version': `${GHL_API_VERSION}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

const log = (message) => {
  console.log(`[GHL ${new Date().toISOString()}] ${message}`);
};

const logError = (message, error) => {
  console.error(`[GHL ${new Date().toISOString()}] ERROR: ${message}`, error);
};

/**
 * Creates a new contact in GHL.
 * @param {Object} data Contact data
 * @param {string} [data.firstName] First name
 * @param {string} [data.lastName] Last name
 * @param {string} [data.email] Email address
 * @param {string} [data.phone] Phone number
 * @param {string[]} [data.tags] Tags
 * @param {string} [data.source] Source
 * @param {string} [data.companyName] Company name
 * @returns {Promise<Object|null>} Created contact object
 */
export async function createContact(data) {
  log(`Creating contact ${data.email || data.phone || ''}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ ...data, locationId: GHL_LOCATION_ID })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contact;
  } catch (err) {
    logError('Failed to create contact', err);
    return null;
  }
}

/**
 * Upserts a contact in GHL (creates if new, updates if existing by email/phone).
 * @param {Object} data Contact data
 * @returns {Promise<Object|null>} Contact object
 */
export async function upsertContact(data) {
  log(`Upserting contact ${data.email || data.phone || ''}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ ...data, locationId: GHL_LOCATION_ID })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contact;
  } catch (err) {
    logError('Failed to upsert contact', err);
    return null;
  }
}

/**
 * Updates an existing contact in GHL.
 * @param {string} contactId Contact ID
 * @param {Object} data Data to update
 * @returns {Promise<Object|null>} Updated contact object
 */
export async function updateContact(contactId, data) {
  log(`Updating contact ${contactId}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contact;
  } catch (err) {
    logError(`Failed to update contact ${contactId}`, err);
    return null;
  }
}

/**
 * Finds a contact by email address.
 * @param {string} email Email address to search for
 * @returns {Promise<Object|null>} Contact object or null if not found
 */
export async function findContactByEmail(email) {
  log(`Finding contact by email ${email}`);
  try {
    const query = new URLSearchParams({ locationId: GHL_LOCATION_ID, query: email, limit: '1' });
    const response = await fetch(`${GHL_BASE_URL}/contacts/?${query.toString()}`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contacts && result.contacts.length > 0 ? result.contacts[0] : null;
  } catch (err) {
    logError(`Failed to find contact by email ${email}`, err);
    return null;
  }
}

/**
 * Adds tags to an existing contact.
 * @param {string} contactId Contact ID
 * @param {string[]} tags Array of tags to add
 * @returns {Promise<string[]|null>} Updated tags array
 */
export async function addTagsToContact(contactId, tags) {
  log(`Adding tags [${tags.join(', ')}] to contact ${contactId}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/tags`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ tags })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.tags;
  } catch (err) {
    logError(`Failed to add tags to contact ${contactId}`, err);
    return null;
  }
}

/**
 * Removes tags from an existing contact.
 * @param {string} contactId Contact ID
 * @param {string[]} tags Array of tags to remove
 * @returns {Promise<string[]|null>} Updated tags array
 */
export async function removeTagsFromContact(contactId, tags) {
  log(`Removing tags [${tags.join(', ')}] from contact ${contactId}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/tags`, {
      method: 'DELETE',
      headers: getHeaders(),
      body: JSON.stringify({ tags })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.tags;
  } catch (err) {
    logError(`Failed to remove tags from contact ${contactId}`, err);
    return null;
  }
}

/**
 * Sets Do Not Disturb preferences for a contact.
 * @param {string} contactId Contact ID
 * @param {string} channel 'Email', 'SMS', or 'Call'
 * @param {boolean} active True to enable DND, false to disable
 * @returns {Promise<Object|null>} Updated contact
 */
export async function setDND(contactId, channel, active) {
  log(`Setting DND for ${channel} to ${active} on contact ${contactId}`);
  try {
    const data = {
      dndSettings: {
        [channel]: { status: active ? 'active' : 'inactive' }
      }
    };
    if (active) {
      data.dnd = true;
    }
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contact;
  } catch (err) {
    logError(`Failed to set DND for contact ${contactId}`, err);
    return null;
  }
}

/**
 * Adds a contact to a workflow.
 * @param {string} contactId Contact ID
 * @param {string} workflowId Workflow ID
 * @returns {Promise<boolean>} True if successful, false otherwise
 */
export async function addToWorkflow(contactId, workflowId) {
  log(`Adding contact ${contactId} to workflow ${workflowId}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/workflow/${workflowId}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({})
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    return true;
  } catch (err) {
    logError(`Failed to add contact ${contactId} to workflow ${workflowId}`, err);
    return false;
  }
}

/**
 * Lists contacts with optional filtering.
 * @param {Object} options Options
 * @param {string} [options.query] Search query
 * @param {number} [options.limit] Results limit
 * @param {string} [options.startAfter] Start after timestamp/string
 * @param {string} [options.startAfterId] Start after contact ID
 * @returns {Promise<{contacts: Object[], meta: Object}|null>} Contacts and metadata
 */
export async function listContacts({ query, limit, startAfter, startAfterId } = {}) {
  log('Listing contacts');
  try {
    const params = new URLSearchParams({ locationId: GHL_LOCATION_ID });
    if (query) params.append('query', query);
    if (limit) params.append('limit', limit);
    if (startAfter) params.append('startAfter', startAfter);
    if (startAfterId) params.append('startAfterId', startAfterId);

    const response = await fetch(`${GHL_BASE_URL}/contacts/?${params.toString()}`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return { contacts: result.contacts || [], meta: result.meta || {} };
  } catch (err) {
    logError('Failed to list contacts', err);
    return null;
  }
}

/**
 * Gets a single contact by ID.
 * @param {string} contactId Contact ID
 * @returns {Promise<Object|null>} Contact object
 */
export async function getContact(contactId) {
  log(`Getting contact ${contactId}`);
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'GET',
      headers: getHeaders()
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const result = await response.json();
    return result.contact;
  } catch (err) {
    logError(`Failed to get contact ${contactId}`, err);
    return null;
  }
}
