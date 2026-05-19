# ECS Intake Form

Interactive web form Steven Tibball fills out after the onboarding call. Wizard UX, auto-saves to localStorage, optional cloud backup (Vercel KV) with email-able resume links, final submission emailed to Shayne via n8n.

## File map

```
intake-form/
├── index.html             # the whole form — single file, Alpine.js + Tailwind CDN
├── config.js              # holds WEBHOOK_SUBMIT (loaded by index.html)
├── api/
│   ├── save-draft.js      # POST /api/save-draft — writes to Vercel KV, POSTs to n8n draft webhook
│   └── get-draft.js       # GET /api/get-draft?id= — reads from Vercel KV for ?resume= hydration
├── vercel.json            # Vercel config — static + functions, no caching of index/config
├── package.json           # @vercel/kv dependency
└── n8n-workflow.json      # two importable n8n workflows
```

---

## Deploy steps (do these in order)

### 1. Push the folder up to a Git repo (or run `vercel` from inside it)

```bash
cd intake-form/
vercel link        # link to a new Vercel project, e.g. "ecs-intake"
vercel deploy --prod
```

This will deploy the static `index.html` plus the two API functions in `/api`.

### 2. Provision Vercel KV

In the Vercel dashboard → your project → **Storage** tab → **Create database** → **KV**. Name it `ecs-intake-drafts`. Vercel auto-injects `KV_REST_API_URL` and `KV_REST_API_TOKEN` (and the other KV env vars) into the project — the API functions pick them up automatically through `@vercel/kv`. No code changes needed.

### 3. Set up the two n8n workflows

Open `n8n-workflow.json`. It contains two workflows — `workflowA_finalSubmit` and `workflowB_draftEmail` — under separate top-level keys.

In n8n:

1. **Create Workflow A — "ECS Intake — Final Submission"**
   - New workflow → ⋯ menu → Import from File / Clipboard
   - Paste just the contents of the `workflowA_finalSubmit` object (the value of that key)
   - Open the **Email Shayne** node and bind it to your SMTP credential
   - **Activate** the workflow (toggle top-right)
   - Click the **Webhook** node → copy the **Production URL**

2. **Paste the URL into `config.js`** → `WEBHOOK_SUBMIT`. Commit and redeploy:
   ```bash
   vercel deploy --prod
   ```

3. **Create Workflow B — "ECS Intake — Resume Link Email"**
   - Same flow as above with the `workflowB_draftEmail` JSON
   - Bind SMTP credential on the **Email Steven** node
   - Activate, copy the Production URL

4. **Add the draft-email webhook URL as a Vercel env var:**
   - Vercel dashboard → project → Settings → Environment Variables
   - Add: `N8N_DRAFT_EMAIL_WEBHOOK` = the URL from step 3
   - Apply to: Production, Preview, Development
   - Redeploy so the env var picks up: `vercel deploy --prod`

### 4. (Optional) Add a custom domain

Vercel dashboard → project → Domains → Add. e.g., `intake.marketingremix.com` or `ecs-intake.marketingremix.com`.

### 5. End-to-end smoke test

1. Open the deployed URL in a desktop browser.
2. Click "Let's get started." Fill a few fields in Section 1.
3. Refresh the page — fields should still be there (localStorage hydration).
4. Click "Send link" at the bottom of any section with your email — confirm the email arrives with a working `?resume=` URL.
5. Open the resume URL in an incognito window — confirm fields hydrate from KV.
6. Fill required sections (1, 7, 9, 10, 13) → Review → Submit.
7. Confirm shayne@shaynechamplin.com receives the formatted markdown email.
8. Confirm the thank-you screen renders.
9. Refresh — localStorage should be cleared, you're back to the welcome screen.

---

## What goes to whom

| Event | Endpoint | Result |
|---|---|---|
| Auto-save | localStorage in Steven's browser | Survives close/refresh/reboot on same device |
| Steven clicks "Send link" | `POST /api/save-draft` → writes to KV → calls n8n Workflow B | Steven gets a resume-link email |
| Steven submits final | `POST` directly to n8n Workflow A's webhook URL | Shayne gets the formatted markdown email |
| Submit fails (network) | Fallback: downloads `.md` file + opens pre-filled mailto | Steven can still get the data to Shayne |

---

## Editing form questions later

All form content is in `index.html`. To change a question:

- Find the `<template x-if="currentStep === N">` block for that section.
- Edit the field labels / options inline.
- If you add a new field, also add it to the `state.sN` object in the `intake()` function at the bottom of the file.
- If the field should be included in the email markdown, edit `toMarkdown()`.
- If the field is required for build-clock-start, edit `isSectionComplete(n)`.

No build step — just commit and redeploy.

---

## Security / privacy notes

- Drafts live in Vercel KV for 90 days, keyed by UUID. UUIDs are random and not enumerable — a draft is only retrievable by someone who has the URL.
- The submit endpoint is the n8n production webhook URL, which is also unguessable.
- No PII is logged server-side beyond what's in KV.
- For extra hardening (not v1): add a CAPTCHA on the backup-link button to prevent spam abuse of n8n.
