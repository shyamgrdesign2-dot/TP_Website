import type { FeatureContent } from "./types";

// "Solutions → For Hospitals" page.
export const HOSPITALS_CONTENT: FeatureContent = {
  slug: "hospitals",
  navLabel: "For Hospitals",
  metaTitle: "TatvaPractice for Hospitals, One Platform for Every Department",
  metaDescription:
    "OPD, IPD, pharmacy, and labs in one system. Role-based access across locations, centralised reporting, ABDM hospital stack, and dedicated SLAs.",

  hero: {
    headlineLines: [
      "One Platform for Every",
      "Department, Every Location",
    ],
    subhead:
      "TatvaPractice unifies OPD, IPD, pharmacy, and labs into one system, with role-based access across locations, centralised reporting, and dedicated SLAs.",
    mainImage: {
      src: "/Assets/Hospitals/main.png",
      alt: "Hospital team using TatvaPractice across OPD, IPD, pharmacy",
    },
    overlayImage: null,
  },

  whyDoctors: {
    heading: "Built for hospitals and multi-location networks",
    cards: [
      {
        title: "OPD + IPD + Pharmacy + Labs",
        body: "Every department on one ledger. Real-time, role-based, audit-logged across the chain.",
      },
      {
        title: "Role-Based Access",
        body: "Doctors, nurses, billing, pharmacy, each role sees only the records they need.",
      },
      {
        title: "Multi-Location",
        body: "Run a clinic chain or hospital network with centralised reporting per location.",
      },
      {
        title: "HL7 & FHIR Integration",
        body: "Plug into the lab, pharmacy, PACS, and EHR partners your hospital already runs on.",
      },
      {
        title: "Dedicated SLAs",
        body: "On-site onboarding, a named TAM, and a 99.9% uptime guarantee on enterprise plans.",
      },
      {
        title: "ABDM Hospital Stack",
        body: "ABHA-linked records, NHA-approved, ready for state and national health-stack reporting.",
      },
    ],
  },
};
