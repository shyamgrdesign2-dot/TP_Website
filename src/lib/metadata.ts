import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

// Next.js merges metadata shallowly, setting `openGraph` in a child
// page replaces the parent block instead of merging into it. This
// helper produces a complete per-page metadata object so every page
// gets the same siteName/locale/robots without repeating them.
export function buildPageMetadata(args: {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. `/features/voice-rx`. */
  path: string;
  /** Optional override for the OpenGraph + Twitter image (must live in /public). */
  ogImage?: string;
  /** Override OG type, defaults to `website`. Use `article` for blog posts. */
  ogType?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(args.path);
  const ogImage = args.ogImage ?? "/hero-bg.png";

  return {
    title: args.title,
    description: args.description,
    alternates: { canonical: args.path },
    openGraph: {
      type: args.ogType ?? "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: `${args.title}, ${SITE_NAME}`,
      description: args.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${args.title}, ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${args.title}, ${SITE_NAME}`,
      description: args.description,
      images: [ogImage],
    },
  };
}

// Re-exported so callers don't need two imports.
export { SITE_URL };
