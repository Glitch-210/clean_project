import nodemailer from 'nodemailer';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email || !phone) {
    return Response.json({ error: 'Required fields missing' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: 'Invalid email format' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Badri Marine Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:8px;">
          <h2 style="color:#0A1628;border-bottom:2px solid #C9922A;padding-bottom:12px;">New Quote Request — Badri Marine Website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#666;width:140px;"><strong>Name:</strong></td><td style="padding:10px 0;color:#0A1628;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:10px 0;color:#666;"><strong>Email:</strong></td><td style="padding:10px 0;color:#0A1628;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:10px 0;color:#666;"><strong>Phone:</strong></td><td style="padding:10px 0;color:#0A1628;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:10px 0;color:#666;"><strong>Service:</strong></td><td style="padding:10px 0;color:#0A1628;">${escapeHtml(service || 'Not specified')}</td></tr>
            <tr><td style="padding:10px 0;color:#666;vertical-align:top;"><strong>Message:</strong></td><td style="padding:10px 0;color:#0A1628;">${escapeHtml(message || 'No message').replace(/\n/g, '<br/>')}</td></tr>
          </table>
          <p style="margin-top:24px;color:#666;font-size:13px;">Sent from Badri Marine website. Reply directly to respond to the client.</p>
        </div>
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}