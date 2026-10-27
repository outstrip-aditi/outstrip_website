import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_REGEX, buildEmailHtml, getEmailConfig } from "@/lib/email";
import { careers } from "@/lib/data";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const fail = (message: string, status: number) =>
  NextResponse.json({ success: false, message }, { status });

type ResumeKind = "pdf" | "doc" | "docx";

/** Checks the extension AND the file's magic bytes so renamed files are rejected. */
function detectResume(name: string, bytes: Buffer): ResumeKind | null {
  const ext = name.toLowerCase().split(".").pop();
  const startsWith = (sig: number[]) => sig.every((b, i) => bytes[i] === b);

  if (ext === "pdf" && startsWith([0x25, 0x50, 0x44, 0x46])) return "pdf"; // %PDF
  if (ext === "docx" && startsWith([0x50, 0x4b, 0x03, 0x04])) return "docx"; // zip
  if (ext === "doc" && startsWith([0xd0, 0xcf, 0x11, 0xe0])) return "doc"; // OLE2
  return null;
}

export async function POST(request: Request) {
  try {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return fail("Invalid request.", 400);
    }

    const clean = (key: string, max: number) =>
      String(form.get(key) ?? "").trim().slice(0, max);

    const name = clean("name", 120);
    const email = clean("email", 200);
    const phone = clean("phone", 40);
    const role = clean("role", 160);
    const coverLetter = clean("coverLetter", 5000);
    const resume = form.get("resume");

    if (!name || !email || !phone || !role) {
      return fail("Please fill in all required fields.", 400);
    }
    if (!EMAIL_REGEX.test(email)) {
      return fail("Please enter a valid email address.", 400);
    }
    if (!careers.some((job) => job.title === role)) {
      return fail("Please select a valid job role.", 400);
    }
    if (!(resume instanceof File) || resume.size === 0) {
      return fail("Please upload your resume.", 400);
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return fail("Resume must be 5 MB or smaller.", 400);
    }

    const bytes = Buffer.from(await resume.arrayBuffer());
    const kind = detectResume(resume.name, bytes);
    if (!kind) {
      return fail("Resume must be a valid PDF, DOC or DOCX file.", 400);
    }

    const config = getEmailConfig();
    if (!config) {
      console.error("Career email environment variables are missing.");
      return fail("Email service is not configured.", 500);
    }

    // Safe attachment filename: strip anything but a conservative character set.
    const base = resume.name
      .replace(/\.[^.]+$/, "")
      .replace(/[^\w\- ]+/g, "")
      .trim()
      .slice(0, 60);
    const filename = `${base || "resume"}.${kind}`;

    const resend = new Resend(config.apiKey);
    const { error } = await resend.emails.send({
      from: config.fromEmail,
      to: [config.toEmail],
      replyTo: email,
      subject: `New Job Application: ${role} — ${name}`,
      html: buildEmailHtml({
        title: "Application Details",
        intro: "A new job application has been submitted.",
        rows: [
          ["Applying for", role],
          ["Name", name],
          ["Email", email],
          ["Phone", phone],
          ["Resume", `${filename} (attached)`],
        ],
        messageTitle: "Cover Letter / Additional Message",
        message: coverLetter || "Not provided",
        replyTo: email,
      }),
      text: `New Job Application\n\nRole: ${role}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nResume: ${filename} (attached)\n\nMessage:\n${coverLetter || "Not provided"}`,
      attachments: [{ filename, content: bytes }],
    });

    if (error) {
      console.error("Resend career error:", error);
      return fail("Failed to submit your application. Please try again.", 500);
    }

    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully.",
    });
  } catch (error) {
    console.error("Career form error:", error);
    return fail("Something went wrong. Please try again.", 500);
  }
}
