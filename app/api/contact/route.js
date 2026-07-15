import { NextResponse } from 'next/server';

const normalizePayload = (payload = {}) => ({
  first_name: String(payload.first_name ?? '').trim(),
  last_name: String(payload.last_name ?? '').trim(),
  email: String(payload.email ?? '').trim(),
  company: String(payload.company ?? '').trim(),
  service: String(payload.service ?? '').trim(),
  budget: String(payload.budget ?? '').trim(),
  message: String(payload.message ?? '').trim(),
});

export async function POST(request) {
  try {
    const payload = normalizePayload(await request.json().catch(() => ({})));

    if (
      payload.first_name === '' ||
      payload.last_name === '' ||
      payload.email === '' ||
      payload.message === '' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please complete all required fields with a valid email address.',
        },
        { status: 422 }
      );
    }

    const quotaMailerUrl = process.env.QUOTE_MAILER_URL || process.env.CONTACT_MAILER_URL;
    if (!quotaMailerUrl) {
      return NextResponse.json(
        {
          success: false,
          message: 'The quote mailer endpoint is not configured. Add QUOTE_MAILER_URL in the environment.',
        },
        { status: 503 }
      );
    }

    const mailResponse = await fetch(quotaMailerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams(payload).toString(),
    });

    const mailData = await mailResponse.json().catch(() => null);

    if (!mailResponse.ok || !mailData?.ok) {
      return NextResponse.json(
        {
          success: false,
          message: mailData?.error || 'Mail could not be sent. Please try again or contact us directly.',
        },
        { status: mailResponse.status || 500 }
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
