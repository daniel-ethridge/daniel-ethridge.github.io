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
    const jsonData = JSON.parse(event.body || "{}");

    const { data, error } = await resend.emails.send({
      from: "Website <website@audiovascular.com>",
      to: "Daniel.Ethridge@colorado.edu",
      subject: "AUTOMATED - Participant Data",
      replyTo: "Daniel.Ethridge@colorado.edu",
      text: "New Data",
      attachments: [
        {
            filename: `${jsonData.part_id}_nostalgia_data.json`,
            content: Buffer.from(JSON.stringify(jsonData, null, 2)).toString("base64")
        }
      ]
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