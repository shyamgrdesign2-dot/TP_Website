import Link from "next/link";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import svgPaths from "@/features/practice-size/svg-cazyfuvy64";

type Tier = {
  name: string;
  badge: string;
  badgeStyle: "blue" | "neutral" | "featured";
  description: string;
  priceLabel: string;
  priceNote: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "outline" | "primary";
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Solo",
    badge: "Most popular for specialists",
    badgeStyle: "blue",
    description: "For solo specialists.",
    priceLabel: "Custom",
    priceNote: "Pricing scales with your practice",
    features: [
      "All AI Rx modes (VoiceRx, SmartSync, SnapRx)",
      "Appointment booking & reminders",
      "Basic billing & GST invoices",
      "Patient records, history, prescriptions",
      "WhatsApp messaging",
      "Email + chat support",
    ],
    ctaLabel: "Talk to sales",
    ctaVariant: "outline",
  },
  {
    name: "Clinic",
    badge: "Best value",
    badgeStyle: "featured",
    description: "For multi-doctor clinics.",
    priceLabel: "Custom",
    priceNote: "Tailored to your clinic size",
    features: [
      "Everything in Solo, plus",
      "Multi-doctor & multi-staff roles",
      "OPD queue management",
      "Advanced billing, GST, reconciliation",
      "Lab integration",
      "Custom clinic website + Google My Business",
      "Priority phone support",
    ],
    ctaLabel: "Talk to sales",
    ctaVariant: "primary",
    featured: true,
  },
  {
    name: "Hospital",
    badge: "Enterprise",
    badgeStyle: "neutral",
    description: "For hospitals & chains.",
    priceLabel: "Custom",
    priceNote: "Volume pricing for hospitals",
    features: [
      "Everything in Clinic, plus",
      "IPD, pharmacy, lab modules",
      "Multi-location, role-based access",
      "Centralised reporting",
      "ABDM/HIS integrations",
      "Dedicated account manager + SLA",
      "On-site onboarding",
    ],
    ctaLabel: "Talk to sales",
    ctaVariant: "primary",
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-0.5 flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10" fill="#4B4AD5" fillOpacity="0.12" />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="#4B4AD5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Decorative polygon cluster, exact paths reused from the
 *  BuiltForEverySize card (svg-cazyfuvy64.ts). */
function DiamondPattern() {
  return (
    <div className="pointer-events-none absolute bottom-[-34px] right-[-20px] h-[136px] w-[112px]">
      <svg
        className="absolute inset-0 block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 134.939 162.543"
        aria-hidden
      >
        <g>
          <path d={svgPaths.p3aeb9340} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p18487670} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p2783da00} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p1b2a2872} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p396c3680} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.pc2cc240} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p32948170} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p23e88100} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p26919600} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.p3b614f70} fill="white" fillOpacity="0.18" />
          <path d={svgPaths.pda4e980} fill="white" fillOpacity="0.18" />
        </g>
      </svg>
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`tier-card group relative flex flex-col rounded-[24px] border bg-white transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 ${
        tier.featured ? "border-[#4B4AD5]" : "border-[#E8E0F0]"
      }`}
      style={
        tier.featured
          ? {
              boxShadow:
                "0 24px 64px rgba(75,74,213,0.18), 0 6px 16px rgba(33,32,119,0.08)",
            }
          : { boxShadow: "0 8px 28px rgba(33,32,119,0.06)" }
      }
    >
      {tier.featured && (
        <span
          className="absolute -top-3 left-6 z-30 inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
          style={{
            backgroundImage:
              "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
            boxShadow: "0 6px 16px rgba(75,74,213,0.32)",
          }}
        >
          {tier.badge}
        </span>
      )}

      {/* Header strip, eggplant radial gradient + diamond decoration */}
      <div className="tier-card__header relative m-3 mt-3 h-[112px] rounded-[16px]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-[16px]"
          style={{
            background:
              tier.featured
                ? "radial-gradient(99% 60% at 50% 55%, #4443BA 0%, #101056 39%, #252578 78%, #4443BA 100%)"
                : "radial-gradient(99% 60% at 50% 55%, #46286C 0%, #25113E 39%, #372153 78%, #6C4F90 100%)",
          }}
        />
        <DiamondPattern />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "var(--noise-svg)",
            backgroundSize: "220px 220px",
          }}
        />

        <div className="relative z-[1] flex h-full flex-col justify-center gap-1 px-5">
          {!tier.featured && (
            <span
              className="w-fit text-[10px] font-semibold uppercase tracking-[0.08em] text-white/75"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {tier.badge}
            </span>
          )}
          <h3
            className="bg-clip-text font-bold text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 0%, #E5D6FD 100%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 2.6vw, 32px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {tier.name}
          </h3>
          <p
            className="text-[13px] text-white/80"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {tier.description}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 px-6 pb-6 pt-2 sm:px-7 sm:pb-7">
        <div>
          <span
            className="font-extrabold text-[#1F1F1F]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "44px",
              lineHeight: 1,
            }}
          >
            {tier.priceLabel}
          </span>
          <div className="mt-1 text-[13px] text-[#7A7A82]">{tier.priceNote}</div>
        </div>

        <ul className="flex flex-col gap-2.5">
          {tier.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-[#1F1F1F]"
            >
              <Check />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`mt-auto flex h-[48px] items-center justify-center rounded-[12px] text-sm font-semibold transition ${
            tier.ctaVariant === "primary"
              ? "cta-shimmer text-white"
              : "cta-outline border border-[#4B4AD5] bg-white text-[#4B4AD5]"
          }`}
          style={
            tier.ctaVariant === "primary"
              ? {
                  backgroundImage:
                    "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
                }
              : undefined
          }
        >
          <span className="relative z-[1]">{tier.ctaLabel} →</span>
        </Link>
      </div>
    </div>
  );
}

export default function PricingTiers() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="default">
        <div className="grid w-full max-w-[var(--section-w)] gap-5 md:grid-cols-3">
          {TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}
