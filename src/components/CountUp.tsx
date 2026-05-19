"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  from?: number;
  to: number;
  suffix?: string;
  separator?: string;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
};

function formatNumber(value: number, separator: string) {
  const parts = Math.round(value).toString();
  if (separator === ",") {
    return parts.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return parts;
}

/** Animates a number when scrolled into view. */
export default function CountUp({
  from = 0,
  to,
  suffix = "",
  separator = ",",
  direction = "up",
  duration = 1.15,
  delay = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnim = () => {
      if (started.current) return;
      started.current = true;

      const startVal = direction === "up" ? from : to;
      const endVal = direction === "up" ? to : from;
      const t0 = performance.now() + delay * 1000;

      const tick = (now: number) => {
        const raw = (now - t0) / (duration * 1000);
        const t = Math.min(1, Math.max(0, raw));
        const eased = 1 - Math.pow(1 - t, 3);
        const current = startVal + (endVal - startVal) * eased;
        setDisplay(current);
        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) startAnim();
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, direction, duration, from, to]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(display, separator)}
      {suffix}
    </span>
  );
}
