# Megha Navigable Deliverables Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn three isolated Megha HTML deliverables into one cohesive, navigable mini-site under `megha-bhouraskar/` with a homepage cover page and cross-page navigation on every page.

**Architecture:** Static HTML, no build step. Consolidate all three documents under the lowercase `megha-bhouraskar/` folder with clean URLs. Add a shared "The Documents" nav block into each page's existing left sidebar, and build a new full-width homepage. Preserve the one already-live URL (`/Megha/first-look/`) with a redirect stub.

**Tech Stack:** Plain HTML/CSS/JS. Fonts: Fraunces (display), Newsreader (serif), Spline Sans Mono (mono). Hosted as a Vercel static site (deploys from git `main`). Verification via `grep`/`ls`/`curl` + a browser smoke test (no unit-test framework exists for this static site — that is expected).

## Global Constraints

- Repo root: `C:/Users/shayn/projects/marketing-remix-deliverables/` — all paths below are relative to it.
- Work happens on branch `megha-navigable-site` (already created off `main`). Do not touch `main`.
- End every commit message with the trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- Canonical folder is lowercase `megha-bhouraskar/`. Never reintroduce content under capital `Megha/` except the single redirect stub.
- Do NOT modify any file under `exceptional-comfort-services/`, the repo root `index.html`, or `README.md`.
- Do NOT rewrite the body content of the three documents. Edits to them are additive only (nav block + brand-mark href).
- Cross-page nav links are **absolute**: `/megha-bhouraskar/`, `/megha-bhouraskar/first-look/`, `/megha-bhouraskar/offer/`, `/megha-bhouraskar/build-plan/`.
- Journey order everywhere: **Vision → Offer → Build Plan**.
- Every HTML page keeps `<meta name="robots" content="noindex,nofollow">` where present; the new homepage and stub include it.
- Exact palette (copy verbatim): paper `#F8F1E3`, paper-2 `#FCF7EC`, paper-3 `#FFFCF5`, letter `#FBF3E4`, ink `#2A1F14`, ink-soft `#6E6051`, ink-faint `#9C8C77`, line `#E7DAC4`, line-soft `#F0E7D6`, marigold `#D98A18`, marigold-deep `#A7610F`, marigold-wash `#F7E6C9`, peacock `#136E6B`, peacock-deep `#0B4A48`, peacock-wash `#D8E8E4`, rose `#B23F66`, rose-deep `#8C2F50`, rose-wash `#F3DDE4`.

## File Structure (end state)

```
megha-bhouraskar/
  index.html               ← NEW homepage (Task 3)
  first-look/index.html    ← moved from Megha/first-look/ (Task 1) + nav (Task 2)
  offer/index.html         ← existing, + nav (Task 2)
  build-plan/index.html    ← moved from loose Megha/*.html (Task 1) + nav (Task 2)
Megha/
  first-look/index.html    ← redirect stub → /megha-bhouraskar/first-look/ (Task 1)
```

---

### Task 1: Consolidate the three documents under `megha-bhouraskar/`

Move the Vision and Build Plan into the lowercase folder, and leave a redirect stub at the old live Vision URL. The Offer is already at `megha-bhouraskar/offer/index.html` and does not move.

**Files:**
- Move: `Megha/first-look/index.html` → `megha-bhouraskar/first-look/index.html`
- Move: `Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html` → `megha-bhouraskar/build-plan/index.html`
- Create: `Megha/first-look/index.html` (redirect stub, replacing the moved file)

**Interfaces:**
- Produces the clean URLs later tasks link to: `/megha-bhouraskar/first-look/`, `/megha-bhouraskar/offer/`, `/megha-bhouraskar/build-plan/`.

- [ ] **Step 1: Move the two files into the lowercase folder**

```bash
cd "C:/Users/shayn/projects/marketing-remix-deliverables"
mkdir -p megha-bhouraskar/build-plan
git mv Megha/first-look/index.html megha-bhouraskar/first-look/index.html
mv "Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html" megha-bhouraskar/build-plan/index.html
git add megha-bhouraskar/build-plan/index.html
```

- [ ] **Step 2: Verify the moves landed and old paths are gone**

Run:
```bash
ls megha-bhouraskar/first-look/index.html megha-bhouraskar/offer/index.html megha-bhouraskar/build-plan/index.html
ls "Megha/Megha-Bhouraskar_Build-Plan-and-Investment.html" 2>&1 | head -1
```
Expected: the three `megha-bhouraskar/...` paths list successfully; the loose `Megha/...Build-Plan...html` reports "No such file or directory".

