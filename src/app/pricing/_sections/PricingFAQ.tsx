"use client";

import { useState } from "react";
import { ArrowDown02 } from "tp_icon/linear";
import SectionHeading, { GradientSpan } from "@/components/SectionHeading";
import { SectionContent, SectionShell } from "@/components/SectionShell";

type FaqItem = { q: string; a: string };

const ITEMS: FaqItem[] = [
  {
    q: "Is there really a free trial?",
    a: "Yes, 7 days, full access to all AI Rx modes, no credit card required. You can cancel any time during the trial with one click.",
  },
  {
    q: 'What does "Indian-priced" mean?',
    a: "We price for the Indian market, in INR, with GST broken out. No US-dollar conversion games, no PPP-adjusted nonsense. The price you see is the price you pay.",
  },
  {
    q: "Are AI features really included in every plan?",
    a: "Yes. VoiceRx, SmartSync, SnapRx, and the Doctor Agent are part of every plan from day one. Differences between plans are about scale (multi-doctor, multi-location) and integrations (lab, IPD, pharmacy).",
  },
  {
    q: "How do DHIS earnings actually work?",
    a: "The Government of India pays a per-Rx incentive to doctors using NHA-approved EMRs to generate ABDM-linked digital prescriptions. TatvaPractice is NHA-approved and ABDM-certified. We surface your accrued DHIS earnings in your billing dashboard and reconcile against your subscription.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, upgrade or downgrade any time, pro-rated automatically. Your data, settings, and patient history move with you.",
  },
  {
    q: "What do I save by paying annually?",
    a: "Two months. Annual billing is the equivalent of 10 months at the monthly rate. Switch between monthly and annual any time, we pro-rate the change for you.",
  },
];

function FaqRow({ item, idx }: { item: FaqItem; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div
      className="overflow-hidden rounded-[16px] border border-[#E8E0F0] bg-white"
      style={{ boxShadow: "0 4px 16px rgba(33,32,119,0.04)" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="font-semibold text-[#1F1F1F]" style={{ fontSize: 16 }}>
          {item.q}
        </span>
        <ArrowDown02
          width={20}
          height={20}
          color="#334155"
          aria-hidden
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 220ms ease",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? 480 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 320ms ease, opacity 240ms ease",
        }}
      >
        <p
          className="px-5 pb-5 text-[#454551] sm:px-6 sm:pb-6"
          style={{ fontSize: 14, lineHeight: 1.65 }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function PricingFAQ() {
  return (
    <SectionShell bg="lavender" className="w-full">
      <SectionContent padding="default" className="items-center gap-7">
        <SectionHeading>
          Pricing <GradientSpan>FAQs</GradientSpan>
        </SectionHeading>
        <div className="flex w-full max-w-[780px] flex-col gap-3">
          {ITEMS.map((item, i) => (
            <FaqRow key={item.q} item={item} idx={i} />
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}
