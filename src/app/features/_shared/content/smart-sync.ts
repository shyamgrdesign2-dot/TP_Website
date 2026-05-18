import type { FeatureContent } from "./types";

export const SMART_SYNC_CONTENT: FeatureContent = {
  slug: "smart-sync",
  navLabel: "SmartSync",
  metaTitle: "SmartSync — Handwriting-to-Digital Rx for Indian Clinics",
  metaDescription:
    "Write naturally with a digital pen. SmartSync turns handwritten prescriptions into ABDM-ready structured records in real time. Offline-first, multi-branch sync.",

  hero: {
    headlineLines: ["SmartSync – Write", "Naturally, Save Digitally"],
    subhead:
      "Use a digital pen to write as you always do. Every stroke syncs instantly to your EMR in real-time — ABDM-ready, offline-first, zero learning curve.",
    mainImage: {
      src: "/features/smart-sync/main.png",
      alt: "Handwritten prescription captured by SmartSync digital pen",
    },
    overlayImage: {
      src: "/features/smart-sync/overlay.png",
      alt: "Doctor's digital ID card paired with SmartSync handwriting",
    },
  },

  whyDoctors: {
    heading: "Why clinics choose SmartSync",
    cards: [
      {
        title: "Digital Pen Workflow",
        body: "Write on paper the way you always have. Every stroke is captured digitally.",
      },
      {
        title: "Handwriting → Structured Rx",
        body: "Recognises Indian doctors' handwriting and emits an ABDM-ready structured Rx.",
      },
      {
        title: "Offline-First",
        body: "Works at camps, rural OPDs, and patchy networks. Syncs when you're back online.",
      },
      {
        title: "Multi-Branch Sync",
        body: "Records flow across every clinic location with conflict resolution baked in.",
      },
      {
        title: "Zero Learning Curve",
        body: "No new shortcuts, no menus to learn — just pen on tablet, as you always have.",
      },
      {
        title: "ABDM-Certified Output",
        body: "Every digitised Rx is ABDM-compliant and ready for ABHA linking.",
      },
    ],
  },
};
