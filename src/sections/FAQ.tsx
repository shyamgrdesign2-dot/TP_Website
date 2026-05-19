"use client";

import { useState } from "react";
import { ArrowDown02 } from "tp_icon/linear";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import { FAQ_ITEMS, type FaqItem } from "./faq-data";

const ITEMS = FAQ_ITEMS;

export default function FAQ() {
  return (
    <SectionShell bg="none" className="w-full">
      <SectionContent padding="none" className="gap-7 sm:gap-10">
        <ScrollReveal variant="fade-up">
          <SectionHeading>FAQ</SectionHeading>
        </ScrollReveal>
        <div className="flex w-full flex-col gap-3">
          {ITEMS.map((it, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={80 + i * 60}>
              <FaqRow item={it} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-[16px] border border-[rgba(226,226,234,0.5)] bg-[rgba(255,255,255,0.5)] backdrop-blur-[5px]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        style={{
          padding: "clamp(14px, 1.4vw, 22px) clamp(18px, 1.8vw, 26px)",
        }}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-[#1f1f1f]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(14px, 1.15vw, 17px)",
          }}
        >
          {item.q}
        </span>
        <Chevron open={open} />
      </button>
      <div
        style={{
          maxHeight: open ? 400 : 0,
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
  );
}
