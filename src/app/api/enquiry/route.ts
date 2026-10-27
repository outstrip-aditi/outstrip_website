import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_REGEX, buildEmailHtml, getEmailConfig } from "@/lib/email";

const fail = (message: string, status: number) =>
  NextResponse.json({ success: false, message }, { status });

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return fail("Invalid request.", 400);
    }

    const clean = (v: unknown, max: number) =>
      String(v ?? "").trim().slice(0, max);

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 40);
    const service = clean(body.serviceNeeded, 120);
    const message = clean(body.message, 5000);
    const page = clean(body.page, 160);

    if (!name || !email || !phone || !service || !message) {
      return fail("Please fill in all required fields.", 400);
    }
    if (!EMAIL_REGEX.test(email)) {
      return fail("Please enter a valid email address.", 400);
    }

    const config = getEmailConfig();
    if (!config) {
      console.error("Enquiry email environment variables are missing.");
      return fail("Email service is not configured.", 500);
    }

    const resend = new Resend(config.apiKey);
    const { error } = await resend.emails.send({
      from: config.fromEmail,
      to: [config.toEmail],
      replyTo: email,
      subject: `New Service Enquiry (${service}) from ${name}`,
      html: buildEmailHtml({
        title: "Service Enquiry Details",
        intro: "A new free-consultation enquiry has been submitted.",
        rows: [
          ["Name", name],
          ["Email", email],
          ["Phone", phone],
          ["Service Needed", service],
          ...(page ? ([["Submitted from", page]] as [string, string][]) : []),
        ],
        messageTitle: "Project Details",
        message,
        replyTo: email,
      }),
      text: `New Service Enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n${page ? `Page: ${page}\n` : ""}\nProject details:\n${message}`,
    });

    if (error) {
      console.error("Resend enquiry error:", error);
      return fail("Failed to send your enquiry. Please try again.", 500);
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Enquiry form error:", error);
    return fail("Something went wrong. Please try again.", 500);
  }
}
