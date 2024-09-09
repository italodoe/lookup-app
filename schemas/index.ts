import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({}),
  password: z.string().min(6, {
    message: "Password is required",
  }),
  name: z.string().min(4, {
    message: "Name is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({}),
  password: z.string(),
});
