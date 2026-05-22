import ScrollReveal from "@/components/ScrollReveal";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import { PARTNER_LOGOS } from "@/features/pm/data/partnerLogos";

// Partner logos tinted to one muted indigo-slate so the row reads as a
// single, restrained proof band (logos are masked, then filled). A softer
// tone than the saturated stat purple, so the marks breathe instead of
// being overpowered.
const TINT = "#5B5577";

export default function TrustedBy() {
  return (
    <SectionShell bg="lavender" withGrid={false} className="w-full" id="trusted-by">
      <SectionContent className="gap-6 sm:gap-6" padding="default">
        <ScrollReveal variant="fade-up" once>
          <p
            className="text-center font-semibold uppercase text-[#8A85A3]"
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              lineHeight: 1.4,
            }}
          >
            Trusted by
          </p>
        </ScrollReveal>

        <div
          className="logo-carousel-mask relative w-full max-w-[var(--section-w)] overflow-hidden"
          style={{ minHeight: "clamp(56px, 5.5vw, 76px)" }}
        >
          <div className="logo-carousel-track flex h-full items-center">
            {[0, 1].map((cycle) => (
              <div key={cycle} className="flex shrink-0 items-center">
                {PARTNER_LOGOS.map((logo, i) => (
                  <div
                    key={`${cycle}-${i}`}
                    className="flex h-full items-center justify-center px-[clamp(12px,1.8vw,32px)]"
                  >
                    <span
                      role="img"
                      aria-label={logo.name}
                      className="block h-[clamp(40px,4vw,52px)] w-[clamp(124px,12vw,180px)]"
                      style={{
                        backgroundColor: TINT,
                        WebkitMaskImage: `url("${logo.src}")`,
                        maskImage: `url("${logo.src}")`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionShell>
  );
}
