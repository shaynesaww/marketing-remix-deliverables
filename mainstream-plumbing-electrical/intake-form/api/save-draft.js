import { kv } from '@vercel/kv';
import { randomUUID } from 'node:crypto';

const TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : safeParse(req.body);
  if (!body) return res.status(400).json({ error: 'Invalid JSON body' });

  const { email, state, lastStep, draftId } = body;
  if (!email || !state) return res.status(400).json({ error: 'email and state required' });

  const uuid = (draftId && /^[0-9a-fA-F-]{20,}$/.test(draftId)) ? draftId : randomUUID();

  const record = {
    email,
    state,
    lastStep: typeof lastStep === 'number' ? lastStep : 1,
    updatedAt: new Date().toISOString(),
  };

  try {
    await kv.set(`intake:draft:${uuid}`, record, { ex: TTL_SECONDS });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to persist draft', details: String(err && err.message) });
  }

  const origin = req.headers['x-forwarded-proto'] && req.headers.host
    ? `${req.headers['x-forwarded-proto']}://${req.headers.host}`
    : `https://${req.headers.host}`;
  const resumeUrl = `${origin}/?resume=${encodeURIComponent(uuid)}`;

  const n8nUrl = process.env.N8N_DRAFT_EMAIL_WEBHOOK;
  if (n8nUrl) {
    try {
      await fetch(n8nUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resumeUrl, updatedAt: record.updatedAt }),
      });
    } catch (err) {
      console.error('n8n draft-email webhook failed:', err);
    }
  } else {
    console.warn('N8N_DRAFT_EMAIL_WEBHOOK not set — skipping resume-link email.');
  }

  return res.status(200).json({ uuid, resumeUrl });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}
