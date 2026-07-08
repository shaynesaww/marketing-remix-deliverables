# Megha Bhouraskar — Navigable Deliverables Site

**Date:** 2026-07-08
**Location:** `marketing-remix-deliverables/Megha/`
**Status:** Design approved, ready for implementation plan

## Problem

The Megha deliverables consist of three standalone HTML pages that share one editorial
design system but cannot reach each other. There is no front door and no way to move
between documents. A client landing on any one page is stuck in isolation.

Current files:

| File | Page title | Notes |
|------|-----------|-------|
| `Megha/first-look/index.html` | "A Platform Built Around You" | Already at a clean URL |
| `Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html` | "The Build Plan, From Here to Launch" | Loose file, long name |
| `Megha/Megha-Bhouraskar_Offer-and-Lead-Magnets_2026-07-03.html` | "The Offer, and the Doorway In" | Loose file, long name |

Each page has a fixed left sidebar (brand mark → in-page section TOC → footer) that
collapses to a toggle button under 1080px. That sidebar is the per-page navigation for
sections *within* a page.

## Goal

Turn the three isolated pages into one cohesive, navigable mini-site:

1. A **homepage** at `/Megha/` that acts as the cover / contents page.
2. **Cross-page navigation on every page** so the client can jump between the three
   documents (and home) from anywhere.
3. **Clean URLs** for all three documents.

## Design

### 1. Clean URL structure

```
/Megha/                ← NEW homepage ("cover / contents" page)
/Megha/first-look/     ← The Vision       (unchanged path)
/Megha/offer/          ← The Offer        (moved from the loose .html)
/Megha/build-plan/     ← The Build Plan   (moved from the loose .html)
```

- Move `Megha-Bhouraskar_Build-Plan-and-Investment.html` → `build-plan/index.html`.
- Move `Megha-Bhouraskar_Offer-and-Lead-Magnets_2026-07-03.html` → `offer/index.html`.
- Leave a **redirect stub** at the old **Offer** filename (meta-refresh + JS redirect + a
  visible fallback link) so any link already shared with the client still resolves.
  Self-contained; requires no Vercel config change.
- The **Build Plan** file is currently untracked in git, so its loose URL was never deployed
  to Vercel and could not have been shared — **no redirect stub needed** for it; the file is
  simply moved into `build-plan/index.html`.

### 2. Navigation model — extend the existing sidebar

Chosen approach: add cross-page navigation into the left rail that already exists on every
page, rather than introduce a second (top-bar) nav chrome.

- Add a **"The Documents"** group (`.doc-nav`) at the top of each document page's sidebar,
  directly under the brand mark and above the existing in-page `nav.toc`.
- Group entries, in journey order: **Overview** (home) · **The Vision** · **The Offer** ·
  **The Build Plan**. The current page is marked `active`.
- `.doc-nav` is a separate block from `nav.toc`, so the existing in-page scrollspy is
  untouched.
- The brand mark's link changes from `#top` to `/Megha/` (home) on all pages.
- Styling uses the existing design tokens (marigold / peacock / rose, Fraunces, Newsreader,
  Spline Sans Mono). Inherits the existing mobile collapse behavior for free.

Hierarchy the client experiences: **top of left rail = jump between documents; below =
jump within this document.**

### 3. Homepage (`/Megha/index.html`)

A warm "cover page" for the bound proposal, matching the documents exactly (paper
background, Fraunces display type, marigold/peacock/rose accents, reveal-on-scroll).

Layout:

- Brand header: `M` glyph + "Megha Bhouraskar" + "Prepared by Marketing Remix".
- Hero: mono eyebrow ("Prepared for you"), a large Fraunces title, one warm lead line in
  the letter voice used across the documents.
- Three **document cards** in journey order, each accented a different brand color:
  - `01 · The Vision` (marigold) → `first-look/` — "A platform built around you."
  - `02 · The Offer` (peacock) → `offer/` — "The offer, and the doorway in."
  - `03 · The Build Plan` (rose) → `build-plan/` — "From here to launch."
  - Each card: number/eyebrow, title, one-line description, "Open →".
- Footer matching the document pages.

The homepage is a **full-width landing** (top brand header + hero + cards + footer) — it
does **not** use the fixed left sidebar or an in-page section TOC. The three cards are the
navigation.

**Sequence (both cards and sidebar):** Vision → Offer → Build Plan.

### 4. Edits to existing pages (additive only)

For each of the three document pages:

- Inject the `.doc-nav` block into the sidebar.
- Add the `.doc-nav` CSS (using existing tokens).
- Repoint the brand mark `href` to `/Megha/`.

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

## Success criteria

- `/Megha/` renders a cohesive cover page linking to all three documents.
- From any document page, the client can reach the other two documents and the homepage.
- All three documents live at clean URLs; old URLs redirect to the new ones.
- Design is visually indistinguishable in style from the existing documents.
- Mobile behavior (sidebar toggle) still works on all pages.
