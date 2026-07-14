import type { Config } from "tailwindcss";

// Design tokens — see /lib/tokens.md for the rationale behind each choice.
// Palette: dark navy (authority) + teal (clarity/momentum) + warm off-white
// (approachability) — deliberately not the cream/terracotta or near-black/
// acid-accent defaults; navy+teal reads as "trusted advisor," not "startup."
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B2B",
          soft: "#122A3E",
          deep: "#071320",
        },
        teal: {
          DEFAULT: "#0F6E6E",
          bright: "#1FB8A6",
          mist: "#E6F4F2",
        },
        mist: "#F6F7F5",
        paper: "#FBFAF7",
        slate: {
          DEFAULT: "#5B6B7A",
          light: "#8B99A6",
        },
        line: "#E3E7E4",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 5vw + 1rem, 5.5rem)", { lineHeight: "1.03", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.25rem, 3.5vw + 1rem, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-3": ["clamp(1.75rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,43,0.04), 0 12px 32px -12px rgba(11,27,43,0.12)",
        lift: "0 24px 60px -24px rgba(11,27,43,0.35)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
