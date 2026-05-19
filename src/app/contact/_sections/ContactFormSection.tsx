"use client";

import { useEffect, useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import SectionBg from "@/components/SectionBg";
import ScrollReveal from "@/components/ScrollReveal";
import CtaButton from "@/components/ui/CtaButton";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/site";

// Lottie ships with `document` references, lazy-load client-side only.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Two-column contact section: form on the left, contact-info panel
// on the right. Form posts to `/api/contact`, which delivers via
// Resend when `RESEND_API_KEY` is set and logs to the server console
// otherwise (so local dev keeps working without secrets).
type FieldName =
  | "first_name"
  | "last_name"
  | "email"
  | "phone"
  | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Generous phone validation: 10-15 digits, optional + and separators.
const PHONE_RE = /^\+?[\d\s\-()]{10,18}$/;

function validatePayload(payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!payload.firstName) errors.first_name = "First name is required.";
  if (!payload.lastName) errors.last_name = "Last name is required.";
  if (!payload.email) errors.email = "Work email is required.";
  else if (!EMAIL_RE.test(payload.email))
    errors.email = "Please enter a valid email address.";
  if (payload.phone && !PHONE_RE.test(payload.phone))
    errors.phone = "Please enter a valid phone number.";
  if (!payload.message) errors.message = "Please tell us a little about your needs.";
  return errors;
}

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("first_name") ?? "").trim(),
      lastName: String(fd.get("last_name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      organization: String(fd.get("organization") ?? "").trim() || undefined,
      phone: String(fd.get("phone") ?? "").trim() || undefined,
      message: String(fd.get("message") ?? "").trim(),
    };

    // Inline client-side validation, surface per-field errors instead
    // of one banner at the top.
    const errors = validatePayload(payload);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const clearFieldError = (name: FieldName) => {
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

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
            {status === "success" ? (
              <SuccessPanel onReset={() => setStatus("idle")} />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
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
                {/* Top-level error reserved for network/server failures only.
                    All field-level errors render inline below their input. */}
                {status === "error" && errorMsg && (
                  <div
                    role="alert"
                    className="rounded-[12px] border border-[#FDA4AF] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="First name"
                    name="first_name"
                    required
                    error={fieldErrors.first_name}
                    onChange={() => clearFieldError("first_name")}
                  />
                  <Field
                    label="Last name"
                    name="last_name"
                    required
                    error={fieldErrors.last_name}
                    onChange={() => clearFieldError("last_name")}
                  />
                </div>
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  required
                  placeholder="doctor@clinic.com"
                  error={fieldErrors.email}
                  onChange={() => clearFieldError("email")}
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
                  error={fieldErrors.phone}
                  onChange={() => clearFieldError("phone")}
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-semibold text-[#1F1F38]"
                    style={{ fontSize: "clamp(12px, 0.95vw, 14px)" }}
                  >
                    How can we help?
                    <span className="text-[#DC2626]"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about your practice and what you're looking for…"
                    onChange={() => clearFieldError("message")}
                    aria-invalid={Boolean(fieldErrors.message)}
                    className={`w-full rounded-[12px] border bg-white px-4 py-3 text-[#1F1F38] outline-none transition placeholder:text-[#9B9AA7] focus:ring-2 focus:ring-[#4B4AD5]/15 ${
                      fieldErrors.message
                        ? "border-[#DC2626] focus:border-[#DC2626]"
                        : "border-[#D6D5E0] hover:border-[#B9B7C7] focus:border-[#4B4AD5]"
                    }`}
                    style={{
                      fontSize: "clamp(13px, 1vw, 15px)",
                      lineHeight: 1.55,
                      resize: "vertical",
                    }}
                  />
                  {fieldErrors.message && (
                    <p
                      role="alert"
                      className="text-[12px] font-medium text-[#DC2626]"
                    >
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <CtaButton
                  as="button"
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="mt-1 w-full sm:w-fit sm:min-w-[180px]"
                  style={{
                    boxShadow: "0 8px 22px rgba(75,74,213,0.28)",
                    opacity: status === "submitting" ? 0.7 : 1,
                    pointerEvents: status === "submitting" ? "none" : "auto",
                  }}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </CtaButton>
              </form>
            )}
          </ScrollReveal>

          {/* Info panel */}
          <ScrollReveal variant="fade-up" delay={120}>
            <aside
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] p-6 sm:p-8"
              style={{
                background:
                  "radial-gradient(99% 60% at 50% 55%, #4443BA 0%, #101056 39%, #252578 78%, #4443BA 100%)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.08) inset, 0 16px 36px rgba(33,32,119,0.20)",
              }}
            >
              {/* Decorative diamond cluster, top-right */}
              <ContactDiamondPattern />
              {/* Subtle noise texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "var(--noise-svg)",
                  backgroundSize: "220px 220px",
                }}
              />

              <div className="relative z-[1] flex flex-col gap-1.5">
                <h3
                  className="bg-clip-text font-bold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #FFFFFF 0%, #E5D6FD 100%)",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Reach us directly
                </h3>
                <p
                  className="text-white/80"
                  style={{
                    fontSize: "clamp(13px, 1vw, 15px)",
                    lineHeight: 1.55,
                  }}
                >
                  Prefer email or phone? Either route lands with the same team,
                  pick whichever feels easiest.
                </p>
              </div>

              <div className="relative z-[1] flex flex-col gap-4">
                <ContactRow label="Email" value={SUPPORT_EMAIL} href={`mailto:${SUPPORT_EMAIL}`} />
                <ContactRow label="Phone" value={SUPPORT_PHONE} href={`tel:${SUPPORT_PHONE.replace(/\s+/g, "")}`} />
                <ContactRow label="Hours" value="Mon – Sat · 9 AM – 7 PM IST" />
                <ContactRow
                  label="HQ"
                  value="Incubex HSR27, 1500, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, 560102"
                />
              </div>
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
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  error?: string;
  onChange?: () => void;
}) {
  const hasError = Boolean(error);
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-semibold text-[#1F1F38]"
        style={{ fontSize: "clamp(12px, 0.95vw, 14px)" }}
      >
        {label}
        {required && <span className="text-[#DC2626]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
        onChange={onChange}
        className={`w-full rounded-[12px] border bg-white px-4 py-3 text-[#1F1F38] outline-none transition placeholder:text-[#9B9AA7] focus:ring-2 focus:ring-[#4B4AD5]/15 ${
          hasError
            ? "border-[#DC2626] focus:border-[#DC2626]"
            : "border-[#D6D5E0] hover:border-[#B9B7C7] focus:border-[#4B4AD5]"
        }`}
        style={{
          fontSize: "clamp(13px, 1vw, 15px)",
          lineHeight: 1.55,
        }}
      />
      {hasError && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-[12px] font-medium text-[#DC2626]"
        >
          {error}
        </p>
      )}
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
  return (
    <div className="flex flex-col gap-1 border-t border-white/12 pt-4 first-of-type:border-t-0 first-of-type:pt-0">
      <span
        className="text-white/55"
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-white transition hover:text-white/85"
          style={{ fontSize: "clamp(14px, 1.05vw, 16px)", lineHeight: 1.45 }}
        >
          {value}
        </a>
      ) : (
        <span
          className="text-white"
          style={{ fontSize: "clamp(14px, 1.05vw, 16px)", lineHeight: 1.45 }}
        >
          {value}
        </span>
      )}
    </div>
  );
}

/**
 * Success card shown after the contact form posts. Stretches to match
 * the right-hand "Reach us directly" navy panel via `h-full`, centres
 * the message + Lottie animation, plays the Lottie exactly once.
 */
function SuccessPanel({ onReset }: { onReset: () => void }) {
  const [animationData, setAnimationData] = useState<unknown | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/lottie/success.json")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        /* graceful fallback, keeps the static check icon */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-[22px] p-8 text-center sm:p-10"
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
      <div className="h-[140px] w-[140px] sm:h-[180px] sm:w-[180px]">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          // Static fallback while the Lottie JSON loads
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{ background: "rgba(75,74,213,0.12)" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="#4B4AD5"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <h3
        className="font-bold text-[#1F1F1F]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(22px, 2vw, 28px)",
        }}
      >
        Message sent!
      </h3>
      <p
        className="text-[#454551]"
        style={{
          fontSize: "clamp(14px, 1.05vw, 16px)",
          lineHeight: 1.6,
          maxWidth: "44ch",
        }}
      >
        We&apos;ll be in touch within one business day. No call centre,
        you&apos;ll hear from a real product specialist.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-sm font-semibold text-[#4B4AD5] underline-offset-4 hover:underline"
      >
        Send another message
      </button>
    </div>
  );
}

/** Diamond polygon cluster, sits in the top-right corner of the navy
 *  "Reach us directly" panel as a subtle pattern. */
function ContactDiamondPattern() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -right-6 -top-6 h-[200px] w-[160px] opacity-50"
      viewBox="0 0 134 162"
      fill="none"
    >
      {[
        "M67 12L92 38L67 64L42 38z",
        "M97 38L114 56L97 74L80 56z",
        "M37 38L54 56L37 74L20 56z",
        "M67 70L92 96L67 122L42 96z",
        "M97 96L114 114L97 132L80 114z",
        "M37 96L54 114L37 132L20 114z",
        "M67 128L84 146L67 164L50 146z",
      ].map((d, i) => (
        <path key={i} d={d} fill="white" fillOpacity="0.16" />
      ))}
    </svg>
  );
}
