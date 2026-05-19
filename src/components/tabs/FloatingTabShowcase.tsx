"use client";

import type { ReactNode } from "react";
import ShowcaseTabBar from "./ShowcaseTabBar";
import { SHOWCASE_CARD_BG } from "./showcase-tab-styles";

export type TabItem<T extends string> = {
  id: T;
  label: string;
};

type Props<T extends string> = {
  tabs: TabItem<T>[];
  active: T;
  onSelect: (id: T) => void;
  accent?: "ai" | "emr";
  children: ReactNode;
};

/**
 * Homepage AI / EMR tab block, Figma nodes 2429:8959 (desktop), 2429:9067 / 2116:9359 (mobile).
 * Ears + frosted tab bar overlap a gradient card.
 * Mobile uses content-driven height; desktop keeps fixed aspect.
 */
export default function FloatingTabShowcase<T extends string>({
  tabs,
  active,
  onSelect,
  accent = "ai",
  children,
}: Props<T>) {
  return (
    <div className="floating-tab-showcase relative mx-auto w-full max-w-[862px]">
      {/* Tab strip, centered on mobile, ~92px inset on desktop (Figma 2429:9064) */}
      <div className="floating-tab-showcase__tabs relative z-20 mx-auto mb-[-42px] mt-1 flex w-full justify-center px-3 sm:mb-[-43px] sm:mt-1.5 lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0 lg:mt-0 lg:justify-start lg:px-0 lg:pl-[min(92px,10.7%)]">
        <ShowcaseTabBar
          tabs={tabs}
          active={active}
          onSelect={onSelect}
          variant="floating"
          accent={accent}
        />
      </div>

      <div
        className="floating-tab-showcase__card relative w-full overflow-hidden rounded-[24px] shadow-[0_0_5px_rgba(0,0,0,0.04)] h-auto lg:aspect-[862/410] lg:rounded-[32px]"
        style={{ background: SHOWCASE_CARD_BG }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "var(--noise-svg)",
            backgroundSize: "220px 220px",
          }}
        />

        <div
          key={String(active)}
          className="tab-content-anim floating-tab-showcase__body relative z-10 flex flex-col lg:absolute lg:inset-0 lg:min-h-0"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
