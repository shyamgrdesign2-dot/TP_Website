type Badge = {
  title: string;
  subtitle: string;
  src: string;
};

const BADGES: Badge[] = [
  { title: "HIPAA", subtitle: "Compliant", src: "/Assets/Trustmarkers/hipaa.svg" },
  { title: "NHA", subtitle: "Approved", src: "/Assets/Trustmarkers/nha.svg" },
  { title: "ABDM", subtitle: "Certified", src: "/Assets/Trustmarkers/abdm.svg" },
  { title: "27001", subtitle: "Accredited", src: "/Assets/Trustmarkers/iso.svg" },
  { title: "GDPR", subtitle: "Compliant", src: "/Assets/Trustmarkers/gdpr.svg" },
];

type TrustBadgesTheme = "light" | "dark";

const Sparkle = ({
  side,
  theme,
}: {
  side: "left" | "right";
  theme: TrustBadgesTheme;
}) => (

  <img
    src={`/Assets/Trustmarkers/sparkle-${side}.svg`}
    alt=""
    aria-hidden
    className={`shrink-0 ${theme === "dark" ? "opacity-65" : "opacity-80"}`}
    style={{
      height: "clamp(44px, 4.6vw, 72px)",
      width: "clamp(16px, 1.6vw, 26px)",
      filter: theme === "dark" ? "brightness(0) invert(1)" : undefined,
    }}
  />
);

function BadgeCard({
  title,
  subtitle,
  src,
  compact,
  theme,
}: Badge & { compact?: boolean; theme: TrustBadgesTheme }) {
  const isDark = theme === "dark";
  return (
    <div
      className={`flex w-fit items-center ${
        isDark ? "border border-transparent" : "border border-white/55"
      }`}
      style={{
        height: compact ? "42px" : "clamp(48px, 4.4vw, 76px)",
        paddingLeft: compact ? "10px" : "clamp(12px, 1.2vw, 22px)",
        paddingRight: compact ? "12px" : "clamp(14px, 1.4vw, 26px)",
        gap: compact ? "6px" : "clamp(8px, 0.9vw, 16px)",
        borderRadius: compact ? "10px" : "14px",
        background: isDark
          ? "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.34) 100%)",
        boxShadow: isDark
          ? "none"
          : "0 1px 0 rgba(255,255,255,0.85) inset, 0 8px 22px rgba(33,32,119,0.12)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
      }}
    >
      { }
      <img
        src={src}
        alt=""
        aria-hidden
        className="shrink-0 object-contain"
        style={{
          height: compact ? "18px" : "clamp(22px, 2.2vw, 36px)",
          width: compact ? "18px" : "clamp(22px, 2.2vw, 36px)",
          filter: isDark ? "brightness(0) invert(1)" : undefined,
        }}
      />
      <div className="flex flex-col items-start leading-tight">
        <span
          className={`whitespace-nowrap font-semibold tracking-tight ${
            isDark ? "text-white/95" : "text-[#0B0A6F]"
          }`}
          style={{ fontSize: compact ? "9.5px" : "clamp(11px, 0.95vw, 15px)", lineHeight: 1.2 }}
        >
          {title}
        </span>
        <span
          className={`whitespace-nowrap font-semibold tracking-tight ${
            isDark ? "text-white/95" : "text-[#0B0A6F]"
          }`}
          style={{ fontSize: compact ? "9.5px" : "clamp(11px, 0.95vw, 15px)", lineHeight: 1.2 }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function TrustBadges({
  theme = "light",
}: {
  theme?: TrustBadgesTheme;
}) {
  // The trust strip now occupies the full content width (--section-w),
  // with the chip cluster + sparkles scaled fluidly. Side padding on the
  // outer wrapper is intentionally minimal, every previous gutter has
  // moved into the badge cards themselves so the row reads as one
  // continuous proof band rather than a cramped pill cluster floating
  // in a wide white margin.
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        maxWidth: "var(--section-w)",
        paddingTop: "clamp(8px, 0.9vw, 16px)",
        paddingBottom: "clamp(8px, 0.9vw, 16px)",
        gap: "clamp(10px, 1.4vw, 24px)",
      }}
    >
      <Sparkle side="left" theme={theme} />

      {/* Mobile: explicit 3-on-top / 2-on-bottom rows so the wrap
          doesn't land on the awkward 2+2+1 layout at 375 px.
          ≥ sm: revert to a single fluid row that wraps naturally. */}
      <div className="sm:hidden flex flex-col items-center" style={{ gap: "6px" }}>
        <div className="flex items-center justify-center" style={{ gap: "6px" }}>
          {BADGES.slice(0, 3).map((b) => (
            <BadgeCard key={b.title} {...b} compact theme={theme} />
          ))}
        </div>
        <div className="flex items-center justify-center" style={{ gap: "6px" }}>
          {BADGES.slice(3).map((b) => (
            <BadgeCard key={b.title} {...b} compact theme={theme} />
          ))}
        </div>
      </div>
      <div
        className="hidden sm:flex flex-wrap items-center justify-center"
        style={{ gap: "clamp(10px, 1.2vw, 22px)" }}
      >
        {BADGES.map((b) => (
          <BadgeCard key={b.title} {...b} theme={theme} />
        ))}
      </div>

      <Sparkle side="right" theme={theme} />
    </div>
  );
}
