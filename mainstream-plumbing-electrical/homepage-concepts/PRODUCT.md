# Mainstream Plumbing and Electrical — Homepage

Three homepage concepts for a dual-trade service company in Greenville, South Carolina. The client picks one; the winner becomes the design system for fourteen more pages.

> **Source note.** This file was not built from a cold interview. It is written from a 33-atom brand knowledge base mined from a 53-minute onboarding call with the owner on 2026-08-04, plus a five-file dual-trade SEO study of the Greenville market. Four build decisions (copy strategy, structural strategy, build home, platform fidelity) were put to the project owner through a structured question round before this file existed. Anything inferred rather than sourced is labeled inline.

## Platform

web

## Stack

Plain static HTML and CSS. One folder per concept, no framework, no build step.

This is not a preference, it is a downstream constraint: the finished site lives in GoHighLevel's native website builder, which accepts **body-only HTML pasted under a 50,000 character cap** and will not reliably reproduce framework output, animated SVG, or JavaScript widgets through its AI builder. Anything exotic has to survive as an isolated Custom Code block or it does not ship.

Self-hosted typefaces. No CDN dependency.

## Users

Two buyers arrive on this page and they are not the same person. The page has to serve both without pretending otherwise.

**The emergency.** No hot water, a sewer backing up into the house, a dead panel. Standing in a kitchen with water on the floor, phone in hand, choosing between four names in a search result they are not really reading. They convert on speed and a live human voice. Every second of scroll between them and a tappable phone number costs a call.

**The planned job.** Water heater replacement, a repipe, a panel upgrade, a generator, an EV charger. They have time, they are collecting three quotes, and a meaningful share of them are gun-shy because a contractor already burned them. They convert on being the one honest quote in the stack. The question they are actually asking is *how do I know I am not being sold something I do not need.*

The owner could not answer a demographic question about his ideal customer. He named a person instead, and defined him by how he treats Jacob rather than by ticket size or ZIP code. That matters for register: "get a quote in 30 seconds" is the wrong voice for this business.

## Positioning

The differentiator is not the trade combination. Every Tier 1 operator in Greenville is multi-trade, and the SEO study found that breadth is part of why the largest of them are losing the Map Pack. Leading with breadth puts Mainstream in the same sentence as the companies it is competing against.

Four things a competitor cannot copy by writing better copy:

1. **Nobody works on commission.** Everyone is hourly, including the owner, who was writing about two million dollars a year on the sales side of another plumbing company before he quit and started this one. This is the strongest asset on the page because it is a fact about compensation structure rather than a promise about behavior. Arithmetic is checkable in a way character is not.
2. **$78 to come out, and it does not change after hours.** Competitors charge around $250 and add a night premium. Nobody in this market publishes a service call fee at all. The frame is not "we are cheap," it is *we do not charge you extra for having a bad night.* The client interrupted the onboarding call to insist this appear on the site.
3. **The owner runs every call.** Jacob is the only person in the field. At 2am the person who answers the phone is the person who drives the truck and performs the diagnosis. There is no dispatcher and no answering service. A "24/7" badge is worthless in this market because every competitor has one and, by the owner's direct account, three of them did not answer a homeowner at 2am.
4. **One truck, one technician, both trades, one visit.** The origin is mundane and therefore believable: a water heater needs electrical, and he got tired of calling an electrician every time he set one. The big shops send a plumber and then schedule an electrician for Thursday.

The brand's central sentence, said out loud by the owner and not to be stylized into a slogan:

> "Someone that will sit at the table with you. And listen to not only your problems with your plumbing, but listen to your life problems."

## Capabilities and Constraints

- Services are **plumbing and electrical only**. No HVAC, no license for it, and the company says so plainly. Never imply HVAC capability anywhere.
- The company is **one person in the field** plus Faith, who answers the office phone. Copy that implies a staff of technicians is false.
- Terminology: "service call fee," not "trip charge." "Sewer camera inspection," not "scope." The owner's own vocabulary is plain and unpacks any technical term in one clause.
- **One industry-critique beat per page, maximum**, never as the opening move, always immediately paired with what Mainstream does instead. The homepage spends its single beat on price discrimination by house.
- **Named competitors never appear in a negative claim.** Pricing numbers are publishable; the names attached to them are not.
- Voice is the owner's, governed by an external profile. Short declaratives, real numbers instead of adjectives, no moral attached to any story, zero em dashes, and it must never read as a sales pitch. He said that last part directly.