- [ ] **Step 3: Create the redirect stub at the old Vision URL**

Create `Megha/first-look/index.html` with exactly:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Moved · Megha Bhouraskar</title>
<meta name="robots" content="noindex,nofollow">
<link rel="canonical" href="/megha-bhouraskar/first-look/">
<meta http-equiv="refresh" content="0; url=/megha-bhouraskar/first-look/">
<script>location.replace("/megha-bhouraskar/first-look/");</script>
<style>body{font-family:Georgia,serif;background:#F8F1E3;color:#2A1F14;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center}a{color:#A7610F}</style>
</head>
<body>
<p>This page has moved.<br><a href="/megha-bhouraskar/first-look/">Continue to The Vision &rarr;</a></p>
</body>
</html>
```

- [ ] **Step 4: Verify the stub points to the new URL**

Run:
```bash
grep -c "/megha-bhouraskar/first-look/" Megha/first-look/index.html
```
Expected: `4` (canonical link, meta refresh, JS redirect, and the visible fallback link each reference the new URL, one per line).

- [ ] **Step 5: Commit**

```bash
git add Megha/first-look/index.html megha-bhouraskar/
git commit -m "Consolidate Megha docs under megha-bhouraskar/ + redirect stub for old Vision URL"
```

---

### Task 2: Add the shared "The Documents" nav to all three document pages

Each page gets: (a) the `.doc-nav` CSS block appended to its `<style>`, (b) the `.doc-nav` markup inserted right after its brand-mark link, (c) its brand-mark `href` repointed to the homepage, (d) `.is-active`/`aria-current` on its own entry.

**Files:**
- Modify: `megha-bhouraskar/first-look/index.html`
- Modify: `megha-bhouraskar/offer/index.html`
- Modify: `megha-bhouraskar/build-plan/index.html`

**Interfaces:**
- Consumes the clean URLs produced by Task 1.
- Produces a `.doc-nav` block on every doc page linking to `/megha-bhouraskar/` + the three docs.

The three edits are identical except for which link carries `is-active`. Apply this CSS block and markup to **each** of the three files.

- [ ] **Step 1: Append the `.doc-nav` CSS to each page**

In each of the three files, insert this block immediately **before** the closing `</style>` tag (present in all three):
```css
  /* ===== cross-page document nav ===== */
  .doc-nav{display:flex;flex-direction:column;gap:2px;margin-bottom:8px;padding-bottom:16px;border-bottom:1px solid var(--line)}
  .doc-nav .dn-eyebrow{font-family:var(--mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink-faint);padding:0 2px 9px}
  .doc-nav a{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink-soft);font-family:var(--display);font-weight:500;font-size:15.5px;line-height:1.3;padding:8px 12px;border-radius:9px;border:1px solid transparent;transition:all .2s ease}
  .doc-nav a .di{color:var(--marigold);font-size:8px;opacity:.4;transition:opacity .2s ease}
  .doc-nav a:hover{color:var(--ink);background:var(--paper-3);border-color:var(--line-soft)}
  .doc-nav a:hover .di{opacity:.8}
  .doc-nav a.is-active{color:var(--marigold-deep);background:var(--marigold-wash);font-weight:600}
  .doc-nav a.is-active .di{opacity:1;color:var(--marigold-deep)}
```

- [ ] **Step 2: Insert the `.doc-nav` markup + repoint the brand mark**

In each file, the sidebar begins with a brand-mark line of the form:
```html
    <a class="brandmark" href="#top"><span class="glyph">M</span><span class="bt">...<b>Megha Bhouraskar</b></span></a>
```
Do two things to that line and immediately after it:

1. Change `href="#top"` on that `<a class="brandmark" ...>` to `href="/megha-bhouraskar/"` (leave the inner `<span>`s unchanged).
2. Insert this block on the next line, directly **after** the brand-mark `</a>`:
```html
    <nav class="doc-nav" aria-label="Documents">
      <span class="dn-eyebrow">The Documents</span>
      <a href="/megha-bhouraskar/"><span class="di">&#9670;</span>Overview</a>
      <a href="/megha-bhouraskar/first-look/"><span class="di">&#9670;</span>The Vision</a>
      <a href="/megha-bhouraskar/offer/"><span class="di">&#9670;</span>The Offer</a>
      <a href="/megha-bhouraskar/build-plan/"><span class="di">&#9670;</span>The Build Plan</a>
    </nav>
```

- [ ] **Step 3: Mark the active entry per page**

Add `class="is-active" aria-current="page"` to the one link matching the current page:
- In `megha-bhouraskar/first-look/index.html` → the `href="/megha-bhouraskar/first-look/"` link becomes:
  `<a href="/megha-bhouraskar/first-look/" class="is-active" aria-current="page"><span class="di">&#9670;</span>The Vision</a>`
