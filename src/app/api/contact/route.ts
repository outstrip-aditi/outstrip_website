
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = String(body.name ?? "").trim();
        const email = String(body.email ?? "").trim();
        const company = String(body.company ?? "").trim();
        const phone = String(body.phone ?? "").trim();
        const message = String(body.message ?? "").trim();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email and message are required.",
                },
                { status: 400 }
            );
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                { status: 400 }
            );
        }

        // Validate environment variables
        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;
        const siteUrl = (
            process.env.NEXT_PUBLIC_SITE_URL || "https://outstripinfotech.com"
        ).replace(/\/+$/, "");

        if (!apiKey || !toEmail || !fromEmail) {
            console.error("Contact email environment variables are missing.");

            return NextResponse.json(
                {
                    success: false,
                    message: "Email service is not configured.",
                },
                { status: 500 }
            );
        }

        // Escape user input before inserting it into HTML
        const escapeHtml = (value: string) =>
            value.replace(/[&<>"']/g, (char) => {
                const entities: Record<string, string> = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                };

                return entities[char];
            });

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeCompany = escapeHtml(company || "Not provided");
        const safePhone = escapeHtml(phone || "Not provided");
        const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

        // Replace this path with your actual company logo path if different.
        const logoUrl = `${siteUrl}/images/footer-logo.png`;

        const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Contact Enquiry - OUTSTRIP</title>
        </head>

        <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
            style="background-color:#f3f4f6;padding:32px 12px;">
            <tr>
              <td align="center">

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                  style="max-width:680px;background-color:#ffffff;border-radius:12px;overflow:hidden;">

                  <!-- Header -->
                  <tr>
                    <td align="center" style="padding:20px 24px;background-color:#111827;">
                      <img
                        src="${logoUrl}"
                        alt="OUTSTRIP Logo"
                        width="160"
                        style="display:block;width:160px;max-width:100%;height:auto;margin:0 auto;"
                      />
                      <p style="margin:5px 0 0;color:#d1d5db;font-size:13px;">
                        A new message has been submitted through your website.
                      </p>
                    </td>
                  </tr>

                  <!-- Intro -->
                  <tr>
                    <td style="padding:28px 28px 12px;">
                      <p style="margin:0 0 8px;font-size:16px;line-height:1.6;">
                        Hello OUTSTRIP Team,
                      </p>

                      <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.8;">
                        You have received a new enquiry from your website contact form.
                        The details are provided below.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 28px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                        style="border:1px solid #e5e7eb;border-radius:8px;">

                        <tr>
                          <td colspan="2" style="padding:10px 18px;background-color:#f9fafb;border-bottom:1px solid #e5e7eb;">
                            <h2 style="margin:0;font-size:15px;color:#111827;">
                              Contact Details
                            </h2>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;width:34%;color:#6b7280;font-size:13px;">
                            Name
                          </td>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:bold;">
                            ${safeName}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">
                            Email
                          </td>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;font-size:14px;overflow-wrap:anywhere;">
                            <a href="mailto:${safeEmail}" style="color:#087a6a;text-decoration:none;">
                              ${safeEmail}
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;">
                            Company
                          </td>
                          <td style="padding:8px 18px;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">
                            ${safeCompany}
                          </td>
                        </tr>

                       <tr>
                            <td style="padding:8px 18px;color:#6b7280;font-size:13px;">
                                Phone
                            </td>
                            <td style="padding:8px 18px;color:#087a6a;font-size:14px;">
                                <a
                                href="tel:${safePhone}"
                                style="color:#087a6a !important;text-decoration:none !important;"
                                >
                                <span style="color:#087a6a !important;text-decoration:none !important;">
                                    ${safePhone}
                                </span>
                                </a>
                            </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding:16px 28px 28px;">
                      <h2 style="margin:0 0 12px;color:#111827;font-size:15px;">
                        Message
                      </h2>

                      <div style="padding:18px;background-color:#f9fafb;border-left:4px solid #087a6a;border-radius:4px;color:#374151;font-size:14px;line-height:1.8;overflow-wrap:anywhere;">
                        ${safeMessage}
                      </div>

                      <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                        style="margin-top:24px;">
                        <tr>
                          <td align="center" bgcolor="#087a6a" style="border-radius:6px;">
                            <a
                              href="mailto:${safeEmail}"
                              style="display:inline-block;padding:10px 22px;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;"
                            >
                              Reply to Enquiry
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td align="center" style="padding:22px 24px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
                      <p style="margin:0 0 6px;color:#374151;font-size:13px;font-weight:bold;">
                        OUTSTRIP
                      </p>

                      <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.7;">
                        This email was automatically generated from your website contact form.
                        <br />
                        Please do not reply directly to this automated notification.
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

        // Plain-text fallback for email clients that don't display HTML
        const text = `
New Contact Enquiry - OUTSTRIP

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}

Message:
${message}

Reply to: ${email}
    `;

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `New Contact Enquiry from ${name}`,
            html,
            text,
        });

        if (error) {
            console.error("Resend email error:", error);

            return NextResponse.json(
                {
                    success: false,
                    message: "Failed to send your message. Please try again.",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully.",
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again.",
            },
            { status: 500 }
        );
    }
}