import { db } from "@/lib/db";

/**
 * Retrieves a verification token from the database using the token value.
 *
 * @param {string} token - The unique verification token to search for.
 * @returns {Promise<Object|null>} - The verification token object if found, otherwise null.
 */
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

/**
 * Retrieves the first verification token associated with the given email from the database.
 *
 * @param {string} email - The email address associated with the verification token.
 * @returns {Promise<Object|null>} - The verification token object if found, otherwise null.
 */
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};
