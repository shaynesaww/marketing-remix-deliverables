import React from "react";

/* =========================================================================
   DIRECTION C - RED CLAY
   Mainstream Plumbing and Electrical, Greenville SC

   THESIS      Lead with the one photograph nobody else in Greenville has.
   SIGNATURE   Documentary scale. Photographs run full bleed and large with a
               mono photo desk caption underneath. Copy is set in a narrow
               measure beside and below, never on top of the image. No frames,
               no drop shadows, no hero card. It reads as reportage rather
               than advertising, and that is the whole trust mechanism.
   PALETTE     Sampled from photo-owner-dig-1200.jpg itself, which is what
               keeps this direction out of the generic warm-cream default.
   TYPE        Deliberate inversion. The current AI cluster is serif display
               over sans body; this is a warm grotesk display over a reading
               serif, which also suits the longest passages on the page.
   DARK        Night shift. Warm black, never a blue one. The photograph gains
               contrast rather than losing it, and the green stops reading as
               a brand colour and starts reading as work light.

   Copy: website-content/drafts/01-homepage.md (company-voice pass 2026-08-13)
   Design: website-design/DESIGN-DIRECTION.md
   ========================================================================= */

const PHONE = "(864) 263-6989";
const PHONE_HREF = "tel:+18642636989";
const EMAIL = "mainstreamoffice@yahoo.com";

/* ===== SECTION: shared bits ===== */

function Wordmark({ reversed = false }) {
  return (
    <span className="font-cdisp text-[20px] font-black leading-none tracking-[-0.025em]">
      <span className={reversed ? "text-white" : "text-c-ink dark:text-c-dink"}>MAIN</span>
      <span className={reversed ? "text-[#8CC63E]" : "text-c-action dark:text-[#7ED457]"}>STREAM</span>
    </span>
  );
}

/* Photo desk caption. Sits under the frame, never over it. */
function Caption({ children }) {
  return <p className="c-caption mt-2.5 text-c-ink2 dark:text-c-dink2">{children}</p>;
}

function Kicker({ children }) {
  return <p className="c-caption text-c-clay dark:text-[#C98266]">{children}</p>;
}

