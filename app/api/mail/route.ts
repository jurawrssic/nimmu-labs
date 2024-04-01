import { NextRequest, NextResponse } from 'next/server';

import sendgrid from '@sendgrid/mail';

const SENDER_EMAIL = process.env.SENDGRID_SENDER_EMAIL || '';
const RECEIVER_EMAIL = process.env.SENDGRID_RECEIVER_EMAIL || '';

const API_KEY = process.env.SENDGRID_API_KEY || '';
sendgrid.setApiKey(API_KEY);

export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const { senderEmail, emailSubject, emailContent } = await new Response(
    req.body
  ).json();

  const message = `
    Sender: ${senderEmail}\r\n
    Message: ${emailContent}
  `;

  const mailerData = {
    to: RECEIVER_EMAIL,
    from: SENDER_EMAIL,
    subject: `NIMMU LABS CONTACT FORM: ${emailSubject}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    sendgrid.send(mailerData);
  } catch (error: any) {
    return NextResponse.json(error, {
      status: error.statusCode || 500,
      statusText: error.statusText || 'Something went wrong',
    });
  }

  return NextResponse.json('Ok', {
    status: 200,
    statusText: 'Email sent!',
  });
}
