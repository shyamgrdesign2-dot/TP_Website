"use client";

import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SectionBg from "../components/SectionBg";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "How secure is my data?",
    a: "All patient and clinic data is encrypted in transit and at rest. TatvaPractice is HIPAA-compliant, ISO 27001 accredited, and GDPR-aligned. You stay in full control of your records at all times.",
  },
  {
    q: "Is there an additional fee for this support program?",
    a: "No — onboarding, training, and standard support are included in every plan. Premium dedicated implementation is available for hospitals on request.",
  },
  {
    q: "Who is eligible for this support program?",
    a: "Any clinic, hospital, or solo practitioner using a paid TatvaPractice plan is eligible from day one.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are live within a single day. ABDM linking and HL7 integration for hospitals typically take 1–2 weeks depending on scope.",
  },
  {
    q: "Can I import data from my existing EMR?",
    a: "Yes — we support imports from most major EMR systems via CSV, FHIR, and direct database connectors. Our team handles the migration end to end.",
  },
  {
    q: "Do you offer in-person training?",
    a: "We offer remote training for all customers and on-site training for hospital deployments and large multi-location clinics.",
  },
];

export default function FAQ() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(56px, 5.5vw, 88px)",
          paddingBottom: "clamp(56px, 6vw, 88px)",
          gap: "clamp(28px, 3vw, 40px)",
        }}
      >
        <ScrollReveal variant="fade-up">
          <SectionHeading>FAQ</SectionHeading>
        </ScrollReveal>
        <div className="flex w-full flex-col" style={{ gap: 12 }}>
          {ITEMS.map((it, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={80 + i * 60}>
              <FaqRow item={it} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[16px] glass-surface" style={{ overflow: "hidden" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        style={{
          padding: "clamp(14px, 1.4vw, 22px) clamp(18px, 1.8vw, 26px)",
          color: "#454551",
        }}
        aria-expanded={open}
      >
        <span
          className="font-semibold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(14px, 1.15vw, 17px)",
            color: "#1f1f1f",
          }}
        >
          {item.q}
        </span>
        <Chevron open={open} />
      </button>
      <div
        style={{
          maxHeight: open ? 240 : 0,
          opacity: open ? 1 : 0,
          transition: "max-height 280ms ease, opacity 220ms ease",
          overflow: "hidden",
        }}
      >
        <p
          className="text-[#454551]"
          style={{
            padding: "0 clamp(18px, 1.8vw, 26px) clamp(16px, 1.4vw, 22px)",
            fontSize: "clamp(13px, 1vw, 14.5px)",
            lineHeight: 1.6,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 220ms ease",
      }}
    >
      <path d="M6 9l6 6 6-6" stroke="#4B4AD5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
