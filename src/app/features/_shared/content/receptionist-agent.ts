import type { FeatureContent } from "./types";

export const RECEPTIONIST_AGENT_CONTENT: FeatureContent = {
  slug: "receptionist-agent",
  navLabel: "Receptionist Agent",
  metaTitle: "Receptionist Agent, AI Front Desk for Clinics",
  metaDescription:
    "Bookings, reminders, queue ETAs, and no-show recovery on WhatsApp + voice. Multi-language AI receptionist built for Indian clinics.",

  hero: {
    headlineLines: ["Receptionist Agent", "AI Clinical Assistant"],
    subhead:
      "Get instant differential diagnoses, drug interactions, and clinical insights powered by AI. Like having a specialist on call.",
    mainImage: {
      src: "/Assets/AI/Receptionist-Agent.webp",
      alt: "Receptionist Agent live OPD queue and WhatsApp comms",
    },
    overlayImage: null,
  },

  videoSection: {
    line1: "The front desk that",
    line2: "never sleeps.",
  },

  videoId: "BmfoK_D1KBI",

  whyDoctors: {
    heading: "Why Doctors Choose Receptionist Agent",
    cards: [
      {
        title: "Automated Appt Booking",
        body: "Patients book themselves on WhatsApp + voice, the desk doesn't pick up another routine call.",
      },
      {
        title: "Pre-Consultation Intake",
        body: "Symptoms, allergies, and history land in the EMR before the patient sits down.",
      },
      {
        title: "Structured EMR Formatting",
        body: "Every intake reads as clean, structured Rx-pad input, no transcription cleanup.",
      },
      {
        title: "Reduced Front Desk Load",
        body: "Bookings, reminders, reschedules, handled. Your staff focuses on in-clinic care.",
      },
      {
        title: "24/7 Availability",
        body: "Patients reach a real-sounding agent any hour, in any language they prefer.",
      },
      {
        title: "Seamless EMR Integration",
        body: "Everything the agent collects flows straight into TatvaPractice, zero double entry.",
      },
    ],
  },
};
