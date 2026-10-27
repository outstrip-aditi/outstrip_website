export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (char) => entities[char]);
}

/** Reads Resend settings from env; returns null if any are missing. */
export function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) return null;
  return { apiKey, toEmail, fromEmail };
}

/** Builds the OUTSTRIP-branded notification email used by enquiry/career routes. */
export function buildEmailHtml({
  title,
  intro,
  rows,
  messageTitle,
  message,
  replyTo,
}: {
  title: string;
  intro: string;
  rows: [label: string, value: string][];
  messageTitle: string;
  message: string;
  replyTo: string;
}) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://outstripinfotech.com"
  ).replace(/\/+$/, "");
  const safeReply = escapeHtml(replyTo);

  const rowsHtml = rows
    .map(
      ([label, value], i) => `
        <tr>
          <td style="padding:8px 18px;${i < rows.length - 1 ? "border-bottom:1px solid #f3f4f6;" : ""}width:34%;color:#6b7280;font-size:13px;">${escapeHtml(label)}</td>
          <td style="padding:8px 18px;${i < rows.length - 1 ? "border-bottom:1px solid #f3f4f6;" : ""}color:#111827;font-size:14px;overflow-wrap:anywhere;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8" /><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
        <tr><td align="center" style="padding:20px 24px;background-color:#111827;">
          <img src="${siteUrl}/images/footer-logo.png" alt="OUTSTRIP Logo" width="160" style="display:block;width:160px;max-width:100%;height:auto;margin:0 auto;" />
          <p style="margin:5px 0 0;color:#d1d5db;font-size:13px;">${escapeHtml(intro)}</p>
        </td></tr>
        <tr><td style="padding:24px 28px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e5e7eb;border-radius:8px;">
            <tr><td colspan="2" style="padding:10px 18px;background-color:#f9fafb;border-bottom:1px solid #e5e7eb;">
              <h2 style="margin:0;font-size:15px;color:#111827;">${escapeHtml(title)}</h2>
            </td></tr>${rowsHtml}
          </table>
        </td></tr>
        <tr><td style="padding:16px 28px 28px;">
          <h2 style="margin:0 0 12px;color:#111827;font-size:15px;">${escapeHtml(messageTitle)}</h2>
          <div style="padding:18px;background-color:#f9fafb;border-left:4px solid #087a6a;border-radius:4px;color:#374151;font-size:14px;line-height:1.8;overflow-wrap:anywhere;">${escapeHtml(message).replace(/\r?\n/g, "<br>")}</div>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;"><tr>
            <td align="center" bgcolor="#087a6a" style="border-radius:6px;">
              <a href="mailto:${safeReply}" style="display:inline-block;padding:10px 22px;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;">Reply</a>
            </td>
          </tr></table>
        </td></tr>
        <tr><td align="center" style="padding:22px 24px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
          <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.7;">Automated notification from the OUTSTRIP website.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
