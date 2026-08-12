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

  // `email` is optional: the form auto-saves drafts to KV long before the user
  // has any reason to type an address. It is only required when `notify` asks
  // us to actually send the resume-link email.
  const { email, state, lastStep, draftId, notify } = body;
  if (!state) return res.status(400).json({ error: 'state required' });
  if (notify && !email) return res.status(400).json({ error: 'email required to send a resume link' });

  const uuid = (draftId && /^[0-9a-fA-F-]{20,}$/.test(draftId)) ? draftId : randomUUID();

  const record = {
    email: email || '',
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

  // The email only goes out when the caller explicitly asks for it. Auto-saves
  // pass no `notify`, so a client saving every few seconds never spams anyone.
  let emailed = false;
  let emailError = null;

  if (notify) {
    const n8nUrl = process.env.N8N_DRAFT_EMAIL_WEBHOOK;
    if (!n8nUrl) {
      emailError = 'N8N_DRAFT_EMAIL_WEBHOOK is not configured';
      console.warn('N8N_DRAFT_EMAIL_WEBHOOK not set — skipping resume-link email.');
    } else {
      try {
        const hookRes = await fetch(n8nUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, resumeUrl, updatedAt: record.updatedAt }),
        });
        // fetch does NOT reject on 4xx/5xx. Without this check an inactive n8n
        // workflow returns 404, nothing throws, and the user is told "Sent."
        if (hookRes.ok) {
          emailed = true;
        } else {
          emailError = `email webhook returned ${hookRes.status}`;
          console.error('n8n draft-email webhook returned', hookRes.status);
        }
      } catch (err) {
        emailError = String(err && err.message);
        console.error('n8n draft-email webhook failed:', err);
      }
    }
  }

  return res.status(200).json({ uuid, resumeUrl, emailed, emailError });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}
