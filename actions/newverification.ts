"use server";

import { getUserByEmail, updateUserVerificationEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationtoken";
import { deleteVerificationToken } from "@/lib/tokens";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: "Token does not exists!" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token expired!" };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: "User does not exists" };

  await updateUserVerificationEmail(existingUser.id, existingToken.email);

  await deleteVerificationToken(existingToken.id);

  return { success: "Email verified!" };
};
