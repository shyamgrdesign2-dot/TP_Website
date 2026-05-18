"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";

// Mobile testimonials carousel — one card centered, left/right
// neighbours peeking ~12% off the edges, 3-dot pagination beneath.
// Native horizontal scroll + scroll-snap gives the swipe gesture for
// free on iOS/Android; we sync the active dot via IntersectionObserver
// so we don't fight the browser's scrolling. Hidden ≥ `sm` where the
// desktop Figma testimonial row takes over.

type Item = {
  name: string;
  credentials: string;
  quote: string;
  rating: number;
  avatar?: string;
};

const ITEMS: Item[] = [
  {
    name: "Dr. Shyam",
    credentials: "MBBS, MD",
    quote:
      "TatvaPractice with Apex AI has transformed how I diagnose and manage patients. I now spend less time on admin work and more time on patient care.",
    rating: 4,
  },
  {
    name: "Dr. Stella",
    credentials: "MBBS, MD",
    quote:
      "The Voice Rx accuracy is genuinely impressive — even with code-mixed Hindi-English. My documentation time has dropped by hours every week.",
    rating: 4,
  },
  {
    name: "Dr. Leena",
    credentials: "MBBS, MD",
    quote:
      "ABDM compliance was a constant headache before this. Now it just happens in the background. The clinical-decision support is the cherry on top.",
    rating: 4,
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#F5A623" : "none"}
      stroke={filled ? "#F5A623" : "#D6D6E0"}
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 2l2.5 6.5L21 9.5l-5 4.5 1.5 7L12 17.5 6.5 21 8 14 3 9.5l6.5-1L12 2z" />
    </svg>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <article
      className="flex flex-col gap-3 rounded-[18px] border border-white/55 p-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.6) 100%)",
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.85) inset, 0 16px 36px rgba(33,32,119,0.12)",
      }}
    >
      <header className="flex items-center gap-3">
        {/* Monogram avatar placeholder */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            background:
              "linear-gradient(135deg, #4B4AD5 0%, #27276F 100%)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.25) inset, 0 6px 14px rgba(75,74,213,0.32)",
          }}
          aria-hidden
        >
          {item.name
            .replace(/^Dr\.?\s*/i, "")
            .split(/\s+/)
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="flex flex-col">
          <h3
            className="font-bold text-[#1F1F38]"
            style={{ fontFamily: "var(--font-display)", fontSize: "15px" }}
          >
            {item.name}
          </h3>
          <p
            className="text-[#7F7F95]"
            style={{ fontSize: "12px", letterSpacing: "0.02em" }}
          >
            {item.credentials}
          </p>
        </div>
      </header>

      <div className="flex items-center gap-0.5" aria-label={`${item.rating} of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} filled={i < item.rating} />
        ))}
      </div>

      <p
        className="text-[#4A4A66]"
        style={{ fontSize: "13.5px", lineHeight: 1.6 }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>
    </article>
  );
}

export default function TestimonialsMobileCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // IntersectionObserver — watches each card; the one most visible
  // becomes the "active" dot. Threshold of 0.6 means the card has to
  // be > 60% inside the scroll viewport (i.e. fully centred) to win.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.intersectionRatio >= 0.6) {
            const idx = cards.indexOf(e.target as HTMLDivElement);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { root: track, threshold: [0.6, 0.9] },
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const scrollToIdx = (idx: number) => {
    const card = cardRefs.current[idx];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="flex w-full flex-col gap-4 sm:hidden">
      <SectionHeading>
        Hear from
        <br />
        Healthcare Professionals
      </SectionHeading>
      {/* Scroll-snap horizontal track. Outer overflow-x-auto enables
          native swipe; each card is 76vw wide so the neighbours peek
          ~12% on each side. snap-mandatory locks the swipe onto each
          card. The negative margin + padding setup gives the
          first/last cards room to centre. */}
      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-2"
        style={{ scrollPaddingInline: "12vw", scrollbarWidth: "none" }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={item.name}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="shrink-0 snap-center"
            style={{ width: "76vw" }}
          >
            <Card item={item} />
          </div>
        ))}
      </div>

      {/* 3-dot pagination indicator */}
      <div
        className="flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Testimonial pagination"
      >
        {ITEMS.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => scrollToIdx(i)}
            className="rounded-full transition-all"
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              background:
                active === i
                  ? "linear-gradient(90deg, #4B4AD5 0%, #9B2BF6 100%)"
                  : "rgba(75,74,213,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
