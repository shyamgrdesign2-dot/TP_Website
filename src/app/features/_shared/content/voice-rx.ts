import type { FeatureContent } from "./types";

export const VOICE_RX_CONTENT: FeatureContent = {
  slug: "voice-rx",
  navLabel: "Voice Rx",
  metaTitle: "Voice Rx — AI Voice Prescription for Indian Doctors",
  metaDescription:
    "Dictate prescriptions in 9 Indian languages. Voice Rx turns speech into an audit-ready structured Rx in under 30 seconds. ABDM-certified, NHA-approved.",

  hero: {
    headlineLines: ["VoiceRx — Speak, and", "your EMR documents itself"],
    subhead:
      "Dictate prescriptions and notes naturally. Voice Rx transcribes in real-time with medical-grade accuracy across 9 Indian languages. Save 3+ hours a day.",
  },

  whyDoctors: {
    heading: "Why Indian doctors choose VoiceRx",
    cards: [
      {
        title: "30-Second Audit-Ready Rx",
        titleLines: ["30-Second", "Audit-Ready Rx"],
        body: "From speech to a signable, structured prescription in under 30 seconds.",
      },
      {
        title: "9 Indian Languages",
        body: "Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Punjabi, English.",
      },
      {
        title: "Drug Interaction Alerts",
        body: "Catches interactions across the patient's full med list as you dictate.",
      },
      {
        title: "Specialty-Aware Structure",
        body: "BD, TDS, OD, SOS, HS handled. ICD-10 tagging is baked in.",
      },
      {
        title: "Hands-Free Consultation",
        body: "Keep eye contact with patients while notes are captured in the background.",
      },
      {
        title: "Works Offline",
        body: "Dictate through patchy internet — Voice Rx syncs the moment you reconnect.",
      },
    ],
  },
};
