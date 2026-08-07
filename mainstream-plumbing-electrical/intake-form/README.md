# Mainstream Plumbing and Electrical — Intake Form

Interactive web form Jacob fills out after the onboarding call. Wizard UX, auto-saves to localStorage, optional cloud backup with email-able resume links, final submission emailed to Shayne via n8n.

Cloned from the ECS intake form on 2026-08-07 and adapted for a **dual-trade** business with **15 sections** (ECS had 13). Everything that was HVAC-specific is gone.

## What changed from the ECS version

| | ECS | Mainstream |
|---|---|---|
| Sections | 13 | **15** — added Local Services Ads (14) and Review Engine (15) |
| Required sections | 1, 7, 9, 10, 13 | **1, 4, 5, 7, 9, 10, 13, 14, 15** |
| Step indexes | review 14, thanks 15 | **review 16, thanks 17** |
| Section 1 | NATE + EPA + one HVAC license | **Two trade licenses**, master plumber/electrician, workers' comp |
| Section 2 | HVAC equipment brands | **Water heater / panel / fixture / EV / generator** brands |
| Section 4 | One service list | **Two lists** (plumbing, electrical) + Home Service Club + commercial mix |
| Section 5 | Pickens-area ZIP codes | **Greenville cities**, checkbox-driven, tied to the 5 location pages |
| Section 7 | Domain assumed on Housecall Pro | **Unknown AI site builder** + NAP fields (phone, address, show-publicly) |
| Section 12 | Testimonials | Testimonials **+ consent gates** for the customer stories and founding story |
| Build clock | 2 weeks | **One month** |
| localStorage key | `ecs-intake-draft` | `mainstream-intake-draft` |
| Config global | `window.ECS_CONFIG` | `window.MAINSTREAM_CONFIG` |
| n8n webhook paths | `ecs-intake-*` | `mainstream-intake-*` |

### Pre-filled from the 2026-08-04 onboarding call

These land in the form already answered so Jacob confirms instead of re-answering. All editable.

- Service call fee `$78` · after-hours `$78 — same, no upcharge` · camera `$289`
- Membership `Home Service Club` at `$19.98/month`
- Scheduling software `Housecall Pro`
- State of registration `South Carolina`

### Two consent questions that did not exist on the ECS form

Section 12 asks Jacob to sign off on things he volunteered on the call but never authorized for publication:

1. **Customer stories** — Penny and Daniel, first names only. Yes / anonymize / no.
2. **The founding story** — he applied to be a police officer, prayed about it, and the application came back denied. Full version / faith removed / omit entirely.

Do not write either into a page before this comes back.

## File map

```
intake-form/
├── index.html                          # the whole form — single file, Alpine.js + inline CSS
├── config.js                           # holds WEBHOOK_SUBMIT (loaded by index.html)
├── api/
│   ├── save-draft.js                   # POST /api/save-draft — writes to KV, POSTs to n8n draft webhook
│   └── get-draft.js                    # GET /api/get-draft?id= — reads from KV for ?resume= hydration
├── vercel.json                         # static + functions, no caching of index/config
├── package.json                        # @vercel/kv dependency
├── n8n-workflow-A-final-submit.json    # submit → Drive → Slack → Gmail
└── n8n-workflow-B-draft-email.json     # draft save → Gmail resume link to Jacob
```

---

## Deploy steps

### 1. Deploy to Vercel

```bash
cd mainstream-plumbing-electrical/intake-form/
vercel link        # new Vercel project, e.g. "mainstream-intake"
vercel deploy --prod
```

### 2. Provision the key-value store

Drafts are stored by random UUID with a 90-day TTL. "Vercel KV" is now **Upstash for Redis** in the Vercel Marketplace, and it's a drop-in replacement — `@vercel/kv` reads the same `KV_*` env vars, so no code changes.

1. Vercel dashboard → `mainstream-intake` → **Storage**
2. **Marketplace Database Providers** → **Upstash for Redis**
3. Create → name it `mainstream-intake-drafts`, free tier, region near the project
4. Connect it to the `mainstream-intake` project

Vercel injects `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL`.

### 3. Pick the Drive folder for saved intakes

