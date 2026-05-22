import SectionBg from "@/components/SectionBg";
import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
  /** Short feature label rendered in the section heading. */
  featureLabel: string;
  /** YouTube video ID. The embed is rendered directly (no click-to-load
   *  overlay); YouTube shows its own poster + play control. */
  videoId?: string;
};

/**
 * Video showcase band. Heading reads "See how <feature> works" and the
 * YouTube player is embedded directly in the card. Renders nothing when
 * the feature has no video.
 */
export default function FeaturePracticeMgmt({ featureLabel, videoId }: Props) {
  if (!videoId) return null;

  const caption = `See how ${featureLabel} works`;

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
            See how <GradientSpan>{featureLabel} works</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" once className="w-full">
          <div className="relative aspect-[862/403] w-full overflow-hidden rounded-[24px] bg-black sm:rounded-[32px]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={caption}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
