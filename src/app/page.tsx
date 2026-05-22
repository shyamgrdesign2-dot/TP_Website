import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ImmersiveScrollVideo from "@/sections/ImmersiveScrollVideo";
import TrustedBy from "@/sections/TrustedBy";
import OurScale from "@/sections/OurScale";
import BuiltInAI from "@/sections/BuiltInAI";
import EmrStreamlines from "@/sections/EmrStreamlines";
import BuiltForEverySize from "@/sections/BuiltForEverySize";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import { FAQ_ITEMS } from "@/sections/faq-data";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";
import LandingProductBand from "@/components/LandingProductBand";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { faqPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE_NAME}, ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  // No global page pattern, every section now renders its own contained
  // grid + radial wash via SectionBg, so they don't collide at boundaries.
  const faqLd = faqPageJsonLd(FAQ_ITEMS);

  return (
    // `pb-[88px]` on mobile reserves space for the sticky bottom CTA
    // (the MobileStickyCTA at viewport bottom is ~76 px tall + a bit
    // of breathing room). `sm:pb-0` removes the reserve once the
    // sticky bar is hidden on desktop.
    <main className="relative pb-[88px] sm:pb-0">
      <Navbar />
      <Hero />
      <ImmersiveScrollVideo />
      <LandingProductBand>
        <TrustedBy />
        <OurScale />
        <BuiltInAI />
        <EmrStreamlines />
        <BuiltForEverySize />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </LandingProductBand>
      <Footer />

      {/* Mobile-only sticky CTA bar pinned to the viewport bottom.
          Hidden on `sm` + so it never overlaps the desktop layout. */}
      <MobileStickyCTA />

      {/* FAQPage structured data so the homepage's FAQ items can appear
          as rich snippets in Google search results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
