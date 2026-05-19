import type { PmFlipBackPanelProps } from "./PmFlipBackPanel";
import flipCardImage from "./assets/flip-card-image.png";

export const PM_FLIP_BACK: Record<1 | 2, PmFlipBackPanelProps> = {
  1: {
    title: (
      <>
        Consultations just
        <br />
        became smarter &amp; faster
      </>
    ),
    bullets: [
      {
        lead: "Pre-collected ",
        bold: "symptoms",
        rest: ", history, and reports ready before you begin.",
      },
      {
        lead: "",
        bold: "VoiceRx",
        rest: ", SnapRx, and SmartSync speed up and digitize prescriptions effortlessly.",
      },
      {
        lead: "",
        bold: "Dr.Agent",
        rest: " summarizes cases and supports differential diagnosis & more with smart insights.",
      },
    ],
    image: flipCardImage,
    imageClassName: "object-cover object-[58%_42%]",
  },
  2: {
    title: (
      <>
        Seamless Clinic
        <br />
        Operations, Simplified
      </>
    ),
    bullets: [
      "Control bookings and queue flow from a single dashboard.",
      "Capture vitals and attach reports directly to consultations.",
      "Handle billing and payments seamlessly without switching tools.",
    ],
    image: flipCardImage,
    imageClassName: "object-cover object-[42%_38%]",
  },
};
