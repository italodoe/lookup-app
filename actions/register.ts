"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";

import { db } from "@/lib/db";
import { createUser, getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser(name, email, hashedPassword);

  //todo sens email verification

  return { success: "Confirmation email sent" };
};
