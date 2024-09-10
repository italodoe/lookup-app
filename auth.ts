import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

/**
 * @description Configures authentication using NextAuth with Prisma as the adapter.
 * Includes custom pages, event handling, and JWT callbacks for a tailored authentication flow.
 */
export const { auth, handlers, signIn, signOut } = NextAuth({
  // Use Prisma as the database adapter for NextAuth
  adapter: PrismaAdapter(db),

  // Use JWT for session management
  session: { strategy: "jwt" },

  // Additional authentication configuration options
  ...authConfig,
});
