import { PrismaClient } from "@prisma/client";
import { env } from "./env";

// Declare a global `prisma` variable, which can be either a PrismaClient instance or undefined.
// This allows TypeScript to recognize the global `prisma` variable across different modules.
declare global {
    var prisma: PrismaClient | undefined;
}

// Export a single PrismaClient instance. Reuse the global `prisma` instance if it exists,
// otherwise, create a new one. This ensures a single database connection throughout the app.
export const db = globalThis.prisma || new PrismaClient();

// In non-production environments, store the PrismaClient instance globally 
// to prevent multiple instances during hot-reloading.
if (env("NODE_ENV") !== "production") globalThis.prisma = db;