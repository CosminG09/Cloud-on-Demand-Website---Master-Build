// tailwind.config.ts
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./stories/**/*.{tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: {
          primary: "hsl(var(--brand-primary))",
          "primary-foreground": "hsl(var(--brand-primary-foreground))",
          secondary: "hsl(var(--brand-secondary))",
          "secondary-foreground": "hsl(var(--brand-secondary-foreground))",
        },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        success: { DEFAULT: "hsl(var(--success))", foreground: "hsl(var(--success-foreground))" },
        warning: { DEFAULT: "hsl(var(--warning))", foreground: "hsl(var(--warning-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
      },
      fontFamily: {
        sans: ["var(--font-brand-sans)", ...fontFamily.sans],
        display: ["var(--font-brand-display)", "var(--font-brand-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "display-1": ["clamp(2.25rem, 2.5vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(1.875rem, 2vw + 0.75rem, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.005em" }],
        "h3": ["1.5rem",  { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "h4": ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body":    ["1rem",     { lineHeight: "1.65" }],
        "small":   ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.8125rem",{ lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        "2xl": "var(--radius-2xl)",
        DEFAULT: "var(--radius-2xl)",
      },
      boxShadow: {
        "soft-sm": "var(--shadow-sm)",
        "soft-md": "var(--shadow-md)",
        "soft-lg": "var(--shadow-lg)",
      },
      spacing: { 13: "3.25rem", 15: "3.75rem", 18: "4.5rem", 22: "5.5rem", 26: "6.5rem" },
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
  plugins: [typography, animate],
};

export default config;
