import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/sections/Navbar";
import Testimonials from "@/sections/Testimonials";
import TrustedBy from "@/sections/TrustedBy";
import Footer from "@/sections/Footer";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import {
  breadcrumbsJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/json-ld";
import type { FeatureContent } from "../content/types";
import FeatureHero from "./FeatureHero";
import FeaturePracticeMgmt from "./FeaturePracticeMgmt";
import FeatureWhyDoctors from "./FeatureWhyDoctors";
import SolutionHero from "../../../solutions/_shared/_sections/SolutionHero";

// Shared shell used by every Features + Solutions subpage. Each
// route's `page.tsx` passes its own `content` prop, the page layout
// itself is identical. The shell also emits per-page JSON-LD
// (SoftwareApplication + BreadcrumbList) so each route shows up
// correctly in search. `section` defaults to "features" but solutions
// pages (Clinics, Hospitals) pass "solutions" so canonical URLs and
// breadcrumb labels resolve to /solutions/* instead of /features/*.
export default function FeaturePage({
  content,
  section = "features",
}: {
  content: FeatureContent;
  section?: "features" | "solutions";
}) {
  const pageUrl = absoluteUrl(`/${section}/${content.slug}`);
  const featureList = content.whyDoctors.cards.map((c) => c.title);
  const productName = `${SITE_NAME} ${content.navLabel}`;
  const sectionLabel = section === "solutions" ? "Solutions" : "Features";
  const sectionAnchor = section === "solutions" ? "#solutions" : "#features";

  const softwareLd = softwareApplicationJsonLd({
    name: productName,
    description: content.metaDescription,
    url: pageUrl,
    featureList,
  });

  const breadcrumbsLd = breadcrumbsJsonLd([
    { name: "Home", url: SITE_URL },
    { name: sectionLabel, url: absoluteUrl(`/${sectionAnchor}`) },
    { name: content.navLabel, url: pageUrl },
  ]);

  return (
    <main className="relative pb-[88px] sm:pb-0">
      <Navbar />
      {/* Solutions subpages (Clinics, Hospitals) use a different hero
          card composition (Figma Frame2147240057), wider text column +
          narrow inset image panel inside a single 32 px-padded content
          box, so nothing bleeds past the card edge. Feature subpages
          keep using the wide-overlay FeatureHero (Frame2147240061). */}
      {section === "solutions" ? (
        <SolutionHero
          content={{
            eyebrowLabel: `For ${content.navLabel.replace(/^For\s+/i, "")}`,
            headlineLines: content.hero.headlineLines as [string, string],
            subhead: content.hero.subhead,
            mainImage: content.hero.mainImage,
          }}
        />
      ) : (
        <FeatureHero content={content.hero} />
      )}
      <TrustedBy />
      <FeatureWhyDoctors content={content.whyDoctors} />
      {section === "features" ? (
        <FeaturePracticeMgmt
          featureLabel={content.navLabel}
          videoId={content.videoId}
        />
      ) : null}
      <Testimonials />
      <Footer />

      <MobileStickyCTA />

      {/* Per-page structured data. Mounted at the bottom of <main> so
          it doesn't block above-the-fold paint. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
    </main>
  );
}
