import type { FeatureContent } from "./types";

export const VOICE_RX_CONTENT: FeatureContent = {
  slug: "voice-rx",
  navLabel: "Voice Rx",
  metaTitle: "Voice Rx, AI Voice Prescription for Indian Doctors",
  metaDescription:
    "Dictate prescriptions in 9 Indian languages. Voice Rx turns speech into an audit-ready structured Rx in under 30 seconds. ABDM-certified, NHA-approved.",

  hero: {
    headlineLines: ["VoiceRx, Speak, and", "your EMR documents itself"],
    subhead:
      "Dictate prescriptions and notes naturally. Voice Rx transcribes in real-time with medical-grade accuracy across 9 Indian languages. Save 3+ hours a day.",
    mainImage: {
      src: "/Assets/AI/Voicerx.webp",
      alt: "VoiceRx Rx Pad with dictated prescription",
    },
    overlayImage: null,
  },

  videoSection: {
    line1: "Four steps.",
    line2: "Twenty-eight seconds.",
  },

  videoId: "Su3malwthR4",

  whyDoctors: {
    heading: "Why Indian doctors choose VoiceRx",
    cards: [
      {
        title: "30-Second Audit-Ready Rx",
        titleLines: ["30-Second", "Audit-Ready Rx"],
        body: "Dictate notes or just talk with your patient, VoiceRx turns either into a signable, structured Rx in under 30 seconds.",
      },
      {
        title: "9 Indian Languages",
        body: "Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Punjabi, English.",
      },
      {
        title: "Edit Before You Sign",
        body: "Review and fine-tune the structured Rx on screen, then sign off in a single tap.",
      },
      {
        title: "Specialty-Aware Structure",
        body: "BD, TDS, OD, SOS, HS handled. ICD-10 tagging is baked in.",
      },
      {
        title: "Conversation Mode",
        body: "VoiceRx listens to your natural doctor-patient conversation and writes the notes in the background, hands-free.",
      },
      {
        title: "Works Offline",
        body: "Dictate through patchy internet, Voice Rx syncs the moment you reconnect.",
      },
    ],
  },
};
