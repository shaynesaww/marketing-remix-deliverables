import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const id = (req.query && req.query.id) || '';
  if (!id || !/^[0-9a-fA-F-]{20,}$/.test(id)) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  try {
    const record = await kv.get(`intake:draft:${id}`);
    if (!record) return res.status(404).json({ error: 'Draft not found' });
    return res.status(200).json(record);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to read draft', details: String(err && err.message) });
  }
}
