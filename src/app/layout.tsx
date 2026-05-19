import type { Metadata, Viewport } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";

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

// Root-level SEO defaults. Per-route `page.tsx` files extend these via
// their own `export const metadata`, Next.js only overrides the fields
// they explicitly set, so global OG/Twitter settings (siteName, locale,
// fallback image, robots) keep applying everywhere.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}, ${SITE_TAGLINE}`,
    template: `%s, ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "AI EMR",
    "electronic medical records India",
    "ABDM EMR",
    "NHA approved EMR",
    "voice prescription",
    "Indian clinic software",
    "OPD management",
    "doctor app India",
    "ABHA",
    "DPDPA compliant EMR",
    "clinic management software India",
    "EHR for hospitals",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME}, ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}, AI-first EMR for Indian clinics`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TatvaPractice",
    creator: "@TatvaPractice",
    title: `${SITE_NAME}, ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    // Block indexing on Vercel preview deployments, only the
    // canonical production domain should appear in search results.
    index:
      process.env.VERCEL_ENV === "production" ||
      process.env.NODE_ENV !== "production",
    follow: true,
    googleBot: {
      index:
        process.env.VERCEL_ENV === "production" ||
        process.env.NODE_ENV !== "production",
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "healthcare",
  verification: {
    // Wire these env vars in Vercel once you have the verification codes.
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#4B4AD5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${mulish.variable} antialiased`}
    >
      <body className="min-h-full">
        {children}
        {/* Site-wide structured data. Organization powers the Knowledge
            Graph card; WebSite enables the Google sitelinks search box. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
