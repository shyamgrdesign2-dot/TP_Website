// FAQ items live in their own non-client module so server-side pages
// can import them directly (e.g. `app/page.tsx` builds the FAQPage
// JSON-LD block from this array). FAQ.tsx is a `"use client"` boundary,
// and named exports from client modules can't always be statically
// imported by server components — a server-safe data file avoids that.

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Is TatvaPractice ABDM-certified and NHA-approved?",
    a: "Yes. TatvaPractice is NHA-approved and ABDM-certified, with native ABHA creation built into the consultation flow. We also align with HIPAA, are ISO 27001 accredited, and DPDPA-compliant.",
  },
  {
    q: "How long does it take to get a clinic live?",
    a: "Most solo and small-clinic deployments are live the same day. Hospital and multi-location rollouts with ABDM linking, HL7/FHIR integration, and lab connectors typically take one to two weeks.",
  },
  {
    q: "Can I import data from my existing EMR?",
    a: "Yes. We migrate from most major EMR systems via CSV, FHIR, and direct database connectors. The TatvaPractice team owns the migration end to end — your records arrive ready to use.",
  },
  {
    q: "Which Indian languages does Voice Rx support?",
    a: "Voice Rx transcribes prescriptions in nine Indian languages: Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Punjabi, and English — including mid-sentence code-switching between any pair.",
  },
  {
    q: "Is patient data secure?",
    a: "All clinical and patient data is encrypted in transit and at rest, hosted in Indian data regions. Access is role-based, audit-logged, and DPDPA-compliant. You retain full ownership of your records at all times.",
  },
  {
    q: "Do you offer training and support?",
    a: "Remote onboarding, training, and standard support are included on every paid plan. On-site implementation and dedicated SLAs are available for hospital deployments and large multi-location chains.",
  },
];
