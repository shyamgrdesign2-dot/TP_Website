import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";
import AboutHero from "./_sections/AboutHero";
import AboutMission from "./_sections/AboutMission";
import AboutValues from "./_sections/AboutValues";
import AboutTeam from "./_sections/AboutTeam";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import { breadcrumbsJsonLd } from "@/lib/json-ld";

// /about, company story page. Uses the Solutions hero pattern
// (Frame2147240057): violet radial card with text column on the left
// + narrow 324×356 inset image panel on the right. Same visual
// language as /solutions/clinics and /solutions/hospitals, so the
// About hero is consistent with the rest of the brand pages instead
// of using the wide-overlay Feature hero variant.
// Body sections (Our Mission / What Drives Us / Meet Our Team)
// follow below, then the shared FinalCTA + Footer.

export const metadata: Metadata = buildPageMetadata({
  title: `About ${SITE_NAME}, Transforming Healthcare in India`,
  description:
    "TatvaCare was founded with a simple mission: give doctors their time back so they can focus on what matters most, their patients. Meet the team building India's AI-first EMR.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbsLd = breadcrumbsJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "About Us", url: absoluteUrl("/about") },
  ]);

  return (
    <main className="relative">
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <FinalCTA />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
    </main>
  );
}
