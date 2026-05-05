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
    className="h-10 w-[14px] shrink-0 opacity-80 sm:h-[55px] sm:w-5"
  />
);

function BadgeCard({ title, subtitle, src }: Badge) {
  return (
    <div
      className="flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-[12px] border border-white/50 px-2 sm:h-12 sm:min-w-[112px] sm:gap-2 sm:rounded-[14px] sm:px-3"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.7) inset, 0 4px 14px rgba(33,32,119,0.10)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
      />
      <div className="flex min-w-0 flex-col items-start leading-tight">
        <span className="truncate text-[10px] font-semibold tracking-tight text-[#0B0A6F]">
          {title}
        </span>
        <span className="truncate text-[10px] font-semibold tracking-tight text-[#0B0A6F]">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function TrustBadges() {
  return (
    <div className="flex w-full max-w-[760px] items-center justify-center gap-2 py-[14px] sm:justify-between sm:py-[18px]">
      <Sparkle side="left" />

      {/* Mobile: 3 on top centered, 2 on bottom centered. Desktop: single row. */}
      <div className="flex flex-1 flex-col items-center gap-2 sm:flex-1 sm:flex-row sm:flex-nowrap sm:justify-between sm:gap-2">
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
