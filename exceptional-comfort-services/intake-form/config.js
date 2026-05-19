// Exposes runtime configuration to index.html.
// After importing the n8n workflows, paste the production webhook URLs below.
// The save-draft API uses N8N_DRAFT_EMAIL_WEBHOOK from Vercel environment variables — not this file.
window.ECS_CONFIG = {
  // POST endpoint that receives the final intake submission and emails Shayne.
  // This is an n8n production webhook URL (Workflow A in n8n-workflow.json).
  WEBHOOK_SUBMIT: ''
};
