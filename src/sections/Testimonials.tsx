import ScrollReveal from "@/components/ScrollReveal";
import ScaledCanvas from "@/components/ScaledCanvas";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import TestimonialsCanvas from "@/features/testimonials/TestimonialsCanvas";
import TestimonialsMobile from "@/features/testimonials/TestimonialsMobile";

export default function Testimonials() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="tight" className="gap-6 sm:gap-7">
        <ScrollReveal variant="fade-up" className="w-full md:hidden">
          <TestimonialsMobile />
        </ScrollReveal>
        <ScrollReveal variant="fade-up" className="hidden w-full md:block">
          <ScaledCanvas designWidth={1041} designHeight={472}>
            <TestimonialsCanvas />
          </ScaledCanvas>
        </ScrollReveal>
      </SectionContent>
    </SectionShell>
  );
}
