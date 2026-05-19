/** Shared CTA dimensions, single source of truth for the site button system. */
export const CTA_SIZES = {
  /** Compact, mobile sticky bar, tight rows */
  sm: { height: 36, radius: 8, fontSize: "0.875rem" },
  /** Default in content cards and section bands */
  md: { height: 42, radius: 10, fontSize: "0.875rem" },
  /** Navbar / top bar */
  nav: { height: 42, radius: 10, fontSize: "0.875rem" },
  /** Hero and other primary above-the-fold pairs */
  lg: { height: 48, radius: 12, fontSize: "0.9375rem" },
} as const;

export type CtaSize = keyof typeof CTA_SIZES;

export function ctaSizeStyle(size: CtaSize) {
  const t = CTA_SIZES[size];
  return {
    height: t.height,
    minHeight: t.height,
    maxHeight: t.height,
    borderRadius: t.radius,
    fontSize: t.fontSize,
    lineHeight: 1,
  } as const;
}
