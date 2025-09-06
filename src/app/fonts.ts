// src/app/fonts.ts
import localFont from "next/font/local";

/**
 * Improve CLS by aligning fallback metrics with our local fonts.
 * `adjustFontFallback: "Arial"` injects a size-adjusted fallback to reduce reflow.
 */

export const brandSans = localFont({
  variable: "--font-brand-sans",
  display: "swap",
  preload: true,
  src: [
    { path: "./fonts/aileron/Aileron-Regular.otf",  weight: "400", style: "normal" },
    { path: "./fonts/aileron/Aileron-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/aileron/Aileron-Bold.otf",     weight: "700", style: "normal" },
  ],
  // Metric-friendly system fallbacks
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
  adjustFontFallback: "Arial", // ✅ valid values: "Arial" | "Times New Roman" | false
});

export const brandDisplay = localFont({
  variable: "--font-brand-display",
  display: "swap",
  preload: true,
  src: [{ path: "./fonts/audiowide/Audiowide-Regular.ttf", weight: "400", style: "normal" }],
  // Wider/heavier fallbacks to resemble Audiowide
  fallback: ["Arial Black", "Segoe UI", "Arial", "system-ui"],
  adjustFontFallback: "Arial", // ✅ display is still sans → "Arial"
});
