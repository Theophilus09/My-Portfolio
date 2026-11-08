// server/src/services/email.service.ts
import { Resend } from 'resend';

interface EmailPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendContactEmail = async ({
    name,
    email,
    subject,
    message,
}: EmailPayload) => {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || 'ajibadetheophilus217@gmail.com';

    // If no API key is set yet, log to console for development verification
    if (!apiKey) {
        console.warn('⚠️ [DEV MODE] RESEND_API_KEY is not configured yet in server/.env');
        console.log('--- Incoming Contact Form Submission ---');
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: ${subject}`);
        console.log(`Message:\n${message}`);
        console.log('----------------------------------------');
        return { success: true, simulated: true };
    }

    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [toEmail],
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `You received a new inquiry from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #10b981; margin-top: 0;">New Portfolio Message</h2>
        <p><strong>Sender:</strong> ${name} (&lt;${email}&gt;)</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #333;">${message}</div>
      </div>
    `,
    });

    return response;
};