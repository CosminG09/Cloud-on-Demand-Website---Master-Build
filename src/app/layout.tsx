// src/app/layout.tsx
// PURPOSE: Root layout wiring fonts + global tokens.
// NOTE: We import the shared loaders exported from src/app/fonts.ts

import "./globals.css";
import type { Metadata } from "next";
import { brandSans, brandDisplay } from "./fonts"; // ✅ correct names

export const metadata: Metadata = {
  title: "Cloud on Demand",
  description: "Cloud on Demand website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Attach the CSS variables for our local fonts to <html>
    <html lang="ro" className={`${brandSans.variable} ${brandDisplay.variable}`}>
      {/* Body colors come from globals.css base layer; keep body lean */}
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

