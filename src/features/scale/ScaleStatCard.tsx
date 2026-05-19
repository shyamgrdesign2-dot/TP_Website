"use client";

import type { ComponentType } from "react";
import CountUp from "@/components/CountUp";
import DecryptedText from "@/components/DecryptedText";
import ScrollReveal from "@/components/ScrollReveal";
import type { IconProps } from "./ScaleStatIcons";

export type ScaleStatIconComponent = ComponentType<IconProps>;

export type ScaleStat = {
  to: number;
  suffix: string;
  label: string;
  Icon: ScaleStatIconComponent;
  separator?: string;
  revealDelay?: number;
};

const CARD_REVEAL_MS = 520;
const TEXT_AFTER_CARD_MS = 380;

/** Figma 2302:7164, watermark icon right, copy left; never overlaps */
export default function ScaleStatCard({
  to,
  suffix,
  label,
  Icon,
  separator = ",",
  revealDelay = 0,
}: ScaleStat) {
  const countDelaySec = (revealDelay + CARD_REVEAL_MS + TEXT_AFTER_CARD_MS) / 1000;
  const labelDelayMs = revealDelay + CARD_REVEAL_MS + TEXT_AFTER_CARD_MS + 180;

  return (
    <ScrollReveal
      variant="fade-up"
      delay={revealDelay}
      once
      threshold={0.12}
      className="h-full min-w-0"
    >
      <div className="scale-stat-card-shell relative h-full min-w-0">
        <div
          aria-hidden
          className="scale-stat-card-shadow pointer-events-none absolute inset-x-[2%] -bottom-1.5 top-2 -z-10 rounded-[18px]"
        />

        <div className="scale-stat-card relative w-full min-w-0 overflow-hidden rounded-[16px]">
          <div aria-hidden className="scale-stat-icon-wrap pointer-events-none absolute z-0">
            <Icon color="#64388d" className="h-full w-full" />
          </div>

          <div className="scale-stat-copy relative z-10 flex h-full min-w-0 flex-col justify-center">
            <p className="scale-stat-count text-[#64388d]">
              <CountUp
                to={to}
                suffix={suffix}
                separator={separator}
                duration={1.15}
                delay={countDelaySec}
              />
            </p>
            <p className="scale-stat-label text-[#64388d]">
              <DecryptedText
                text={label}
                animateOn="view"
                speed={36}
                maxIterations={12}
                delayMs={labelDelayMs}
              />
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
