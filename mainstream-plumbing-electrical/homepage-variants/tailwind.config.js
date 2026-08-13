/** @type {import('tailwindcss').Config} */

// Mainstream Plumbing and Electrical - homepage variation prototypes.
//
// This file ships with the AI Studio handoff. The winning direction's token
// block is the only one the production build needs; the other two get deleted.
//
// Every hex below is sampled from a real brand asset. Sources are noted.
// Full reasoning: Clients/Mainstream Plumbing and Electrical/website-design/DESIGN-DIRECTION.md

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // Theme is stamped on <html> so the whole document flips at once.
  darkMode: ["selector", '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        // ---- Shared brand truth, sampled from the logo and the truck wrap ----
        brand: {
          navy: "#12294A", // logo ring, left side
          royal: "#1F5FA9", // logo ring
          green: "#4E9C31", // logo lightning bolt and plug
          cyan: "#22A0E8", // truck wrap base
          lime: "#8CC63E", // truck wrap stripes
        },

        // ---- Direction A, The Constant ----
        a: {
          paper: "#F4F0E8",
          panel: "#FFFFFF",
          ink: "#14243D",
          ink2: "#4A5A70",
          line: "#DED7C9",
          action: "#3A7A24", // logo green darkened; white label clears AA at 4.6:1
          water: "#1E6FA8",
          dpaper: "#0B1420", // dark ground
          dpanel: "#132133",
          dink: "#E8EDF4",
          dink2: "#93A3B8",
          dline: "#22344B",
        },

        // ---- Direction B, Two Trades ----
        b: {
          ground: "#FBFAF7",
          ink: "#101E33", // also every CTA, see the direction doc
          ink2: "#51607A",
          line: "#E4E2DC",
          water: "#1B6FB0",
          watersoft: "#DCEBF6",
          power: "#4E9C31", // marking colour: seams, rules, spines. Not text.
          // Text-safe power green. #4E9C31 at label size on the near-white
          // ground measures 3.29:1 against a 4.5:1 requirement, so small type
          // uses this instead. The mark keeps the brand green; the word does
          // not, which is the right way round.
          powerink: "#37711F",
          powersoft: "#E4F1DC",
          dground: "#0A1626",
          dpanel: "#101F33",
          dink: "#E6EDF6",
          dink2: "#8DA0B8",
          dline: "#1D3149",
          dwater: "#4FB3F0", // the seam lit cool
          dpower: "#7ED457", // the seam lit warm-green
        },

        // ---- Direction C, Red Clay. Sampled from photo-owner-dig-1200.jpg ----
        c: {
          dust: "#EFE6DE", // dried clay at the lip of the hole
          clay: "#9B4F35", // wet soil
          claydeep: "#6E3624",
          ink: "#1C1A18", // warm charcoal, deliberately not navy
          ink2: "#5C534B",
          line: "#DED0C4",
          sky: "#8FB4CC", // his shirt
          action: "#3A7A24",
          navy: "#12294A", // logo and footer only
          ddust: "#171310", // warm black, never a blue one
          dpanel: "#231D19",
          dink: "#F0E7DE",
          dink2: "#A99B8E",
          dline: "#33291F",
        },
      },

      fontFamily: {
        // Direction A
        adisp: ['"Familjen Grotesk"', "system-ui", "sans-serif"],
        abody: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        amono: ['"Spline Sans Mono"', "ui-monospace", "monospace"],
        // Direction B
        bdisp: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
        bbody: ["Asap", "system-ui", "sans-serif"],
        bmono: ['"Azeret Mono"', "ui-monospace", "monospace"],
        // Direction C
        cdisp: ["Gabarito", "system-ui", "sans-serif"],
        cbody: ["Literata", "Georgia", "serif"],
        cmono: ['"Fragment Mono"', "ui-monospace", "monospace"],
      },

      maxWidth: {
        measure: "34rem", // reading measure for direction C's stories
      },
    },
  },

  plugins: [],
};
