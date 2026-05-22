import ScrollReveal from "@/components/ScrollReveal";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import CtaButton from "@/components/ui/CtaButton";
import { TRIAL_URL } from "@/lib/site";

export default function FinalCTA() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="default">
        <ScrollReveal variant="scale-in" className="w-full">
        {/*
          Final-CTA card. The previous version used the shared
          `<RadialGradientBg variant="navy" />`, which paints a centred
          radial gradient that darkens the top + bottom edges of the
          card and read visually as an inset shadow, distracting on a
          short, simple CTA panel. We replace it with a clean linear
          navy → indigo gradient + a subtle violet glow centred behind
          the heading so the card stays "lifted" without the edge
          shadowing.
        */}
        <div
          className="relative w-full overflow-hidden rounded-[32px]"
          style={{
            minHeight: "clamp(280px, 22vw, 360px)",
            background:
              "linear-gradient(180deg, #1F1F6E 0%, #2A1F75 55%, #1A1A56 100%)",
          }}
        >
          {/* Soft violet glow centred behind the heading, adds depth
              without darkening the edges. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 50% 45%, rgba(155,43,246,0.35) 0%, rgba(120,50,227,0.18) 40%, rgba(75,74,213,0) 80%)",
            }}
          />
          {/* Faint noise overlay so the navy reads as material, not
              flat ink. Same noise SVG the rest of the dark surfaces
              use, dialed down to a whisper. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              opacity: 0.05,
              backgroundImage: "var(--noise-svg)",
              backgroundSize: "220px 220px",
            }}
          />
          <div
            className="relative z-10 mx-auto flex h-full w-full flex-col items-center justify-center text-center"
            style={{
              padding:
                "clamp(36px, 3.4vw, 56px) clamp(24px, 3vw, 56px)",
              gap: "clamp(16px, 1.6vw, 24px)",
              minHeight: "clamp(280px, 22vw, 360px)",
            }}
          >
            <h2
              className="font-bold text-white [text-wrap:balance]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.4vw, 48px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
              }}
            >
              Start Your Free 7-Day Trial
            </h2>
            <p
              className="text-white/85"
              style={{
                fontSize: "clamp(14px, 1.15vw, 18px)",
                lineHeight: 1.55,
                maxWidth: "60ch",
              }}
            >
              No credit card required. Join 10,000+ doctors who are saving hours every week with TatvaPractice.
            </p>
            {/* CTAs scale up with the card. `flex-1 basis-0` on each
                lets the pair occupy a healthy chunk of the card width
                (capped by `max-w` so they don't run edge-to-edge on
                ultra-wide viewports). */}
            {/* Mobile (< sm): stack vertically so each CTA gets its
                own full-width row, fits the narrow 375 px viewport.
                Desktop (≥ sm): side-by-side row inside a 640 px cap. */}
            <div
              className="mt-1 flex w-full flex-col items-stretch justify-center sm:flex-row"
              style={{
                gap: "clamp(12px, 1.4vw, 24px)",
                maxWidth: "min(640px, 90%)",
              }}
            >
              <CtaButton
                href="/contact#contact"
                variant="outlineOnGradient"
                size="md"
                className="w-full sm:w-auto sm:flex-1 sm:basis-0 sm:min-w-0"
              >
                Book Demo
              </CtaButton>
              <CtaButton
                href={TRIAL_URL}
                variant="primaryOnGradient"
                size="md"
                className="w-full sm:w-auto sm:flex-1 sm:basis-0 sm:min-w-0"
              >
                Start Free Trial
              </CtaButton>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </SectionContent>
    </SectionShell>
  );
}
