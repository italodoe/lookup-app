import { Resend } from "resend";
import {
  DEFAULT_AUTH_NEW_VERIFICATION_PAGE,
  DEFAULT_NEW_PASSWORD_PAGE,
} from "@/routes";
import { env } from "./env";
import { render } from "@react-email/render";
import DefaultEmail from "@/components/DefaultEmail";

const activeResend = env("RESEND_ACTIVE") === "true";
const resend = activeResend ? new Resend(env("RESEND_API_KEY")) : null;

export async function sendPasswordResetEmail(email: string, token: string) {
  if (!resend) return null;
  const protocol = env("NEXT_PUBLIC_PROTOCOL");
  const hostname = env("NEXT_PUBLIC_BASE_URL");
  const default_from = env("MAILER_DEFAULT_FROM");
  const resetLink = `${protocol}://${hostname}${DEFAULT_NEW_PASSWORD_PAGE}?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: default_from,
    to: email,
    subject: "Reset your password",
    html:  render(DefaultEmail({type:"reset", username: email, actionUrl: resetLink})), 
  });
  if (error) {
    return { error: error.message };
  }
  return { data: data };
}

export async function sendVerificationEmail(email: string, token: string) {
  if (!resend) return null;
  const protocol = env("NEXT_PUBLIC_PROTOCOL");
  const hostname = env("NEXT_PUBLIC_BASE_URL");
  const default_from = env("MAILER_DEFAULT_FROM");
  const confirmLink = `${protocol}://${hostname}${DEFAULT_AUTH_NEW_VERIFICATION_PAGE}?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: default_from,
    to: email,
    subject: "Confirm your account",
    html:  render(DefaultEmail({type:"register", username: email, actionUrl: confirmLink})), 
  });
  if (error) {
    return { error: error.message };
  }
  return { data: data };
}
