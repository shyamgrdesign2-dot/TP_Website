// Mobile layout for "Our Scale" — matches Figma artboard 2116-9308.
// 2-column × 3-row grid of compact stat cards (52 px tall each),
// each with a low-opacity oversized icon on the left and the
// number + label on the right. Hidden ≥ `sm` where the desktop
// OurScaleRaw is rendered.
//
// Icons are simple inline SVGs styled to match the muted lilac
// look of the Figma reference (no PNG dependencies).

import type { ReactNode } from "react";
import SectionHeading from "../components/SectionHeading";

type Stat = {
  number: string;
  label: string;
  icon: ReactNode;
};

function StatIcon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className="absolute -left-1 top-1/2 -translate-y-1/2 text-[#7B5BCB]"
      style={{ opacity: 0.18 }}
    >
      {children}
    </span>
  );
}

const STATS: Stat[] = [
  {
    number: "10 Lakh+",
    label: "Patients Served",
    icon: (
      <StatIcon>
        <svg width="58" height="58" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="8" r="3.5" />
          <circle cx="16" cy="9" r="2.8" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5v1H3v-1z" />
          <path d="M14 14c2.5 0 6 1.4 6 4v2h-5v-1.5c0-1.6-.5-3-1-4.5z" />
        </svg>
      </StatIcon>
    ),
  },
  {
    number: "12 Lakh+",
    label: "Digital Rx created",
    icon: (
      <StatIcon>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <rect x="9" y="2" width="6" height="3" rx="1" fill="#fff" />
          <path d="M9 10h6M9 13h6M9 16h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </StatIcon>
    ),
  },
  {
    number: "10,000+",
    label: "Doctors onboarded",
    icon: (
      <StatIcon>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a4 4 0 014 4v3a4 4 0 01-8 0V7a4 4 0 014-4z" />
          <path d="M5 21v-1a5 5 0 015-5h4a5 5 0 015 5v1H5z" />
          <path d="M11 10v3M9 11h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </StatIcon>
    ),
  },
  {
    number: "10 +",
    label: "Language support",
    icon: (
      <StatIcon>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fillOpacity="0.6" />
          <path d="M2 12h20M12 2c4 4 4 16 0 20M12 2c-4 4-4 16 0 20" stroke="#fff" strokeWidth="0.8" fill="none" />
        </svg>
      </StatIcon>
    ),
  },
  {
    number: "25+",
    label: "Specialities",
    icon: (
      <StatIcon>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 12l3-4 3 5 3-3 3 6 4-4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </StatIcon>
    ),
  },
  {
    number: "200+",
    label: "Cities Servicable",
    icon: (
      <StatIcon>
        <svg width="54" height="54" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" fill="#fff" />
        </svg>
      </StatIcon>
    ),
  },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div
      className="relative h-[72px] overflow-hidden rounded-[14px] border"
      style={{
        background:
          "linear-gradient(-54deg, rgba(233,204,255,0) 0%, rgba(242,225,255,0.45) 130%)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        borderColor: "#F2E2FF",
        borderWidth: "0.5px",
      }}
    >
      {stat.icon}
      <div className="absolute left-[56px] right-3 top-1/2 flex -translate-y-1/2 flex-col gap-0.5">
        <p
          className="font-bold text-[#64388d]"
          style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
        >
          {stat.number}
        </p>
        <p
          className="text-[#64388d]"
          style={{ fontFamily: "var(--font-sans)", fontSize: "12px" }}
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function MobileOurScale() {
  return (
    <div className="flex w-full flex-col gap-4 sm:hidden">
      <SectionHeading>Our Scale</SectionHeading>
      <div className="grid w-full grid-cols-2 gap-2.5">
        {STATS.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </div>
    </div>
  );
}
