import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import WhyDoctorsGrid from "@/components/WhyDoctorsGrid";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import type { WhyDoctorsFrameContent } from "../_imports/Frame2147239996/Frame2147239996";

export default function FeatureWhyDoctors({
  content,
}: {
  content: WhyDoctorsFrameContent;
}) {
  // Dual-tone heading: the last word reads in the brand gradient (single-word
  // headings stay fully neutral).
  const words = content.heading.trim().split(/\s+/);
  const lastWord = words.length > 1 ? words[words.length - 1] : null;
  const leadWords = lastWord ? words.slice(0, -1).join(" ") : content.heading;

  return (
    <SectionShell bg="lavender" withGrid={false} className="w-full">
      <SectionContent padding="tight" className="gap-6 sm:gap-8">
        <ScrollReveal variant="fade-up" once className="w-full">
          <SectionHeading>
            {lastWord ? (
              <>
                {leadWords} <GradientSpan>{lastWord}</GradientSpan>
              </>
            ) : (
              content.heading
            )}
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80} once className="w-full">
          <WhyDoctorsGrid cards={[...content.cards]} />
        </ScrollReveal>
      </SectionContent>
    </SectionShell>
  );
}
