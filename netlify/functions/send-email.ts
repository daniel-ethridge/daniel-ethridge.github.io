/// <reference types="node" />

import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || "{}");
    const safeName = escapeHtml(name || "");
    const safeEmail = escapeHtml(email || "");
    const safeSubject = escapeHtml(subject || "");
    const safeMessage = escapeHtml(message || "");
    const formattedMessage = safeMessage.replace(/\r?\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Website <website@audiovascular.com>",
      to: "daniel@audiovascular.com",
      subject: `Contact Form - ${subject || name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <div style="white-space: pre-wrap;">${formattedMessage}</div>
      `,
      text: `New Contact Form\nName: ${name}\nEmail: ${email}\nSubject: ${subject || ""}\n\n${message || ""}`
    });

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
};