Submissions save as `Mainstream-Website-Intake-{YYYY-MM-DD-HHmm}.md`. Grab the folder ID from the URL: `drive.google.com/drive/folders/{THIS_PART}`. Use the Mainstream client folder.

### 4. Set up the two n8n workflows

Credentials needed first: **Gmail OAuth2**, **Google Drive OAuth2**, **Slack OAuth2**.

1. **Workflow A — "Mainstream Intake — Final Submission"**
   - New workflow → ⋯ → **Import from File** → `n8n-workflow-A-final-submit.json`
     - If import silently does nothing: open the file, copy all, **Ctrl+V** onto an empty canvas.
   - **Save to Google Drive** node → bind Drive credential → replace `REPLACE_WITH_DRIVE_FOLDER_ID`
   - **Slack Notify** node → bind Slack credential → pick the channel
   - **Gmail Shayne** node → bind Gmail credential
   - **Activate**, then copy the webhook **Production URL**
   - Webhook path is `mainstream-intake-submit` — distinct from ECS, so both can run side by side

2. **Paste the submit URL into `config.js`** → `WEBHOOK_SUBMIT`, then `vercel deploy --prod`

3. **Workflow B — "Mainstream Intake — Resume Link Email"**
   - Same import flow with `n8n-workflow-B-draft-email.json`
   - Bind the Gmail credential, activate, copy the Production URL

4. **Add the draft-email webhook as a Vercel env var**
   - Settings → Environment Variables → `N8N_DRAFT_EMAIL_WEBHOOK` = the URL from step 3
   - Apply to Production, Preview, Development → redeploy

### 5. Smoke test

1. Open the deployed URL. Click "Let's get started."
2. Fill a few fields in Section 1. Refresh — fields should survive (localStorage).
3. "Send link" with your email → confirm the `?resume=` email arrives.
4. Open the resume URL in incognito → fields hydrate from KV.
5. Fill required sections (1, 4, 5, 7, 9, 10, 13, 14, 15) → Review → Submit.
6. Confirm shayne@shaynechamplin.com gets the markdown email and the Drive file lands.

---

## Verification already done (2026-08-07, headless Chromium)

- All 15 sections render, correct headings and step indexes
- Review screen: 15 rows in 4 groups, exactly 9 marked Required
- `requiredComplete` is `false` on an empty form and `true` once all 9 required sections are filled
- `requiredCount()` tallies: 1→7/7, 4→4/4, 5→3/3, 7→7/7, 9→1/1, 10→3/3, 13→8/8, 14→1/1, 15→6/6
- `toMarkdown()` emits all 15 sections and round-trips real values
- 0px horizontal overflow at 390px wide
- 0 console errors

Not yet verified (needs the deploy): the KV draft round-trip and the two n8n webhooks.

---

## What goes to whom

| Event | Endpoint | Result |
|---|---|---|
| Auto-save | localStorage (`mainstream-intake-draft`) | Survives close/refresh/reboot on the same device |
| Jacob clicks "Send link" | `POST /api/save-draft` → KV → n8n Workflow B | Jacob gets a resume-link email |
| Jacob submits | `POST` to n8n Workflow A's webhook | Markdown to Drive + email to Shayne with the Drive link |
| Submit fails | Fallback: downloads `.md` + opens pre-filled mailto | Jacob can still get the data across |

## Editing questions later

All content is in `index.html`. To change a question:

- Find the `<template x-if="currentStep === N">` block.
- Edit labels/options inline.
- **New field?** Also add it to `state.sN` in `intake()` near the bottom, or it won't persist.
- Want it in the email? Add it to `toMarkdown()`.
- Want it on the review screen? Add it to `sectionData(n)`.
- Required for the build clock? Add it to `isSectionComplete(n)` **and** `requiredCount(n)` — both, or the progress banner and the submit gate disagree.

No build step. Commit and redeploy.

## Notes

- Drafts live in KV for 90 days keyed by random UUID. Not enumerable — retrievable only by someone with the URL.
- The submit endpoint is the n8n production webhook, also unguessable.
- Section 15 asks Jacob to confirm in writing that every name on his past-customer list is a genuine customer. That question is there because Google's review-solicitation policy is strict and violating it can suspend the whole profile. Don't remove it.
