import React from "react";

/* =========================================================================
   DIRECTION A - THE CONSTANT
   Mainstream Plumbing and Electrical, Greenville SC

   THESIS      The price never moves, so the design never moves either.
   SIGNATURE   $78 renders at the identical size, weight and left position at
               four points down the page (sections 2, 7, 11, 12) while
               everything around it varies. The hero states the idea outright
               with a three row ledger whose rows all end in the same number.
   FIRST VIEW  No photograph. Typography and a price list. Every competitor in
               Greenville opens on a truck, and the photo library here is thin.
   FINISH      Warm oat paper, deepened logo navy, one green action colour.

   Copy: website-content/drafts/01-homepage.md (company-voice pass 2026-08-13)
   Design: website-design/DESIGN-DIRECTION.md
   ========================================================================= */

const PHONE = "(864) 263-6989";
const PHONE_HREF = "tel:+18642636989";
const EMAIL = "mainstreamoffice@yahoo.com";

/* ===== SECTION: shared bits ===== */

function Constant78({ className = "" }) {
  // The signature. One component so no instance can drift from another.
  return <span className={`a-constant a-lamp text-a-action dark:text-[#7ED457] ${className}`}>$78</span>;
}

/* The wordmark is set in type rather than placed as an image.
   Both raster logos are unusable small: logo-mark.png still has a white fill
   inside the ring, and logo-lockup.png carries black fringing from a rough
   background key. Neither survives a warm ground and there is no SVG yet.
   Type is honest to the brand, since the real logo splits MAIN navy and
   STREAM green exactly this way, and it stays crisp at any size. */
function Wordmark({ reversed = false }) {
  return (
    <span className="font-adisp text-[19px] font-bold leading-none tracking-[-0.02em]">
      <span className={reversed ? "text-white" : "text-a-ink dark:text-a-dink"}>MAIN</span>
      <span className={reversed ? "text-[#8CC63E]" : "text-a-action dark:text-[#7ED457]"}>STREAM</span>
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-amono text-[11px] uppercase tracking-[0.2em] text-a-ink2 dark:text-a-dink2">
      {children}
    </p>
  );
}

