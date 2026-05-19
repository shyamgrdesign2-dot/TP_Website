"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "./testimonialsData";

const SLIDE_WIDTH = "min(86vw, 300px)";
const COUNT = TESTIMONIALS.length;
/** Middle testimonial (Dr. Stella) in the center copy */
const DEFAULT_LOGICAL = 1;
const LOOP_SLIDES = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.9l-3.52 1.85.67-3.92-2.85-2.78 3.94-.57L8 1.2z"
            fill="#FF7A00"
          />
        </svg>
      ))}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.9l-3.52 1.85.67-3.92-2.85-2.78 3.94-.57L8 1.2z"
          stroke="#A2A2A8"
          strokeWidth="0.67"
        />
      </svg>
    </div>
  );
}

function TestimonialCard({
  name,
  credentials,
  quote,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="glass-surface flex min-h-[220px] w-full flex-col gap-4 rounded-[20px] p-4">
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p
            className="text-sm font-medium text-[#454551]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {name}
          </p>
          <p className="text-xs text-[#454551]/80">{credentials}</p>
          <div className="mt-1">
            <Stars />
          </div>
        </div>
      </div>
      <p
        className="text-sm leading-relaxed text-[#454551]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </article>
  );
}

/** Mobile carousel, defaults to center card, loops on swipe. */
export default function TestimonialsMobile() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [logicalIndex, setLogicalIndex] = useState(DEFAULT_LOGICAL);
  const jumpingRef = useRef(false);

  const scrollToPhysical = useCallback(
    (physicalIndex: number, behavior: ScrollBehavior = "smooth") => {
      const el = scrollerRef.current;
      const slide = el?.querySelector<HTMLElement>(
        `[data-slide="${physicalIndex}"]`,
      );
      if (!el || !slide) return;
      el.scrollTo({
        left: slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2,
        behavior,
      });
    },
    [],
  );

  const normalizeLoop = useCallback(() => {
    if (jumpingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
    if (!slides.length) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let physical = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        physical = i;
      }
    });

    const logical = physical % COUNT;
    setLogicalIndex(logical);

    if (physical < COUNT) {
      jumpingRef.current = true;
      scrollToPhysical(physical + COUNT, "instant");
      requestAnimationFrame(() => {
        jumpingRef.current = false;
      });
    } else if (physical >= COUNT * 2) {
      jumpingRef.current = true;
      scrollToPhysical(physical - COUNT, "instant");
      requestAnimationFrame(() => {
        jumpingRef.current = false;
      });
    }
  }, [scrollToPhysical]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    scrollToPhysical(COUNT + DEFAULT_LOGICAL, "instant");
    setLogicalIndex(DEFAULT_LOGICAL);

    let scrollEndTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (jumpingRef.current) return;
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(normalizeLoop, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(scrollEndTimer);
      el.removeEventListener("scroll", onScroll);
    };
  }, [normalizeLoop, scrollToPhysical]);

  const goToLogical = (index: number) => {
    setLogicalIndex(index);
    scrollToPhysical(COUNT + index);
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-6">
      <h2
        className="testimonial-mobile-heading text-center font-bold tracking-[-0.04em] text-[#454551]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Hear from
        <br />
        Healthcare Professionals
      </h2>

      <div
        ref={scrollerRef}
        className="testimonial-carousel-scroller flex h-full w-full snap-x snap-mandatory overflow-visible overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {LOOP_SLIDES.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            data-slide={i}
            className="testimonial-carousel-slide shrink-0 snap-center"
            style={{ width: SLIDE_WIDTH }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Testimonial slides"
      >
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === logicalIndex}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => goToLogical(i)}
            className={`h-2 rounded-full transition-all ${
              i === logicalIndex ? "w-6 bg-[#481C7F]" : "w-2 bg-[#481C7F]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
