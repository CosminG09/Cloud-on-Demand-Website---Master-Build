import localFont from "next/font/local";

/**
 * Aileron — body text (RO-friendly).
 * Using the formats available in the repo (.otf).
 * We map the weights we actually have: 400, 600, 700.
 */
export const aileron = localFont({
  src: [
    { path: "./fonts/aileron/Aileron-Regular.otf",  weight: "400", style: "normal" },
    { path: "./fonts/aileron/Aileron-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/aileron/Aileron-Bold.otf",     weight: "700", style: "normal" },
  ],
  variable: "--font-brand-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif"],
});

/**
 * Audiowide — display face (headings only).
 * Using the available .ttf file.
 */
export const audiowide = localFont({
  src: [{ path: "./fonts/audiowide/Audiowide-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-brand-display",
  display: "swap",
  preload: true,
  fallback: ["var(--font-brand-sans)","system-ui","sans-serif"],
});
