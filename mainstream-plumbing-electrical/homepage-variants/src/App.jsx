import React, { useEffect, useState, useCallback } from "react";
import Constant from "./variants/Constant.jsx";
import TwoTrades from "./variants/TwoTrades.jsx";
import RedClay from "./variants/RedClay.jsx";

/* ===== SECTION: routing =====
   Six looks, three files. The hash carries both the direction and the
   treatment so every one of the six has its own shareable URL:
   #/a  #/a/dark  #/b  #/b/dark  #/c  #/c/dark                       */

const DIRECTIONS = {
  a: { label: "A", name: "The Constant", Comp: Constant, accent: "#3A7A24" },
  b: { label: "B", name: "Two Trades", Comp: TwoTrades, accent: "#1B6FB0" },
  c: { label: "C", name: "Red Clay", Comp: RedClay, accent: "#9B4F35" },
};

function parseHash() {
  const raw = (window.location.hash || "").replace(/^#\/?/, "").toLowerCase();
  const [dir, mode] = raw.split("/");
  return {
    dir: DIRECTIONS[dir] ? dir : "a",
    theme: mode === "dark" ? "dark" : "light",
  };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Theme is stamped on <html>, which is what tailwind.config.js keys off.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", route.theme);
  }, [route.theme]);

  const go = useCallback((dir, theme) => {
    window.location.hash = theme === "dark" ? `/${dir}/dark` : `/${dir}`;
  }, []);

  const { Comp, name } = DIRECTIONS[route.dir];
  const isDark = route.theme === "dark";

  return (
    <>
      <Comp />
      <Switcher current={route.dir} isDark={isDark} onGo={go} name={name} />
    </>
  );
}

/* ===== SECTION: switcher =====
   Prototype control, not part of the site. Sits above the mobile sticky
   call bar so it never covers the thing we are asking Jacob to test.     */

function Switcher({ current, isDark, onGo, name }) {
  return (
    <div
      className="fixed left-1/2 z-[99999] -translate-x-1/2 bottom-[4.75rem] sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0 print:hidden"
      role="group"
      aria-label="Prototype controls. Not part of the website."
    >
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-[#0d1117]/92 px-1.5 py-1.5 shadow-2xl backdrop-blur">
        <span className="hidden pl-2.5 pr-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45 md:inline">
          {name}
        </span>

        {Object.entries(DIRECTIONS).map(([key, d]) => {
          const active = key === current;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onGo(key, isDark ? "dark" : "light")}
              aria-current={active ? "true" : undefined}
              title={`Direction ${d.label}, ${d.name}`}
              className={`h-8 w-8 rounded-full text-[13px] font-semibold transition ${
                active ? "text-white" : "text-white/55 hover:bg-white/10 hover:text-white"
              }`}
              style={active ? { background: d.accent } : undefined}
            >
              {d.label}
            </button>
          );
        })}

        <span aria-hidden="true" className="mx-1 h-5 w-px bg-white/15" />

        <button
          type="button"
          onClick={() => onGo(current, isDark ? "light" : "dark")}
          aria-pressed={isDark}
          className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </div>
  );
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
