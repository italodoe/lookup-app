import {
  DEFAULT_AUTH_NEW_VERIFICATION_PAGE,
  DEFAULT_NEW_PASSWORD_PAGE,
} from "@/routes";
import { Resend } from "Resend";
import { env } from "./env";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const protocol = env("NEXT_PUBLIC_PROTOCOL");
  const hostname = env("NEXT_PUBLIC_BASE_URL");
  const default_from = env("MAILER_DEFAULT_FROM");
  const resetLink = `${protocol}://${hostname}${DEFAULT_NEW_PASSWORD_PAGE}?token=${token}`;

  await resend.emails.send({
    from: default_from,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const protocol = env("NEXT_PUBLIC_PROTOCOL");
  const hostname = env("NEXT_PUBLIC_BASE_URL");
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
