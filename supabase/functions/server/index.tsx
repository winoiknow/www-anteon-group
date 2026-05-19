import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-fd9224b8/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-fd9224b8/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !phone || !message) {
      console.error('Missing required fields in contact form submission:', { name, email, phone, message });
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Get email configuration from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const recipientEmail = Deno.env.get("RECIPIENT_EMAIL");

    if (!resendApiKey || !recipientEmail) {
      console.error('Email configuration missing. RESEND_API_KEY or RECIPIENT_EMAIL not set.');
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Anteon Group Contact Form <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error while sending contact form email:', errorText);
      return c.json({ error: "Failed to send email" }, 500);
    }

    const emailData = await emailResponse.json();
    console.log('Contact form email sent successfully:', emailData);

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);