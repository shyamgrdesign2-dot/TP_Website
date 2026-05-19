// Single source of truth for AI tab content, consumed by AiTabs
// (which handles both desktop and mobile layouts internally).
// Adding a tab means editing ONE array.

import type { ReactNode } from "react";
import {
  Microphone2Free as Microphone2,
  Pen,
  Scan,
  Chat,
  StethoscopePro,
} from "tp_icon/bulk";

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
    <Microphone2 width={16} height={16} />
  </IconBox>
);

const PenIcon = (
  <IconBox>
    <Pen width={16} height={16} />
  </IconBox>
);

const CameraIcon = (
  <IconBox>
    <Scan width={16} height={16} />
  </IconBox>
);

const ChatIcon = (
  <IconBox>
    <Chat width={16} height={16} />
  </IconBox>
);

const StethIcon = (
  <IconBox>
    <StethoscopePro width={16} height={16} />
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
      src: "/Assets/AI/Voicerx.webp",
      alt: "VoiceRx Rx Pad with dictated prescription",
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
        <strong>syncs every stroke straight into the EMR</strong>, no
        retyping, no learning curve.
      </>
    ),
    learnMoreHref: "/features/smart-sync",
    mainImage: {
      src: "/Assets/AI/Smartsync.webp",
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
        a structured digital record in seconds {" "}
        <strong>searchable, editable, and ready to share.</strong>
      </>
    ),
    learnMoreHref: "/features/snap-rx",
    mainImage: {
      src: "/Assets/AI/Snaprx.webp",
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
        voice, 24/7 in any language your patients prefer.
      </>
    ),
    learnMoreHref: "/features/receptionist-agent",
    mainImage: {
      src: "/Assets/AI/Receptionist-Agent.webp",
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
        powered by AI, like having a specialist on call, grounded in ICMR +
        NHM guidelines.
      </>
    ),
    learnMoreHref: "/features/doctor-agent",
    mainImage: {
      src: "/Assets/AI/Doctor-Agent.webp",
      alt: "Doctor Agent surfacing differentials and clinical guidance",
    },
  },
];
