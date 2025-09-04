import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Temporary default font until we wire brand fonts next step
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud on Demand",
  description: "Cloud on Demand website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