function CallButton({ className = "" }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center rounded-full bg-c-action px-7 py-3.5 font-cdisp text-[15px] font-bold text-white transition hover:brightness-110 ${className}`}
    >
      Call {PHONE}
    </a>
  );
}

function GhostButton() {
  return (
    <a
      href="#request"
      className="inline-flex items-center justify-center rounded-full border border-c-ink/30 px-7 py-3.5 font-cdisp text-[15px] font-bold text-c-ink transition hover:border-c-ink dark:border-c-dink/35 dark:text-c-dink dark:hover:border-c-dink"
    >
      Request service
    </a>
  );
}

function Flag({ children }) {
  return (
    <span className="c-caption text-c-ink2/70 dark:text-c-dink2/70">{children}</span>
  );
}

/* ========================================================================= */

export default function RedClay() {
  return (
    <div className="min-h-screen bg-c-dust font-cbody text-c-ink antialiased dark:bg-c-ddust dark:text-c-dink">
      {/* ===== SECTION: header ===== */}
      {/* Opaque, not translucent. backdrop-blur does not take effect here and a
          93% ground let sharp text ghost through the nav while scrolling. */}
      <header className="sticky top-0 z-50 border-b border-c-line/70 bg-c-dust dark:border-c-dline dark:bg-c-ddust">
        <div className="mx-auto flex max-w-[1220px] items-center gap-6 px-5 py-3.5 lg:px-10">
          <a href="#top" className="shrink-0" aria-label="Mainstream Plumbing and Electrical, home">
            <Wordmark />
          </a>
          <nav className="ml-auto hidden items-center gap-7 font-cdisp text-[14px] font-medium md:flex">
            <a href="#services" className="hover:text-c-clay">Services</a>
            <a href="#pricing" className="hover:text-c-clay">Pricing</a>
            <a href="#areas" className="hover:text-c-clay">Service area</a>
            <a href="#questions" className="hover:text-c-clay">Questions</a>
          </nav>
          <a href={PHONE_HREF} className="ml-auto shrink-0 py-2.5 font-cdisp text-[15px] font-bold md:ml-0">
            {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ===== SECTION: 1 hero. Photograph left, copy right. Never overlapping. ===== */}
        <section className="lg:grid lg:min-h-[calc(100vh-61px)] lg:grid-cols-[1.05fr,1fr] lg:items-stretch">
          <div className="c-doc h-[52vw] max-h-[420px] min-h-[240px] lg:h-auto lg:max-h-none">
            <picture>
              <source srcSet="./img/photo-owner-dig-1200.webp" type="image/webp" />
              <img
                src="./img/photo-owner-dig-1200.jpg"
                alt="Locating a water line by hand in Carolina red clay, Greenville."
                className="h-full w-full"
              />
            </picture>
          </div>

          <div className="flex flex-col justify-center px-5 py-12 lg:px-14 lg:py-16">
            <div className="max-w-measure">
              <Kicker>Greenville, SC &middot; Locating a water line by hand</Kicker>
              <h1 className="mt-5 font-cdisp text-[clamp(2rem,4.6vw,3.3rem)] font-black leading-[1.06] tracking-[-0.03em]">
                Greenville plumbing and electrical, and nobody here works on commission.
              </h1>
              <p className="mt-6 text-[17.5px] leading-[1.65] text-c-ink2 dark:text-c-dink2">
                Everyone at Mainstream is hourly, so the person telling you what is wrong earns the
                same either way. $78 to come out, and it does not change after hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <GhostButton />
              </div>
              <p className="c-caption mt-6 text-c-ink2 dark:text-c-dink2">
                Licensed for both trades in South Carolina &middot; Usually on site within 90 minutes
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 2 at a glance ===== */}
        <section className="border-y border-c-line dark:border-c-dline">
          <div className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10">
            <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["$78", "to come out, and the same at 2am as it is at 2pm", null],
                ["90 minutes", "is the usual time from your call to the driveway", null],
                ["Hourly, not commission", "everyone at Mainstream, owner included", null],
                ["Licensed in South Carolina", "for plumbing and for electrical", "NEEDS-INFO: license numbers"],
                ["Greenville", "born and raised", null],
                ["No subcontractors", "on any job", null],
              ].map(([big, sub, flag]) => (
                <div key={big}>
                  <dt className="font-cdisp text-[21px] font-black leading-tight tracking-[-0.02em]">{big}</dt>
                  <dd className="mt-1 text-[15px] leading-snug text-c-ink2 dark:text-c-dink2">{sub}</dd>
                  {flag && <dd className="mt-1.5"><Flag>[{flag}]</Flag></dd>}
                </div>
              ))}
            </dl>
            <p className="mt-8"><Flag>[Reserved: Google rating and review count, once GBP access lands]</Flag></p>
          </div>
        </section>

        {/* ===== SECTION: 3 nobody works on commission ===== */}
        <section className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="max-w-[42rem]">
            <h2 className="font-cdisp text-[clamp(1.8rem,4vw,2.9rem)] font-black leading-[1.06] tracking-[-0.03em]">
              He was writing two million a year in sales. Then he quit.
            </h2>
            <div className="mt-8 space-y-6 text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
              <p>
                Jacob spent a year and a half in the field, then moved to the sales side of a
                plumbing company, where he was writing about two million dollars a year. He left and
                started Mainstream in November of 2022, five thousand dollars in the hole.
              </p>
              <p className="font-cdisp text-[19px] font-bold text-c-ink dark:text-c-dink">
                Nobody at Mainstream works on commission. Everyone is hourly, including him.
              </p>
              <p>
                The person standing in your kitchen telling you what is wrong earns exactly the same
                whether you buy a ten thousand dollar water heater or he lights your pilot and
                leaves.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 4 proof ===== */}
        <section className="border-y border-c-line bg-white/45 dark:border-c-dline dark:bg-c-dpanel">
          <div className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <p className="text-[17.5px] leading-[1.7]">
                One of the big plumbing companies in town told a homeowner she needed a new water
                heater.
                <br />
                <br />
                The gas was off. Jacob turned it on, lit the pilot, and left.
              </p>
              <p className="text-[17.5px] leading-[1.7]">
                The day before we sat down with him, Jacob spent two hours on the phone with a
                customer&apos;s home warranty company trying to get a water heater approved. He never
                billed for it. He had to call them back again the next morning.
              </p>
            </div>
            <blockquote className="mt-12 font-cdisp text-[clamp(1.35rem,3.2vw,2.1rem)] font-black leading-[1.18] tracking-[-0.025em] text-c-clay dark:text-[#C98266]">
              &ldquo;And I didn&apos;t make any money off of it. Nothing.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* ===== SECTION: truck, documentary scale ===== */}
        <section className="mx-auto max-w-[1220px] px-5 pt-16 lg:px-10 lg:pt-20">
          <div className="c-doc h-[46vw] max-h-[520px] min-h-[200px] w-full">
            <picture>
              <source srcSet="./img/photo-truck-side-1600.webp" type="image/webp" />
              <img
                src="./img/photo-truck-side-1600.jpg"
                alt="The wrapped Mainstream truck, parked in Greenville."
                className="h-full w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <Caption>Greenville, SC &middot; One truck, both trades, unit 22</Caption>
        </section>

        {/* ===== SECTION: 5 one truck, both trades ===== */}
        <section className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="max-w-[42rem]">
            <h2 className="font-cdisp text-[clamp(1.7rem,3.8vw,2.6rem)] font-black leading-[1.08] tracking-[-0.03em]">
              A water heater needs electrical. That is why Mainstream does both.
            </h2>
            <div className="mt-8 space-y-6 text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
              <p>
                Jacob started with plumbing and got tired of calling an electrician every time he set
                a water heater. So he got licensed for both.
              </p>
              <p>
                At the big shops, a water heater that needs a new circuit is two trucks, two
                appointments, two people who have never met, and a second day off work for you. Here
                it is one truck and one technician, once.
              </p>
              <p className="font-cdisp text-[17px] font-bold text-c-ink dark:text-c-dink">
                No heating and air. Mainstream is not licensed for it, and would rather tell you that
                than take the job.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 6 what mainstream does ===== */}
        <section id="services" className="border-y border-c-line bg-white/45 dark:border-c-dline dark:bg-c-dpanel">
          <div className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
            <h2 className="font-cdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
              What Mainstream does
            </h2>
            <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-[1.55fr,1fr]">
              <div>
                <Kicker>Plumbing</Kicker>
                <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
                  {[
                    ["Emergency plumbing, 24 hours", "Backed up, flooding, or no water at all. $78 to come out and the price does not move at 2am."],
                    ["Water heaters", "Repair, replacement, tankless. This is the job Mainstream takes most, and the one where the price sits furthest below the big shops."],
                    ["Drains and sewer lines", "The call that comes in more than any other. A camera inspection is $289, and it tells you whether you have roots, a belly, or something a snake was never going to fix."],
                    ["Leak detection, repiping and repair", "A listening device on the ground narrows a hidden leak to about a two foot radius. Then we dig once instead of five times."],
                  ].map(([title, body]) => (
                    <li key={title} className="border-t border-c-line py-5 dark:border-c-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-cdisp text-[17px] font-bold leading-snug group-hover:text-c-clay dark:group-hover:text-[#C98266]">
                          {title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-[1.6] text-c-ink2 dark:text-c-dink2">{body}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Kicker>Electrical</Kicker>
                <ul className="mt-4">
                  {[
                    ["Electrical repair and troubleshooting", "Dead outlets, a breaker that will not hold, lights doing something they should not be doing.", null],
                    ["Panels, rewiring and generators", "Panel upgrades, whole home rewiring, surge protection, standby generators and EV chargers.", "NEEDS-INFO: confirm generators and EV chargers are real services"],
                  ].map(([title, body, flag]) => (
                    <li key={title} className="border-t border-c-line py-5 dark:border-c-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-cdisp text-[17px] font-bold leading-snug group-hover:text-c-clay dark:group-hover:text-[#C98266]">
                          {title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-[1.6] text-c-ink2 dark:text-c-dink2">{body}</p>
                        {flag && <p className="mt-2"><Flag>[{flag}]</Flag></p>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 7 what $78 actually means ===== */}
        <section id="pricing" className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr,0.8fr] lg:gap-16">
            <div className="max-w-[42rem]">
              <h2 className="font-cdisp text-[clamp(1.7rem,3.8vw,2.6rem)] font-black leading-[1.08] tracking-[-0.03em]">
                Some shops price the house. Mainstream prices the job.
              </h2>
              <div className="mt-8 space-y-6 text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
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
            </div>
            <div className="self-start">
              <div className="c-doc h-[240px] w-full sm:h-[320px]">
                <picture>
                  <source srcSet="./img/photo-owner-waterheater-1000.webp" type="image/webp" />
                  <img
                    src="./img/photo-owner-waterheater-1000.jpg"
                    alt="Working on a gas water heater in a Greenville home."
                    className="h-full w-full"
                    loading="lazy"
                  />
                </picture>
              </div>
              <Caption>Greenville, SC &middot; Water heater work</Caption>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 8 who runs mainstream ===== */}
        <section className="border-y border-c-line bg-white/45 dark:border-c-dline dark:bg-c-dpanel">
          <div className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-16">
              <div>
                <div className="c-doc h-[300px] w-full sm:h-[400px]">
                  <picture>
                    <source srcSet="./img/photo-before-after-900.webp" type="image/webp" />
                    <img
                      src="./img/photo-before-after-900.jpg"
                      alt="A water service line repair in Greenville, before and after."
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <Caption>Greenville, SC &middot; Water service line repair</Caption>
              </div>
              <div className="max-w-[38rem] self-center">
                <Kicker>Who runs Mainstream</Kicker>
                <h2 className="mt-4 font-cdisp text-[clamp(1.6rem,3.2vw,2.3rem)] font-black tracking-[-0.03em]">
                  Jacob
                </h2>
                <div className="mt-6 space-y-6 text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
                  <p>
                    Jacob was born and raised in Greenville. He started in plumbing at a family
                    business straight out of high school, learned the trade and then the sales side,
                    and went out on his own.
                  </p>
                  <p>
                    He holds the license for both trades, and he sets the standard every Mainstream
                    job is held to.
                  </p>
                </div>
                <blockquote className="mt-8 border-l-2 border-c-clay pl-5">
                  <p className="font-cdisp text-[19px] font-bold leading-[1.35] tracking-[-0.015em] text-c-ink dark:text-c-dink">
                    &ldquo;Someone that will sit at the table with you. And listen to not only your
                    problems with your plumbing, but listen to your life problems.&rdquo;
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.6] text-c-ink2 dark:text-c-dink2">
                    &ldquo;I actually have a lot of people like that that don&apos;t have really
                    anybody around. And we talk a lot.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 9 where mainstream goes ===== */}
        <section id="areas" className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
          <h2 className="font-cdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
            Greenville and the Upstate
          </h2>
          <p className="mt-6 max-w-[44rem] text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
            Greenville is home. Mainstream also runs to Simpsonville, Greer, Easley, Mauldin and
            Taylors, plus Travelers Rest, Piedmont, Fountain Inn, Five Forks, Powdersville, Berea,
            Wade Hampton and Golden Grove.
          </p>
          <p className="mt-5 max-w-[44rem] text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
            If you are not sure whether you are in range, call and ask. It is a short conversation.
          </p>
          <p className="mt-5"><Flag>[NEEDS-INFO: city list is research-recommended, not client-confirmed]</Flag></p>
        </section>

        {/* ===== SECTION: 10 the home service club ===== */}
        <section className="border-y border-c-line bg-c-clay text-white dark:border-c-dline dark:bg-c-claydeep">
          <div className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[auto,1fr] lg:gap-20">
              <div>
                <p className="c-caption text-white/70">The Home Service Club</p>
                <p className="mt-3 font-cdisp text-[clamp(2.6rem,7vw,4rem)] font-black leading-none tracking-[-0.04em]">
                  $19.98
                </p>
                <p className="mt-2 text-[16px] text-white/80">a month</p>
              </div>
              <div className="max-w-[42rem]">
                <p className="text-[17.5px] leading-[1.7] text-white/90">
                  Most maintenance plans in this trade cover one trade. The Home Service Club covers
                  both, because the same truck does both.
                </p>
                <h3 className="mt-9 font-cdisp text-[15px] font-bold uppercase tracking-[0.08em]">
                  Three inspections, once a year each
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    ["Plumbing", "Visible water and drain lines, water pressure, faucets and fixtures, shut-off valves, drain performance, toilets, and the condition of the water heater."],
                    ["Electrical", "Outlets, GFCI and AFCI protection, light switches, smoke and carbon monoxide detectors, visible wiring, the panel, and general safety."],
                    ["Water heater flush", "Sediment is what kills a water heater early. Flushing it buys years and lowers the gas bill a little."],
                  ].map(([label, body]) => (
                    <li key={label} className="border-t border-white/25 pt-4">
                      <span className="font-cdisp text-[16px] font-bold">{label}. </span>
                      <span className="text-[16px] leading-[1.6] text-white/85">{body}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-9 font-cdisp text-[15px] font-bold uppercase tracking-[0.08em]">
                  And three things that apply all year
                </h3>
                <p className="mt-3 text-[16.5px] leading-[1.7] text-white/90">
                  Waived diagnostic fee. 15% off all plumbing and electrical repairs. Priority
                  scheduling.
                </p>
                <p className="mt-6 font-cdisp text-[17px] font-bold">
                  One monthly payment. No long-term commitment. Cancel anytime.
                </p>
                <p className="c-caption mt-5 text-white/60">
                  [NEEDS-INFO: whether 15% covers parts or labor only, and whether the waived
                  diagnostic is per call or per year]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 11 questions ===== */}
        <section id="questions" className="mx-auto max-w-[1220px] px-5 py-16 lg:px-10 lg:py-24">
          <h2 className="font-cdisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-black tracking-[-0.03em]">
            Questions
          </h2>
          <div className="mt-8 max-w-[48rem]">
            {[
              ["What does it cost to have you come out?", "$78. That is the same whether it is a Tuesday afternoon or two in the morning on a Saturday. There is no after-hours upcharge."],
              ["Are you really available 24 hours?", "Yes. A real person from Mainstream answers, day or night, and the price to come out does not change because of the hour."],
              ["How fast can you get here?", "Usually within an hour and a half."],
              ["Do you work on commission?", "No. Everyone at Mainstream is hourly, owner included. Nobody earns a dollar more for selling you something you do not need."],
              ["You do plumbing and electrical. Do I need two appointments?", "No. One truck, one technician, both trades. A water heater that needs a new circuit is one visit, not a plumber today and an electrician on Thursday."],
              ["Do you do heating and air?", "No. We are licensed for plumbing and electrical only, and we would rather tell you that than take the job."],
            ].map(([q, a], i) => (
              <details key={q} open={i === 0} className="group border-t border-c-line py-4 last:border-b dark:border-c-dline">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-cdisp text-[17px] font-bold leading-snug marker:content-none">
                  {q}
                  <span className="mt-0.5 shrink-0 font-cmono text-[15px] text-c-clay transition group-open:rotate-45 dark:text-[#C98266]">+</span>
                </summary>
                <p className="mt-3 max-w-[40rem] text-[16.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== SECTION: 12 closing cta ===== */}
        <section id="request" className="border-t border-c-line bg-white/45 dark:border-c-dline dark:bg-c-dpanel">
          <div className="mx-auto grid max-w-[1220px] gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
            <div>
              <h2 className="font-cdisp text-[clamp(1.7rem,3.8vw,2.6rem)] font-black leading-[1.08] tracking-[-0.03em]">
                Call and tell us what is happening
              </h2>
              <p className="mt-6 max-w-[34rem] text-[17.5px] leading-[1.7] text-c-ink2 dark:text-c-dink2">
                A real person answers, day or night. By the time the truck pulls into your driveway
                we usually already know what we are fixing.
              </p>
              <div className="mt-8">
                <CallButton />
              </div>
              <p className="mt-6 font-cdisp text-[17px] font-bold">
                Water on the floor right now? Call. Do not fill out a form.
              </p>
            </div>

            <form className="rounded-[6px] border border-c-line bg-c-dust p-6 dark:border-c-dline dark:bg-c-ddust sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <p className="font-cdisp text-[17px] font-bold">Request service</p>
              <div className="mt-5 space-y-4">
                {[["Name", "text", "name"], ["Phone", "tel", "phone"], ["Service address", "text", "address"]].map(([label, type, id]) => (
                  <div key={id}>
                    <label htmlFor={`c-${id}`} className="c-caption text-c-ink2 dark:text-c-dink2">{label}</label>
                    <input
                      id={`c-${id}`}
                      type={type}
                      className="mt-1.5 w-full rounded-[4px] border border-c-line bg-white px-3.5 py-2.5 font-cbody text-[15px] text-c-ink outline-none focus:border-c-clay dark:border-c-dline dark:bg-c-dpanel dark:text-c-dink"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="c-trade" className="c-caption text-c-ink2 dark:text-c-dink2">What kind of problem</label>
                  <select
                    id="c-trade"
                    className="mt-1.5 w-full rounded-[4px] border border-c-line bg-white px-3.5 py-2.5 font-cbody text-[15px] text-c-ink outline-none focus:border-c-clay dark:border-c-dline dark:bg-c-dpanel dark:text-c-dink"
                  >
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-what" className="c-caption text-c-ink2 dark:text-c-dink2">What is happening</label>
                  <textarea
                    id="c-what"
                    rows={3}
                    className="mt-1.5 w-full rounded-[4px] border border-c-line bg-white px-3.5 py-2.5 font-cbody text-[15px] text-c-ink outline-none focus:border-c-clay dark:border-c-dline dark:bg-c-dpanel dark:text-c-dink"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[13.5px] leading-snug text-c-ink2 dark:text-c-dink2">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#3A7A24]" />
                  <span>
                    I agree to receive calls and text messages about this request.{" "}
                    <Flag>[NEEDS-INFO: final TCPA wording]</Flag>
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-c-action px-6 py-3.5 font-cdisp text-[15px] font-bold text-white transition hover:brightness-110"
                >
                  Send it
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ===== SECTION: 13 footer ===== */}
      <footer className="bg-c-navy text-white dark:bg-black">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <Wordmark reversed />
            <p className="c-caption mt-1.5 text-white/55">Plumbing &amp; Electrical</p>
            <p className="mt-4 font-cdisp text-[15px] font-bold">One call. Two trades. Total solutions.</p>
            <a href={PHONE_HREF} className="mt-4 block font-cdisp text-[17px] font-bold text-[#8CC63E]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1.5 block text-[14.5px] text-white/70 hover:text-white">{EMAIL}</a>
          </div>
          <div>
            <p className="c-caption text-white/50">Services</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              {["Emergency plumbing", "Water heaters", "Drains and sewer", "Leak detection and repiping", "Electrical repair", "Panels, rewiring and generators"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="c-caption text-white/50">Service area</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-white/85">
              {["Simpsonville", "Greer", "Easley", "Mauldin", "Taylors", "All service areas"].map((s) => (
                <li key={s}><a href="#areas" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="c-caption text-white/50">Hours</p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/85">
              24 hours, live answer.
              <br />
              No after-hours upcharge.
            </p>
            <p className="c-caption mt-4 text-white/50">
              [NEEDS-INFO: physical address or service-area-business decision]
            </p>
          </div>
        </div>
        <div className="border-t border-white/12">
          <div className="mx-auto flex max-w-[1220px] flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-[12.5px] text-white/55 lg:px-10">
            <span>Licensed plumbing and electrical contractor, South Carolina. [NEEDS-INFO: license numbers]</span>
            <span className="ml-auto">&copy; 2026 Mainstream Plumbing and Electrical</span>
          </div>
        </div>
      </footer>

      {/* ===== SECTION: mobile sticky call bar ===== */}
      <a
        href={PHONE_HREF}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center bg-c-action font-cdisp text-[16px] font-bold text-white sm:hidden"
      >
        Call {PHONE}
      </a>
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
