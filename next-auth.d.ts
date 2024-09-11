import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

/**
 * @description Extends the default user object in NextAuth's session.
 * Adds a `role` property of type `UserRole` to the default session user.
 */
export type extendedUser = DefaultSession["user"] & {
  role: UserRole;
};

// https://authjs.dev/getting-started/typescript
declare module "next-auth" {
  /**
   * @description Extends the NextAuth Session interface to include the extended user type.
   * This allows access to the `role` property within the session user object.
   */
  interface Session {
    user: extendedUser;
  }
}
