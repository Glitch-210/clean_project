import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/mail";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, ok: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const {
      name: rawName,
      first_name,
      last_name,
      email,
      phone,
      service,
      message: rawMessage,
      description,
      website,
    } = body;

    // Honeypot check: if filled, quietly succeed to avoid bot probing
    if (website) {
      return NextResponse.json({ success: true, ok: true });
    }

    const name = rawName || [first_name, last_name].filter(Boolean).join(" ");
    const message = rawMessage || description;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          ok: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          ok: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO || process.env.SMTP_USER;

    // Email 1: Send enquiry notification to site owner/admin
    await sendEmail({
      to: recipient,
      subject: `New Website Enquiry - ${name}`,
      replyTo: email,
      text: `
New Website Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
${service ? `Service: ${service}\n` : ""}
Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0A1628; border-bottom: 2px solid #3E7CB8; padding-bottom: 12px; margin-top: 0;">New Website Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
          <h3 style="color: #0A1628; margin-top: 20px;">Message</h3>
          <p style="background: #f8fafc; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    // Email 2: Send automatic confirmation receipt to customer
    try {
      await sendEmail({
        to: email,
        subject: "Thank you for contacting us",
        text: `
Hi ${name},

Thank you for contacting us.

We have received your enquiry and our team will get back to you shortly.

Regards,
Team
        `.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0A1628; border-bottom: 2px solid #3E7CB8; padding-bottom: 12px; margin-top: 0;">Thank You for Contacting Us</h2>
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thank you for reaching out to us.</p>
            <p>We have received your enquiry and our team will get back to you shortly.</p>
            <br />
            <p>Regards,<br />Team</p>
          </div>
        `,
      });
    } catch (autoReplyErr) {
      // Log auto-reply error, but don't fail the primary enquiry submission
      console.error("Auto-reply email error:", autoReplyErr);
    }

    return NextResponse.json({
      success: true,
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("SMTP ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        ok: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}