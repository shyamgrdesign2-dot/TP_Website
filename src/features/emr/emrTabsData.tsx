// Single source of truth for EMR tab content — consumed by both the
// desktop tabbed interface (verbatim Figma exports) and the mobile
// layout (MobileEmrTabs). Adding a tab means editing ONE array.

import type { ReactNode } from "react";

export type EmrTabId =
  | "clinical-care"
  | "front-desk"
  | "analytics"
  | "abdm"
  | "digital-presence";

export type EmrBullet = {
  /** Inline icon — same 20×20 size used in the Figma mobile artboard. */
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
  /** 3 bullet rows — icon + text. */
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 5h8v3H8V5zm-2 1h2v3a1 1 0 001 1h6a1 1 0 001-1V6h2v15H6V6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);

const StethIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3v5a4 4 0 008 0V3M10 14v3a4 4 0 008 0v-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  </Icon>
);

const FaveDocIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3h9l4 4v14H6V3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 11l1.3 2.6 2.7.4-2 2 .4 2.7L12 17.5l-2.4 1.2.4-2.7-2-2 2.7-.4L12 11z"
        fill="currentColor"
        fillOpacity="0.9"
      />
    </svg>
  </Icon>
);

const CalendarIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </Icon>
);

const ChartIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5m0 14h16M8 16V9m4 7V6m4 10v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </Icon>
);

const ShieldIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Icon>
);

const GlobeIcon = (
  <Icon>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
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
      src: "/figma/landing-ref/emr-clinic-care.png",
      alt: "Clinic Care — Symptoms screen and Rx Pad",
    },
    overlayImage: {
      src: "/figma/landing-ref/voicerx-modal.png",
      alt: "Patient WhatsApp confirmation",
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
      src: "/features/receptionist-agent/main.png",
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
      src: "/features/snap-rx/main.png",
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
      src: "/features/doctor-agent/main.png",
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
      src: "/features/smart-sync/main.png",
      alt: "Practice website + Google profile preview",
    },
  },
];
