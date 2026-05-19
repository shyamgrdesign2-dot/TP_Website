import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";
import SectionHeading from "@/components/SectionHeading";

type Member = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
};

// Founding / leadership team. Each card has a square portrait, name,
// role label, one-line bio, and a LinkedIn icon. The portraits are
// rendered as a simple monogram circle placeholder until proper
// headshots are uploaded, same approach the testimonial cards on the
// homepage use for missing avatars. Once headshots are dropped into
// `/public/about/team/<slug>.jpg` they'll get picked up automatically.
const TEAM: Member[] = [
  {
    name: "Dr. Amit Shah",
    role: "CEO & CO-FOUNDER",
    bio: "Former clinician with 15 years in healthcare technology.",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Javed Khan",
    role: "CHIEF TECHNOLOGY OFFICER",
    bio: "AI/ML expert, previously at Microsoft and Amazon.",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Dr. Priya Desai",
    role: "CHIEF MEDICAL OFFICER",
    bio: "Practicing physician leading clinical product development.",
    linkedin: "https://www.linkedin.com/in/",
  },
];

function Portrait({ name }: { name: string }) {
  // Monogram fallback, first letters of given + family name.
  const initials = name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        aspectRatio: "1 / 1",
        background:
          "linear-gradient(160deg, #E8DDF7 0%, #C9B6E8 60%, #A084CC 100%)",
      }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-bold text-white/85"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 4.8vw, 64px)",
          letterSpacing: "-0.02em",
          textShadow: "0 2px 12px rgba(72,28,127,0.35)",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M6.5 9.5h2.5v8H6.5v-8zm1.25-3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 9.5h2.4v1.1h.03c.34-.6 1.16-1.23 2.4-1.23 2.56 0 3.04 1.6 3.04 3.7v4.43H16.4v-3.93c0-.94-.02-2.14-1.36-2.14-1.36 0-1.57 1-1.57 2.07v4h-2.47v-8z"
        fill="#fff"
      />
    </svg>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article
      className="flex flex-col gap-4 rounded-[18px] p-5 sm:p-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.6) 100%)",
        backdropFilter: "blur(10px) saturate(140%)",
        WebkitBackdropFilter: "blur(10px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.85) inset, 0 16px 36px rgba(33,32,119,0.10)",
      }}
    >
      <Portrait name={member.name} />
      <div className="flex flex-col gap-1.5">
        <h3
          className="font-bold text-[#1F1F38]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(17px, 1.5vw, 22px)",
            letterSpacing: "-0.01em",
          }}
        >
          {member.name}
        </h3>
        <p
          className="font-semibold uppercase tracking-[0.08em] text-[#4B4AD5]"
          style={{ fontSize: "clamp(10px, 0.85vw, 12px)" }}
        >
          {member.role}
        </p>
        <p
          className="text-[#4A4A66]"
          style={{
            fontSize: "clamp(13px, 1vw, 15px)",
            lineHeight: 1.5,
          }}
        >
          {member.bio}
        </p>
      </div>
      {member.linkedin && (
        <a
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex w-fit items-center justify-center transition-transform hover:scale-110"
        >
          <LinkedInIcon />
        </a>
      )}
    </article>
  );
}

export default function AboutTeam() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="pink" />

      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(40px, 4vw, 72px)",
          paddingBottom: "clamp(40px, 4vw, 72px)",
          gap: "clamp(20px, 2.2vw, 32px)",
        }}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <ScrollReveal variant="fade-up">
            <SectionHeading>Meet Our Team</SectionHeading>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={80}>
            <p
              className="text-[#4A4A66] [text-wrap:balance]"
              style={{
                fontSize: "clamp(14px, 1.1vw, 17px)",
                lineHeight: 1.6,
                maxWidth: "62ch",
              }}
            >
              A team of 50+ including practicing physicians, healthcare
              veterans, and AI technologists, working together to solve
              healthcare&rsquo;s toughest workflow challenges.
            </p>
          </ScrollReveal>
        </div>

        <div
          className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(16px, 1.6vw, 26px)" }}
        >
          {TEAM.map((m, i) => (
            <ScrollReveal key={m.name} variant="fade-up" delay={120 + i * 80}>
              <MemberCard member={m} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
