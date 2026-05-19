import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import WhyDoctorsGrid from "@/components/WhyDoctorsGrid";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import type { WhyDoctorsFrameContent } from "../_imports/Frame2147239996/Frame2147239996";

export default function FeatureWhyDoctors({
  content,
}: {
  content: WhyDoctorsFrameContent;
}) {
  return (
    <SectionShell bg="lavender" withGrid={false} className="w-full">
      <SectionContent padding="tight" className="gap-6 sm:gap-8">
        <ScrollReveal variant="fade-up" once className="w-full">
          <SectionHeading>{content.heading}</SectionHeading>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80} once className="w-full">
          <WhyDoctorsGrid cards={[...content.cards]} />
        </ScrollReveal>
      </SectionContent>
    </SectionShell>
  );
}
