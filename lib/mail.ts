import { DEFAULT_AUTH_NEW_VERIFICATION_PAGE } from "@/routes";
import { Resend } from "Resend";
import { env } from "./env";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const protocol = env("PROTOCOL");
  const hostname = env("HOSTNAME");
  const default_from = env("MAILER_DEFAULT_FROM");
  const confirmLink = `${protocol}://${hostname}${DEFAULT_AUTH_NEW_VERIFICATION_PAGE}?token=${token}`;

  await resend.emails.send({
    from: default_from,
    to: email,
    subject: "Confirm your email",
    // todo: improve mail
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm.</p>`,
  });
};
