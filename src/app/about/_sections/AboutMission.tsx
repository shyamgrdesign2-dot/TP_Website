import Image from "next/image";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";
import SectionHeading, { GradientSpan } from "@/components/SectionHeading";

// "Our Mission", text column on the left, decorative image card on
// the right, all inside one navy radial card. Uses the same `<Card
// variant="navy" withCornerVectors />` primitive that powers the
// homepage's "Complete AI-First Practice Management" section, so the
// visual language is identical: navy radial backdrop + the four corner
// vector clusters + generous padding.
export default function AboutMission() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 72px)",
          paddingBottom: "clamp(40px, 4vw, 72px)",
          gap: "clamp(28px, 3vw, 44px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>Our Mission</SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={120} className="w-full">
          <Card variant="navy" padX="lg" padY="lg" withCornerVectors>
            <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-12">
              {/* Left: copy column */}
              <div className="flex flex-1 flex-col justify-center gap-4 text-white">
                <h3
                  className="font-bold [text-wrap:balance]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    lineHeight: 1.18,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <GradientSpan variant="white">
                    An Inclusive, Digitally Connected Health Ecosystem
                  </GradientSpan>
                </h3>
                <p
                  className="text-white/85"
                  style={{
                    fontSize: "clamp(14px, 1.1vw, 17px)",
                    lineHeight: 1.6,
                    maxWidth: "52ch",
                  }}
                >
                  TatvaPractice fits your flow, it doesn&rsquo;t fight it. Our
                  AI understands how doctors work and automates the tedious
                  parts so you can focus on what matters, clinical excellence
                  and patient relationships, not paperwork.
                </p>
              </div>

              {/* Right: inset image card. Same `#060520` deep-navy backdrop
                  the Solutions hero uses for its right-hand image panel. */}
              <div
                className="relative overflow-hidden rounded-[22px] shrink-0"
                style={{
                  background: "#060520",
                  width: "min(320px, 100%)",
                  aspectRatio: "320 / 260",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                <Image
                  src="/about/hero.png"
                  alt="TatvaPractice clinic workstation"
                  fill
                  className="pointer-events-none object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
