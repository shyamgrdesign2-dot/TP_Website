import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";
import SectionHeading, { GradientSpan } from "@/components/SectionHeading";

type Product = {
  name: string;
  body: string;
  href?: string;
  cta?: string;
  current?: boolean;
};

type Partner = {
  name: string;
  body: string;
  href: string;
  cta: string;
};

const PRODUCTS: Product[] = [
  {
    name: "TatvaPractice",
    body: "AI-first EMR for Indian doctors and hospitals. Clinical workflows, AI prescriptions, ABDM integration, and practice analytics.",
    current: true,
  },
  {
    name: "GoodFlip",
    body: "Digital therapeutics for chronic disease management. Personalised programs for diabetes, metabolic health, and PCOS.",
    href: "https://www.goodflip.in",
    cta: "Visit GoodFlip",
  },
  {
    name: "Evalus",
    body: "Digital research platform for clinical trials and real-world evidence. Streamlines compliant study execution for Indian healthcare.",
    href: "https://www.tatvacare.in",
    cta: "Visit Evalus",
  },
];

const PARTNERS: Partner[] = [
  {
    name: "PillUp",
    body: "Modern pharmacy delivering personalised, pre-sorted medicines. Partners with TatvaCare for medication adherence and chronic care.",
    href: "https://pillup.com/",
    cta: "Visit PillUp",
  },
  {
    name: "Visit Health",
    body: "Corporate healthcare benefits platform serving 400+ companies and 4,500+ SMEs. Partners with TatvaCare to expand cashless OPD and wellness.",
    href: "https://getvisitapp.com/",
    cta: "Visit Visit Health",
  },
];

function ProductCard({ product }: { product: Product }) {
  // Mirrors the homepage "Built for Every Practice Size" card: a frosted
  // white shell wrapping a violet radial header plaque (the product name),
  // body copy, then a hyperlink CTA at the bottom.
  return (
    <div
      className="flex h-full flex-col gap-[18px] rounded-[24px] p-[18px]"
      style={{
        background: "rgba(255,255,255,0.62)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        border: "0.5px solid rgba(226,226,234,0.5)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.85) inset, 0 16px 36px rgba(33,32,119,0.10)",
      }}
    >
      {/* Header plaque */}
      <div
        className="relative flex h-[88px] shrink-0 items-center overflow-hidden rounded-[14px] px-[18px]"
        style={{
          background:
            "radial-gradient(99.09% 59.99% at 50% 55.44%, #46286C 0%, #25113E 39.08%, #372153 78.16%, #6C4F90 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.25) inset",
        }}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className="bg-gradient-to-r from-white to-[#e5d6fd] bg-clip-text font-bold text-transparent"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2vw, 26px)",
              letterSpacing: "-0.01em",
            }}
          >
            {product.name}
          </span>
          {product.current ? (
            <span
              className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#E4E0FF]"
              style={{
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.30)",
              }}
            >
              You&rsquo;re here
            </span>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <p
        className="flex-1 px-1 text-[#4A4A66]"
        style={{ fontSize: "clamp(13px, 1.05vw, 15px)", lineHeight: 1.6 }}
      >
        {product.body}
      </p>

      {/* CTA */}
      {product.href && product.cta ? (
        <Link
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 px-1 font-semibold text-[#4B4AD5] underline decoration-[#4B4AD5]/30 underline-offset-4 transition hover:decoration-[#4B4AD5]"
          style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
        >
          {product.cta}
          <span aria-hidden>&rarr;</span>
        </Link>
      ) : (
        <span
          className="px-1 font-semibold text-[#7A6CA8]"
          style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
        >
          You are on this product
        </span>
      )}
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  // Subtle light tile, sits inside the white Strategic Partners panel.
  return (
    <div
      className="flex h-full flex-col gap-3 rounded-[16px] p-5"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(75,74,213,0.12)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.85) inset, 0 8px 20px rgba(33,32,119,0.06)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <h3
          className="font-bold text-[#1F1F38]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(17px, 1.5vw, 22px)",
            letterSpacing: "-0.01em",
          }}
        >
          {partner.name}
        </h3>
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#4B4AD5]"
          style={{
            background: "rgba(75,74,213,0.10)",
            border: "1px solid rgba(75,74,213,0.20)",
          }}
        >
          Partnership
        </span>
      </div>
      <p
        className="flex-1 text-[#4A4A66]"
        style={{ fontSize: "clamp(13px, 1.05vw, 15px)", lineHeight: 1.6 }}
      >
        {partner.body}
      </p>
      <Link
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1.5 font-semibold text-[#4B4AD5] underline decoration-[#4B4AD5]/30 underline-offset-4 transition hover:decoration-[#4B4AD5]"
        style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
      >
        {partner.cta}
        <span aria-hidden>&rarr;</span>
      </Link>
    </div>
  );
}

export default function AboutEcosystem() {
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
          <SectionHeading>
            The TatvaCare <GradientSpan>Ecosystem</GradientSpan>
          </SectionHeading>
        </ScrollReveal>

        {/* Products, three cards directly under the section heading */}
        <div
          className="grid w-full grid-cols-1 md:grid-cols-3"
          style={{ gap: "clamp(14px, 1.4vw, 22px)" }}
        >
          {PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.name} variant="fade-up" delay={80 + i * 80} className="h-full">
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>

        {/* Strategic partners, two subtle tiles (no heading, no outer shell) */}
        <div
          className="grid w-full grid-cols-1 md:grid-cols-2"
          style={{ gap: "clamp(14px, 1.4vw, 22px)" }}
        >
          {PARTNERS.map((p, i) => (
            <ScrollReveal key={p.name} variant="fade-up" delay={80 + i * 80} className="h-full">
              <PartnerCard partner={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
