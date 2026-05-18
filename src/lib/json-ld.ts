import {
  PARENT_ORG_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  absoluteUrl,
} from "./site";

// Helpers that produce schema.org JSON-LD blocks. Every page renders
// these via a single <script type="application/ld+json"> tag (see
// <StructuredData />). Keeping the shapes loose-typed (Record<string,
// unknown>) lets us return any valid schema.org payload without TS
// fighting nested structures.

export type JsonLd = Record<string, unknown>;

/** schema.org/Organization — site-wide, lives in the root layout. */
export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: SITE_NAME,
    parentOrganization: { "@type": "Organization", name: PARENT_ORG_NAME },
    url: SITE_URL,
    logo: absoluteUrl("/figma/tatvapractice-logo.svg"),
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SUPPORT_EMAIL,
      telephone: SUPPORT_PHONE,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** schema.org/WebSite with SearchAction — helps Google sitelinks search box. */
export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
  };
}

/**
 * schema.org/SoftwareApplication block for an individual feature page.
 * Used by each `/features/<slug>/page.tsx` to surface the product as a
 * HealthApplication in search results.
 */
export function softwareApplicationJsonLd(args: {
  name: string;
  description: string;
  url: string;
  /** Optional list of headline benefits (used as featureList). */
  featureList?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    name: args.name,
    description: args.description,
    url: args.url,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "7-day free trial. No credit card required.",
    },
    ...(args.featureList && args.featureList.length > 0
      ? { featureList: args.featureList }
      : {}),
  };
}

/**
 * schema.org/FAQPage block — used when a page contains a structured
 * FAQ section. The `items` array maps to mainEntity.
 */
export function faqPageJsonLd(items: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** schema.org/BreadcrumbList — emitted by per-page metadata where useful. */
export function breadcrumbsJsonLd(
  items: Array<{ name: string; url: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url,
    })),
  };
}
