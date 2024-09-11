import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string().min(3)),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) return false;
      if (!data.password && data.newPassword) return false;

      return true;
    },
    {
      message: "Password and NewPassword are required!",
      path: ["newPassword"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 character required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({}),
});

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
