import PracticeSizeSection from "@/features/practice-size/PracticeSizeSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { SectionContent, SectionShell } from "@/components/SectionShell";

export default function BuiltForEverySize() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="none">
        <ScrollReveal variant="fade-up" className="w-full">
          <div className="mb-5 sm:hidden">
            <SectionHeading>
              Built for
              <br />
              Every Practice Size
            </SectionHeading>
          </div>
          <div className="[&_[data-name='Title_Container']]:hidden sm:[&_[data-name='Title_Container']]:block">
            <PracticeSizeSection />
          </div>
        </ScrollReveal>
      </SectionContent>
    </SectionShell>
  );
}
