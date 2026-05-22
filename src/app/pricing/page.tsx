import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import PricingHero from "./_sections/PricingHero";
import TrustedBy from "@/sections/TrustedBy";
import PricingTiers from "./_sections/PricingTiers";
import PricingCompare from "./_sections/PricingCompare";
import PricingFAQ from "./_sections/PricingFAQ";
import FinalCTA from "@/sections/FinalCTA";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing, Simple, Indian-priced plans | TatvaPractice",
  description:
    "Transparent pricing for solo specialists, multi-doctor clinics, and hospitals. 7-day free trial. Custom plans that scale. AI Rx included from day one.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="relative pb-[88px] sm:pb-0">
      <Navbar />
      <PricingHero />
      <TrustedBy />
      <PricingTiers />
      <PricingCompare />
      <PricingFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
