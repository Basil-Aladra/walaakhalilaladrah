import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F3ED",
        foreground: "#1B1714",
        secondary: "#6E6258",
        gold: {
          DEFAULT: "#A68A62",
          light: "#C5AA82",
          dark: "#876D49",
        },
        dark: {
          bg: "#171411",
          card: "#201C18",
          border: "rgba(247, 243, 237, 0.12)",
        },
        borderSubtle: "rgba(27, 23, 20, 0.14)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "var(--font-cairo)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "var(--font-tajawal)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
        tightest: "-.04em",
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
