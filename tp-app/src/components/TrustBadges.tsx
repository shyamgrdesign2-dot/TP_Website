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
    width={20}
    height={55}
    className="opacity-80"
  />
);

export default function TrustBadges() {
  return (
    <div className="flex w-[760px] max-w-full items-center justify-between gap-2 py-[18px]">
      <Sparkle side="left" />
      {BADGES.map(({ title, subtitle, src }) => (
        <div
          key={title}
          className="flex h-[48px] min-w-[112px] items-center justify-center gap-2 rounded-[14px] border border-white/50 px-3"
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
            className="h-7 w-7 object-contain"
          />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-semibold tracking-tight text-[#0B0A6F]">
              {title}
            </span>
            <span className="text-[10px] font-semibold tracking-tight text-[#0B0A6F]">
              {subtitle}
            </span>
          </div>
        </div>
      ))}
      <Sparkle side="right" />
    </div>
  );
}
