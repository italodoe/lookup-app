/**
 * @type {string[]}
 * Routes accessible without authentication.
 */
export const publicRoutes: string[] = [
  "/", // Home page
];

/**
 * @type {string}
 * Path for login when authentication is required.
 */
export const DEFAULT_LOGIN_PAGE: string = "/auth/login";

/**
 * @type {string}
 * Path for user registration.
 */
export const DEFAULT_REGISTER_PAGE: string = "/auth/register";

/**
 * @type {string}
 * Path for handling authentication errors.
 */
export const DEFAULT_AUTH_ERROR_PAGE: string = "/auth/error";

/**
 * @type {string}
 * Path for requesting new verification.
 */
export const DEFAULT_AUTH_NEW_VERIFICATION_PAGE: string =
  "/auth/new-verification";

/**
 * @type {string[]}
 * Routes related to authentication.
 */
export const authRoutes: string[] = [
  DEFAULT_LOGIN_PAGE,
  DEFAULT_REGISTER_PAGE,
  DEFAULT_AUTH_ERROR_PAGE,
  DEFAULT_AUTH_NEW_VERIFICATION_PAGE,
];

/**
 * @type {string}
 * Base prefix for authentication API endpoints.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * @type {string}
 * Path users are redirected to after a successful login.
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
