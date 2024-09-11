/**
 * @type {string[]}
 * Public routes that don't require authentication.
 */
export const publicRoutes: string[] = [
  "/", // Home page
];

/**
 * @type {string}
 * Login page path when authentication is needed.
 */
export const DEFAULT_LOGIN_PAGE: string = "/auth/login";

/**
 * @type {string}
 * Registration page path for new users.
 */
export const DEFAULT_REGISTER_PAGE: string = "/auth/register";

/**
 * @type {string}
 * Error page path for authentication issues.
 */
export const DEFAULT_AUTH_ERROR_PAGE: string = "/auth/error";

/**
 * @type {string}
 * Path for requesting new email verification.
 */
export const DEFAULT_AUTH_NEW_VERIFICATION_PAGE: string =
  "/auth/new-verification";

/**
 * @type {string}
 * Reset password page path.
 */
export const DEFAULT_RESET_PASSWORD_PAGE: string = "/auth/reset";

/**
 * @type {string}
 * Page path for setting a new password.
 */
export const DEFAULT_NEW_PASSWORD_PAGE: string = "/auth/new-password";

/**
 * @type {string[]}
 * All authentication-related routes.
 */
export const authRoutes: string[] = [
  DEFAULT_LOGIN_PAGE,
  DEFAULT_REGISTER_PAGE,
  DEFAULT_AUTH_ERROR_PAGE,
  DEFAULT_AUTH_NEW_VERIFICATION_PAGE,
  DEFAULT_RESET_PASSWORD_PAGE,
  DEFAULT_NEW_PASSWORD_PAGE,
];

/**
 * @type {string}
 * Base API path for authentication-related endpoints.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * @type {string}
 * Redirect path after a successful login.
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
