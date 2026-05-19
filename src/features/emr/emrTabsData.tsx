// Single source of truth for EMR tab content, consumed by EmrTabs
// (which handles both desktop and mobile layouts internally).
// Adding a tab means editing ONE array.

import type { ReactNode } from "react";
import {
  ClipboardText,
  StethoscopePro,
  DocumentFavorite,
  Calendar1,
  Chart1,
  SecurityShield,
  Global,
} from "tp_icon/bulk";

export type EmrTabId =
  | "clinical-care"
  | "front-desk"
  | "analytics"
  | "abdm"
  | "digital-presence";

export type EmrBullet = {
  /** Inline icon, same 20×20 size used in the Figma mobile artboard. */
  icon: ReactNode;
  /** Plain copy or rich JSX (use <strong> for emphasis). */
  text: ReactNode;
};

export type EmrTab = {
  id: EmrTabId;
  /** Pill label used in both desktop tab bar + mobile tab pill. */
  label: string;
  /** Two-line title shown above the bullets on mobile. */
  titleLines: [string, string];
  /** 3 bullet rows, icon + text. */
  bullets: EmrBullet[];
  /** Right-side illustration at the bottom of the mobile card. */
  mainImage: { src: string; alt: string };
  /** Optional smaller image overlay. */
  overlayImage?: { src: string; alt: string };
};

const iconClasses =
  "shrink-0 inline-flex items-center justify-center text-white/90";

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className={iconClasses} style={{ width: 20, height: 20 }}>
      {children}
    </span>
  );
}

const ClipboardIcon = (
  <Icon>
    <ClipboardText width={18} height={18} />
  </Icon>
);

const StethIcon = (
  <Icon>
    <StethoscopePro width={18} height={18} />
  </Icon>
);

const FaveDocIcon = (
  <Icon>
    <DocumentFavorite width={18} height={18} />
  </Icon>
);

const CalendarIcon = (
  <Icon>
    <Calendar1 width={18} height={18} />
  </Icon>
);

const ChartIcon = (
  <Icon>
    <Chart1 width={18} height={18} />
  </Icon>
);

const ShieldIcon = (
  <Icon>
    <SecurityShield width={18} height={18} />
  </Icon>
);

const GlobeIcon = (
  <Icon>
    <Global width={18} height={18} />
  </Icon>
);

export const EMR_TABS: ReadonlyArray<EmrTab> = [
  {
    id: "clinical-care",
    label: "Clinic Care",
    titleLines: ["Streamline", "Clinical Workflows"],
    bullets: [
      {
        icon: ClipboardIcon,
        text: (
          <>
            Write prescriptions in under <strong>30 seconds</strong>
          </>
        ),
      },
      {
        icon: StethIcon,
        text: (
          <>
            Built-in modules for <strong>25+ specialties</strong>
          </>
        ),
      },
      {
        icon: FaveDocIcon,
        text: (
          <>
            Personalised <strong>Customisable Rx Prints</strong>
          </>
        ),
      },
    ],
    mainImage: {
      src: "/Assets/EMR/clinic-care.webp",
      alt: "Clinic Care, Symptoms screen and Rx Pad",
    },
  },
  {
    id: "front-desk",
    label: "Front Desk",
    titleLines: ["Run a Calm,", "Productive Front Desk"],
    bullets: [
      {
        icon: CalendarIcon,
        text: (
          <>
            Online + walk-in <strong>appointment scheduling</strong>
          </>
        ),
      },
      {
        icon: ClipboardIcon,
        text: (
          <>
            Live queue ETAs + <strong>no-show recovery</strong>
          </>
        ),
      },
      {
        icon: FaveDocIcon,
        text: (
          <>
            One-tap <strong>WhatsApp reminders</strong> in 9 languages
          </>
        ),
      },
    ],
    mainImage: {
      src: "/Assets/EMR/front-desk.webp",
      alt: "Receptionist front-desk queue management",
    },
  },
  {
    id: "analytics",
    label: "Analytics",
    titleLines: ["Practice Insights", "On Tap"],
    bullets: [
      {
        icon: ChartIcon,
        text: (
          <>
            Daily <strong>revenue + footfall</strong> dashboards
          </>
        ),
      },
      {
        icon: ClipboardIcon,
        text: (
          <>
            Specialty-wise <strong>conversion + recall</strong> reports
          </>
        ),
      },
      {
        icon: FaveDocIcon,
        text: (
          <>
            Export-ready <strong>monthly P&amp;L</strong>
          </>
        ),
      },
    ],
    mainImage: {
      src: "/Assets/EMR/Analytics.webp",
      alt: "Analytics dashboard with patient + revenue charts",
    },
  },
  {
    id: "abdm",
    label: "ABDM",
    titleLines: ["ABDM-Ready,", "Out of the Box"],
    bullets: [
      {
        icon: ShieldIcon,
        text: (
          <>
            Native <strong>ABHA creation + linking</strong>
          </>
        ),
      },
      {
        icon: ClipboardIcon,
        text: (
          <>
            <strong>NHA-approved EMR</strong> with audit-ready records
          </>
        ),
      },
      {
        icon: FaveDocIcon,
        text: (
          <>
            DHIS-aligned <strong>incentive eligibility</strong>
          </>
        ),
      },
    ],
    mainImage: {
      src: "/Assets/EMR/Abdm.webp",
      alt: "ABDM compliance summary with ABHA records",
    },
  },
  {
    id: "digital-presence",
    label: "Digital Presence",
    titleLines: ["Be Discoverable", "Online"],
    bullets: [
      {
        icon: GlobeIcon,
        text: (
          <>
            Free <strong>practice website</strong> in 5 minutes
          </>
        ),
      },
      {
        icon: ChartIcon,
        text: (
          <>
            Auto-generated <strong>Google Business profile</strong>
          </>
        ),
      },
      {
        icon: FaveDocIcon,
        text: (
          <>
            Patient reviews <strong>flow back into the EMR</strong>
          </>
        ),
      },
    ],
    mainImage: {
      src: "/Assets/EMR/digital-presence.webp",
      alt: "Practice website + Google profile preview",
    },
  },
];
