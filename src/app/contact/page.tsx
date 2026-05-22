import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ContactHero from "./_sections/ContactHero";
import ContactFormSection from "./_sections/ContactFormSection";
import TrustedBy from "@/sections/TrustedBy";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { breadcrumbsJsonLd } from "@/lib/json-ld";

// /contact, Get in Touch page. Two-section layout:
//   1. Hero with the "Get in Touch" headline + subhead.
//   2. Contact section: a contact form on the left + contact-info
//      panel (email, phone, support hours) on the right, both
//      stretched to the canonical `var(--section-w)` content column
//      so the page rhythm matches every other route on the site.
// Closes with the shared Footer (we deliberately skip FinalCTA here
// because the page itself is the conversion surface, adding a second
// CTA below would dilute the form).

export const metadata: Metadata = buildPageMetadata({
  title: "Get in Touch, TatvaPractice",
  description:
    "Talk to the TatvaPractice team. Book a demo, get pricing, or reach support. We respond within one business day to every doctor + clinic enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbsLd = breadcrumbsJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: absoluteUrl("/contact") },
  ]);

  return (
    <main className="relative">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <TrustedBy />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
    </main>
  );
}
