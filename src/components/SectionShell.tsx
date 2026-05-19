import type { CSSProperties, ReactNode } from "react";
import SectionBg from "./SectionBg";

type BgVariant = "lavender" | "pink" | "blue" | "none";

type PaddingPreset = "default" | "tight" | "loose" | "none";

const PADDING: Record<PaddingPreset, { top: string; bottom: string }> = {
  default: {
    top: "clamp(40px, 4vw, 72px)",
    bottom: "clamp(40px, 4vw, 72px)",
  },
  tight: {
    top: "clamp(28px, 2.8vw, 48px)",
    bottom: "clamp(28px, 2.8vw, 48px)",
  },
  loose: {
    top: "clamp(56px, 5.5vw, 96px)",
    bottom: "clamp(56px, 5.5vw, 96px)",
  },
  none: { top: "0", bottom: "0" },
};

type SectionShellProps = {
  id?: string;
  scrollMarginTop?: string;
  bg?: BgVariant;
  withGrid?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Full-bleed section with optional atmospheric background. Pair with
 * `SectionContent` for the constrained content column.
 */
export function SectionShell({
  id,
  scrollMarginTop,
  bg = "lavender",
  withGrid = true,
  className = "",
  style,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`.trim()}
      style={scrollMarginTop ? { scrollMarginTop, ...style } : style}
    >
      {bg !== "none" && <SectionBg variant={bg} withGrid={withGrid} />}
      {children}
    </section>
  );
}

type SectionContentProps = {
  padding?: PaddingPreset;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Content column aligned to `var(--section-w)`, no extra horizontal
 * padding; page gutters come from the CSS variable alone.
 */
export function SectionContent({
  padding = "default",
  className = "",
  style,
  children,
}: SectionContentProps) {
  const py = PADDING[padding];

  return (
    <div
      className={`relative z-10 mx-auto flex w-full flex-col items-center ${className}`.trim()}
      style={{
        maxWidth: "var(--section-w)",
        paddingTop: py.top,
        paddingBottom: py.bottom,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default SectionShell;
