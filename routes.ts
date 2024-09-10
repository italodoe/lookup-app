/**
 * @type {string[]}
 * @description A list of routes that are publicly accessible and do not require user authentication.
 * These routes can be accessed by anyone, regardless of whether the user is logged in.
 * Typical examples include the home page or informational landing pages.
 */
export const publicRoutes: string[] = [
  "/", // Main landing or home page
];

/**
 * @type {string}
 * @description The default path to which users are redirected when authentication is required.
 * If a user tries to access a protected route without being logged in, they are sent to this login page.
 */
export const DEFAULT_LOGIN_PAGE: string = "/auth/login";

/**
 * @type {string}
 * @description The default path where users are redirected to register for a new account.
 * This is the page where new users can create an account.
 */
export const DEFAULT_REGISTER_PAGE: string = "/auth/register";

/**
 * @type {string[]}
 * @description A list of authentication-related routes such as login and registration.
 * These routes handle user authentication processes, including signing in and creating a new account.
 */
export const authRoutes: string[] = [DEFAULT_LOGIN_PAGE, DEFAULT_REGISTER_PAGE];

/**
 * @type {string}
 * @description The base path prefix for API routes related to user authentication.
 * Any API endpoint dealing with login, registration, or authentication should be prefixed with this path.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * @type {string}
 * @description The default path where users are redirected after successfully logging in.
 * This is typically a dashboard or main user area where they can manage their account or access personal features.
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
