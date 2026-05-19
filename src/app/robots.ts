import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generates `/robots.txt`. Allow all crawlers on the canonical
// production domain; block everything on Vercel preview deployments
// so they don't dilute the production domain's search ranking.
export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  if (isPreview) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      host: SITE_URL,
    };
  }

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
