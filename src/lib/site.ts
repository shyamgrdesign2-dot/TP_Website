// Site-wide constants used by metadata, sitemap, robots, and JSON-LD.
// The base URL is resolved from `NEXT_PUBLIC_SITE_URL` first so we can
// point to a staging deploy via env without touching code; falls back
// to the production domain for local + CI builds.

const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tatvapractice.com";

/** Canonical site URL with no trailing slash. */
export const SITE_URL = RAW_URL.replace(/\/$/, "");

/** Human brand name. */
export const SITE_NAME = "TatvaPractice";

/** Short, SEO-friendly tagline used as the default OG title fallback. */
export const SITE_TAGLINE = "AI-first EMR for Indian OPD";

/** Default site description (used for OG + Twitter fallbacks). */
export const SITE_DESCRIPTION =
  "TatvaPractice is the AI-first EMR built for Indian OPD reality. Voice-driven Rx, ABDM-certified, NHA-approved, and trusted by 10,000+ doctors across 200+ cities.";

/** Parent company info (for Organization JSON-LD). */
export const PARENT_ORG_NAME = "TatvaCare";
export const SUPPORT_EMAIL = "support@tatvacare.in";
export const SUPPORT_PHONE = "+91-99740-42363";

/** Resolve a relative path to an absolute URL on the canonical host. */
export function absoluteUrl(path = "/"): string {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleaned === "/" ? "" : cleaned}`;
}

/**
 * Routes that should appear in the sitemap. Adding a route here is the
 * single place to keep `app/sitemap.ts` in sync with new pages.
 */
export const SITEMAP_ROUTES: ReadonlyArray<{
  path: string;
  /** Relative priority (0.0 – 1.0). Higher = more important to crawlers. */
  priority: number;
  /** How often the page typically updates. */
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  // Conversion routes
  { path: "/pricing", priority: 0.95, changeFrequency: "monthly" },
  // Company
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  // Solutions
  { path: "/solutions/clinics", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/hospitals", priority: 0.9, changeFrequency: "monthly" },
  // Features
  { path: "/features/voice-rx", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features/smart-sync", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features/snap-rx", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/features/doctor-agent",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/features/receptionist-agent",
    priority: 0.9,
    changeFrequency: "monthly",
  },
];
