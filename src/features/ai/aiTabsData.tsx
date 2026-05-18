// Single source of truth for AI tab content — consumed by both the
// desktop tabbed interface (verbatim Figma exports) and the mobile
// layout (MobileAiTabs). Adding a tab means editing ONE array.
//
// We keep this co-located with the rest of `features/ai/*` so the
// data + every layout that uses it live next to each other.

import type { ReactNode } from "react";

export type AiTabId =
  | "voicerx"
  | "smartsync"
  | "snaprx"
  | "receptionist"
  | "doctor";

export type AiTab = {
  id: AiTabId;
  /** Pill label used in BOTH desktop tab bar + mobile tab pill. */
  label: string;
  /** Title shown inside the active tab's content card. */
  title: string;
  /**
   * Rich description rendered inside the mobile card body. Strong
   * spans use `<strong>`; the rest is normal copy. JSX so the
   * emphasis pattern stays explicit rather than HTML-strings.
   */
  description: ReactNode;
  /** Where "Learn More" navigates. */
  learnMoreHref: string;
  /** Small left-aligned icon glyph for the title row (28×28 box). */
  icon: ReactNode;
  /** Right-side illustration shown at the BOTTOM of the mobile card. */
  mainImage: { src: string; alt: string };
  /** Optional smaller image that sits in front of `mainImage`. */
  overlayImage?: { src: string; alt: string };
};

// Tiny rounded-square icon wrapper used for every tab so the visual
// rhythm stays consistent in both desktop + mobile renders.
function IconBox({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center rounded-[7px] text-white"
      style={{
        width: 28,
        height: 28,
        background: "rgba(255,255,255,0.24)",
      }}
    >
      {children}
    </span>
  );
}

const MicIcon = (
  <IconBox>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z"
        fill="currentColor"
        fillOpacity="0.95"
      />
      <path
        d="M19 11a7 7 0 01-14 0M12 18v4M8 22h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </IconBox>
);

const PenIcon = (
  <IconBox>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 3l5 5-11 11H5v-5L16 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </IconBox>
);

const CameraIcon = (
  <IconBox>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h3l2-2h6l2 2h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  </IconBox>
);

const ChatIcon = (
  <IconBox>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </IconBox>
);

const StethIcon = (
  <IconBox>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3v5a4 4 0 008 0V3M10 14v3a4 4 0 008 0v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="18" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  </IconBox>
);

export const AI_TABS: ReadonlyArray<AiTab> = [
  {
    id: "voicerx",
    label: "VoiceRx",
    title: "VoiceRx",
    icon: MicIcon,
    description: (
      <>
        Whether you&rsquo;re <strong>dictating</strong> or naturally{" "}
        <strong>conversing with your patient</strong>, VoiceRx{" "}
        <strong>captures</strong> your clinical speech and instantly turns it
        into a <strong>structured Rx.</strong>
      </>
    ),
    learnMoreHref: "/features/voice-rx",
    mainImage: {
      src: "/figma/landing-ref/voicerx-ui.png",
      alt: "VoiceRx Rx Pad with dictated prescription",
    },
    overlayImage: {
      src: "/figma/landing-ref/voicerx-modal.png",
      alt: "VoiceRx start consultation dialog",
    },
  },
  {
    id: "smartsync",
    label: "SmartSync",
    title: "SmartSync",
    icon: PenIcon,
    description: (
      <>
        Write on paper as you always do. <strong>SmartSync</strong> reads your
        handwriting and{" "}
        <strong>syncs every stroke straight into the EMR</strong> — no
        retyping, no learning curve.
      </>
    ),
    learnMoreHref: "/features/smart-sync",
    mainImage: {
      src: "/features/smart-sync/main.png",
      alt: "SmartSync converting handwritten Rx into a digital record",
    },
  },
  {
    id: "snaprx",
    label: "SnapRx",
    title: "SnapRx",
    icon: CameraIcon,
    description: (
      <>
        Snap a photo of a handwritten Rx. <strong>SnapRx OCRs</strong> it into
        a structured digital record in seconds —{" "}
        <strong>searchable, editable, and ready to share.</strong>
      </>
    ),
    learnMoreHref: "/features/snap-rx",
    mainImage: {
      src: "/features/snap-rx/main.png",
      alt: "SnapRx converting a paper prescription to a digital record",
    },
  },
  {
    id: "receptionist",
    label: "Receptionist Agent",
    title: "Receptionist Agent",
    icon: ChatIcon,
    description: (
      <>
        AI front-desk that{" "}
        <strong>handles bookings, reminders, and intake</strong> on WhatsApp +
        voice — 24/7 in any language your patients prefer.
      </>
    ),
    learnMoreHref: "/features/receptionist-agent",
    mainImage: {
      src: "/features/receptionist-agent/main.png",
      alt: "Receptionist Agent confirming a WhatsApp appointment",
    },
  },
  {
    id: "doctor",
    label: "Doctor Agent",
    title: "Doctor Agent",
    icon: StethIcon,
    description: (
      <>
        <strong>Differentials, drug-interaction alerts, and lab insights</strong>{" "}
        powered by AI — like having a specialist on call, grounded in ICMR +
        NHM guidelines.
      </>
    ),
    learnMoreHref: "/features/doctor-agent",
    mainImage: {
      src: "/features/doctor-agent/main.png",
      alt: "Doctor Agent surfacing differentials and clinical guidance",
    },
  },
];
