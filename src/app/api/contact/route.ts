import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  phone?: string;
  message: string;
};

// Destination inbox where contact-form submissions land. Falls back
// to the public support email if no env override is provided.
const TO_EMAIL =
  process.env.CONTACT_NOTIFY_EMAIL ?? "support@tatvacare.in";

// Resend requires a verified sender domain. Set RESEND_FROM in env to
// e.g. "TatvaPractice <noreply@tatvacare.in>" once DNS is verified.
const FROM_EMAIL =
  process.env.RESEND_FROM ?? "TatvaPractice <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, organization, phone, message } = body;

  // Minimal validation, the form already enforces required fields,
  // but the API can't trust the client.
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "First name, last name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // No API key configured (local dev / preview), log the submission
  // so the form remains usable and the developer can see what arrived.
  if (!apiKey) {
    console.log("[contact:fallback] RESEND_API_KEY missing, logging submission only");
    console.log({
      firstName,
      lastName,
      email,
      organization,
      phone,
      message,
    });
    return NextResponse.json({
      success: true,
      message: "We'll be in touch within one business day.",
      delivered: false,
    });
  }

  try {
    const resend = new Resend(apiKey);
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `New contact from ${fullName}${organization ? ` (${organization})` : ""}`;

    const html = `
      <h2 style="font-family:Arial,Helvetica,sans-serif;color:#1F1F1F;">New contact form submission</h2>
      <table style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1F1F1F;border-collapse:collapse;">
        <tr><td style="padding:6px 12px 6px 0;color:#7A7A82;">Name</td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#7A7A82;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:6px 12px 6px 0;color:#7A7A82;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${organization ? `<tr><td style="padding:6px 12px 6px 0;color:#7A7A82;">Organisation</td><td>${escapeHtml(organization)}</td></tr>` : ""}
      </table>
      <h3 style="font-family:Arial,Helvetica,sans-serif;color:#1F1F1F;margin-top:24px;">Message</h3>
      <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#454551;white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
    `;

    const text = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      organization ? `Organisation: ${organization}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("[contact] Resend send failed:", result.error);
      return NextResponse.json(
        { error: "Could not send your message right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within one business day.",
      delivered: true,
    });
  } catch (err) {
    console.error("[contact] Unexpected failure:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
