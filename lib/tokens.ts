import { getPasswordResetTokenByEmail } from "@/data/passwordresettoken";
import { getVerificationTokenByEmail } from "@/data/verificationtoken";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { v4 as uuidv4 } from "uuid";

export const deletePasswordResetToken = async (id: string) => {
  await db.passwordResetToken.delete({
    where: { id },
  });
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const defaultExpires = parseInt(env("DEFAULT_EXPIRE_TIME"));
  const expires = new Date(new Date().getTime() + defaultExpires * 1000);
  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

export const deleteVerificationToken = async (id: string) => {
  await db.verificationToken.delete({
    where: { id },
  });
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const defaultExpires = parseInt(env("DEFAULT_EXPIRE_TIME"));
  const expires = new Date(new Date().getTime() + defaultExpires * 1000);
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