- In `megha-bhouraskar/offer/index.html` → the `href="/megha-bhouraskar/offer/"` link becomes:
  `<a href="/megha-bhouraskar/offer/" class="is-active" aria-current="page"><span class="di">&#9670;</span>The Offer</a>`
- In `megha-bhouraskar/build-plan/index.html` → the `href="/megha-bhouraskar/build-plan/"` link becomes:
  `<a href="/megha-bhouraskar/build-plan/" class="is-active" aria-current="page"><span class="di">&#9670;</span>The Build Plan</a>`

- [ ] **Step 4: Verify each page has the nav, one active entry, and no leftover `#top` brand link**

Run:
```bash
for f in first-look offer build-plan; do
  p="megha-bhouraskar/$f/index.html"
  echo "== $p =="
  echo "doc-nav links: $(grep -c 'class="doc-nav"' "$p") block, $(grep -oE '/megha-bhouraskar/(first-look|offer|build-plan)?/?"' "$p" | grep -c megha) doc links total"
  echo "is-active count: $(grep -c 'is-active' "$p")"
  echo "brandmark href to home: $(grep -c 'class="brandmark" href="/megha-bhouraskar/"' "$p")"
  echo "leftover #top brandmark: $(grep -c 'class="brandmark" href="#top"' "$p")"
done
```
Expected for each page: `doc-nav links: 1 block`; `is-active count: 1`; `brandmark href to home: 1`; `leftover #top brandmark: 0`.

- [ ] **Step 5: Commit**

```bash
git add megha-bhouraskar/first-look/index.html megha-bhouraskar/offer/index.html megha-bhouraskar/build-plan/index.html
git commit -m "Add shared cross-page document nav to all three Megha pages"
```

---

### Task 3: Build the homepage cover page

A new full-width landing at `/megha-bhouraskar/` — brand header, hero, three journey-ordered document cards, footer, reveal-on-scroll. No sidebar.

**Files:**
- Create: `megha-bhouraskar/index.html`

**Interfaces:**
- Consumes the three clean URLs from Task 1; links to them from the cards.

- [ ] **Step 1: Create `megha-bhouraskar/index.html`**

