import type { FeatureContent } from "./types";

export const DOCTOR_AGENT_CONTENT: FeatureContent = {
  slug: "doctor-agent",
  navLabel: "Doctor Agent",
  metaTitle: "Doctor Agent, AI Clinical Co-pilot for Indian Doctors",
  metaDescription:
    "Real-time differentials, drug-interaction checks, lab AI, and auto-SOAP notes. Grounded in ICMR + NHM guidelines. Built for Indian OPD reality.",

  hero: {
    headlineLines: ["Doctor Agent ", "AI Clinical Assistant"],
    subhead:
      "Get instant differential diagnoses, drug-interaction alerts, and clinical insights powered by AI. Like having a specialist on call, grounded in ICMR + NHM guidelines.",
    mainImage: {
      src: "/Assets/AI/Doctor-Agent.webp",
      alt: "Doctor Agent surfacing differentials and clinical guidance",
    },
    overlayImage: null,
  },

  videoSection: {
    line1: "Your second pair",
    line2: "of clinical eyes.",
  },

  whyDoctors: {
    heading: "Why doctors choose Doctor Agent",
    cards: [
      {
        title: "Real-Time Differentials",
        body: "DDx ranked by symptom + history + lab match, every suggestion cited.",
      },
      {
        title: "Indian Clinical Protocols",
        body: "Grounded in ICMR, NHM, CSI, API, IPS, and RCOG India guidelines.",
      },
      {
        title: "Drug Interaction Alerts",
        body: "Checks every new Rx against the patient's full active medication list.",
      },
      {
        title: "Lab AI",
        body: "Lab values interpreted against age, sex, and condition norms, in plain English.",
      },
      {
        title: "Auto-Structured SOAP",
        body: "Subjective, objective, assessment, plan, with ICD-10 and SNOMED CT tagging.",
      },
      {
        title: "Specialty-Aware",
        body: "Tunes DDx, language, and templates to your specialty, paeds, ortho, derm.",
      },
    ],
  },
};
