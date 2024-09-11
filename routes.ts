/**
 * @type {string[]}
 * Publicly accessible routes that don't require authentication.
 */
export const publicRoutes: string[] = [
  "/", // Home page
];

/**
 * @type {string}
 * Default path for login redirection when authentication is needed.
 */
export const DEFAULT_LOGIN_PAGE: string = "/auth/login";

/**
 * @type {string}
 * Default path for user registration.
 */
export const DEFAULT_REGISTER_PAGE: string = "/auth/register";

/**
 * @type {string}
 * Default path for authentication errors.
 */
export const DEFAULT_AUTH_ERROR_PAGE: string = "/auth/error";

/**
 * @type {string[]}
 * Authentication-related routes.
 */
export const authRoutes: string[] = [
  DEFAULT_LOGIN_PAGE,
  DEFAULT_REGISTER_PAGE,
  DEFAULT_AUTH_ERROR_PAGE,
];

/**
 * @type {string}
 * Base path prefix for authentication API routes.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * @type {string}
 * Default redirect path after a successful login.
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
