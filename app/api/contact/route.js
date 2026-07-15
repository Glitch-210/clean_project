import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const buildMailHtml = (payload) => {
  const { name, email, phone, service, message } = payload;

  return `
    <div style="font-family: Arial, sans-serif; color: #0A1628; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #0A1628;">New Quote Request</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f7fb; padding: 14px; border-radius: 6px;">${(message || 'No message').replace(/\n/g, '<br />')}</div>
    </div>
  `;
};

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => ({}));
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER;
    const contactTo = process.env.CONTACT_TO_EMAIL || 'info@badrimarine.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP email service is not configured. Please add SMTP_HOST, SMTP_USER, and SMTP_PASS in the environment.',
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailResult = await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: payload.email || smtpUser,
      subject: payload.subject || `New Quote Request from ${payload.name || 'Website Visitor'}`,
      text: [
        `Name: ${payload.name || 'N/A'}`,
        `Email: ${payload.email || 'N/A'}`,
        `Phone: ${payload.phone || 'N/A'}`,
        `Service: ${payload.service || 'Not specified'}`,
        '',
        'Message:',
        payload.message || 'No message',
      ].join('\n'),
      html: buildMailHtml(payload),
    });

    if (!mailResult?.messageId) {
      return NextResponse.json(
        { success: false, message: 'Email provider did not return a valid response.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Unable to submit request at this time.',
      },
      { status: 500 }
    );
  }
}
