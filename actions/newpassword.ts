"use server";

import { getPasswordResetTokenByToken } from "@/data/passwordresettoken";
import { getUserByEmail, updateUserPassword } from "@/data/user";
import { db } from "@/lib/db";
import { deletePasswordResetToken } from "@/lib/tokens";
import { NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token!" };
  }
  const validateFields = NewPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token expired!" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "User does not exists" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await updateUserPassword(existingUser.id, hashedPassword);

  await deletePasswordResetToken(existingToken.id);

  return { success: "Password updated!" };
};
