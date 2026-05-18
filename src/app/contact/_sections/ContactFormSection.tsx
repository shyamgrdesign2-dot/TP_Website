import SectionBg from "@/components/SectionBg";
import ScrollReveal from "@/components/ScrollReveal";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/site";

// Two-column contact section: form on the left, contact-info panel
// on the right. Frosted-glass surfaces + the same violet gradient
// CTA button style every other page uses. The form is a plain HTML
// form (action="#" stub) for now — wiring it to a real endpoint can
// be a follow-up; the visual / interaction layer is in place so it
// stops looking like a placeholder.
export default function ContactFormSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <SectionBg variant="lavender" />

      <div
        id="contact"
        className="relative z-10 mx-auto"
        style={{
          maxWidth: "var(--section-w)",
          paddingTop: "clamp(28px, 2.8vw, 48px)",
          paddingBottom: "clamp(56px, 5vw, 96px)",
        }}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          {/* Form card */}
          <ScrollReveal variant="fade-up">
            <form
              action="#"
              method="post"
              className="flex flex-col gap-5 rounded-[22px] p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.6) 100%)",
                backdropFilter: "blur(12px) saturate(140%)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.85) inset, 0 16px 36px rgba(33,32,119,0.10)",
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First name" name="first_name" required />
                <Field label="Last name" name="last_name" required />
              </div>
              <Field
                label="Work email"
                name="email"
                type="email"
                required
                placeholder="doctor@clinic.com"
              />
              <Field
                label="Clinic / Hospital"
                name="organization"
                placeholder="Optional"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 99999 99999"
              />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-semibold text-[#1F1F38]"
                  style={{ fontSize: "clamp(12px, 0.95vw, 14px)" }}
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us a bit about your practice and what you're looking for…"
                  className="w-full rounded-[12px] border border-white/55 bg-white/70 px-4 py-3 text-[#1F1F38] outline-none transition focus:border-[#4B4AD5]/40 focus:ring-2 focus:ring-[#4B4AD5]/15"
                  style={{
                    fontSize: "clamp(13px, 1vw, 15px)",
                    lineHeight: 1.55,
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="cta-shimmer mt-1 inline-flex w-full items-center justify-center rounded-[14px] font-semibold text-white sm:w-fit sm:min-w-[180px] sm:px-7"
                style={{
                  height: "clamp(48px, 4vw, 56px)",
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  backgroundImage:
                    "linear-gradient(101deg, #4B4AD5 0%, #27276F 131.58%)",
                  boxShadow: "0 8px 22px rgba(75,74,213,0.28)",
                }}
              >
                <span className="relative z-[1]">Send Message</span>
              </button>
            </form>
          </ScrollReveal>

          {/* Info panel */}
          <ScrollReveal variant="fade-up" delay={120}>
            <aside
              className="flex h-full flex-col gap-5 rounded-[22px] p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(180deg, #1F1F6E 0%, #2A1F75 55%, #1A1A56 100%)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.08) inset, 0 16px 36px rgba(33,32,119,0.20)",
              }}
            >
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-bold text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Reach us directly
                </h3>
                <p
                  className="text-white/75"
                  style={{
                    fontSize: "clamp(13px, 1vw, 15px)",
                    lineHeight: 1.55,
                  }}
                >
                  Prefer email or phone? Either route lands with the same team
                  — pick whichever feels easiest.
                </p>
              </div>

              <ContactRow label="Email" value={SUPPORT_EMAIL} href={`mailto:${SUPPORT_EMAIL}`} />
              <ContactRow label="Phone" value={SUPPORT_PHONE} href={`tel:${SUPPORT_PHONE.replace(/\s+/g, "")}`} />
              <ContactRow label="Hours" value="Mon – Sat · 9 AM – 7 PM IST" />
              <ContactRow
                label="Office"
                value="TatvaCare HQ · Bengaluru, Karnataka, India"
              />
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-semibold text-[#1F1F38]"
        style={{ fontSize: "clamp(12px, 0.95vw, 14px)" }}
      >
        {label}
        {required && <span className="text-[#A41BF0]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-white/55 bg-white/70 px-4 outline-none transition focus:border-[#4B4AD5]/40 focus:ring-2 focus:ring-[#4B4AD5]/15"
        style={{
          height: "clamp(46px, 3.8vw, 54px)",
          fontSize: "clamp(13px, 1vw, 15px)",
          color: "#1F1F38",
        }}
      />
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <p
      className="text-white"
      style={{
        fontSize: "clamp(14px, 1.1vw, 16px)",
        lineHeight: 1.4,
      }}
    >
      {value}
    </p>
  );
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-semibold uppercase tracking-[0.08em] text-white/55"
        style={{ fontSize: "clamp(10px, 0.85vw, 12px)" }}
      >
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-white transition hover:text-white/80 hover:underline"
          style={{
            fontSize: "clamp(14px, 1.1vw, 16px)",
            lineHeight: 1.4,
          }}
        >
          {value}
        </a>
      ) : (
        Body
      )}
    </div>
  );
}
