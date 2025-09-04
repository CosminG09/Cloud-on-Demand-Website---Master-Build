import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const brandSans = localFont({
  variable: "--font-brand-sans",
  display: "swap",
  preload: true,
  src: [
    { path: "../../public/fonts/aileron/Aileron-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/aileron/Aileron-Bold.otf",    weight: "700", style: "normal" },
  ],
});

const brandDisplay = localFont({
  variable: "--font-brand-display",
  display: "swap",
  preload: true,
  src: [
    { path: "../../public/fonts/audiowide/Audiowide-Regular.ttf", weight: "400", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Cloud on Demand",
  description: "Cloud on Demand website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${brandSans.variable} ${brandDisplay.variable}`}>
      <body className="font-sans antialiased text-slate-900">{children}</body>
    </html>
  );
}
