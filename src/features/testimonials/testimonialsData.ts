export type Testimonial = {
  id: string;
  name: string;
  credentials: string;
  quote: string;
  avatarSrc: string;
};

// Real customer testimonials, surfaced in the homepage + every
// feature subpage. Keep the quote under ~220 chars so the carousel
// cards stay the same height across the set.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "khatana",
    name: "Dr. Pankaj Khatana",
    credentials: "General Practitioner · Delhi",
    quote:
      "Using TatvaPractice has been a great experience for me as a practicing doctor. It's incredibly convenient and user-friendly, making my work easier.",
    avatarSrc: "/Assets/Testimonials/avatar-shyam.png",
  },
  {
    id: "priyam",
    name: "Dr. Ajit Priyam",
    credentials: "General Practitioner · Delhi",
    quote:
      "Previously, I relied on manual methods for managing my practice. Since using TatvaPractice, it has been the most exceptional experience for streamlining the process.",
    avatarSrc: "/Assets/Testimonials/avatar-stella.png",
  },
  {
    id: "satyam",
    name: "Dr. Kumar Satyam",
    credentials: "General Practitioner · Delhi",
    quote:
      "TatvaPractice has helped me manage patient records and prescriptions more efficiently. The platform is simple to use and saves valuable time during daily consultations.",
    avatarSrc: "/Assets/Testimonials/avatar-leena.png",
  },
];
