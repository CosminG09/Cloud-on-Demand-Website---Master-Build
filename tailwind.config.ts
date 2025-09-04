import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // maps to CSS vars that we’ll set in layout.tsx (Step 4.4)
        sans: ["var(--font-brand-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-brand-display)", "var(--font-brand-sans)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "70ch",
            h1: { fontFamily: "var(--font-brand-display)" },
            h2: { fontFamily: "var(--font-brand-display)" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
