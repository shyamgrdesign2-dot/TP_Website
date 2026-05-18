import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generates `/robots.txt`. Allow all crawlers by default and point them
// at the sitemap. If we ever need to block staging deploys, gate the
// rules on `process.env.VERCEL_ENV !== "production"` here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow Next.js' internal asset routes that have no SEO value.
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
