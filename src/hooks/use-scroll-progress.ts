"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Scroll progress (0 → 1) while the user scrolls through `target`'s
 * sticky runway (element height minus viewport).
 *
 * 0 = runway top has reached the top of the viewport (sticky engages).
 * 1 = runway bottom has reached the bottom of the viewport.
 */
type ScrollProgressOptions = {
  /** 1 = full runway; values below 1 finish the animation earlier in the scroll. */
  range?: number;
  /** Viewport Y where progress is 0 (default: top of viewport). */
  startAt?: number;
};

export function useScrollProgress(
  target: RefObject<HTMLElement | null>,
  options: ScrollProgressOptions = {},
) {
  const range = Math.max(0.05, options.range ?? 1);
  const startAt = options.startAt ?? 0;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = target.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(1, el.offsetHeight - viewport);
      const travelled = startAt - rect.top;
      const p = Math.min(1, Math.max(0, travelled / (scrollable * range)));
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [range, startAt, target]);

  return progress;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return reduced;
}

export function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [breakpoint]);

  return mobile;
}
