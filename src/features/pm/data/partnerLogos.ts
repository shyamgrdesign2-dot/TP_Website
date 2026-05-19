export type PartnerLogo = {
  /** Display name (used for alt text + screen readers). */
  name: string;
  /** Image source under /public. */
  src: string;
};

// Partner / customer logos shown in the carousel below the Practice
// Management hero. Files live under /public/Assets/Partners/.
// Adding/removing a partner is a one-line change here.
export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "Apollo Cradle", src: "/Assets/Partners/Apollo-Cradle.png" },
  { name: "Apollo Hospital", src: "/Assets/Partners/Appolo-hospital.png" },
  { name: "Apex Ortho", src: "/Assets/Partners/Apex%20Ortho.png" },
  { name: "Munshi", src: "/Assets/Partners/Munshi.png" },
  { name: "Zydus Hospital", src: "/Assets/Partners/Zydus_hospital.png" },
  { name: "Polyclinics", src: "/Assets/Partners/50%2B%20ployclins.png" },
];
