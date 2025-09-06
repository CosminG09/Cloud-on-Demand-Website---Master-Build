import "./globals.css";
import type { Metadata } from "next";
import { aileron, audiowide } from "./fonts"; // ← use shared loaders (Option B)

export const metadata: Metadata = {
  title: "Cloud on Demand",
  description: "SMB & Startup digitalization on Microsoft ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ro"
      className={`${aileron.variable} ${audiowide.variable} font-sans`} // Aileron as default, Audiowide available
      suppressHydrationWarning
    >
      {/* Colors come from tokens in globals.css; don't hardcode text colors here */}
      <body>{children}</body>
    </html>
  );
}
