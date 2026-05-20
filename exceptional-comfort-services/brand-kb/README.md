# ECS Brand Knowledge Base

This folder is the **source of truth** for everything we write for Exceptional Comfort Services — website copy, social posts, blog posts, emails, ads, GBP posts, review responses, anything.

Owner of the voice: Steven Tibball. Built from the May 18, 2026 onboarding call.

---

## How this folder is organized

```
brand/
├── README.md                       ← you are here
├── _source-of-truth.md             ← master combined view (everything below in one file)
├── steven-voice-profile.md         ← canonical voice doc (HOW to write)
│
├── 00-core/         identity, audience, guardrails
├── 01-story/        Steven's history, founding story, family
├── 02-services/     one file per service offered
├── 03-customer-stories/   real moments, 12 of them, each a stand-alone atom
├── 04-positioning/  why-us angles + the "fire" topics (capped use)
├── 05-trust-signals/ credentials, certifications, memberships, testimonials
├── 06-faq/          FAQ master file
└── 07-recipes/      playbooks for assembling pages and posts from the KB
```

Two views of the same content:

- **Modular atoms** — each story, value, service is its own short file with YAML frontmatter, tagged by theme and surface. Easy to update one thing without touching others. This is the authoritative source.
- **Combined views** — every subfolder has an `_all.md` that concatenates its atoms. The top-level `_source-of-truth.md` concatenates everything. Use these for one-shot reading, sending to Steven, or feeding to an LLM as a single blob.

When you edit, edit the atoms. The combined files are rebuilt to match.

---

## How to use this KB

### Writing a website page
1. Open `07-recipes/website-page-recipes.md`.
2. Find the recipe for the page you're writing.
3. Pull the atoms it lists.
4. Draft the copy in Steven's voice.
5. Run the 5-question test from `steven-voice-profile.md`.
6. Strip AI tells per the anti-ai-application memory entry.

### Writing a social post
1. Open `07-recipes/social-posts-bank.md`.
2. Steven copy-pastes one of the 30+ ready captions and pairs with his image.
3. For fresh on-demand posts (Shayne's tool), pick a recipe from `07-recipes/social-posts-bank.md` and pull a matching atom from `03-customer-stories/` or `04-positioning/`.

### Writing anything else (email, ad, blog)
1. Check `07-recipes/` for the relevant playbook.
2. Pull tagged atoms.
3. Voice pass. Anti-AI strip.

---

## Atom file format

Every atom uses this frontmatter at the top:

```yaml
---
title: Short descriptive title
category: customer-story | positioning | service | trust | faq | story | core
themes: [integrity, family, pricing, technical-depth, fire, holiday, ...]
surfaces: [homepage, about, service-ac-repair, social-instagram, social-facebook, blog-seed, ad-cold-traffic, ...]
quote: "(optional) one knockout Steven quote that captures the atom"
sensitivity: greenlit | customer-named | off-limits
length_words: ~150
status: ready | draft | needs-info
last_updated: 2026-05-20
---
```

Query the KB by `category`, `themes`, `surfaces`, or `sensitivity`. That's the whole game.

---

## What feeds this KB

Primary source: `../onboarding/_transcript-raw.txt` (the May 18 call, full Gemini transcript).

Secondary: `../onboarding/onboarding-call-extracted-2026-05-18.md` (extracted Q&A with quotes).

Operational truth (license #s, exact service area, vendors): `../onboarding/steven-intake-document.md` once Steven fills it.

Roadmap of pages this KB feeds: `../onboarding/post-launch-roadmap.md`.

---

## What's NOT in this KB

- Real customer testimonials (need to be collected from past customers).
- Anything the intake doc hasn't supplied yet (specific license numbers, BBB rating, etc.). Trust-signal placeholders flag the gaps.
- Blog post drafts (KB feeds them; we write them on demand).
- The on-demand generator skill (planned next phase).