## Brand Commitments

An identity exists. A visual world does not. Treat the following as fixed and design around them.

**Logo.** `assets/logo-source.jpg` and `assets/logo-banner-source.jpg`. A faucet with a drip, an `M` cut by a lightning bolt, and a two-prong plug, set inside a ring that runs blue on the left and green on the right. **Both source files are JPG on a white background with no vector original**, so a redraw to SVG is required before any dark surface can carry the mark.

**Palette, sampled from the assets.** Deep navy `#12294A`, royal blue `#1F5FA9`, green `#4E9C31`. The vehicle wrap runs brighter: cyan `#22A0E8` with a lime accent `#8CC63E` over a water texture.

**Tagline, already in use on the logo lockup and the vehicle.** "One call. Two trades. Total solutions." It stays in the lockup. It does not become the headline, because the first half is the real differentiator and the second half is generic.

**Voice profile**, binding: `Clients/Mainstream Plumbing and Electrical/brand/jacob-voice-profile.md` in the knowledge base.

**Hard constraint, stated by the client unprompted: no AI-generated imagery.** His words were that it "screams of ChatGPT" and that everybody's images look the same. Every image on these pages traces to a real photograph he already owns. This constraint is not negotiable and it is a design input, not a limitation to work around: it pushes the visual world toward typography, structure and material rather than rendered scenes.

**Anti-reference.** `assets/anti-reference-flyer.jpg` is his current Facebook flyer. It reads "Where Affordability Meets Reliability," splits the wordmark into two words, and misspells "electrical." It is what the new work replaces, and its register (generic superlatives, hexagon chrome, stock geometry) is the rut to avoid.

## Evidence on Hand

**Real photographs, the entire library, all client-owned:**

| Path | What it is |
|---|---|
| `assets/photo-truck-side.jpg` | The wrapped F-150 in side profile, clean afternoon light, wrap fully legible. 2048×1582. The strongest single asset. |
| `assets/photo-owner-dig.jpg` | The owner lying face down in Carolina red clay with his arm buried in a hand-dug hole, locating a line. 1500×1500. Unposed. |
| `assets/photo-owner-waterheater.jpg` | The owner working on a Rheem gas water heater in a closet. 1536×2048. |
| `assets/photo-truck-front.jpg` | The same truck, three-quarter view, portrait orientation. |
| `assets/photo-before-after.jpg` | A water service line repair, before and after, on his navy and green template. |

**Published numbers, all confirmed and all safe to display:** $78 service call including after hours · $289 sewer camera inspection · usually on site within 90 minutes · $19.98 per month membership · founded November 2022 · phone (864) 263-6989 · email mainstreamoffice@yahoo.com · domain Mainstreamsc.com.

**Two customer stories cleared for publication**, both in the copy deck, both to be told without a moral attached.

**Copy.** Written before this file and locked: `Clients/Mainstream Plumbing and Electrical/website-content/drafts/01-homepage.md` in the knowledge base. Thirteen sections, identical across all three concepts, with the hero recut per concept.

### Absences that must not be fabricated

These are genuinely unknown. Every one of them ships as a visibly marked placeholder on the client's replacement list. Inventing any of them is out of bounds, and the review count is the one most likely to be invented by reflex.

- **No Google review count and no star rating.** The at-a-glance band reserves a slot for them and the layout must not collapse when it is empty.
- **No license numbers**, though the company is licensed in both trades.
- **No physical address.** It may turn out to be a service-area business with no storefront.
- **No warranty or guarantee language.** The owner has never written one down, so the page carries none at all rather than a placeholder.
- **No financing answer.**
- **No confirmed service area.** Thirteen cities are listed on research recommendation, not client confirmation.
- **No confirmation that standby generators and EV chargers are services actually performed.**
- **No electrical customer story.** The onboarding call was almost entirely plumbing, so the electrical side of this page has no proof of its own.
- **No photograph of the owner with his face visible.** Both work shots are from behind.
