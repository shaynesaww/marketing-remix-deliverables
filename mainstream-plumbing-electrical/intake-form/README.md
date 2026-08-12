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

## Verification

**2026-08-07, headless Chromium**

- All 15 sections render, correct headings and step indexes
- Review screen: 15 rows in 4 groups, exactly 9 marked Required
- `requiredComplete` is `false` on an empty form and `true` once all 9 required sections are filled
- `requiredCount()` tallies: 1→7/7, 4→4/4, 5→3/3, 7→7/7, 9→1/1, 10→3/3, 13→8/8, 14→1/1, 15→6/6
- `toMarkdown()` emits all 15 sections and round-trips real values
- 0 console errors

**2026-08-10, re-verified before deploy — three clone bugs found and fixed**

The 8/7 pass measured overflow on the welcome screen only, so it reported 0px and missed a real defect on every section screen. Full sweep of steps 0-17 this time.

| # | Bug | Fix |
|---|---|---|
| 1 | Review banner read "Sections **1, 7, 9, 10, and 13** are required" — ECS's list, hardcoded. The submit gate actually checks nine sections, so Jacob would have filled five, seen the button stay locked, and had no idea why. | Banner now derives from `requiredSections`, so it can't drift again. |
| 2 | "Back" on the review screen called `goTo(13)` — ECS's last section. Landed Jacob on SMS registration instead of Review engine. | Now `goTo(totalSections)`. |
| 3 | `.nav-footer` overflowed the viewport at 390px on **every** section screen: 5px normally, 20px on §15 where the button reads "Review". Flex items at `min-width:auto` refused to shrink. Jacob is being sent this on his phone. | `flex-wrap: wrap` + `min-width: 0` on the footer and its right group. Buttons wrap instead of pushing the page sideways. |

Re-verified after the fixes: **0px horizontal overflow across all 18 steps at 390px**, required gate flips correctly across all nine sections, submit button enables, `toMarkdown()` still emits 15 sections with real values.

Not yet verified (needs the deploy): the KV draft round-trip and the two n8n webhooks.

### Known cosmetic wart

On §15 the primary button reads "Review" and sits next to the secondary "Review" jump-link, so the word appears twice. Pre-existing pattern inherited from ECS. Harmless; worth a rename if it ever bothers anyone.

---

## What goes to whom

| Event | Endpoint | Result |
|---|---|---|
| Any keystroke (500ms debounce) | localStorage (`mainstream-intake-draft`) | Survives close/refresh/reboot on the same device |
| Any keystroke (3.5s idle) **and** every section advance | `POST /api/save-draft` (no `notify`) | Draft mirrored to KV, resume link shown on the page. **No email sent.** |
| Tab closed mid-debounce | `POST /api/save-draft` with `keepalive` on `pagehide` | Last-ditch flush so the final edits aren't lost |
| Jacob clicks "Send link" | `POST /api/save-draft` with `notify: true` → n8n Workflow B | Resume-link email, **only if the workflow actually returns 2xx** |
| Jacob submits | `POST` to n8n Workflow A's webhook | Markdown to Drive + email to Shayne with the Drive link |
| Submit fails | Fallback: downloads `.md` + opens pre-filled mailto | Jacob can still get the data across |

## Draft persistence — the design

Two independent copies, and **neither depends on Jacob remembering to press anything.**

**Local (localStorage).** Written 500ms after any change to an answer, the current section, or the email field. No expiry. Powers the "Saved 3m ago" header indicator. Restores to the exact section on return.

**Cloud (Upstash Redis).** Written 3.5s after the user stops typing, and immediately on every section advance. Keyed by a random UUID with a **90-day TTL**; every later save reuses the same `draftId`, so one draft is one record that gets overwritten rather than a pile of copies.

Guards, all deliberate:

- **`isDirty()`** compares state against a snapshot taken *after* init hydrates. Merely opening the form creates nothing, the call pre-fills ($78, Home Service Club) don't count as input, and a freshly resumed draft doesn't immediately re-save itself.
- **Single in-flight request.** Anything that lands mid-request sets `_cloudPending` and re-runs after, so fast typing can't stack requests.
- **Cloud failures are silent.** The local copy is already safe; an error banner on every keystroke would read as a broken form. Failure is tracked in `cloudError`, not shouted.
- **`notify` is absent on every auto-save.** This is what stops a form that saves every few seconds from emailing someone every few seconds.

**The resume link is shown on the page** as soon as the first cloud save lands, with a Copy button and a "text this to yourself" prompt. That path works even when email delivery is broken, which is why it exists.

### Why `emailed` is in the response

`fetch` does not reject on 4xx/5xx. The original code called the n8n webhook fire-and-forget and never checked `res.ok`, so an **inactive** n8n workflow returned 404, nothing threw, nothing logged, the endpoint returned 200, and the user was told *"Sent. Check your email."* while no email existed. `save-draft` now checks `hookRes.ok` and returns `{ emailed, emailError }`; the UI only claims success when the mail workflow actually confirmed it, and otherwise points at the on-page link.

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
