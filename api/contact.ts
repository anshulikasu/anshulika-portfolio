import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body as {
    name: string
    email: string
    subject: string
    message: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['anshulikasingh355@gmail.com'],
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0c29; color: #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: white;">New Portfolio Message</h1>
            <p style="margin: 8px 0 0; opacity: 0.9; color: white;">Someone reached out via your portfolio!</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2); color: #94a3b8; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2); font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2); color: #94a3b8;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2);">
                  <a href="mailto:${email}" style="color: #a78bfa;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2); color: #94a3b8;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.2);">${subject || '(No subject)'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #94a3b8; margin-bottom: 12px;">Message:</p>
              <div style="background: rgba(139,92,246,0.08); border: 1px solid rgba(139,92,246,0.2); border-radius: 12px; padding: 20px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <div style="padding: 20px 32px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(139,92,246,0.1);">
            Sent from your portfolio at anshulikasingh.dev
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
