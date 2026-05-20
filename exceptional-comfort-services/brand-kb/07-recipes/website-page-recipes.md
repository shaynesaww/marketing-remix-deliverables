---
title: Website Page Recipes
category: recipe
themes: [website, recipes, page-construction]
surfaces: [internal-tool]
sensitivity: greenlit
length_words: long
status: ready
last_updated: 2026-05-20
---

# Website Page Recipes

How to assemble each planned ECS website page from the brand KB atoms.

**The build order** for every page is the same:

1. Pull the atoms listed in the recipe.
2. Draft the copy by adapting atom content to the page format.
3. Run the [5-question voice test](../steven-voice-profile.md#13-quick-test-for-any-draft) on the draft.
4. Strip AI tells per `../00-core/guardrails.md` (zero em dashes, no "Not X. Y." rhythm, no body fragments, etc.).
5. Confirm sensitivity flags are respected (no former employer names, no customer names without permission, etc.).

---

## Pages this file covers (from the post-launch roadmap)

- Homepage
- About / Our Story
- Contact
- FAQ
- 5 Service pages: AC Repair, AC Install, Heating (Repair + Install combined), Maintenance Plans, Generators (service only) — plus optional add-on pages for Mini-Splits/PTACs, Lake Homes
- 5 Location pages: Pickens, Easley, Greer, Seneca, Greenville (or Oconee — confirm)
- 1 Premium positioning page: Lake Keowee

---

# Homepage

**Goal:** Get the homeowner to feel "this is a real person who picks up the phone" within 5 seconds, and give them an easy first action.

**Section recipe:**

1. **Hero** — Headline + subhead + primary CTA
   - Pull: `00-core/identity.md` (motto + three pillars)
   - Pull: `04-positioning/why-ecs-vs-big-shops.md` (the "I answer the phone" angle)
   - Format: 1 headline (10 words max), 1 subhead (2 sentences max), 1 CTA button

2. **Trust strip** — 3-5 short proof points under the hero
   - Pull: `05-trust-signals/credentials-licenses.md` + `05-trust-signals/certifications.md`
   - Format: 3-5 short bullets (Licensed + Bonded + Insured | Family Run | Generac Certified | Upstate-Based | 12 Years in the Trade)

3. **Services overview** — Cards or icons linking to each service page
   - Pull titles from `02-services/` atoms
   - Format: Each card = service name + 1 sentence + link

4. **Why ECS** — The differentiator block
   - Pull: `04-positioning/why-ecs-vs-big-shops.md` (lead with "I answer the phone")
   - Pull: `04-positioning/pricing-philosophy.md` (fair pricing without saying "no upsell")
   - Format: 3 short blocks with proof. Use one of the customer stories as a callout (the chandelier story or the filter-not-compressor story works well here)

5. **Founder block** — Brief intro to Steven and Angel
   - Pull: 2 sentences from `01-story/steven-origin.md`
   - Pull: 1 line from `01-story/angel-the-partner.md`
   - Format: Photo + 2-paragraph intro + link to full About page

6. **Featured customer story** — One picked story
   - Default pick: `03-customer-stories/allisons-mom-christmas.md` (warmth + integrity)
   - Alternate: `03-customer-stories/eighty-six-year-old-chandelier.md` (going-the-extra-mile)
   - Format: Quote + 2-3 sentences + "Read more stories" link to a stories index

7. **Service area** — Map or list
   - Pull: `00-core/audience.md` (service area section)
   - Format: Town list + map embed

8. **CTA block** — Final call-to-action
   - Phone (Steven's direct line) + form
   - Format: Clear ask, never fear-based

**Voice notes for the homepage specifically:**
- Highest warmth setting
- Tightest length per section
- No industry critique here. Save that for About.
- Hero headline should pass the test: "Could Steven say this out loud on a service call without sounding fake?"

---

# About / Our Story

**Goal:** Earn trust by telling the real story of how ECS came to be. This is the page where Steven's voice lives most fully.

**Section recipe:**

1. **Headline + subhead** — Set up the story
   - Format: 1 headline ("From a U-Haul to the front porch" or similar) + 1 subhead

2. **The origin** — Where Steven came from
   - Pull: `01-story/steven-origin.md` (condense to 2-3 paragraphs)
   - Highlight: the Florida-to-Upstate move, Target to HVAC, the U-Haul story

3. **The pivot** — Why he started ECS
   - Pull: `01-story/founding-ecs.md` (condense, keep the "you're not good with your money" beat)
   - Highlight: the breaking point, Angel's "maybe it's time," filing the LLC on Oct 29

4. **The family** — Angel and the kids
   - Pull: `01-story/angel-the-partner.md` (2 paragraphs)
   - Pull: `01-story/kids-and-future.md` (1-2 paragraphs)

5. **The promise (three pillars)** — What customers should feel
   - Pull: `00-core/identity.md` (three pillars section)
   - Format: 3 short blocks

6. **The "why we're different" block** — Industry critique deployed here, capped
   - Pull: `04-positioning/why-ecs-vs-big-shops.md`
   - Optional: 1 paragraph from `04-positioning/industry-critique.md` (this is the page where it can show up, per the usage cap)
   - Always end with what ECS does instead

7. **Proof — 2 customer stories**
   - Default picks: `03-customer-stories/allisons-mom-christmas.md` + `03-customer-stories/eighty-six-year-old-chandelier.md`
   - Format: Each story as a callout card

8. **The 10-year vision** — Where ECS is going
   - Pull: `01-story/kids-and-future.md` (the vision section)
   - Format: 1 short paragraph

9. **CTA** — Light. "Give us a call. Steven will pick up."

**Voice notes:**
- This is the highest-warmth, deepest-voice page on the site.
- Use one Steven quote per major section (blockquote format).
- Light slang OK ("look," "you know" — once or twice, no more).

---

# Contact

**Goal:** Make it easy. One form, one phone number, service area listed.

**Section recipe:**
1. Headline + 1-sentence subhead ("We answer the phone. Even on Sundays.")
2. Phone + email + lead form
3. Service area list (pull from `00-core/audience.md`)
4. Hours
5. Optional: 1 customer story callout

**Voice notes:** Very light copy. No selling. The form is the work.

---

# FAQ

**Pull straight from** `06-faq/faq-master.md`.

Order the questions so the most common 5-7 are at top (service area, licensing, brands, financing, warranty, service call fee).

For any `[NEEDS-INFO]` answers, leave a placeholder note in the draft and surface it in the handoff to Steven.

---

# Service Page Template (use for all 5+ service pages)

**Each service page follows this structure.** Pull from the matching atom in `02-services/` plus relevant stories.

1. **Hero** — Service name + subhead + CTA
   - Format: "AC Repair in the Upstate. We diagnose it right the first time."

2. **What we do (the service overview)**
   - Pull: `02-services/[matching-atom].md` ("What ECS does" + "Who it's for" sections)

3. **The Steven approach** — The differentiator
   - Pull: `02-services/[matching-atom].md` ("How Steven approaches it" section)
   - Layer in 1 customer story relevant to the service:
     - AC Repair → `03-customer-stories/filter-not-compressor.md` or `03-customer-stories/janice-overcharged-coil.md`
     - AC Install → `03-customer-stories/sunset-10-system-house.md` + technical-standards atom for nitrogen purging
     - Heating → `03-customer-stories/allisons-mom-christmas.md` (furnace wire-nuts) + `03-customer-stories/sewer-line-crawl-space.md` (heat pump zone board)
     - Maintenance Plans → `03-customer-stories/pipe-insulation-no-charge.md` + `03-customer-stories/sunset-10-system-house.md`
     - Generators → no direct customer story; lean on `02-services/generator-service.md` and Generac dealer credential

4. **Pricing approach** — Brief
   - Pull: `04-positioning/pricing-philosophy.md` (top section only — keep this short)
   - Never publish exact prices unless Steven greenlights specific tiers

5. **Trust strip** — Smaller version of homepage strip

6. **CTA** — Service-specific call

**Voice notes:**
- Service pages are medium-warmth.
- No industry critique here (save it for About).
- One customer story per page, max.

---

## Specific service pages

### AC Repair page (`02-services/ac-repair.md`)
- Stories: filter-not-compressor (technical depth) + janice-overcharged-coil (real diagnosis)
- Positioning: technical-standards + pricing-philosophy

### AC Install page (`02-services/ac-install.md`)
- Stories: sunset-10-system-house (the $3k maintenance agreement that grew to $20k)
- Positioning: technical-standards (nitrogen purging) + pricing-philosophy ($10-11k vs $18k)

### Heating page (combined furnace + heat pump, or split based on Steven's preference)
- Stories: allisons-mom-christmas (furnace wire-nuts) + sewer-line-crawl-space (heat pump zone board)
- Positioning: technical-standards + customer-care from the stories

### Maintenance Plans page
- Stories: pipe-insulation-no-charge + sunset-10-system-house
- Flag: `02-services/maintenance-plans.md` is `needs-info` — Steven owes tier structure before publishing pricing details

### Generators page
- Use `02-services/generator-service.md` carefully — language around "service and replacement only" is critical
- Mention Generac certification
- Direct anyone wanting a new generator install to "give us a call to talk about what's possible"

### Mini-Split / PTAC page (optional — confirm with Steven if this is a separate page or rolled in)
- Pull: `02-services/mini-split-ptac.md`
- Sam-the-plumber gym build is a usable reference

---

# Location Page Template (use for all 5 location pages)

**Each location page follows this structure.** ECS doesn't have town-by-town stories yet, so location pages lean heavily on the universal content with light geographic personalization.

1. **Hero** — "HVAC Service in [Town]" + 1-sentence local angle
2. **What we do for [Town] homeowners** — pull from services overview
3. **Why local matters** — Steven and Angel live and work in the Upstate; lean on `01-story/steven-origin.md` for the "I'm not going anywhere" angle
4. **Common [Town] HVAC needs** — placeholder content adapted per town. For Pickens / Easley → standard residential. For Greer / Seneca → mix. For Lake Keowee → see separate premium page.
5. **Customer proof** — Generic ECS stories work fine; ideally collect 1-2 town-specific testimonials over time
6. **Service area map**
7. **CTA**

**Voice notes:**
- Location pages are the lightest-warmth pages.
- Don't fake local color we don't have. Better to be brief than make up "we love the [Town] community."
- Use real geographic facts where useful (e.g., Lake Keowee specifics).

### Specific location pages

- **Pickens** — primary base; lean into "local"
- **Easley** — Janice's story is set here (anonymously)
- **Greer** — confirm coverage with Steven
- **Seneca** — adjacent to Lake Keowee
- **Greenville** or **Oconee** — confirm which gets the 5th slot

---

# Lake Keowee Premium Positioning Page

**This is the differentiated, premium-tier page.**

1. **Hero** — Lake Keowee-specific headline
   - "Lake Keowee homes need a different kind of HVAC."
2. **What's different about lake homes**
   - Pull: `02-services/lake-homes-premium.md` (ERVs, fresh-air intakes, dehumidifiers, steam humidifiers, geothermal service)
3. **How we show up at a Lake Keowee home**
   - Pull: `00-core/audience.md` (the lake-home tier section — shoe covers, clean truck, presentation)
4. **Proof — the Sunset story**
   - Pull: `03-customer-stories/sunset-10-system-house.md` (anchor the page on this)
5. **Geothermal note** — service yes, install no
   - Pull: `02-services/lake-homes-premium.md` (relevant section)
6. **CTA** — premium-feel call

**Voice notes:**
- Slightly more polished than the rest of the site (the audience expects it).
- Still Steven. Just more buttoned up.
- No down-home slang.

---

# Master coverage check

Before any page goes live, verify against this list:

- [ ] Homepage drafted from recipe
- [ ] About drafted from recipe
- [ ] Contact drafted from recipe
- [ ] FAQ drafted from `06-faq/faq-master.md`
- [ ] AC Repair drafted
- [ ] AC Install drafted
- [ ] Heating (furnace + heat pump) drafted
- [ ] Maintenance Plans drafted (note `needs-info` flag)
- [ ] Generators drafted (note language care)
- [ ] Mini-Split / PTAC drafted (if separate page)
- [ ] Pickens location drafted
- [ ] Easley location drafted
- [ ] Greer location drafted
- [ ] Seneca location drafted
- [ ] 5th location (Greenville or Oconee) drafted
- [ ] Lake Keowee premium drafted
- [ ] Voice test passed on each page
- [ ] AI-tells stripped on each page
- [ ] Sensitivity flags respected (no former employer names, customer names anonymized as needed)

---

# Drafting workflow (Shayne-facing)

For any page above:

```
1. Open this recipe file.
2. Open the listed atom(s).
3. Open ../steven-voice-profile.md side-by-side.
4. Draft the page in the project deliverables folder.
5. Run voice test, AI-tell strip, sensitivity check.
6. Send draft to Steven.
```

When the on-demand generator skill ships in a later phase, it will automate steps 1-3 — load this recipe, pull the atoms, format the draft. Until then, manual.
