"use client";

import Link from "next/link";
import { useState } from "react";
import { AI_TABS, type AiTabId } from "./aiTabsData";

// Mobile-only layout matching the "Built-In AI" mobile artboard in
// Figma (node 2116-9359). Tab pills sit ABOVE a navy-radial content
// card; the active tab's title + description live in the upper half
// of the card, and its illustration anchors to the bottom.
// Tab data comes from `aiTabsData.tsx` — the same array the desktop
// `AiTabbedInterface` will consume once it's migrated. One source
// of truth, two layouts.

export default function MobileAiTabs() {
  const [active, setActive] = useState<AiTabId>(AI_TABS[0].id);
  const activeTab = AI_TABS.find((t) => t.id === active) ?? AI_TABS[0];

  return (
    <div className="flex w-full flex-col items-center gap-4 sm:hidden">
      {/* Outer card. Same 358×500 design canvas the Figma mobile
          artboard uses, but rendered fluidly via `max-w-full`. */}
      <div className="relative w-full max-w-[420px]">
        {/* Tab pill bar — overlaps the top edge of the card so it
            reads as part of the same surface. Horizontally
            scrollable on overflow so all 5 pills are reachable. */}
        <div
          className="absolute inset-x-0 top-0 z-[2] mx-auto flex h-[52px] items-center overflow-x-auto rounded-b-[18px] px-3 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(173deg, rgba(248,225,251,0.55) 45%, rgba(215,165,235,0.55) 75%, rgba(121,70,203,0.45) 220%)",
            boxShadow: "0 1px 6px rgba(255,255,255,0.25)",
            scrollbarWidth: "none",
            width: "calc(100% - 24px)",
            marginInline: "12px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex items-center gap-2">
            {AI_TABS.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`flex h-8 shrink-0 items-center justify-center rounded-full px-3.5 transition ${
                    isActive ? "text-white" : "text-black/80"
                  }`}
                  style={{
                    fontSize: "12px",
                    fontFamily: isActive
                      ? "'Poppins', 'Inter', sans-serif"
                      : "'Inter', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    background: isActive
                      ? "linear-gradient(98deg, #B45BC5 3%, #1A1994 99%)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.5)"
                      : "1px solid transparent",
                    boxShadow: isActive
                      ? "0 0 5px rgba(0,0,0,0.12)"
                      : "none",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navy radial card */}
        <div
          className="relative overflow-hidden rounded-[24px]"
          style={{
            aspectRatio: "358 / 500",
            background:
              "radial-gradient(99% 60% at 50% 55%, #46286C 0%, #25113E 39%, #372153 78%, #6C4F90 100%)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset",
          }}
        >
          {/* Decorative noise — same `--noise-svg` the other dark cards
              on the site use, so the texture family stays consistent. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              opacity: 0.07,
              backgroundImage: "var(--noise-svg)",
              backgroundSize: "220px 220px",
            }}
          />

          {/* Content stack — title + icon + description + Learn More */}
          <div className="absolute inset-x-0 top-[80px] z-[1] flex flex-col gap-3 px-8">
            <div className="flex items-center gap-3">
              <span className="text-white/95">{activeTab.icon}</span>
              <h3
                className="font-bold text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  letterSpacing: "-0.01em",
                }}
              >
                {activeTab.title}
              </h3>
            </div>
            <p
              className="text-white/85"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                lineHeight: 1.55,
                letterSpacing: "-0.16px",
              }}
            >
              {activeTab.description}
            </p>
            <Link
              href={activeTab.learnMoreHref}
              className="w-fit text-white/95 underline underline-offset-4 transition hover:text-white"
              style={{ fontSize: "14px", letterSpacing: "-0.16px" }}
            >
              Learn More
            </Link>
          </div>

          {/* Illustration anchored to the bottom-right.
              `overflow-hidden` on the card crops the image when it
              extends past the right edge — matches the Figma mobile
              layout where the screenshot peeks beyond the card. */}
          <div
            aria-hidden
            className="pointer-events-none absolute z-[1]"
            style={{
              bottom: "-12px",
              right: "-32px",
              width: "260px",
              height: "180px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeTab.mainImage.src}
              alt=""
              className="absolute right-0 top-0 h-full w-full rounded-[12px] object-cover object-left"
              style={{
                border: "3.5px solid rgba(187,182,193,0.4)",
              }}
            />
            {activeTab.overlayImage && (
              // Small offset overlay popup
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={activeTab.overlayImage.src}
                alt=""
                className="absolute h-[92px] w-[120px] rounded-[10px] object-cover"
                style={{
                  bottom: "10px",
                  left: "-44px",
                  border: "3px solid rgba(187,182,193,0.4)",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
