import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schemas";

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { env } from "./lib/env";

export default {
  providers: [
    Google({
      clientId: env("GOOGLE_CLIENT_ID"),
      clientSecret: env("GOOGLE_CLIENT_SECRET"),
    }),
    Github({
      clientId: env("GITHUB_CLIENT_ID"),
      clientSecret: env("GITHUB_CLIENT_SECRET"),
    }),
    Credentials({
      async authorize(credentials): Promise<any> {
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
