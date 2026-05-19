"use client";

import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ScaleStatCard, { type ScaleStat } from "@/features/scale/ScaleStatCard";
import {
  DigitalRxIcon,
  DoctorsIcon,
  LanguageIcon,
  LocationIcon,
  PatientsServedIcon,
  SpecialityIcon,
} from "@/features/scale/ScaleStatIcons";
import { SectionContent, SectionShell } from "@/components/SectionShell";

const STATS: ScaleStat[] = [
  {
    to: 10,
    suffix: " Lakh+",
    label: "Patients Served",
    Icon: PatientsServedIcon,
    revealDelay: 0,
  },
  {
    to: 12,
    suffix: " Lakh+",
    label: "Digital Rx Created",
    Icon: DigitalRxIcon,
    revealDelay: 90,
  },
  {
    to: 10000,
    suffix: "+",
    label: "Doctors Onboarded",
    Icon: DoctorsIcon,
    separator: ",",
    revealDelay: 180,
  },
  {
    to: 10,
    suffix: "+",
    label: "Language Support",
    Icon: LanguageIcon,
    revealDelay: 0,
  },
  {
    to: 25,
    suffix: "+",
    label: "Specialities",
    Icon: SpecialityIcon,
    revealDelay: 90,
  },
  {
    to: 200,
    suffix: "+",
    label: "Cities Serviceable",
    Icon: LocationIcon,
    revealDelay: 180,
  },
];

export default function OurScale() {
  return (
    <SectionShell bg="lavender" withGrid={false} className="w-full" id="our-scale">
      <SectionContent className="gap-6 sm:gap-6" padding="default">
        <ScrollReveal variant="fade-up" once>
          <SectionHeading>Our Scale</SectionHeading>
        </ScrollReveal>
        <div className="scale-stats-grid grid w-full max-w-[var(--section-w)] grid-cols-2 gap-[clamp(12px,2vw,19px)] sm:grid-cols-3">
          {STATS.map((stat) => (
            <ScaleStatCard key={stat.label} {...stat} />
          ))}
        </div>
      </SectionContent>
    </SectionShell>
  );
}
