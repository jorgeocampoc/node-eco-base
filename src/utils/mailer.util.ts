import { Resend } from "resend";
import env from "../config/env.config";
import { SchemaMailer } from "../types/mailer.type";

const resend = new Resend(env.API_KEY);

const sendEmail = async (mailer: SchemaMailer): Promise<void> => {
  try {
    const { to, subject, html } = mailer;
    await resend.emails.send({
      from: env.DOMAIN_RESEND,
      to,
      subject,
      html,
    });
    
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export { sendEmail };
