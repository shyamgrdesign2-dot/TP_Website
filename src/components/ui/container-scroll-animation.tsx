"use client";

import { useRef, type ReactNode } from "react";
import {
  useIsMobile,
  usePrefersReducedMotion,
  useScrollProgress,
} from "@/hooks/use-scroll-progress";

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

type ContainerScrollProps = {
  children: ReactNode;
  titleComponent?: ReactNode;
  scrollHeight?: string;
  className?: string;
};

/**
 * Scroll-linked 3D card reveal. Sticky stage is transparent; section/backdrop
 * behind shows through. Progress 0→1 tracks the full sticky runway.
 */
export function ContainerScroll({
  children,
  titleComponent,
  scrollHeight,
  className = "",
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawProgress = useScrollProgress(containerRef);
  const progress = smoothstep(rawProgress);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const runwayHeight =
    scrollHeight ?? (isMobile ? "min(120vh, 72rem)" : "min(140vh, 82rem)");

  if (reducedMotion) {
    return (
      <div className={`relative w-full ${className}`.trim()}>
        {titleComponent ? (
          <div className="mb-6 text-center">{titleComponent}</div>
        ) : null}
        {children}
      </div>
    );
  }

  const rotateX = lerp(isMobile ? 8 : 14, 0, progress);
  const scale = lerp(isMobile ? 0.92 : 0.94, 1, progress);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`.trim()}
      style={{ height: runwayHeight }}
    >
      <div
        className="sticky top-0 z-[1] flex w-full items-center justify-center"
        style={{
          height: "100dvh",
          paddingTop: "clamp(1rem, 2.5vh, 2rem)",
          paddingBottom: "clamp(1rem, 2.5vh, 2rem)",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div
          className="flex w-full max-w-[var(--section-w)] flex-col items-center"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 42%",
          }}
        >
          {titleComponent ? (
            <div
              className="mb-[clamp(16px,2vw,28px)] w-full text-center"
              style={{
                transform: `translate3d(0, ${lerp(12, 0, progress)}px, 0)`,
                opacity: lerp(0.88, 1, progress),
              }}
            >
              {titleComponent}
            </div>
          ) : null}

          <div
            className="w-full will-change-transform"
            style={{
              transform: `rotateX(${rotateX}deg) scale(${scale})`,
              transformOrigin: "50% 100%",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              filter:
                progress < 0.12
                  ? "drop-shadow(0 16px 40px rgba(16,16,86,0.12))"
                  : "drop-shadow(0 28px 72px rgba(16,16,86,0.22))",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
