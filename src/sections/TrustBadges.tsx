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
    className="h-9 w-[13px] shrink-0 opacity-80 sm:h-[52px] sm:w-[18px]"
  />
);

function BadgeCard({ title, subtitle, src }: Badge) {
  return (
    <div
      className="flex w-fit items-center gap-1.5 rounded-[12px] border border-white/55 px-2.5 py-1.5 sm:gap-2 sm:rounded-[14px] sm:px-3.5 sm:py-2"
      style={{
        height: "clamp(40px, 3.4vw, 58px)",
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
          height: "clamp(18px, 1.7vw, 26px)",
          width: "clamp(18px, 1.7vw, 26px)",
        }}
      />
      <div className="flex flex-col items-start leading-tight">
        <span
          className="whitespace-nowrap font-semibold tracking-tight text-[#0B0A6F]"
          style={{ fontSize: "clamp(10px, 0.78vw, 12px)" }}
        >
          {title}
        </span>
        <span
          className="whitespace-nowrap font-semibold tracking-tight text-[#0B0A6F]"
          style={{ fontSize: "clamp(10px, 0.78vw, 12px)" }}
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
      className="flex w-full items-center justify-center gap-2 py-[10px] sm:gap-3 sm:py-[14px]"
      style={{ maxWidth: "var(--section-w)" }}
    >
      <Sparkle side="left" />

      {/* Cards sit at natural width, centered, 12px gap */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {BADGES.map((b) => (
          <BadgeCard key={b.title} {...b} />
        ))}
      </div>

      <Sparkle side="right" />
    </div>
  );
}