Create the file with exactly this content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Deliverables · Megha Bhouraskar</title>
<meta name="description" content="Everything Marketing Remix has mapped for Megha Bhouraskar — the vision, the offer, and the build plan, in one place.">
<meta name="robots" content="noindex,nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,500;1,9..144,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Spline+Sans+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#F8F1E3;--paper-2:#FCF7EC;--paper-3:#FFFCF5;--letter:#FBF3E4;
    --ink:#2A1F14;--ink-soft:#6E6051;--ink-faint:#9C8C77;
    --line:#E7DAC4;--line-soft:#F0E7D6;
    --marigold:#D98A18;--marigold-deep:#A7610F;--marigold-wash:#F7E6C9;
    --peacock:#136E6B;--peacock-deep:#0B4A48;--peacock-wash:#D8E8E4;
    --rose:#B23F66;--rose-deep:#8C2F50;--rose-wash:#F3DDE4;
    --shadow:0 1px 2px rgba(70,45,15,.04), 0 10px 34px -14px rgba(70,45,15,.18);
    --shadow-lg:0 2px 8px rgba(70,45,15,.06), 0 28px 64px -24px rgba(70,45,15,.30);
    --r:16px;--maxw:1080px;
    --serif:"Newsreader",Georgia,serif;--display:"Fraunces",Georgia,serif;--mono:"Spline Sans Mono",ui-monospace,monospace;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--serif);font-size:18.5px;line-height:1.72;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;position:relative;overflow-x:hidden;min-height:100vh}
  body::before{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");mix-blend-mode:multiply;opacity:.6}
  body::after{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(1000px 560px at 82% -6%, rgba(217,138,24,.12), transparent 60%),radial-gradient(820px 520px at -4% 2%, rgba(19,110,107,.07), transparent 55%),radial-gradient(700px 600px at 50% 108%, rgba(178,63,102,.05), transparent 60%)}
  ::selection{background:var(--marigold-wash);color:var(--ink)}
  .page{position:relative;z-index:1;max-width:var(--maxw);margin:0 auto;padding:0 40px 120px}
  header.top{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:34px 0 0;flex-wrap:wrap}
  .brandmark{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink)}
  .brandmark .glyph{width:44px;height:44px;flex:none;border-radius:11px;display:grid;place-items:center;background:linear-gradient(140deg,var(--marigold),var(--marigold-deep));color:#fff;font-family:var(--display);font-weight:600;font-size:24px;box-shadow:var(--shadow)}
  .brandmark .bt{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);line-height:1.4}
  .brandmark .bt b{display:block;color:var(--ink);font-weight:500;letter-spacing:.06em;font-size:13px}
  header.top .prepared{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--peacock-deep)}
  .hero{padding:76px 0 20px}
  .hero .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--marigold-deep);display:flex;align-items:center;gap:10px;margin-bottom:22px}
  .hero .eyebrow::before{content:"\25C6";font-size:9px;color:var(--marigold)}
  .hero h1{font-family:var(--display);font-weight:500;font-optical-sizing:auto;font-size:clamp(44px,7vw,84px);line-height:.98;letter-spacing:-.025em;margin:0 0 26px;color:var(--ink);max-width:16ch}
  .hero h1 em{font-style:italic;color:var(--marigold-deep)}
  .hero .sub{font-size:21px;line-height:1.55;color:var(--ink-soft);max-width:54ch}
  .contents-label{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-faint);margin:64px 0 20px;display:flex;align-items:center;gap:14px}
  .contents-label::after{content:"";flex:1;height:1px;background:var(--line)}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .card{position:relative;display:flex;flex-direction:column;gap:14px;text-decoration:none;color:var(--ink);background:var(--letter);border:1px solid var(--line);border-radius:var(--r);padding:30px 28px 26px;box-shadow:var(--shadow);overflow:hidden;transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease}
  .card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px}
  .card.c1::before{background:linear-gradient(180deg,var(--marigold),var(--marigold-deep))}
  .card.c2::before{background:linear-gradient(180deg,var(--peacock),var(--peacock-deep))}
  .card.c3::before{background:linear-gradient(180deg,var(--rose),var(--rose-deep))}
  .card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--line-soft)}
  .card .num{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-faint)}
  .card.c1 .num{color:var(--marigold-deep)}
  .card.c2 .num{color:var(--peacock-deep)}
  .card.c3 .num{color:var(--rose-deep)}
  .card h2{font-family:var(--display);font-weight:600;font-size:27px;line-height:1.05;letter-spacing:-.01em;margin:0;color:var(--ink)}
  .card p{margin:0;font-size:16.5px;line-height:1.5;color:var(--ink-soft);flex:1}
  .card .go{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);display:inline-flex;align-items:center;gap:8px;margin-top:4px}
  .card .go .ar{transition:transform .25s ease}
  .card:hover .go .ar{transform:translateX(5px)}
  footer.foot{margin-top:70px;padding-top:22px;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint)}
  footer.foot a{color:var(--ink-soft);text-decoration:none}
  footer.foot a:hover{color:var(--marigold-deep)}
  .reveal{opacity:0;transform:translateY(20px);transition:opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
  @media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}
  @media (max-width:860px){
    .cards{grid-template-columns:1fr}
    .page{padding:0 24px 90px}
    .hero{padding:56px 0 16px}
  }
</style>
</head>
<body>
<div class="page">
  <header class="top">
    <a class="brandmark" href="/megha-bhouraskar/"><span class="glyph">M</span><span class="bt">Your Deliverables<b>Megha Bhouraskar</b></span></a>
    <span class="prepared">Prepared by Marketing Remix</span>
  </header>

  <section class="hero">
    <div class="eyebrow reveal">Prepared for you</div>
    <h1 class="reveal">Everything, <em>in one place.</em></h1>
    <p class="sub reveal">Three pieces of the same picture &mdash; the vision we're building toward, the offer at the heart of it, and the plan to bring it to life. Start anywhere; they're meant to be read together.</p>
  </section>

  <div class="contents-label reveal">The Documents</div>
  <div class="cards">
    <a class="card c1 reveal" href="/megha-bhouraskar/first-look/">
      <span class="num">01 &middot; The Vision</span>
      <h2>A Platform Built Around You</h2>
      <p>What you're really building, who it's for, and why it has to feel unmistakably like you.</p>
      <span class="go">Open <span class="ar">&rarr;</span></span>
    </a>
    <a class="card c2 reveal" href="/megha-bhouraskar/offer/">
      <span class="num">02 &middot; The Offer</span>
      <h2>The Offer &amp; the Doorway In</h2>
      <p>The one idea, the three tiers, and how the whole thing quietly sorts the right people to the right place.</p>
      <span class="go">Open <span class="ar">&rarr;</span></span>
    </a>
    <a class="card c3 reveal" href="/megha-bhouraskar/build-plan/">
      <span class="num">03 &middot; The Build Plan</span>
      <h2>From Here to Launch</h2>
      <p>Everything it takes to build it, month by month &mdash; and exactly what the investment looks like.</p>
      <span class="go">Open <span class="ar">&rarr;</span></span>
    </a>
  </div>

  <footer class="foot">
    <span>Marketing Remix &middot; Prepared for Megha Bhouraskar</span>
    <a href="mailto:shayne@shaynechamplin.com">shayne@shaynechamplin.com</a>
  </footer>
