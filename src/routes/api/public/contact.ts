import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "invalid_json" }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "validation_failed" }, { status: 400 });
        }

        const { name, email, message } = parsed.data;

        // If Web3Forms access key is configured in env, forward the message
        const web3formsKey = process.env["WEB3FORMS_ACCESS_KEY"];
        if (web3formsKey) {
          try {
            await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                access_key: web3formsKey,
                subject: `New Inquiry from DAIWA Japan Website: ${name}`,
                from_name: name,
                email,
                message,
              }),
            });
          } catch (err) {
            console.error("[Email Notification Error]", err);
          }
        }

        // If Resend API key is configured in env, forward via Resend
        const resendKey = process.env["RESEND_API_KEY"];
        const notifyEmail = process.env["CONTACT_NOTIFICATION_EMAIL"] || "info@daiwajapan.jp";
        if (resendKey) {
          try {
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendKey}`,
              },
              body: JSON.stringify({
                from: "DAIWA Japan <onboarding@resend.dev>",
                to: [notifyEmail],
                reply_to: email,
                subject: `[DAIWA Japan] Pertanyaan Baru dari ${name}`,
                text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
              }),
            });
          } catch (err) {
            console.error("[Resend Error]", err);
          }
        }

        console.log(`[Contact Submission] Received from ${name} (${email}): ${message}`);
        return Response.json({ ok: true });
      },
    },
  },
});
