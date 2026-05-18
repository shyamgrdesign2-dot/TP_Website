import type { CSSProperties } from "react";
import TestimonialsSection from "../components/_landingref/TestimonialsRaw";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";
import TestimonialsMobileCarousel from "./TestimonialsMobileCarousel";

// "Hear from Healthcare Professionals" — the underlying Figma export
// has a fixed `w-[1041px]` design canvas. Without a scaling shell that
// fixed width spills past `var(--section-w)` on viewports < ~1180 px
// (the testimonial cards drift into the page-margin gutter the user
// flagged). We wrap it in `tab-widget-fit` here so the design canvas
// scales uniformly to fill the section content width on every viewport
// — same pattern the Feature subpage sections use.
export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="pink" />
      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(32px, 3.4vw, 52px)",
          paddingBottom: "clamp(32px, 3.4vw, 52px)",
        }}
      >
        {/* Desktop: 3-column Figma testimonial row (≥ sm). The
            visibility toggle lives on an OUTER wrapper because the
            `.tab-widget-fit` class itself sets `display: flex`, which
            would win against Tailwind's `.hidden` if both lived on
            the same element. */}
        <div className="hidden w-full sm:block">
          <div
            className="tab-widget-fit w-full"
            style={
              {
                "--design-w": 1041,
                "--design-h": 372,
                "--fit-min-h": "0px",
              } as CSSProperties
            }
          >
            <div className="tab-widget-fit-inner">
              <TestimonialsSection />
            </div>
          </div>
        </div>

        {/* Mobile: swipeable carousel — one card centred, neighbours
            peek ~12% off both edges, 3-dot pagination underneath. */}
        <TestimonialsMobileCarousel />
      </ScrollReveal>
    </section>
  );
}
