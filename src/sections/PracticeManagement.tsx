"use client";

import { useState } from "react";
import Card from "../components/Card";
import ScrollReveal from "../components/ScrollReveal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SectionContent, SectionShell } from "@/components/SectionShell";
import { PartnerLogosCarousel } from "../features/pm/components/PartnerLogos";
import { PmFlipCard } from "../features/pm/components/PmFlipCard";
import { MOBILE_TIPS } from "../features/pm/data/tooltips";
import { MobileTooltip } from "../features/pm/components/Tooltips";

export default function PracticeManagement() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleFlip = (n: number) => setActiveCard(n);
  const handleBack = () => setActiveCard(null);

  return (
    <SectionShell
      id="practice-management"
      bg="none"
      scrollMarginTop="clamp(80px, 8vh, 120px)"
      className="w-full"
      style={{ overflow: "visible" }}
    >
      <SectionContent padding="none" className="max-w-none w-full">
        <ContainerScroll scrollHeight="min(140vh, 82rem)">
          <Card
            variant="navy"
            padX="none"
            padY="none"
            withCornerVectors
            radius="clamp(32px, 3.2vw, 44px)"
            className="shadow-none"
            style={{ boxShadow: "none" }}
          >
            <div
              className="relative mx-auto flex w-full flex-col items-center justify-center max-sm:px-0 max-sm:py-8 sm:px-[clamp(36px,3.6vw,56px)] sm:py-[clamp(60px,5.8vw,104px)]"
              style={{ gap: "clamp(24px, 2.6vw, 40px)" }}
            >
              <ScrollReveal variant="fade-up" className="w-full max-sm:px-4">
                <h2
                  className="text-center font-bold text-white [text-wrap:balance]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 3.2vw, 42px)",
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    maxWidth: "min(900px, 90vw)",
                    textShadow: "0 2px 18px rgba(75,74,213,0.45)",
                  }}
                >
                  Complete AI-First
                  <br />
                  Practice Management in One System
                </h2>
              </ScrollReveal>

              {/* Mobile (< sm): composite image with tooltip overlays */}
              <div className="flex w-full flex-col gap-4 px-4 sm:hidden">
                <div
                  className="relative mx-auto w-full overflow-hidden rounded-[18px]"
                  style={{
                    maxWidth: "100%",
                    aspectRatio: "1346 / 2018",
                    background: "rgba(255,255,255,0.04)",
                    boxShadow: "0 10px 30px rgba(16,16,86,0.25)",
                  }}
                >
                  { }
                  <img
                    src="/Assets/Practice-management/mobile.png"
                    alt="TatvaPractice in use across a clinic"
                    className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[14px] object-cover object-center"
                  />
                  {MOBILE_TIPS.map((t, i) => (
                    <div
                      key={i}
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2"
                      style={{ top: `${t.topPct}%` }}
                    >
                      <div className="pointer-events-auto">
                        <MobileTooltip label={t.label} emoji={t.emoji} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop flip card (≥ sm). */}
              <PmFlipCard
                activeCard={activeCard}
                handleFlip={handleFlip}
                handleBack={handleBack}
              />

              {/* Trusted by + carousel */}
              <PartnerLogosCarousel />
            </div>
          </Card>
        </ContainerScroll>
      </SectionContent>
    </SectionShell>
  );
}
