import SectionBg from "@/components/SectionBg";
import SectionHeading from "@/components/SectionHeading";
import { GradientSpan } from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
  /** Short feature label rendered inside the video plaque + thumbnail caption.
   *  e.g. "VoiceRx", "SmartSync", "Clinic Care". */
  featureLabel: string;
  /** Punchy outer headline that hypes the feature for the section above
   *  the video card. Two-line shape with the second half rendered in the
   *  brand gradient. */
  headline: { line1: string; line2: string };
  /** Optional override for the thumbnail caption line. Defaults to
   *  `See how ${featureLabel} works`. */
  ctaText?: string;
};

/**
 * Video showcase band. One slot per feature subpage, the outer
 * headline introduces the feature, the dark thumbnail teases the
 * product video. Click → opens the explainer (wired separately).
 */
export default function FeaturePracticeMgmt({
  featureLabel,
  headline,
  ctaText,
}: Props) {
  const caption = ctaText ?? `See how ${featureLabel} works`;

  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-6 sm:gap-8"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(28px, 2.8vw, 52px)",
          paddingBottom: "clamp(36px, 3.8vw, 60px)",
        }}
      >
        <ScrollReveal variant="fade-up" once className="w-full">
          <SectionHeading>
            {headline.line1}
            <br />
            <GradientSpan>{headline.line2}</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" once className="w-full">
          <button
            type="button"
            aria-label={caption}
            className="group relative block w-full overflow-hidden rounded-[24px] sm:rounded-[32px]"
          >
            <div
              className="relative aspect-[862/403] w-full"
              style={{
                background:
                  "radial-gradient(99.09% 59.99% at 50% 55.44%, #46286C 0%, #25113E 39.08%, #372153 78.16%, #6C4F90 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "var(--noise-svg)",
                  backgroundSize: "220px 220px",
                }}
              />

              {/* Top-left plaque, feature label */}
              <div
                className="absolute left-[-5px] top-[9%] z-20 overflow-hidden rounded-br-[20px] rounded-tr-[20px] px-3 py-1.5 sm:rounded-br-[26.9px] sm:rounded-tr-[26.9px] sm:px-4 sm:py-2"
                style={{
                  background:
                    "linear-gradient(90deg, #492B66 0%, rgba(255,255,255,0.4) 50%, rgba(73,43,102,0.6) 100%)",
                }}
              >
                <span
                  className="bg-clip-text text-[13px] font-medium tracking-[0.03em] text-transparent sm:text-[16px]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    backgroundImage:
                      "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.9) 27.737%)",
                  }}
                >
                  {featureLabel}
                </span>
              </div>

              {/* Centred caption, "See how ___ works" */}
              <p
                className="absolute inset-x-0 bottom-[22%] z-20 px-6 text-center text-white/95 sm:bottom-[24%]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 2.4vw, 30px)",
                  fontWeight: 600,
                  lineHeight: 1.18,
                  letterSpacing: "-0.01em",
                }}
              >
                {caption}
              </p>

              {/* YouTube-style red play button, centred above caption */}
              <span
                className="absolute left-1/2 top-[40%] z-30 flex h-[clamp(48px,6.5vw,68px)] w-[clamp(68px,9.5vw,96px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] transition-transform duration-200 group-hover:scale-[1.05]"
                style={{
                  background: "#FF0000",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.32)",
                }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[42%] w-[42%] translate-x-[1px] text-white"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
