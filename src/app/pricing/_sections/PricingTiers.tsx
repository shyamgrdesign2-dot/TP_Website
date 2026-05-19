import Link from "next/link";
import { SectionContent, SectionShell } from "@/components/SectionShell";

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

function Badge({ label, style }: { label: string; style: Tier["badgeStyle"] }) {
  const styles: Record<Tier["badgeStyle"], string> = {
    blue: "border-[#E8E0F0] bg-white text-[#4B4AD5]",
    neutral: "border-[#E5E5EA] bg-white text-[#454551]",
    featured: "border-transparent bg-[#4B4AD5] text-white",
  };
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] ${styles[style]}`}
    >
      {label}
    </span>
  );
}

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

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex flex-col gap-4 rounded-[24px] border bg-white p-7 sm:p-8 ${
        tier.featured
          ? "border-[#4B4AD5]"
          : "border-[#E8E0F0]"
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
          className="absolute -top-3 left-7 inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
          style={{
            backgroundImage:
              "linear-gradient(106deg, #4B4AD5 0%, #27276F 131.58%)",
          }}
        >
          {tier.badge}
        </span>
      )}

      <div className="flex flex-col gap-2">
        {!tier.featured && <Badge label={tier.badge} style={tier.badgeStyle} />}
        <h3
          className="font-bold text-[#1F1F1F]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.4vw, 30px)",
          }}
        >
          {tier.name}
        </h3>
        <p className="text-[14px] text-[#454551]">{tier.description}</p>
      </div>

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
