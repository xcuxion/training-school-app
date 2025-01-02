"use server";
import { z } from "zod";
import { handleError } from "../utils";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { createSession } from "../session";

const prisma = new PrismaClient();
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

const enquirySchema = z.object({
  name: z.string({ message: "Enter your name" }).trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .trim(),
  question: z.string({ message: "question field cannot be empty" }).min(2),
});
const registrationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export default async function makeEnquiry(prevState: any, formData: FormData) {
  try {
    const result = enquirySchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  } catch (error) {
    handleError(error);
  }
}

export async function login(prevState: any, formData: FormData) {
  try {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    const existingUser = await prisma.member.find({ email });
    if (!existingUser) {
      return {
        errors: {
          email: ["Invalid email"],
        },
      };
    }

    const comparison = await bcrypt.compare(password, existingUser.password);

    if (!comparison) {
      return {
        errors: {
          password: ["Invalid password"],
        },
      };
    }

    await createSession(existingUser._id);

    return redirect("/landing");
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}

export async function register(prevState: any, formData: FormData) {
  try {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    const existingUser = await prisma.member.find({ email });
    if (!existingUser) {
      return {
        errors: {
          email: ["Invalid email"],
        },
      };
    }

    const comparison = await bcrypt.compare(password, existingUser.password);

    if (!comparison) {
      return {
        errors: {
          password: ["Invalid password"],
        },
      };
    }

    await createSession(existingUser._id);

    return redirect("/landing");
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}
