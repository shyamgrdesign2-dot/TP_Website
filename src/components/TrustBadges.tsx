type Badge = {
  title: string;
  subtitle: string;
  src: string;
};

const BADGES: Badge[] = [
  { title: "HIPAA", subtitle: "Compliant", src: "/figma/hipaa.svg" },
  { title: "NHA", subtitle: "Approved", src: "/figma/nha.svg" },
  { title: "ABDM", subtitle: "Certified", src: "/figma/abdm.svg" },
  { title: "27001", subtitle: "Accredited", src: "/figma/iso.svg" },
  { title: "GDPR", subtitle: "Compliant", src: "/figma/gdpr.svg" },
];

const Sparkle = ({ side }: { side: "left" | "right" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`/figma/sparkle-${side}.svg`}
    alt=""
    aria-hidden
    className="h-12 w-[16px] shrink-0 opacity-80 sm:h-[68px] sm:w-6"
  />
);

function BadgeCard({ title, subtitle, src }: Badge) {
  return (
    <div
      className="flex min-w-0 items-center justify-center gap-2 rounded-[14px] border border-white/55 px-3 py-2 sm:gap-3 sm:rounded-[18px] sm:px-5 sm:py-3"
      style={{
        height: "clamp(48px, 4.2vw, 72px)",
        minWidth: "clamp(108px, 11vw, 168px)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.32) 100%)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.8) inset, 0 6px 18px rgba(33,32,119,0.10)",
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        className="shrink-0 object-contain"
        style={{
          height: "clamp(24px, 2.2vw, 36px)",
          width: "clamp(24px, 2.2vw, 36px)",
        }}
      />
      <div className="flex min-w-0 flex-col items-start leading-tight">
        <span
          className="truncate font-semibold tracking-tight text-[#0B0A6F]"
          style={{ fontSize: "clamp(11px, 0.95vw, 14px)" }}
        >
          {title}
        </span>
        <span
          className="truncate font-semibold tracking-tight text-[#0B0A6F]"
          style={{ fontSize: "clamp(11px, 0.95vw, 14px)" }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function TrustBadges() {
  return (
    <div
      className="flex w-full items-center justify-center gap-3 py-[14px] sm:justify-between sm:gap-4 sm:py-[18px]"
      style={{ maxWidth: "var(--section-w)" }}
    >
      <Sparkle side="left" />

      {/* Mobile: 3 on top centered, 2 on bottom centered. Desktop: single row. */}
      <div className="flex flex-1 flex-col items-center gap-2 sm:flex-1 sm:flex-row sm:flex-nowrap sm:justify-between sm:gap-3">
        <div className="flex flex-wrap justify-center gap-2 sm:contents">
          {BADGES.map((b) => (
            <BadgeCard key={b.title} {...b} />
          ))}
        </div>
      </div>

      <Sparkle side="right" />
    </div>
  );
}
