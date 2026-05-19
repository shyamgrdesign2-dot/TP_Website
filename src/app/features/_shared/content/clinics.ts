import type { FeatureContent } from "./types";

// "Solutions → For Clinics" page. Re-uses the FeatureContent shape and
// FeaturePage shell so the same hero / why-grid / specialties / trust /
// CTA composition powers both /features/* and /solutions/* routes.
export const CLINICS_CONTENT: FeatureContent = {
  slug: "clinics",
  navLabel: "For Clinics",
  metaTitle: "TatvaPractice for Clinics, More Time with Patients, Less on Paperwork",
  metaDescription:
    "TatvaPractice streamlines your entire clinic, from faster notes to automated follow-ups, so you can grow your practice, not your workload. Built for Indian OPD.",

  hero: {
    headlineLines: [
      "Spend More Time with Patients,",
      "Less on Paperwork",
    ],
    subhead:
      "TatvaPractice streamlines your entire clinic, from faster notes to automated follow-ups, so you can grow your practice, not your workload.",
    mainImage: {
      src: "/Assets/Clinics/main.png",
      alt: "Indian clinic team using TatvaPractice for OPD workflow",
    },
    // Single illustration: this hero ships without the floating overlay.
    overlayImage: null,
  },

  whyDoctors: {
    heading: "Built for the way Indian clinics actually run",
    cards: [
      {
        title: "Faster Consultations",
        body: "Voice Rx + structured Rx pad cut documentation time by 3+ hours every day.",
      },
      {
        title: "Patient Follow-ups",
        body: "Automated WhatsApp reminders, reschedules, and no-show recovery, no extra staff.",
      },
      {
        title: "Mobile + Desktop",
        body: "Run your clinic from anywhere, web, tablet, or phone, in sync at all times.",
      },
      {
        title: "ABDM-Ready",
        body: "Native ABHA creation and ABDM-certified records, ready for the national stack.",
      },
      {
        title: "GST Billing & Reports",
        body: "Tax-ready invoices and practice analytics built in, no separate accounting tool.",
      },
      {
        title: "DHIS Incentives",
        body: "Earn government incentives for every consultation digitised on an NHA-approved EMR.",
      },
    ],
  },
};
