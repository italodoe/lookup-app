import { db } from "@/lib/db";

/**
 * Retrieves a password reset token from the database by token.
 *
 * @param {string} token - The password reset token to search for.
 * @returns {Promise<Object|null>} - The password reset token object if found, otherwise null.
 */
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

/**
 * Retrieves the first password reset token from the database by email.
 *
 * @param {string} email - The email address associated with the password reset token.
 * @returns {Promise<Object|null>} - The password reset token object if found, otherwise null.
 */
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};
