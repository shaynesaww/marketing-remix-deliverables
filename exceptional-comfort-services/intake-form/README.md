# ECS Intake Form

Interactive web form Steven Tibball fills out after the onboarding call. Wizard UX, auto-saves to localStorage, optional cloud backup (Vercel KV) with email-able resume links, final submission emailed to Shayne via n8n.

## File map

```
intake-form/
├── index.html                          # the whole form — single file, Alpine.js + Tailwind CDN
├── config.js                           # holds WEBHOOK_SUBMIT (loaded by index.html)
├── api/
│   ├── save-draft.js                   # POST /api/save-draft — writes to Vercel KV, POSTs to n8n draft webhook
│   └── get-draft.js                    # GET /api/get-draft?id= — reads from Vercel KV for ?resume= hydration
├── vercel.json                         # Vercel config — static + functions, no caching of index/config
├── package.json                        # @vercel/kv dependency
├── n8n-workflow-A-final-submit.json    # importable n8n workflow: submit → Drive → Slack → Gmail
└── n8n-workflow-B-draft-email.json     # importable n8n workflow: draft save → Gmail resume link to Steven
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

### 2. Provision a key-value store (formerly "Vercel KV")

The intake form stores draft state in a Redis-compatible key-value store, keyed by a random UUID with a 90-day TTL. We use the `@vercel/kv` SDK (already in `package.json`).

**Vercel rebranded their KV offering in 2024–2025.** "Vercel KV" is no longer a standalone create option. It now lives in the Vercel Marketplace as **Upstash for Redis** (the same product under the hood). Here's the current path:

1. Vercel dashboard → your `ecs-intake` project → **Storage** tab
2. Scroll to **Marketplace Database Providers** (or click **Browse Marketplace**)
3. Choose **Upstash for Redis** (the 1:1 replacement for the old KV)
4. **Create database** → name it `ecs-intake-drafts`, pick a region close to your Vercel project region, free tier is fine
5. When prompted, **connect it to the `ecs-intake` project**

Vercel auto-injects these env vars into your project:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`
- `KV_URL`
- (plus `UPSTASH_*` aliases for backwards compat)

The `@vercel/kv` package in `package.json` reads the same `KV_*` env var names, so **no code changes are needed** — Upstash Redis is a drop-in replacement.

> If you ever swap to `@upstash/redis` directly (it's the actively maintained SDK), the API is similar: `Redis.fromEnv().set(...)` / `.get(...)`. Not required for this project.

### 3. Pick the Google Drive folder for saved intakes

Decide where submitted intakes should land in Google Drive. The default workflow saves each submission as `ECS-Website-Intake-{YYYY-MM-DD-HHmm}.md` into a folder you specify.

- Easiest: use the existing ECS client folder. Open the folder in your browser, copy the folder ID from the URL: `drive.google.com/drive/folders/{THIS_PART_IS_THE_FOLDER_ID}`
- Or create a new subfolder (e.g., `Onboarding/Intake Submissions`) and grab its ID.

You'll paste this ID into the workflow in step 4.

### 4. Set up the two n8n workflows

The folder contains two importable workflow files:

- **`n8n-workflow-A-final-submit.json`** — the submission pipeline (saves to Drive, posts to Slack, emails you via Gmail)
- **`n8n-workflow-B-draft-email.json`** — the resume-link email (Gmail to Steven)

In n8n, you'll need three credentials configured before importing:

- **Gmail OAuth2** — Settings → Credentials → New → Gmail OAuth2 API → connect your personal Gmail account. The "From" address on outbound emails is automatically whatever Gmail account you connect.
- **Google Drive OAuth2** — Settings → Credentials → New → Google Drive OAuth2 API → connect the same Google account (or a separate Marketing Remix one).
- **Slack OAuth2** — Settings → Credentials → New → Slack OAuth2 API → connect the workspace where you want notifications.

Then:

1. **Create Workflow A — "ECS Intake — Final Submission"**
   - New workflow → ⋯ menu → **Import from File** → pick `n8n-workflow-A-final-submit.json`
     - If "Import from File" silently does nothing, fallback: open the file, copy all contents, then **Ctrl+V** onto an empty workflow canvas.
   - Open the **Save to Google Drive** node → bind your Google Drive credential → in the **Folder** field, replace `REPLACE_WITH_DRIVE_FOLDER_ID` with the actual folder ID
   - Open the **Slack Notify** node → bind your Slack credential → pick the channel or DM (the field labeled `REPLACE_WITH_SLACK_CHANNEL_OR_DM` will become a real channel picker once the credential is bound)
   - Open the **Gmail Shayne** node → bind your Gmail credential
   - **Activate** the workflow (toggle top-right)
   - Click the **Webhook** node → copy the **Production URL**

2. **Paste the submit URL into `config.js`** → `WEBHOOK_SUBMIT`. Commit and redeploy:
   ```bash
   vercel deploy --prod
   ```

3. **Create Workflow B — "ECS Intake — Resume Link Email"**
   - Same flow with `n8n-workflow-B-draft-email.json`
   - Bind Gmail credential on the **Gmail Steven** node
   - Activate, copy the Production URL

4. **Add the draft-email webhook URL as a Vercel env var:**
   - Vercel dashboard → project → Settings → Environment Variables
   - Add: `N8N_DRAFT_EMAIL_WEBHOOK` = the URL from step 3
   - Apply to: Production, Preview, Development
   - Redeploy so the env var picks up: `vercel deploy --prod`

### What Workflow A does on submit

```
Webhook (POST)
  → Prepare File   (Code node: build .md binary + timestamped filename)
  → Save to Drive  (uploads ECS-Website-Intake-YYYY-MM-DD-HHmm.md)
  → Slack Notify   (posts a message with Drive link and Steven's contact)
  → Gmail Shayne   (Drive link + full markdown inline in the email body)
  → Respond OK     ({ success: true, driveLink: "..." })
```

### 5. (Optional) Add a custom domain

Vercel dashboard → project → Domains → Add. e.g., `intake.marketingremix.com` or `ecs-intake.marketingremix.com`.

### 6. End-to-end smoke test

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
| Steven submits final | `POST` directly to n8n Workflow A's webhook URL | Markdown file saved to Google Drive + Shayne gets an email with the Drive link and full markdown inline |
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
