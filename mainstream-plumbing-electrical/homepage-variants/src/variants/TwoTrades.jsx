import React from "react";

/* =========================================================================
   DIRECTION B - TWO TRADES
   Mainstream Plumbing and Electrical, Greenville SC

   THESIS      The logo already splits navy left and green right. Make that
               the architecture instead of the decoration.
   SIGNATURE   A painted locate seam. Before section 5 the two trades bracket
               the page from the outside, water on the left, power on the
               right. At section 5, where the copy says a water heater needs
               electrical, the two lines converge into one. Section 6 then
               hangs both trades off that single merged line: the thing that
               separated them becomes the one thing they share.
   WHERE FROM  Utility locate marks. Before anyone digs, someone paints the
               ground by what is buried. Jacob's own red clay photo has blue
               locate paint and a flag in it.
   FINISH      Clean near-white ground because marks need clean ground. Every
               CTA is navy, never green, so colour keeps carrying information
               instead of doubling as a click target.

   Copy: website-content/drafts/01-homepage.md (company-voice pass 2026-08-13)
   Design: website-design/DESIGN-DIRECTION.md
   ========================================================================= */

const PHONE = "(864) 263-6989";
const PHONE_HREF = "tel:+18642636989";
const EMAIL = "mainstreamoffice@yahoo.com";

/* ===== SECTION: shared bits ===== */

function Wordmark({ reversed = false }) {
  return (
    <span className="font-bdisp text-[19px] font-black leading-none tracking-[-0.02em]">
      <span className={reversed ? "text-white" : "text-b-ink dark:text-b-dink"}>MAIN</span>
      <span className={reversed ? "text-[#8CC63E]" : "text-b-power dark:text-b-dpower"}>STREAM</span>
    </span>
  );
}

function Label({ children, tone = "ink" }) {
  const tones = {
    ink: "text-b-ink2 dark:text-b-dink2",
    water: "text-b-water dark:text-b-dwater",
    power: "text-b-powerink dark:text-b-dpower",
  };
  return (
    <p className={`font-bmono text-[11px] uppercase tracking-[0.18em] ${tones[tone]}`}>{children}</p>
  );
}

