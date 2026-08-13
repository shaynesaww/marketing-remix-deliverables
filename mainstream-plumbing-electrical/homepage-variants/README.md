# Mainstream Plumbing and Electrical — three homepage directions

Client decision prototype. Not a live site, not indexed.

**Six looks, three directions, each in light and dark.** Every one has its own URL, so any single view can be sent on its own.

| | Light | Dark |
|---|---|---|
| **A — The Constant** | `#/a` | `#/a/dark` |
| **B — Two Trades** | `#/b` | `#/b/dark` |
| **C — Red Clay** | `#/c` | `#/c/dark` |

The pill in the bottom corner switches directions and flips light and dark. It is a prototype control and is not part of the website.

---

## What Jacob is being asked

**Judge the design, not the words.** The copy is identical across all three and it is still a draft. Anything in `[SQUARE BRACKETS AND MONO TYPE]` is a fact we do not have yet, deliberately left visible rather than invented.

The three are different arguments, not different colour schemes:

**A — The Constant.** The price never moves, so the design never moves. Opens on a three row price list where every row ends in the same number, then sets `$78` at the identical size and position four more times down the page while everything around it changes. Every competitor shouts their number once; this one says it five times at the same volume. In dark, `$78` becomes the only thing on the page emitting light.

**B — Two Trades.** The logo already splits navy left and green right, so that becomes the architecture. A painted locate seam runs the page. Before the middle, the two trades bracket you from the outside, water on the left, power on the right. At "a water heater needs electrical," the two lines converge into one, and the services below hang off that single merged line. The thing that separated them becomes the one thing they share. In dark, the seam stops being paint and becomes a lit conduit.

**C — Red Clay.** Leads with the photograph nobody else in Greenville has: face down in Carolina clay with an arm in a hand dug hole. Photographs run full bleed at documentary scale with photo desk captions, and copy never sits on top of an image. The ground colour is sampled from the clay in that photo. In dark it becomes a night shift, and it is arguably the stronger of its two.

---

## Running it

```
npm install
npm run dev        # http://localhost:5399, hot reload
npm run build && npm run preview   # http://localhost:5400
```

No `dev.ps1` mirror here. That script exists in the Santos and Sudz prototypes only to escape the `#` in `##Knowledge Base`, which breaks Vite's module URLs, and the `&` in `Sales & Marketing`, which breaks npm's shim. This path has neither.

## Stack, and why

React + Vite + **Tailwind v3**, matching the AI Studio scaffold, which ships a `tailwind.config.js` (the v3 convention; v4 moved to CSS-first config and drops that file). Handing AI Studio what it already recognises means it rebuilds rather than translates.

- `tailwind.config.js` holds all three palettes, namespaced `a-`, `b-`, `c-`. **It ships with the handoff.** The winner's block stays, the other two get deleted.
- Signature moves that are not utilities live in `src/index.css` under `@layer components`: A's locked constant, B's painted seam and spine, C's documentary photo treatment.
- `/* ===== SECTION: name ===== */` markers run through every variant so the AI Studio prompt split (under 25k chars per prompt) is mechanical.
- Theme is a `data-theme` attribute on `<html>`; `darkMode` is keyed to it.

## Verified

Playwright, all six looks, at 1280 and 390:

- 0px horizontal overflow everywhere
- WCAG AA on every text and background pair in both modes
- Zero em dashes, no roster language, no "family-run", no invented reviews or star ratings
- Reading order is plumbing then electrical in the DOM; B's two column split is CSS only

One fix worth recording: B's electrical label in green measured 3.29:1 against a 4.5:1 requirement, so small green type now uses `b-powerink` while the seam keeps the brand green. The mark stays on brand, the word gets legible.

## Known gaps

- **No SVG logo.** Both rasters fail at small size: `logo-mark.png` still has a white fill inside the ring, `logo-lockup.png` carries black fringing from a rough background key. All three directions set the wordmark in type instead, splitting MAIN and STREAM the way the real logo does. **A vector redraw is now a real blocker**, not a nice-to-have.
- **No photograph of anyone's face.** Five usable images, and two of them hide his face. Direction C gains the most from a photo day.
- No reviews, no star rating, no license numbers, no warranty, no founding date, and no family-run claim. That is nearly all the usual trust furniture, which is why the design is carrying more weight here than it did on ECS.

## Sources

Copy: `Clients/Mainstream Plumbing and Electrical/website-content/drafts/01-homepage.md`
Design: `Clients/Mainstream Plumbing and Electrical/website-design/DESIGN-DIRECTION.md`
Voice: `brand/jacob-voice-profile.md` · Rules: `brand/00-core/guardrails.md`

The four earlier concepts are still in `../homepage-concepts/` and were not touched.
