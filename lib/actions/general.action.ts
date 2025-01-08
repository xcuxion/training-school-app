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

const applySchema = z.object({
  fname: z.string({ message: "field is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim(),
  gender: z.enum(["male", "female"]),
  nationality: z.string({ message: "field is required" }),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  contact: z.string({ message: "field is required" }).trim(),
  dob: z.date(),
  email: z
    .string()
    .email({ message: "field is required" })
    .trim(),
  programme: z.string({ message: "field is required" }).min(2),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  reason: z.string(),
  balance: z.string(),
  statement: z.string(),
  scholarship: z.enum(["yes", "no"]),
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
  name: z.string().min(2),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export default async function makeEnquiry(
  prevState: string | any,
  formData: FormData
) {
  try {
    console.log(formData);
    const result = enquirySchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const { email, name, question } = result.data;

    await prisma.enquiry.create({ data: { email, name, question } });
    return JSON.parse(
      JSON.stringify({
        message: "Enquiry sent successfully!",
      })
    );
  } catch (error) {
    handleError(error);
  }
} 

export async function login(prevState: any, formData: FormData) {
  try {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    console.log(formData);

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    const existingProfile = await prisma.profile.findFirst({
      where: { email },
    });
    if (!existingProfile) {
      return {
        errors: {
          email: ["Invalid email"],
        },
      };
    }

    const comparison = await bcrypt.compare(password, existingProfile.password);

    if (!comparison) {
      return {
        errors: {
          password: ["Invalid password"],
        },
      };
    }

    await createSession(existingProfile.id);

    return redirect("/landing");
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}


export async function apply(prevState: any, formData: FormData) {
  try {
    const result = applySchema.safeParse(Object.fromEntries(formData));
    console.log("reach 0");

    if (!result.success) {
      console.log("reach 0.1");
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    await prisma.applicant.create({data: {...result.data}})
    return JSON.parse(
      JSON.stringify({
        message: "Application sent successfully!",
      })
    );
  } catch (error) {
    handleError(error);
  }
}

export async function register(prevState: any, formData: FormData) {
  try {
    console.log("Received formData:", Object.fromEntries(formData));

    const result = registrationSchema.safeParse(Object.fromEntries(formData));
    console.log("Validation result:", result);

    if (!result.success) {
      console.log("Validation errors:", result.error.flatten().fieldErrors);
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = result.data;
    console.log("Parsed data:", { name, email });

    const existingProfile = await prisma.profile.findFirst({
      where: { email },
    });
    console.log("Existing profile:", existingProfile);

    if (!existingProfile) {
      console.log("No profile found for email:", email);
      return {
        errors: {
          email: ["Invalid email"],
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = await prisma.profile.create({
      data: {
        name,
        password: hashedPassword,
        email: email,
      },
    });
    console.log("New user created:", newUser);

    await createSession(newUser.id);
    console.log("Session created for user:", newUser.id);

    console.log("Redirecting to /school");
    return redirect("/school");
  } catch (error) {
    console.error("Caught error:", error);

    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }

    handleError(error);
  }
}