function CallButton({ className = "" }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center rounded-[6px] bg-a-action px-6 py-3.5 font-abody text-[15px] font-semibold text-white transition hover:brightness-110 ${className}`}
    >
      Call {PHONE}
    </a>
  );
}

function GhostButton({ className = "" }) {
  return (
    <a
      href="#request"
      className={`inline-flex items-center justify-center rounded-[6px] border border-a-ink/25 px-6 py-3.5 font-abody text-[15px] font-semibold text-a-ink transition hover:border-a-ink/60 dark:border-a-dink/30 dark:text-a-dink dark:hover:border-a-dink/70 ${className}`}
    >
      Request service
    </a>
  );
}

function Placeholder({ children }) {
  return (
    <span className="font-amono text-[11px] uppercase tracking-[0.1em] text-a-ink2/70 dark:text-a-dink2/70">
      {children}
    </span>
  );
}

/* ========================================================================= */

export default function Constant() {
  return (
    <div className="min-h-screen bg-a-paper font-abody text-a-ink antialiased dark:bg-a-dpaper dark:text-a-dink">
      {/* ===== SECTION: header ===== */}
      <header className="sticky top-0 z-50 border-b border-a-line/70 bg-a-paper/92 backdrop-blur dark:border-a-dline dark:bg-a-dpaper/92">
        <div className="mx-auto flex max-w-[1180px] items-center gap-6 px-5 py-3.5 lg:px-10">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Mainstream Plumbing and Electrical, home">
            <span aria-hidden="true" className="block h-7 w-[3px] rounded-full bg-gradient-to-b from-brand-royal to-brand-green" />
            <Wordmark />
          </a>
          <nav className="ml-auto hidden items-center gap-7 font-abody text-[14px] font-medium md:flex">
            <a href="#services" className="hover:text-a-action">Services</a>
            <a href="#pricing" className="hover:text-a-action">Pricing</a>
            <a href="#areas" className="hover:text-a-action">Service area</a>
            <a href="#questions" className="hover:text-a-action">Questions</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="ml-auto shrink-0 font-amono text-[14px] font-medium tracking-tight text-a-action md:ml-0 dark:text-[#7ED457]"
          >
            {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ===== SECTION: 1 hero ===== */}
        <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-[54rem]">
            <Eyebrow>Greenville, South Carolina</Eyebrow>
            <h1 className="mt-5 font-adisp text-[clamp(2.1rem,5.4vw,3.9rem)] font-bold leading-[1.04] tracking-[-0.035em]">
              Plumber and electrician in Greenville. $78 to come out, and 2am costs the same as 2pm.
            </h1>
            <p className="mt-6 max-w-[38rem] text-[17px] leading-[1.6] text-a-ink2 dark:text-a-dink2">
              Call day or night and a real person from Mainstream answers. No dispatcher in between,
              and usually on site within 90 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <GhostButton />
            </div>
            <p className="mt-4 font-amono text-[12px] tracking-tight text-a-ink2 dark:text-a-dink2">
              No after-hours upcharge. No weekend upcharge. No holiday upcharge.
            </p>
          </div>

          {/* The ledger. The thesis, stated as a price list. */}
          <div className="mt-12 max-w-[34rem] rounded-[10px] border border-a-line bg-a-panel p-6 dark:border-a-dline dark:bg-a-dpanel sm:p-8">
            <p className="font-amono text-[11px] uppercase tracking-[0.18em] text-a-ink2 dark:text-a-dink2">
              What it costs to get someone out
            </p>
            <div className="mt-4 text-a-line dark:text-a-dline">
              {[
                ["Tuesday, 2:00 PM", "$78"],
                ["Saturday, 2:00 AM", "$78"],
                ["Christmas morning", "$78"],
              ].map(([when, price]) => (
                <div key={when} className="a-ledger-row">
                  <span className="font-abody text-[15px] text-a-ink dark:text-a-dink">{when}</span>
                  <span className="font-amono text-[clamp(1.4rem,4vw,1.8rem)] font-medium tabular-nums leading-none tracking-tight text-a-ink dark:text-a-dink">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION: truck band ===== */}
        <div className="h-[38vw] max-h-[420px] min-h-[190px] w-full overflow-hidden bg-a-ink/10 dark:bg-a-dpanel">
          <picture>
            <source srcSet="./img/photo-truck-side-1600.webp" type="image/webp" />
            <img
              src="./img/photo-truck-side-1600.jpg"
              alt="The Mainstream Plumbing and Electrical truck, wrapped in blue and green, parked in Greenville."
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </picture>
        </div>

        {/* ===== SECTION: 2 at a glance ===== */}
        <section className="border-b border-a-line dark:border-a-dline">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 lg:grid-cols-[auto,1fr] lg:gap-20 lg:px-10 lg:py-20">
            <div>
              <Constant78 />
              <p className="mt-3 max-w-[15rem] font-abody text-[15px] leading-snug text-a-ink2 dark:text-a-dink2">
                to come out. The same at 2am as it is at 2pm.
              </p>
            </div>
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {[
                ["Usually on site within 90 minutes", null],
                ["Nobody at Mainstream works on commission", "Everyone is hourly, owner included"],
                ["Licensed for plumbing and electrical in South Carolina", "NEEDS-INFO: license numbers"],
                ["Greenville born and raised", null],
                ["No subcontractors on any job", null],
              ].map(([fact, sub]) => (
                <li key={fact} className="border-t border-a-line pt-4 dark:border-a-dline">
                  <p className="font-adisp text-[16px] font-semibold leading-snug">{fact}</p>
                  {sub &&
                    (sub.startsWith("NEEDS-INFO") ? (
                      <p className="mt-1.5">
                        <Placeholder>[{sub}]</Placeholder>
                      </p>
                    ) : (
                      <p className="mt-1.5 text-[14px] text-a-ink2 dark:text-a-dink2">{sub}</p>
                    ))}
                </li>
              ))}
              <li className="border-t border-a-line pt-4 dark:border-a-dline">
                <Placeholder>[Reserved: Google rating and review count, once GBP access lands]</Placeholder>
              </li>
            </ul>
          </div>
        </section>

        {/* ===== SECTION: 3 nobody works on commission ===== */}
        <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="max-w-[44rem]">
            <h2 className="font-adisp text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              He was writing two million a year in sales. Then he quit.
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
              <p>
                Jacob spent a year and a half in the field, then moved to the sales side of a
                plumbing company, where he was writing about two million dollars a year. He left and
                started Mainstream in November of 2022, five thousand dollars in the hole.
              </p>
              <p className="font-adisp text-[19px] font-semibold text-a-ink dark:text-a-dink">
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
        <section className="border-y border-a-line bg-a-panel dark:border-a-dline dark:bg-a-dpanel">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-20">
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
                customer&apos;s home warranty company trying to get a water heater approved. He never
                billed for it. He had to call them back again the next morning.
              </p>
            </div>
            <blockquote className="mt-12 max-w-[36rem] border-l-[3px] border-a-action pl-5 font-adisp text-[clamp(1.25rem,2.6vw,1.7rem)] font-semibold leading-[1.28] tracking-[-0.02em]">
              &ldquo;And I didn&apos;t make any money off of it. Nothing.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* ===== SECTION: 5 one truck, both trades ===== */}
        <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
            <div>
              <h2 className="font-adisp text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                A water heater needs electrical. That is why Mainstream does both.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
                <p>
                  Jacob started with plumbing and got tired of calling an electrician every time he
                  set a water heater. So he got licensed for both.
                </p>
                <p>
                  At the big shops, a water heater that needs a new circuit is two trucks, two
                  appointments, two people who have never met, and a second day off work for you.
                  Here it is one truck and one technician, once.
                </p>
                <p className="font-adisp text-[17px] font-semibold text-a-ink dark:text-a-dink">
                  No heating and air. Mainstream is not licensed for it, and would rather tell you
                  that than take the job.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[10px] border border-a-line dark:border-a-dline">
              <picture>
                <source srcSet="./img/photo-owner-waterheater-1000.webp" type="image/webp" />
                <img
                  src="./img/photo-owner-waterheater-1000.jpg"
                  alt="Working on a gas water heater in a Greenville home."
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 6 what mainstream does ===== */}
        <section id="services" className="border-y border-a-line bg-a-panel dark:border-a-dline dark:bg-a-dpanel">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-20">
            <h2 className="font-adisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold tracking-[-0.03em]">
              What Mainstream does
            </h2>

            <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-[1.6fr,1fr]">
              <div>
                <Eyebrow>Plumbing</Eyebrow>
                <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
                  {[
                    ["Emergency plumbing, 24 hours", "Backed up, flooding, or no water at all. $78 to come out and the price does not move at 2am."],
                    ["Water heaters", "Repair, replacement, tankless. This is the job Mainstream takes most, and the one where the price sits furthest below the big shops."],
                    ["Drains and sewer lines", "The call that comes in more than any other. A camera inspection is $289, and it tells you whether you have roots, a belly, or something a snake was never going to fix."],
                    ["Leak detection, repiping and repair", "A listening device on the ground narrows a hidden leak to about a two foot radius. Then we dig once instead of five times."],
                  ].map(([title, body]) => (
                    <li key={title} className="border-t border-a-line py-5 dark:border-a-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-adisp text-[17px] font-semibold leading-snug group-hover:text-a-action">
                          {title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-a-ink2 dark:text-a-dink2">{body}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Eyebrow>Electrical</Eyebrow>
                <ul className="mt-4">
                  {[
                    ["Electrical repair and troubleshooting", "Dead outlets, a breaker that will not hold, lights doing something they should not be doing.", null],
                    ["Panels, rewiring and generators", "Panel upgrades, whole home rewiring, surge protection, standby generators and EV chargers.", "NEEDS-INFO: confirm generators and EV chargers are real services"],
                  ].map(([title, body, flag]) => (
                    <li key={title} className="border-t border-a-line py-5 dark:border-a-dline">
                      <a href="#request" className="group block">
                        <h3 className="font-adisp text-[17px] font-semibold leading-snug group-hover:text-a-action">
                          {title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-a-ink2 dark:text-a-dink2">{body}</p>
                        {flag && (
                          <p className="mt-2">
                            <Placeholder>[{flag}]</Placeholder>
                          </p>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 7 what $78 actually means ===== */}
        <section id="pricing" className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[auto,1fr] lg:gap-20">
            <div>
              <Constant78 />
              <p className="mt-3 max-w-[15rem] font-abody text-[15px] leading-snug text-a-ink2 dark:text-a-dink2">
                is $78. Tuesday afternoon or Saturday at two in the morning.
              </p>
            </div>
            <div className="max-w-[40rem]">
              <h2 className="font-adisp text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                Some shops price the house. Mainstream prices the job.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
                <p>
                  A bigger driveway means a bigger number for the same water heater. That is a real
                  practice in this trade and most homeowners have wondered about it without ever
                  being told.
                </p>
                <p>
                  A house on the east side or a house off Laurens Road, the number to get someone out
                  is the same. Most companies in Greenville charge around $250 for the same trip, and
                  more if you called them at night.
                </p>
                <p>
                  That fee puts a licensed plumber and electrician in your driveway and gets you an
                  actual diagnosis, not a guess over the phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 8 who runs mainstream ===== */}
        <section className="border-y border-a-line bg-a-panel dark:border-a-dline dark:bg-a-dpanel">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
            <div className="overflow-hidden rounded-[10px]">
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
              <h2 className="font-adisp text-[clamp(1.7rem,3.6vw,2.4rem)] font-bold tracking-[-0.03em]">
                Who runs Mainstream
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
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
              <blockquote className="mt-8 border-l-[3px] border-a-action pl-5">
                <p className="font-adisp text-[19px] font-semibold leading-[1.35] tracking-[-0.015em] text-a-ink dark:text-a-dink">
                  &ldquo;Someone that will sit at the table with you. And listen to not only your
                  problems with your plumbing, but listen to your life problems.&rdquo;
                </p>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-a-ink2 dark:text-a-dink2">
                  &ldquo;I actually have a lot of people like that that don&apos;t have really
                  anybody around. And we talk a lot.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 9 where mainstream goes ===== */}
        <section id="areas" className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-20">
          <h2 className="font-adisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold tracking-[-0.03em]">
            Greenville and the Upstate
          </h2>
          <p className="mt-6 max-w-[46rem] text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
            Greenville is home. Mainstream also runs to Simpsonville, Greer, Easley, Mauldin and
            Taylors, plus Travelers Rest, Piedmont, Fountain Inn, Five Forks, Powdersville, Berea,
            Wade Hampton and Golden Grove.
          </p>
          <p className="mt-4 text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
            If you are not sure whether you are in range, call and ask. It is a short conversation.
          </p>
          <p className="mt-5">
            <Placeholder>[NEEDS-INFO: city list is research-recommended, not client-confirmed]</Placeholder>
          </p>
        </section>

        {/* ===== SECTION: 10 the home service club ===== */}
        <section className="border-y border-a-line bg-a-panel dark:border-a-dline dark:bg-a-dpanel">
          <div className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[auto,1fr] lg:gap-20">
              <div>
                <Eyebrow>The Home Service Club</Eyebrow>
                <p className="a-constant mt-3 text-a-ink dark:text-a-dink">$19.98</p>
                <p className="mt-2 font-abody text-[15px] text-a-ink2 dark:text-a-dink2">a month</p>
              </div>
              <div className="max-w-[42rem]">
                <p className="text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
                  Most maintenance plans in this trade cover one trade. The Home Service Club covers
                  both, because the same truck does both.
                </p>

                <h3 className="mt-9 font-adisp text-[15px] font-semibold uppercase tracking-[0.08em]">
                  Three inspections, once a year each
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    ["Plumbing", "Visible water and drain lines, water pressure, faucets and fixtures, shut-off valves, drain performance, toilets, and the condition of the water heater."],
                    ["Electrical", "Outlets, GFCI and AFCI protection, light switches, smoke and carbon monoxide detectors, visible wiring, the panel, and general safety."],
                    ["Water heater flush", "Sediment is what kills a water heater early. Flushing it buys years and lowers the gas bill a little."],
                  ].map(([label, body]) => (
                    <li key={label} className="border-t border-a-line pt-4 dark:border-a-dline">
                      <span className="font-adisp text-[16px] font-semibold">{label}. </span>
                      <span className="text-[15.5px] leading-[1.6] text-a-ink2 dark:text-a-dink2">{body}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-9 font-adisp text-[15px] font-semibold uppercase tracking-[0.08em]">
                  And three things that apply all year
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-a-ink2 dark:text-a-dink2">
                  Waived diagnostic fee. 15% off all plumbing and electrical repairs. Priority
                  scheduling.
                </p>
                <p className="mt-6 font-adisp text-[17px] font-semibold">
                  One monthly payment. No long-term commitment. Cancel anytime.
                </p>
                <p className="mt-5">
                  <Placeholder>[NEEDS-INFO: whether 15% covers parts or labor only, and whether the waived diagnostic is per call or per year]</Placeholder>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 11 questions ===== */}
        <section id="questions" className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[auto,1fr] lg:gap-20">
            <div>
              <h2 className="font-adisp text-[clamp(1.6rem,3.2vw,2.2rem)] font-bold tracking-[-0.03em]">
                Questions
              </h2>
              <div className="mt-8 hidden lg:block">
                <Constant78 />
                <p className="mt-3 max-w-[13rem] font-abody text-[15px] leading-snug text-a-ink2 dark:text-a-dink2">
                  is the answer to the first one, and it does not change.
                </p>
              </div>
            </div>
            <div className="max-w-[46rem]">
              {[
                ["What does it cost to have you come out?", "$78. That is the same whether it is a Tuesday afternoon or two in the morning on a Saturday. There is no after-hours upcharge."],
                ["Are you really available 24 hours?", "Yes. A real person from Mainstream answers, day or night, and the price to come out does not change because of the hour."],
                ["How fast can you get here?", "Usually within an hour and a half."],
                ["Do you work on commission?", "No. Everyone at Mainstream is hourly, owner included. Nobody earns a dollar more for selling you something you do not need."],
                ["You do plumbing and electrical. Do I need two appointments?", "No. One truck, one technician, both trades. A water heater that needs a new circuit is one visit, not a plumber today and an electrician on Thursday."],
                ["Do you do heating and air?", "No. We are licensed for plumbing and electrical only, and we would rather tell you that than take the job."],
              ].map(([q, a], i) => (
                <details
                  key={q}
                  open={i === 0}
                  className="group border-t border-a-line py-4 last:border-b dark:border-a-dline"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-adisp text-[17px] font-semibold leading-snug marker:content-none">
                    {q}
                    <span className="mt-1 shrink-0 font-amono text-[15px] text-a-action transition group-open:rotate-45 dark:text-[#7ED457]">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[40rem] text-[16px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION: 12 closing cta ===== */}
        <section id="request" className="border-t border-a-line bg-a-panel dark:border-a-dline dark:bg-a-dpanel">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
            <div>
              <Constant78 />
              <h2 className="mt-6 font-adisp text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                Call and tell us what is happening
              </h2>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.68] text-a-ink2 dark:text-a-dink2">
                A real person answers, day or night. By the time the truck pulls into your driveway
                we usually already know what we are fixing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
              </div>
              <p className="mt-6 font-adisp text-[17px] font-semibold">
                Water on the floor right now? Call. Do not fill out a form.
              </p>
            </div>

            <form className="rounded-[10px] border border-a-line bg-a-paper p-6 dark:border-a-dline dark:bg-a-dpaper sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <p className="font-adisp text-[17px] font-semibold">Request service</p>
              <div className="mt-5 space-y-4">
                {[
                  ["Name", "text", "name"],
                  ["Phone", "tel", "phone"],
                  ["Service address", "text", "address"],
                ].map(([label, type, id]) => (
                  <div key={id}>
                    <label htmlFor={`a-${id}`} className="font-amono text-[11px] uppercase tracking-[0.14em] text-a-ink2 dark:text-a-dink2">
                      {label}
                    </label>
                    <input
                      id={`a-${id}`}
                      type={type}
                      className="mt-1.5 w-full rounded-[6px] border border-a-line bg-a-panel px-3.5 py-2.5 text-[15px] text-a-ink outline-none focus:border-a-action dark:border-a-dline dark:bg-a-dpanel dark:text-a-dink"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="a-trade" className="font-amono text-[11px] uppercase tracking-[0.14em] text-a-ink2 dark:text-a-dink2">
                    What kind of problem
                  </label>
                  <select
                    id="a-trade"
                    className="mt-1.5 w-full rounded-[6px] border border-a-line bg-a-panel px-3.5 py-2.5 text-[15px] text-a-ink outline-none focus:border-a-action dark:border-a-dline dark:bg-a-dpanel dark:text-a-dink"
                  >
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="a-what" className="font-amono text-[11px] uppercase tracking-[0.14em] text-a-ink2 dark:text-a-dink2">
                    What is happening
                  </label>
                  <textarea
                    id="a-what"
                    rows={3}
                    className="mt-1.5 w-full rounded-[6px] border border-a-line bg-a-panel px-3.5 py-2.5 text-[15px] text-a-ink outline-none focus:border-a-action dark:border-a-dline dark:bg-a-dpanel dark:text-a-dink"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[13px] leading-snug text-a-ink2 dark:text-a-dink2">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#3A7A24]" />
                  <span>
                    I agree to receive calls and text messages about this request.{" "}
                    <Placeholder>[NEEDS-INFO: final TCPA wording]</Placeholder>
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-[6px] bg-a-action px-6 py-3.5 font-abody text-[15px] font-semibold text-white transition hover:brightness-110"
                >
                  Send it
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ===== SECTION: 13 footer ===== */}
      <footer className="bg-a-ink text-a-dink dark:bg-black">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <Wordmark reversed />
            <p className="mt-1 font-amono text-[11px] uppercase tracking-[0.16em] text-a-dink2">
              Plumbing &amp; Electrical
            </p>
            <p className="mt-4 font-adisp text-[15px] font-semibold">
              One call. Two trades. Total solutions.
            </p>
            <a href={PHONE_HREF} className="mt-4 block font-amono text-[17px] tracking-tight text-[#8CC63E]">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="mt-1.5 block text-[14px] text-a-dink2 hover:text-white">
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="font-amono text-[11px] uppercase tracking-[0.18em] text-a-dink2">Services</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {["Emergency plumbing", "Water heaters", "Drains and sewer", "Leak detection and repiping", "Electrical repair", "Panels, rewiring and generators"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-amono text-[11px] uppercase tracking-[0.18em] text-a-dink2">Service area</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              {["Simpsonville", "Greer", "Easley", "Mauldin", "Taylors", "All service areas"].map((s) => (
                <li key={s}><a href="#areas" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-amono text-[11px] uppercase tracking-[0.18em] text-a-dink2">Hours</p>
            <p className="mt-4 text-[14.5px] leading-relaxed">
              24 hours, live answer.
              <br />
              No after-hours upcharge.
            </p>
            <p className="mt-4 text-[13px] text-a-dink2">
              <Placeholder>[NEEDS-INFO: physical address or service-area-business decision]</Placeholder>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-[12.5px] text-a-dink2 lg:px-10">
            <span>
              Licensed plumbing and electrical contractor, South Carolina.{" "}
              <Placeholder>[NEEDS-INFO: license numbers]</Placeholder>
            </span>
            <span className="ml-auto">&copy; 2026 Mainstream Plumbing and Electrical</span>
          </div>
        </div>
      </footer>

      {/* ===== SECTION: mobile sticky call bar ===== */}
      <a
        href={PHONE_HREF}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center bg-a-action font-abody text-[16px] font-semibold text-white sm:hidden"
      >
        Call {PHONE}
      </a>
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
