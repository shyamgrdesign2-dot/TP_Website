import type { FeatureContent } from "./types";

export const SNAP_RX_CONTENT: FeatureContent = {
  slug: "snap-rx",
  navLabel: "SnapRx",
  metaTitle: "SnapRx — Photograph Any Handwritten Prescription",
  metaDescription:
    "Snap a photo of a handwritten Rx and SnapRx digitises it into a structured, ABDM-ready prescription in seconds — trained on Indian doctors' handwriting.",

  hero: {
    headlineLines: ["SnapRx – From", "Paper to Digital in a Snap"],
    subhead:
      "Take a photo of handwritten prescriptions or notes. SnapRx converts them into structured digital records instantly — trained on Indian doctors' handwriting.",
    mainImage: {
      src: "/features/snap-rx/main.png",
      alt: "Handwritten Rx being photographed and digitised by SnapRx",
    },
    overlayImage: {
      src: "/features/snap-rx/overlay.png",
      alt: "Structured prescription generated from a SnapRx photo",
    },
  },

  whyDoctors: {
    heading: "Why doctors choose SnapRx",
    cards: [
      {
        title: "Indian Handwriting Trained",
        body: "Tuned on the cursive, shorthand, and abbreviations Indian doctors use daily.",
      },
      {
        title: "Brand & Generic Resolution",
        body: "Resolves brand names to actives + dosages. Suggests substitutes on demand.",
      },
      {
        title: "Auto-Structured Rx",
        body: "Snap once. The Rx pad fills in — drug, strength, frequency, duration, instructions.",
      },
      {
        title: "Dosage Validation",
        body: "Flags incomplete or unsafe dosing and proposes the most-likely complete dosage.",
      },
      {
        title: "Glare & Skew Tolerant",
        body: "Pre-processes phone photos so paper Rx parse cleanly the first time.",
      },
      {
        title: "Patient History Cross-Check",
        body: "Scans against allergies and recent meds before you sign off on the prescription.",
      },
    ],
  },
};
