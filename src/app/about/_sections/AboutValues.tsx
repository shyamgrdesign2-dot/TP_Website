import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";
import SectionHeading from "@/components/SectionHeading";

type Value = {
  title: string;
  body: string;
};

// Four core values that drive TatvaPractice. Mirrors the homepage's
// 2×3 "Built for Every Practice Size" grid pattern but in a tighter
// 2×2 layout. Each card has an eggplant header plaque (white text) +
// a frosted-white body underneath — same eggplant gradient the rest of
// the site uses for tags / plaques.
const VALUES: Value[] = [
  {
    title: "Patient-Centered",
    body: "Every feature we build is designed to give doctors more time with their patients — never less.",
  },
  {
    title: "Innovation First",
    body: "We don't add AI as an afterthought — we build from the ground up with AI at the core.",
  },
  {
    title: "Doctor-Driven",
    body: "Our team includes practicing physicians who understand clinical workflows intimately.",
  },
  {
    title: "Excellence",
    body: "We hold ourselves to the highest standards in security, compliance, and user experience.",
  },
];

function ValueCard({ value }: { value: Value }) {
  return (
    <div
      className="flex flex-col gap-3 rounded-[18px] p-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.52) 100%)",
        backdropFilter: "blur(8px) saturate(140%)",
        WebkitBackdropFilter: "blur(8px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.85) inset, 0 12px 32px rgba(33,32,119,0.10)",
      }}
    >
      {/* Eggplant header plaque — matches the "Flagship Feature" tag
          on the homepage's PracticeManagement card. */}
      <div
        className="rounded-[14px] px-5 py-3.5"
        style={{
          background:
            "radial-gradient(120% 140% at 0% 0%, #46286C 0%, #25113E 55%, #372153 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.25) inset",
        }}
      >
        <p
          className="font-bold text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 1.4vw, 20px)",
            letterSpacing: "-0.01em",
          }}
        >
          {value.title}
        </p>
      </div>

      <p
        className="px-5 pb-4 pt-1 text-[#4A4A66]"
        style={{
          fontSize: "clamp(13px, 1.05vw, 15px)",
          lineHeight: 1.6,
        }}
      >
        {value.body}
      </p>
    </div>
  );
}

export default function AboutValues() {
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
          <SectionHeading>What Drives Us</SectionHeading>
        </ScrollReveal>

        <div
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
          style={{ gap: "clamp(14px, 1.4vw, 22px)" }}
        >
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} variant="fade-up" delay={80 + i * 80}>
              <ValueCard value={v} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
