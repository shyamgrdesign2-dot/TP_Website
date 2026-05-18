import PracticeSizeRaw from "../features/size/PracticeSizeRaw";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";
import SectionHeading from "../components/SectionHeading";

export default function BuiltForEverySize() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />
      <ScrollReveal
        variant="fade-up"
        className="relative mx-auto"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(36px, 3.6vw, 56px)",
          paddingBottom: "clamp(36px, 3.8vw, 56px)",
          paddingInline: "16px",
        }}
      >
        {/* Mobile: render the section heading as a proper H2 above the
            cards (the Figma export uses a non-semantic <p> sized at
            42px). Hide the export's inline title on mobile via
            `[&_[data-name='Title_Container']]:hidden` so we don't get
            two headings. */}
        <div className="sm:hidden mb-5">
          <SectionHeading>
            Built for
            <br />
            Every Practice Size
          </SectionHeading>
        </div>
        <div className="[&_[data-name='Title_Container']]:hidden sm:[&_[data-name='Title_Container']]:block">
          <PracticeSizeRaw />
        </div>
      </ScrollReveal>
    </section>
  );
}
