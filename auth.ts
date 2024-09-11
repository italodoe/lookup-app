import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";

/**
 * @description Configures authentication using NextAuth with Prisma as the adapter.
 * Includes custom pages, event handling, and JWT callbacks for a tailored authentication flow.
 */
export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      //Attaches the user ID and role to the session object for later use in the application.
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (existingUser) {
        token.role = existingUser.role;
      }

      return token;
    },
  },
  // Use Prisma as the database adapter for NextAuth
  adapter: PrismaAdapter(db),

  // Use JWT for session management
  session: { strategy: "jwt" },

  // Additional authentication configuration options
  ...authConfig,
});
