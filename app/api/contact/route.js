import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => ({}));
    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        access_key: accessKey,
      }),
    });

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = { success: false, message: responseText || 'Unable to submit request at this time.' };
    }

    if (!response.ok || !result?.success) {
      return NextResponse.json(
        {
          success: false,
          message: result?.message || 'Unable to submit request at this time.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to submit request at this time.' },
      { status: 500 }
    );
  }
}
