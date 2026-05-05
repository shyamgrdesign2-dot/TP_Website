import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TatvaPractice — Trusted AI-First EMR Platform",
  description:
    "TatvaPractice automates your clinical workflow so you can focus on delivering better patient care.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mulish.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
