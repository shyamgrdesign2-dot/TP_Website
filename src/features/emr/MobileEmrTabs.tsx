"use client";

import { useState } from "react";
import { EMR_TABS, type EmrTabId } from "./emrTabsData";

// Mobile layout for "An EMR that streamlines all your needs" —
// matches Figma node 2116-9393. Tab pill bar at the top of the
// card; below it sits the two-line title + 3 icon bullets, with the
// device illustration anchored at the card's bottom-right.
//
// Uses an indigo gradient on the active pill (vs the AI section's
// violet) to differentiate the two adjacent sections.
export default function MobileEmrTabs() {
  const [active, setActive] = useState<EmrTabId>(EMR_TABS[0].id);
  const tab = EMR_TABS.find((t) => t.id === active) ?? EMR_TABS[0];

  return (
    <div className="flex w-full flex-col items-center gap-4 sm:hidden">
      <div className="relative w-full max-w-[420px]">
        {/* Tab pill bar — overlaps the top edge of the card. */}
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
            {EMR_TABS.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
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
                      ? "linear-gradient(97deg, #27276F 7%, #5C5BD6 47%, #27276F 108%)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.5)"
                      : "1px solid transparent",
                    boxShadow: isActive
                      ? "0 0 6px rgba(0,0,0,0.12)"
                      : "none",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navy radial card */}
        <div
          className="relative overflow-hidden rounded-[24px]"
          style={{
            aspectRatio: "358 / 530",
            background:
              "radial-gradient(99% 60% at 50% 55%, #46286C 0%, #25113E 39%, #372153 78%, #6C4F90 100%)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset",
          }}
        >
          {/* Decorative noise */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              opacity: 0.07,
              backgroundImage: "var(--noise-svg)",
              backgroundSize: "220px 220px",
            }}
          />

          {/* Title + bullets */}
          <div className="absolute inset-x-0 top-[80px] z-[1] flex flex-col gap-3.5 px-8">
            <h3
              className="font-bold text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {tab.titleLines[0]}
              <br />
              {tab.titleLines[1]}
            </h3>

            <ul className="flex flex-col gap-3.5">
              {tab.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[#E3E3FF]"
                  style={{ fontSize: "14px", letterSpacing: "-0.16px" }}
                >
                  {b.icon}
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration anchored bottom-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute z-[1]"
            style={{
              bottom: "-12px",
              right: "-30px",
              width: "270px",
              height: "200px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tab.mainImage.src}
              alt=""
              className="absolute right-0 top-0 h-full w-full rounded-[12px] object-cover object-left"
            />
            {tab.overlayImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tab.overlayImage.src}
                alt=""
                className="absolute h-[100px] w-[120px] rounded-[10px] object-cover"
                style={{
                  bottom: "10px",
                  left: "-50px",
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
