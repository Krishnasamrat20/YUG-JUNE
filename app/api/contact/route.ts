import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const EMAIL_TO = process.env.EMAIL_TO || 'hello@yugai.live';
const EMAIL_FROM = process.env.EMAIL_FROM || 'hello@yugai.live';

function smtpConfigured() {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);
}

async function sendEmail({ name, email, message }: { name: string; email: string; message: string; }) {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `${name} <${EMAIL_FROM}>`,
    to: EMAIL_TO,
    replyTo: email,
    subject: `New contact request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
  }

  if (!smtpConfigured()) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Email sending is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment to enable form delivery.'
      },
      { status: 500 }
    );
  }

  try {
    await sendEmail({ name, email, message });
    return NextResponse.json({ success: true, message: 'Request received. We will contact you shortly.' });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to send email right now. Please try again later.' },
      { status: 500 }
    );
  }
}
