import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { DEFAULT_AUTH_ERROR_PAGE, DEFAULT_LOGIN_PAGE } from "./routes";

/**
 * Configures authentication with NextAuth and Prisma adapter.
 * @module NextAuthConfig
 */

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    /**
     * @property {string} signIn - Path to the custom login page.
     * @property {string} error - Path to the custom error page.
     */
    signIn: DEFAULT_LOGIN_PAGE,
    error: DEFAULT_AUTH_ERROR_PAGE,
  },
  events: {
    /**
     * Marks the user's email as verified when a new account is linked.
     * @async
     * @function linkAccount
     * @param {Object} user - The user object from the OAuth provider.
     */
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    /**
     * Handles sign-in logic for credential-based and OAuth logins.
     * @async
     * @function signIn
     * @param {Object} user - The user attempting to sign in.
     * @param {Object} account - The account information.
     * @returns {boolean} True if sign-in is allowed, false otherwise.
     */
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;
      const existingUser = await getUserById(user.id as string);
      return existingUser?.emailVerified ? true : false;
    },

    /**
     * Adds user ID and role to the session object.
     * @async
     * @function session
     * @param {Object} session - The current session object.
     * @param {Object} token - The JWT token containing user data.
     * @returns {Object} Updated session with user ID and role.
     */
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user)
        session.user.role = token.role as UserRole;
      return session;
    },

    /**
     * Adds role information to the JWT token.
     * @async
     * @function jwt
     * @param {Object} token - The JWT token.
     * @returns {Object} Updated token with role.
     */
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (existingUser) token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