function CallButton({ className = "" }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center rounded-[3px] bg-b-ink px-6 py-3.5 font-bbody text-[15px] font-semibold text-white transition hover:bg-b-ink/85 dark:bg-b-dink dark:text-b-dground dark:hover:bg-white ${className}`}
    >
      Call {PHONE}
    </a>
  );
}

function GhostButton() {
  return (
    <a
      href="#request"
      className="inline-flex items-center justify-center rounded-[3px] border-2 border-b-ink px-6 py-[0.78rem] font-bbody text-[15px] font-semibold text-b-ink transition hover:bg-b-ink hover:text-white dark:border-b-dink dark:text-b-dink dark:hover:bg-b-dink dark:hover:text-b-dground"
    >
      Request service
    </a>
  );
}

function Flag({ children }) {
  return (
    <span className="font-bmono text-[10.5px] uppercase tracking-[0.1em] text-b-ink2/75 dark:text-b-dink2/75">
      {children}
    </span>
  );
}

/* The two trades bracketing the page from outside. Desktop only; on mobile
   the seam collapses to a per-section spine (see .b-spine). */
function SeamFrame({ children }) {
  return (
    // overflow-x: clip, not hidden. The seam's overspray pseudo element sits
    // 6px outside the frame and would otherwise scroll the page sideways,
    // and clip does not create a scroll container, so sticky still works.
    <div className="relative [overflow-x:clip]">
      <span
        aria-hidden="true"
        className="b-seam absolute left-0 top-0 hidden h-full text-b-water dark:text-b-dwater lg:block"
      />
      <span
        aria-hidden="true"
        className="b-seam absolute right-0 top-0 hidden h-full text-b-power dark:text-b-dpower lg:block"
      />
      {children}
    </div>
  );
}

/* ========================================================================= */

export default function TwoTrades() {
  return (
    <div className="min-h-screen bg-b-ground font-bbody text-b-ink antialiased dark:bg-b-dground dark:text-b-dink">
      {/* ===== SECTION: header ===== */}
      {/* Opaque, not translucent. backdrop-blur does not take effect here and a
          93% ground let sharp text ghost through the nav while scrolling. */}
      <header className="sticky top-0 z-50 border-b border-b-line bg-b-ground dark:border-b-dline dark:bg-b-dground">
        <div className="mx-auto flex max-w-[1240px] items-center gap-6 px-5 py-3.5 lg:px-12">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Mainstream Plumbing and Electrical, home">
            <span aria-hidden="true" className="flex h-6 flex-col justify-between">
              <span className="block h-[7px] w-[7px] rounded-[1px] bg-b-water dark:bg-b-dwater" />
              <span className="block h-[7px] w-[7px] rounded-[1px] bg-b-power dark:bg-b-dpower" />
            </span>
            <Wordmark />
          </a>
          <nav className="ml-auto hidden items-center gap-7 text-[14px] font-medium md:flex">
            <a href="#services" className="hover:text-b-water">Services</a>
            <a href="#pricing" className="hover:text-b-water">Pricing</a>
            <a href="#areas" className="hover:text-b-water">Service area</a>
            <a href="#questions" className="hover:text-b-water">Questions</a>
          </nav>
          <a href={PHONE_HREF} className="ml-auto shrink-0 py-2.5 font-bmono text-[13.5px] font-medium md:ml-0">
            {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Sections 1 to 4 sit between the two trades. */}
        <SeamFrame>
          {/* ===== SECTION: 1 hero ===== */}
          <section className="mx-auto max-w-[1240px] px-5 pb-12 pt-10 lg:px-12 lg:pb-16 lg:pt-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.3fr,0.7fr] lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Label tone="water">Plumbing</Label>
                  <span aria-hidden="true" className="h-px w-8 bg-b-line dark:bg-b-dline" />
                  <Label tone="power">Electrical</Label>
                </div>
                <h1 className="mt-6 font-bdisp text-[clamp(2.15rem,5.2vw,3.7rem)] font-black leading-[1.02] tracking-[-0.035em]">
                  A plumber and an electrician in Greenville, in one truck.
                </h1>
                <p className="mt-6 max-w-[36rem] text-[17px] leading-[1.62] text-b-ink2 dark:text-b-dink2">
                  A water heater that needs a new circuit is one visit here, not a plumber today and
                  an electrician Thursday. $78 to come out, and it does not change after hours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CallButton />
                  <GhostButton />
                </div>
                <p className="mt-5 font-bmono text-[12px] uppercase tracking-[0.14em] text-b-ink2 dark:text-b-dink2">
                  One call. Two trades. One visit.
                </p>
              </div>

              <div className="order-first h-[190px] overflow-hidden rounded-[3px] sm:h-[240px] lg:order-none lg:h-[400px]">
                <picture>
                  <source srcSet="./img/photo-truck-front-1000.webp" type="image/webp" />
                  <img
                    src="./img/photo-truck-front-1000.jpg"
                    alt="The Mainstream truck, wrapped in blue and green."
                    className="h-full w-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </section>

          {/* ===== SECTION: 2 at a glance ===== */}
          <section className="border-y border-b-line dark:border-b-dline">
            <div className="mx-auto grid max-w-[1240px] gap-x-10 gap-y-7 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
              {[
                ["$78", "to come out. The same at 2am as it is at 2pm.", null],
                ["90 minutes", "Usually on site inside an hour and a half.", null],
                ["No commission", "Everyone at Mainstream is hourly, owner included.", null],
                ["Licensed in SC", "For plumbing and for electrical.", "NEEDS-INFO: license numbers"],
                ["Greenville", "Born and raised.", null],
                ["No subcontractors", "On any job.", null],
              ].map(([big, sub, flag]) => (
                <div key={big}>
                  <p className="font-bdisp text-[22px] font-black tracking-[-0.02em]">{big}</p>
                  <p className="mt-1 text-[14.5px] leading-snug text-b-ink2 dark:text-b-dink2">{sub}</p>
                  {flag && <p className="mt-1.5"><Flag>[{flag}]</Flag></p>}
                </div>
              ))}
              <div className="sm:col-span-2 lg:col-span-3">
                <Flag>[Reserved: Google rating and review count, once GBP access lands]</Flag>
              </div>
            </div>
          </section>

          {/* ===== SECTION: 3 nobody works on commission ===== */}
          <section className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-[46rem]">
              <h2 className="font-bdisp text-[clamp(1.75rem,3.8vw,2.8rem)] font-black leading-[1.08] tracking-[-0.03em]">
                He was writing two million a year in sales. Then he quit.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
                <p>
                  Jacob spent a year and a half in the field, then moved to the sales side of a
                  plumbing company, where he was writing about two million dollars a year. He left
                  and started Mainstream in November of 2022, five thousand dollars in the hole.
                </p>
                <p className="font-bdisp text-[19px] font-bold text-b-ink dark:text-b-dink">
                  Nobody at Mainstream works on commission. Everyone is hourly, including him.
                </p>
                <p>
                  The person standing in your kitchen telling you what is wrong earns exactly the
                  same whether you buy a ten thousand dollar water heater or he lights your pilot and
                  leaves.
                </p>
              </div>
            </div>
          </section>

          {/* ===== SECTION: 4 proof ===== */}
          <section className="border-t border-b-line dark:border-b-dline">
            <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-20">
              <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                <p className="text-[17px] leading-[1.68]">
                  One of the big plumbing companies in town told a homeowner she needed a new water
                  heater.
                  <br />
                  <br />
                  The gas was off. Jacob turned it on, lit the pilot, and left.
                </p>
                <p className="text-[17px] leading-[1.68]">
                  The day before we sat down with him, Jacob spent two hours on the phone with a
                  customer&apos;s home warranty company trying to get a water heater approved. He
                  never billed for it. He had to call them back again the next morning.
                </p>
              </div>
              <blockquote className="mt-12 font-bdisp text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1.2] tracking-[-0.025em]">
                &ldquo;And I didn&apos;t make any money off of it. Nothing.&rdquo;
              </blockquote>
            </div>
          </section>
        </SeamFrame>

        {/* ===== SECTION: 5 one truck, both trades. THE SEAM CLOSES HERE ===== */}
        <section className="relative overflow-hidden border-t border-b-line dark:border-b-dline">
          {/* The convergence. Two painted lines come in from the edges and meet. */}
          <svg
            className="block h-[92px] w-full lg:h-[130px]"
            viewBox="0 0 1200 130"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 0 C 4 60, 300 66, 600 118"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              className="stroke-b-water dark:stroke-b-dwater"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M1196 0 C 1196 60, 900 66, 600 118"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              className="stroke-b-power dark:stroke-b-dpower"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="mx-auto max-w-[1240px] px-5 pb-16 lg:px-12 lg:pb-24">
            <div className="mx-auto max-w-[46rem] text-center">
              <Label>Where the two become one</Label>
              <h2 className="mt-4 font-bdisp text-[clamp(1.75rem,3.8vw,2.6rem)] font-black leading-[1.1] tracking-[-0.03em]">
                A water heater needs electrical. That is why Mainstream does both.
              </h2>
              {/* Heading is centred because the seam meets in the middle.
                  Body copy is not: three centred paragraphs is a reading tax. */}
              <div className="mx-auto mt-7 max-w-[40rem] space-y-5 text-left text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
                <p>
                  Jacob started with plumbing and got tired of calling an electrician every time he
                  set a water heater. So he got licensed for both.
                </p>
                <p>
                  At the big shops, a water heater that needs a new circuit is two trucks, two
                  appointments, two people who have never met, and a second day off work for you.
                  Here it is one truck and one technician, once.
                </p>
                <p className="font-bdisp text-[17px] font-bold text-b-ink dark:text-b-dink">
                  No heating and air. Mainstream is not licensed for it, and would rather tell you
                  that than take the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 6 what mainstream does. Both trades hang off the merged seam. =====
             DOM order is plumbing block then electrical block. The two column
             look is CSS only, so reading order never scrambles. */}
        <section id="services" className="border-t border-b-line bg-white dark:border-b-dline dark:bg-b-dpanel">
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-20">
            <h2 className="font-bdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
              What Mainstream does
            </h2>

            <div className="relative mt-10 grid gap-y-12 lg:grid-cols-2 lg:gap-x-16">
              {/* the merged seam, now the divider the two trades share */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 hidden h-full w-[6px] -translate-x-1/2 rounded-[1px] bg-gradient-to-b from-b-water to-b-power lg:block dark:from-b-dwater dark:to-b-dpower"
              />

              <div className="b-spine text-b-water dark:text-b-dwater lg:pl-0 lg:before:hidden">
                <Label tone="water">Plumbing</Label>
                <ul className="mt-4 text-b-ink dark:text-b-dink">
                  {[
                    ["Emergency plumbing, 24 hours", "Backed up, flooding, or no water at all. $78 to come out and the price does not move at 2am."],
                    ["Water heaters", "Repair, replacement, tankless. This is the job Mainstream takes most, and the one where the price sits furthest below the big shops."],
                    ["Drains and sewer lines", "The call that comes in more than any other. A camera inspection is $289, and it tells you whether you have roots, a belly, or something a snake was never going to fix."],
                    ["Leak detection, repiping and repair", "A listening device on the ground narrows a hidden leak to about a two foot radius. Then we dig once instead of five times."],
                  ].map(([title, body]) => (
                    <li key={title} className="border-t border-b-line py-5 dark:border-b-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-bdisp text-[17px] font-bold leading-snug group-hover:text-b-water dark:group-hover:text-b-dwater">
                          {title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">{body}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="b-spine text-b-power dark:text-b-dpower lg:pl-0 lg:before:hidden">
                <Label tone="power">Electrical</Label>
                <ul className="mt-4 text-b-ink dark:text-b-dink">
                  {[
                    ["Electrical repair and troubleshooting", "Dead outlets, a breaker that will not hold, lights doing something they should not be doing.", null],
                    ["Panels, rewiring and generators", "Panel upgrades, whole home rewiring, surge protection, standby generators and EV chargers.", "NEEDS-INFO: confirm generators and EV chargers are real services"],
                  ].map(([title, body, flag]) => (
                    <li key={title} className="border-t border-b-line py-5 dark:border-b-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-bdisp text-[17px] font-bold leading-snug group-hover:text-b-power dark:group-hover:text-b-dpower">
                          {title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">{body}</p>
                        {flag && <p className="mt-2"><Flag>[{flag}]</Flag></p>}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[14px] leading-relaxed text-b-ink2 dark:text-b-dink2">
                  Two cards against four is not an oversight. Plumbing is 73% of what Greenville
                  searches for, and the page is built to match the demand rather than flatter the
                  trade split.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 7 what $78 actually means ===== */}
        <section id="pricing" className="border-t border-b-line dark:border-b-dline">
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-[46rem]">
              <h2 className="font-bdisp text-[clamp(1.75rem,3.8vw,2.6rem)] font-black leading-[1.1] tracking-[-0.03em]">
                Some shops price the house. Mainstream prices the job.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
                <p>
                  A bigger driveway means a bigger number for the same water heater. That is a real
                  practice in this trade and most homeowners have wondered about it without ever
                  being told.
                </p>
                <p>
                  $78 is $78. Tuesday at two in the afternoon or Saturday at two in the morning. A
                  house on the east side or a house off Laurens Road. Most companies in Greenville
                  charge around $250 for the same trip, and more if you called them at night.
                </p>
                <p>
                  That fee puts a licensed plumber and electrician in your driveway and gets you an
                  actual diagnosis, not a guess over the phone.
                </p>
              </div>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-b-line bg-b-line sm:grid-cols-3 dark:border-b-dline dark:bg-b-dline">
                {[
                  ["To come out", "$78", "Most shops, around $250"],
                  ["Sewer camera", "$289", "Most shops, around $600"],
                  ["After hours", "$78", "Same as any other hour"],
                ].map(([term, val, note]) => (
                  <div key={term} className="bg-b-ground p-5 dark:bg-b-dground">
                    <dt className="font-bmono text-[11px] uppercase tracking-[0.14em] text-b-ink2 dark:text-b-dink2">
                      {term}
                    </dt>
                    <dd className="mt-2 font-bdisp text-[30px] font-black tracking-[-0.03em]">{val}</dd>
                    <dd className="mt-1 text-[13.5px] text-b-ink2 dark:text-b-dink2">{note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 8 who runs mainstream ===== */}
        <section className="border-t border-b-line bg-white dark:border-b-dline dark:bg-b-dpanel">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16 lg:px-12 lg:py-20">
            <div className="overflow-hidden rounded-[3px]">
              <picture>
                <source srcSet="./img/photo-owner-dig-1200.webp" type="image/webp" />
                <img
                  src="./img/photo-owner-dig-1200.jpg"
                  alt="Locating a water line by hand in Carolina red clay."
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="self-center">
              <Label>Who runs Mainstream</Label>
              <h2 className="mt-4 font-bdisp text-[clamp(1.6rem,3.2vw,2.3rem)] font-black tracking-[-0.03em]">
                Jacob
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
                <p>
                  Jacob was born and raised in Greenville. He started in plumbing at a family
                  business straight out of high school, learned the trade and then the sales side,
                  and went out on his own.
                </p>
                <p>
                  He holds the license for both trades, and he sets the standard every Mainstream job
                  is held to.
                </p>
              </div>
              <blockquote className="mt-8">
                <p className="font-bdisp text-[19px] font-bold leading-[1.35] tracking-[-0.015em] text-b-ink dark:text-b-dink">
                  &ldquo;Someone that will sit at the table with you. And listen to not only your
                  problems with your plumbing, but listen to your life problems.&rdquo;
                </p>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">
                  &ldquo;I actually have a lot of people like that that don&apos;t have really
                  anybody around. And we talk a lot.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 9 where mainstream goes ===== */}
        <section id="areas" className="border-t border-b-line dark:border-b-dline">
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-20">
            <h2 className="font-bdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
              Greenville and the Upstate
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Greenville", "Simpsonville", "Greer", "Easley", "Mauldin", "Taylors", "Travelers Rest", "Piedmont", "Fountain Inn", "Five Forks", "Powdersville", "Berea", "Wade Hampton", "Golden Grove"].map((city, i) => (
                <li
                  key={city}
                  className={`rounded-[3px] border px-3.5 py-2 text-[14px] font-medium ${
                    i === 0
                      ? "border-b-ink bg-b-ink text-white dark:border-b-dink dark:bg-b-dink dark:text-b-dground"
                      : "border-b-line text-b-ink2 dark:border-b-dline dark:text-b-dink2"
                  }`}
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[42rem] text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
              If you are not sure whether you are in range, call and ask. It is a short conversation.
            </p>
            <p className="mt-4">
              <Flag>[NEEDS-INFO: city list is research-recommended, not client-confirmed]</Flag>
            </p>
          </div>
        </section>

        {/* ===== SECTION: 10 the home service club ===== */}
        <section className="border-t border-b-line bg-white dark:border-b-dline dark:bg-b-dpanel">
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Label>The Home Service Club</Label>
                <p className="mt-3 font-bdisp text-[clamp(2.4rem,6vw,3.6rem)] font-black leading-none tracking-[-0.04em]">
                  $19.98
                  <span className="ml-2 align-baseline text-[16px] font-medium tracking-normal text-b-ink2 dark:text-b-dink2">
                    a month
                  </span>
                </p>
              </div>
              <p className="max-w-[26rem] text-[16px] leading-[1.6] text-b-ink2 dark:text-b-dink2">
                Most maintenance plans in this trade cover one trade. This one covers both, because
                the same truck does both.
              </p>
            </div>

            <div className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-3">
              <div className="b-spine text-b-water dark:text-b-dwater">
                <h3 className="font-bdisp text-[16px] font-bold text-b-ink dark:text-b-dink">
                  Annual plumbing inspection
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">
                  Visible water and drain lines, water pressure, faucets and fixtures, shut-off
                  valves, drain performance, toilets, and the condition of the water heater.
                </p>
              </div>
              <div className="b-spine text-b-power dark:text-b-dpower">
                <h3 className="font-bdisp text-[16px] font-bold text-b-ink dark:text-b-dink">
                  Annual electrical safety inspection
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">
                  Outlets, GFCI and AFCI protection, light switches, smoke and carbon monoxide
                  detectors, visible wiring, the panel, and general safety.
                </p>
              </div>
              <div className="b-spine text-b-water dark:text-b-dwater">
                <h3 className="font-bdisp text-[16px] font-bold text-b-ink dark:text-b-dink">
                  Annual water heater flush
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-b-ink2 dark:text-b-dink2">
                  Sediment is what kills a water heater early. Flushing it buys years and lowers the
                  gas bill a little.
                </p>
              </div>
            </div>

            <p className="mt-10 text-[16px] leading-[1.7] text-b-ink2 dark:text-b-dink2">
              Members also get a waived diagnostic fee, 15% off all plumbing and electrical repairs,
              and priority scheduling.
            </p>
            <p className="mt-4 font-bdisp text-[17px] font-bold">
              One monthly payment. No long-term commitment. Cancel anytime.
            </p>
            <p className="mt-4">
              <Flag>[NEEDS-INFO: whether 15% covers parts or labor only, and whether the waived diagnostic is per call or per year]</Flag>
            </p>
          </div>
        </section>

        {/* ===== SECTION: 11 questions ===== */}
        <section id="questions" className="border-t border-b-line dark:border-b-dline">
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-12 lg:py-24">
            <h2 className="font-bdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
              Questions
            </h2>
            <div className="mt-8 max-w-[52rem]">
              {[
                ["What does it cost to have you come out?", "$78. That is the same whether it is a Tuesday afternoon or two in the morning on a Saturday. There is no after-hours upcharge."],
                ["Are you really available 24 hours?", "Yes. A real person from Mainstream answers, day or night, and the price to come out does not change because of the hour."],
                ["How fast can you get here?", "Usually within an hour and a half."],
                ["Do you work on commission?", "No. Everyone at Mainstream is hourly, owner included. Nobody earns a dollar more for selling you something you do not need."],
                ["You do plumbing and electrical. Do I need two appointments?", "No. One truck, one technician, both trades. A water heater that needs a new circuit is one visit, not a plumber today and an electrician on Thursday."],
                ["Do you do heating and air?", "No. We are licensed for plumbing and electrical only, and we would rather tell you that than take the job."],
              ].map(([q, a], i) => (
                <details key={q} open={i === 0} className="group border-t border-b-line py-4 last:border-b dark:border-b-dline">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-bdisp text-[17px] font-bold leading-snug marker:content-none">
                    {q}
                    <span className="mt-0.5 shrink-0 font-bmono text-[16px] text-b-water transition group-open:rotate-45 dark:text-b-dwater">+</span>
                  </summary>
                  <p className="mt-3 max-w-[42rem] text-[16px] leading-[1.68] text-b-ink2 dark:text-b-dink2">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION: 12 closing cta ===== */}
        <section id="request" className="border-t border-b-line bg-white dark:border-b-dline dark:bg-b-dpanel">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
            <div>
              <h2 className="font-bdisp text-[clamp(1.75rem,3.8vw,2.6rem)] font-black leading-[1.1] tracking-[-0.03em]">
                Call and tell us what is happening
              </h2>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.68] text-b-ink2 dark:text-b-dink2">
                A real person answers, day or night. By the time the truck pulls into your driveway
                we usually already know what we are fixing.
              </p>
              <div className="mt-8">
                <CallButton />
              </div>
              <p className="mt-6 font-bdisp text-[17px] font-bold">
                Water on the floor right now? Call. Do not fill out a form.
              </p>
            </div>

            <form className="rounded-[3px] border border-b-line bg-b-ground p-6 dark:border-b-dline dark:bg-b-dground sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <p className="font-bdisp text-[17px] font-bold">Request service</p>
              <div className="mt-5 space-y-4">
                {[["Name", "text", "name"], ["Phone", "tel", "phone"], ["Service address", "text", "address"]].map(([label, type, id]) => (
                  <div key={id}>
                    <label htmlFor={`b-${id}`} className="font-bmono text-[11px] uppercase tracking-[0.14em] text-b-ink2 dark:text-b-dink2">
                      {label}
                    </label>
                    <input
                      id={`b-${id}`}
                      type={type}
                      className="mt-1.5 w-full rounded-[3px] border border-b-line bg-white px-3.5 py-2.5 text-[15px] outline-none focus:border-b-water dark:border-b-dline dark:bg-b-dpanel dark:text-b-dink"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="b-trade" className="font-bmono text-[11px] uppercase tracking-[0.14em] text-b-ink2 dark:text-b-dink2">
                    What kind of problem
                  </label>
                  <select
                    id="b-trade"
                    className="mt-1.5 w-full rounded-[3px] border border-b-line bg-white px-3.5 py-2.5 text-[15px] outline-none focus:border-b-water dark:border-b-dline dark:bg-b-dpanel dark:text-b-dink"
                  >
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="b-what" className="font-bmono text-[11px] uppercase tracking-[0.14em] text-b-ink2 dark:text-b-dink2">
                    What is happening
                  </label>
                  <textarea
                    id="b-what"
                    rows={3}
                    className="mt-1.5 w-full rounded-[3px] border border-b-line bg-white px-3.5 py-2.5 text-[15px] outline-none focus:border-b-water dark:border-b-dline dark:bg-b-dpanel dark:text-b-dink"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[13px] leading-snug text-b-ink2 dark:text-b-dink2">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#101E33]" />
                  <span>
                    I agree to receive calls and text messages about this request.{" "}
                    <Flag>[NEEDS-INFO: final TCPA wording]</Flag>
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-[3px] bg-b-ink px-6 py-3.5 font-bbody text-[15px] font-semibold text-white transition hover:bg-b-ink/85 dark:bg-b-dink dark:text-b-dground"
                >
                  Send it
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ===== SECTION: 13 footer ===== */}
      <footer className="bg-b-ink text-white dark:bg-black">
        <span aria-hidden="true" className="block h-[6px] w-full bg-gradient-to-r from-b-water to-b-power" />
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <Wordmark reversed />
            <p className="mt-1 font-bmono text-[11px] uppercase tracking-[0.16em] text-white/55">
              Plumbing &amp; Electrical
            </p>
            <p className="mt-4 font-bdisp text-[15px] font-bold">One call. Two trades. Total solutions.</p>
            <a href={PHONE_HREF} className="mt-4 block font-bmono text-[16px]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1.5 block text-[14px] text-white/65 hover:text-white">{EMAIL}</a>
          </div>
          <div>
            <p className="font-bmono text-[11px] uppercase tracking-[0.18em] text-white/50">Services</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/85">
              {["Emergency plumbing", "Water heaters", "Drains and sewer", "Leak detection and repiping", "Electrical repair", "Panels, rewiring and generators"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bmono text-[11px] uppercase tracking-[0.18em] text-white/50">Service area</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/85">
              {["Simpsonville", "Greer", "Easley", "Mauldin", "Taylors", "All service areas"].map((s) => (
                <li key={s}><a href="#areas" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bmono text-[11px] uppercase tracking-[0.18em] text-white/50">Hours</p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/85">
              24 hours, live answer.
              <br />
              No after-hours upcharge.
            </p>
            <p className="mt-4 text-[12.5px] text-white/50">
              [NEEDS-INFO: physical address or service-area-business decision]
            </p>
          </div>
        </div>
        <div className="border-t border-white/12">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-[12.5px] text-white/55 lg:px-12">
            <span>Licensed plumbing and electrical contractor, South Carolina. [NEEDS-INFO: license numbers]</span>
            <span className="ml-auto">&copy; 2026 Mainstream Plumbing and Electrical</span>
          </div>
        </div>
      </footer>

      {/* ===== SECTION: mobile sticky call bar ===== */}
      <a
        href={PHONE_HREF}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center bg-b-ink font-bbody text-[16px] font-semibold text-white sm:hidden dark:bg-b-dink dark:text-b-dground"
      >
        Call {PHONE}
      </a>
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
