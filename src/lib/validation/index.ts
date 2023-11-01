import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Caption must contain at least 5 characters" })
    .max(2200, { message: "Caption over 2200 character limit" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(2, { message: "Location must contain at least 2 character" })
    .max(100, { message: "Location over 100 character limit" }),
  tags: z.string(),
});
