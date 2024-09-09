import { db } from "@/lib/db";

/**
 * Retrieves a user by their email address from the database.
 *
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Promise<Object|null>} - The user object if found, otherwise null.
 */
export const getUserByEmail = async (email: string): Promise<object | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
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
 * @returns {Promise<Object|null>} - The user object if found, otherwise null.
 */
export const getUserById = async (id: string): Promise<object | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
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
 * @returns {Promise<Object|null>} - The newly created user object, or null if the creation fails.
 */
export const createUser = async (
  name: string,
  email: string,
  hashedPassword: string
): Promise<object | null> => {
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
