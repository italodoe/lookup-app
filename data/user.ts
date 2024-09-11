import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const updateUser = async (id: string, values: any): Promise<void> => {
  await db.user.update({
    where: { id },
    data: { ...values },
  });
};

/**
 * Updates the user's password in the database.
 *
 * @param {string} id - The unique ID of the user.
 * @param {string} hashedPassword - The new hashed password to update.
 * @returns {Promise<void>} - Resolves when the password is successfully updated.
 */
export const updateUserPassword = async (
  id: string,
  hashedPassword: string
): Promise<void> => {
  await db.user.update({
    where: { id },
    data: { password: hashedPassword },
  });
};

/**
 * Updates the user's email and marks it as verified.
 *
 * @param {string} id - The unique ID of the user.
 * @param {string} email - The new email address to update.
 * @returns {Promise<void>} - Resolves when the email is successfully updated and verified.
 */
export const updateUserVerificationEmail = async (
  id: string,
  email: string
): Promise<void> => {
  await db.user.update({
    where: { id },
    data: {
      emailVerified: new Date(),
      email,
    },
  });
};

/**
 * Retrieves a user by their email address from the database.
 *
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Promise<User|null>} - The user object if found, otherwise null.
 */
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Retrieves a user by their unique ID from the database.
 *
 * @param {string} id - The unique ID of the user to retrieve.
 * @returns {Promise<User|null>} - The user object if found, otherwise null.
 */
export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Creates a new user in the database with the provided name, email, and hashed password.
 *
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} hashedPassword - The hashed password of the user.
 * @returns {Promise<User|null>} - The newly created user object, or null if the creation fails.
 */
export const createUser = async (
  name: string,
  email: string,
  hashedPassword: string
): Promise<User | null> => {
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};