</div>
<script>
  const rev=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rev.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>rev.observe(el));
  document.querySelectorAll('.hero .reveal').forEach((el,i)=>{setTimeout(()=>el.classList.add('in'),140+i*120);});
</script>
</body>
</html>
```

- [ ] **Step 2: Verify the homepage has all three card links in journey order**

Run:
```bash
grep -oE '/megha-bhouraskar/(first-look|offer|build-plan)/' megha-bhouraskar/index.html
```
Expected, in this order:
```
/megha-bhouraskar/first-look/
/megha-bhouraskar/offer/
/megha-bhouraskar/build-plan/
```

- [ ] **Step 3: Commit**

```bash
git add megha-bhouraskar/index.html
git commit -m "Add Megha deliverables homepage cover page"
```

---

### Task 4: End-to-end verification in a browser

Confirm the whole thing is actually navigable — homepage → each doc, cross-page nav between docs, active highlighting, the redirect, and mobile.

**Files:** none (verification only).

- [ ] **Step 1: Serve the repo locally from its root**

```bash
cd "C:/Users/shayn/projects/marketing-remix-deliverables"
python -m http.server 8000
```
(Run in the background; absolute `/megha-bhouraskar/...` links resolve only when served from the repo root.)

- [ ] **Step 2: Smoke-test the redirect and page availability with curl**

Run:
```bash
curl -s http://localhost:8000/megha-bhouraskar/ | grep -o "<title>[^<]*</title>"
curl -s http://localhost:8000/megha-bhouraskar/first-look/ | grep -c 'class="doc-nav"'
curl -s http://localhost:8000/megha-bhouraskar/offer/ | grep -c 'class="doc-nav"'
curl -s http://localhost:8000/megha-bhouraskar/build-plan/ | grep -c 'class="doc-nav"'
curl -s http://localhost:8000/Megha/first-look/ | grep -o 'url=/megha-bhouraskar/first-look/'
```
Expected: homepage title `Your Deliverables · Megha Bhouraskar`; each doc prints `1`; the old URL prints `url=/megha-bhouraskar/first-look/` (redirect present).

- [ ] **Step 3: Browser click-through (use the claude-in-chrome tools or the `run` skill)**

Load `http://localhost:8000/megha-bhouraskar/` and verify by clicking:
- Each of the three cards opens the correct document.
- On each document, the sidebar "The Documents" group shows 4 links, the current page is highlighted (marigold), and clicking the other entries navigates correctly.
- The brand mark returns to the homepage.
- Loading `http://localhost:8000/Megha/first-look/` redirects to `/megha-bhouraskar/first-look/`.
- Narrow the viewport below 1080px: the sidebar collapses to the "Contents ▾" toggle, and opening it reveals the document nav.

Expected: every check passes. If any fails, fix the relevant file and re-run Task 4.

- [ ] **Step 4: Stop the server**

Stop the background `python -m http.server` process.

---

## Post-plan: finishing the branch

After all four tasks pass, use `superpowers:finishing-a-development-branch` to decide how to integrate `megha-navigable-site` (merge to `main` / open a PR). Deploying to Vercel happens by landing on `main`, which auto-deploys.

## Self-Review (author)

- **Spec coverage:** consolidation under `megha-bhouraskar/` (Task 1) ✓; homepage (Task 3) ✓; cross-page nav on every page (Task 2) ✓; redirect for old live URL (Task 1) ✓; absolute links (Tasks 2–3) ✓; journey order (Tasks 2–3) ✓; Offer stays put / no content rewrite (respected) ✓; mobile behavior (Task 4 check) ✓.
- **Placeholder scan:** no TBD/TODO; all created files show full content; all edits show exact strings.
- **Type/name consistency:** `.doc-nav`, `.dn-eyebrow`, `.di`, `.is-active` used consistently across CSS (Task 2 Step 1), markup (Step 2), and verification (Step 4). Homepage classes (`.card.c1/.c2/.c3`, `.reveal`) consistent between CSS and markup.
