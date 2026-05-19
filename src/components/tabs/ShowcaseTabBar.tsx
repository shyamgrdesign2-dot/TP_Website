"use client";

import type { TabItem } from "./FloatingTabShowcase";
import TabBarEar from "./TabBarEar";
import { FEATURE_TAB_ACTIVE_BG } from "./feature-tab-card-styles";
import {
  SHOWCASE_ACTIVE_AI,
  SHOWCASE_ACTIVE_EMR,
  SHOWCASE_BAR_SHADOW,
} from "./showcase-tab-styles";

type Props<T extends string> = {
  tabs: TabItem<T>[];
  active: T;
  onSelect: (id: T) => void;
  variant?: "floating" | "in-card" | "standalone";
  accent?: "ai" | "emr";
};

/**
 * Tab pill strip for Built-In AI / EMR showcases.
 * Floating variant matches Figma: frosted bar + gradient ears + scroll mask.
 */
export default function ShowcaseTabBar<T extends string>({
  tabs,
  active,
  onSelect,
  variant = "in-card",
  accent = "ai",
}: Props<T>) {
  const isFloating = variant === "floating";
  const isInCard = variant === "in-card";

  const activeBg =
    accent === "emr" ? SHOWCASE_ACTIVE_EMR : SHOWCASE_ACTIVE_AI;

  const pills = (
    <div className="flex min-w-0 items-center gap-[9px] lg:gap-3">
      {tabs.map((t) => {
        const isActive = t.id === active;

        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t.id)}
            className={`shrink-0 rounded-full transition-all ${
              isFloating
                ? `flex h-8 items-center justify-center lg:h-[42px] ${
                    isActive
                      ? "px-3.5 shadow-[0_0_4.73px_rgba(0,0,0,0.12)] lg:px-6 lg:py-3 lg:shadow-[0_0_6.2px_rgba(0,0,0,0.12)]"
                      : "p-[9px] lg:p-3"
                  }`
                : `feature-tab-card__tab px-3 py-2 text-xs font-medium sm:px-4 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? "feature-tab-card__tab--active text-white shadow-[0_0_6px_rgba(0,0,0,0.15)]"
                      : isInCard
                        ? "text-white/65 hover:text-white/90"
                        : "text-[rgba(69,69,81,0.8)]"
                  }`
            }`}
            style={
              isActive
                ? {
                    background: isFloating ? activeBg : FEATURE_TAB_ACTIVE_BG,
                    color: "#fff",
                    border: isFloating
                      ? "1px solid rgba(255,255,255,0.5)"
                      : undefined,
                    fontFamily: isFloating
                      ? "Poppins, var(--font-sans), sans-serif"
                      : undefined,
                    fontWeight: isFloating ? 600 : undefined,
                  }
                : {
                    background: "transparent",
                    border: isFloating ? "1px solid transparent" : undefined,
                    color: isFloating
                      ? "rgba(0,0,0,0.8)"
                      : undefined,
                    fontFamily: isFloating
                      ? "var(--font-sans), Inter, sans-serif"
                      : undefined,
                    fontWeight: isFloating ? 400 : undefined,
                  }
            }
          >
            <span
              className={
                isFloating
                  ? "whitespace-nowrap text-xs leading-none lg:text-sm"
                  : undefined
              }
            >
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  if (!isFloating) {
    return (
      <div
        className={
          isInCard
            ? "feature-tab-card__tabs flex w-full items-center justify-start overflow-x-auto px-3 py-2 sm:justify-center sm:px-4 sm:py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "showcase-tab-bar relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-bl-[28px] rounded-br-[28px] py-2.5 backdrop-blur-[10px] sm:max-w-[min(740px,100%)]"
        }
        style={
          isInCard
            ? undefined
            : {
                background:
                  "linear-gradient(143deg, rgba(248,225,251,0.20) -45%, rgba(215,165,235,0.20) 43%, rgba(121,70,203,0.20) 219%), #FFF",
                boxShadow: SHOWCASE_BAR_SHADOW,
              }
        }
      >
        {pills}
      </div>
    );
  }

  return (
    <div className="floating-tab-showcase__bar-row flex w-full max-w-full items-start justify-center lg:justify-start">
      <TabBarEar side="left" />
      <div className="relative shrink min-w-0">
        <div
          className="floating-tab-showcase__bar flex h-[52px] min-w-0 shrink items-center overflow-x-auto rounded-b-[18.722px] px-3 lg:h-[62px] lg:w-[662px] lg:max-w-[662px] lg:rounded-b-[27.637px] lg:px-[18px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            backgroundColor: "var(--background)",
            border: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {pills}
        </div>
        {/* Scroll-edge fade overlays, keep the bar's white background
            solid, but soften the carousel's left/right edges so any
            tab text scrolling past the boundary fades into the bar
            instead of clipping abruptly. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-8 rounded-bl-[18.722px] lg:rounded-bl-[27.637px]"
          style={{
            background:
              "linear-gradient(to right, var(--background) 30%, rgba(255,255,255,0))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-8 rounded-br-[18.722px] lg:rounded-br-[27.637px]"
          style={{
            background:
              "linear-gradient(to left, var(--background) 30%, rgba(255,255,255,0))",
          }}
        />
      </div>
      <TabBarEar side="right" />
    </div>
  );
}
