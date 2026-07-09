# Megha Bhouraskar — Navigable Deliverables Site

**Date:** 2026-07-08 (revised 2026-07-09 after discovering the real folder layout)
**Location:** `marketing-remix-deliverables/megha-bhouraskar/`
**Status:** Design approved, ready for implementation plan

## Problem

The Megha deliverables are three standalone HTML pages that share one editorial design
system but cannot reach each other. There is no front door and no way to move between
documents. On top of that, the three files are **split across two inconsistent top-level
folders**, and one is not even committed:

| Document | Current path | Tracked / deployed? | Current live URL |
|----------|--------------|---------------------|------------------|
| **Vision** — "A Platform Built Around You" | `Megha/first-look/index.html` | tracked | `/Megha/first-look/` |
| **Offer** — "The Offer & The Doorway" | `megha-bhouraskar/offer/index.html` | tracked | `/megha-bhouraskar/offer/` |
| **Build Plan** — "The Build Plan" | `Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html` | untracked | not deployed |

The repo README convention is "all lowercase, words separated by hyphens" (e.g.
`exceptional-comfort-services`). The lowercase `megha-bhouraskar/` folder already follows
it; the capital `Megha/` folder does not.

Each page has a fixed left sidebar (brand mark → in-page section TOC → footer) that
collapses to a toggle under 1080px. That sidebar is the per-page navigation for sections
*within* a page.

## Goal

Turn the three isolated, split pages into one cohesive, navigable mini-site under a single
lowercase folder:

1. Consolidate all three documents under `megha-bhouraskar/` with clean URLs.
2. A **homepage** at `/megha-bhouraskar/` that acts as the cover / contents page.
3. **Cross-page navigation on every page** so the client can jump between the three
   documents (and home) from anywhere.
4. Preserve any already-shared URL via redirects.

## Decisions locked

- Canonical folder: **`megha-bhouraskar/`** (lowercase).
- Ship the **committed** Offer (`megha-bhouraskar/offer/index.html`) as-is. (A newer loose
  copy existed earlier but was never committed and is gone; treated as out of scope.)
- Shared nav uses **absolute** links (`/megha-bhouraskar/...`), not relative `../` links, to
  stay correct regardless of trailing-slash behavior on clean URLs.

## Design

### 1. Target file structure

```
megha-bhouraskar/
  index.html               ← NEW homepage ("cover / contents" page)
  first-look/index.html    ← MOVED from Megha/first-look/index.html   → /megha-bhouraskar/first-look/
  offer/index.html         ← already here (unchanged path)            → /megha-bhouraskar/offer/
  build-plan/index.html    ← MOVED from the untracked loose file      → /megha-bhouraskar/build-plan/
Megha/
  first-look/index.html    ← REPLACED with a redirect stub → /megha-bhouraskar/first-look/
```

Moves and cleanup:

- `git mv Megha/first-look/index.html megha-bhouraskar/first-look/index.html` (Vision).
- Move the untracked `Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html` →
  `megha-bhouraskar/build-plan/index.html` (Build Plan).
- Leave a **redirect stub** at `Megha/first-look/index.html` (meta-refresh + JS redirect +
  a visible fallback link → `/megha-bhouraskar/first-look/`), because that URL is live and
  may have been shared. Self-contained; no Vercel config change.
- The Offer stays at `megha-bhouraskar/offer/index.html` — **no redirect needed**.
- The Build Plan was never deployed — **no redirect needed** beyond the move.
- After the move, the only thing left in `Megha/` is the `first-look` redirect stub.

### 2. Navigation model — extend the existing sidebar

Add cross-page navigation into the left rail that already exists on every document page,
rather than introduce a second (top-bar) nav chrome.

- Add a **"The Documents"** group (`.doc-nav`) at the top of each document page's sidebar,
  directly under the brand mark and above the existing in-page `nav.toc`.
- Group entries, in journey order, using **absolute** hrefs:
  - Overview → `/megha-bhouraskar/`
  - The Vision → `/megha-bhouraskar/first-look/`
  - The Offer → `/megha-bhouraskar/offer/`
  - The Build Plan → `/megha-bhouraskar/build-plan/`
- The current page's entry gets `aria-current="page"` and an `.is-active` class.
- `.doc-nav` is a separate block from `nav.toc`, so the existing in-page scrollspy is
  untouched.
- The brand mark's link changes from `#top` to `/megha-bhouraskar/` (home) on all pages.
- Styling uses the existing design tokens (marigold / peacock / rose, Fraunces, Newsreader,
  Spline Sans Mono) and inherits the existing mobile collapse behavior.

Hierarchy the client experiences: **top of left rail = jump between documents; below =
jump within this document.**

### 3. Homepage (`/megha-bhouraskar/index.html`)

A warm "cover page" for the bound proposal, matching the documents exactly (paper
background, Fraunces display type, marigold/peacock/rose accents, reveal-on-scroll).

Layout:

- Brand header: `M` glyph + "Megha Bhouraskar" + "Prepared by Marketing Remix".
- Hero: mono eyebrow ("Prepared for you"), a large Fraunces title, one warm lead line in
  the letter voice used across the documents.
- Three **document cards** in journey order, each accented a different brand color:
  - `01 · The Vision` (marigold) → `/megha-bhouraskar/first-look/` — "A platform built around you."
  - `02 · The Offer` (peacock) → `/megha-bhouraskar/offer/` — "The offer, and the doorway in."
  - `03 · The Build Plan` (rose) → `/megha-bhouraskar/build-plan/` — "From here to launch."
  - Each card: number/eyebrow, title, one-line description, "Open →".
- Footer matching the document pages.

The homepage is a **full-width landing** (top brand header + hero + cards + footer) — it
does **not** use the fixed left sidebar or an in-page section TOC. The three cards are the
navigation.

**Sequence (both cards and sidebar):** Vision → Offer → Build Plan.

### 4. Edits to existing document pages (additive only)

For each of the three document pages (first-look, offer, build-plan):

- Inject the `.doc-nav` block into the sidebar (above `nav.toc`).
- Add the `.doc-nav` CSS (using existing tokens).
- Repoint the brand mark `href` to `/megha-bhouraskar/`.
- Set `aria-current`/`.is-active` on this page's own `.doc-nav` entry.

No changes to page content, in-page TOC, or existing animations.

## Design system reference (from the existing pages)

- Fonts: Fraunces (display), Newsreader (serif body), Spline Sans Mono (mono).
- Palette: paper `#F8F1E3`, ink `#2A1F14`, marigold `#D98A18` / deep `#A7610F`,
  peacock `#136E6B` / deep `#0B4A48`, rose `#B23F66` / deep `#8C2F50`, line `#E7DAC4`.
- Layout: `--navw: 262px`, fixed left sidebar, `.main { margin-left: var(--navw) }`.
- Mobile: sidebar collapses under 1080px via `.nav-toggle`; further tuning at 560px.

## Out of scope

- No changes to the other client folder (`exceptional-comfort-services/`).
- No changes to the repo root `index.html` or `README.md`.
- No framework, build step, or backend — this stays a static site.
- No content rewrites inside the three documents.
- Recovering the disappeared newer Offer copy (user confirmed shipping the committed one).

## Success criteria

- `/megha-bhouraskar/` renders a cohesive cover page linking to all three documents.
- From any document page, the client can reach the other two documents and the homepage.
- All three documents live at clean URLs under `megha-bhouraskar/`.
- The old `/Megha/first-look/` URL redirects to `/megha-bhouraskar/first-look/`.
- Design is visually indistinguishable in style from the existing documents.
- Mobile behavior (sidebar toggle) still works on all document pages.
