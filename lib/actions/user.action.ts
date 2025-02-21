"use server";
import { z } from "zod";
import { handleError } from "../utils";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { createSession, deleteSession } from "../session";
import { Resend } from "resend";
import { ReactElement } from "react";
import { signIn } from "../auth";

const resend = new Resend(process.env.RESEND_KEY);
const prisma = new PrismaClient();

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
  interest: z.enum(["school", "guild", "startupcenter"], {message: "Select your interested faction"}),
});

const enquirySchema = z.object({
  name: z.string({ message: "Enter your name" }).trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .trim(),
  question: z.string({ message: "question field cannot be empty" }).min(2),
});

const mailSchema = z.object({
  sender: z.string().email(),
  receivers: z.array(z.string().email()),
  subject: z.string().min(1, "Subject is required"),
  content: z
    .any() // Allow ReactElement to be passed
    .refine((val) => val !== null && val !== undefined, "Content is required"),
});

// Type for the function parameters
type EmailContent = {
  sender: string;
  receivers: string[];
  subject: string;
  content: ReactElement;
};

type SendMailResponse = {
  success?: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function googleAuth() {
  try {
    await signIn("google");
  } catch (error) {
    console.log(error);
  }
}

export async function sendMail(
  prevState: unknown,
  formData: FormData,
  EmailComponent: ReactElement // Accept React component separately
): Promise<SendMailResponse> {
  try {
    // Parse and validate the form data
    const rawData = Object.fromEntries(formData);

    // Convert receivers string to array if it comes as comma-separated string
    const processedData = {
      ...rawData,
      receivers: Array.isArray(rawData.receivers)
        ? rawData.receivers
        : String(rawData.receivers)
            .split(",")
            .map((email) => email.trim()),
      content: EmailComponent, // Add the React component to the processed data
    };

    const result = mailSchema.safeParse(processedData);

    if (!result.success) {
      console.error("Validation errors:", result.error.flatten().fieldErrors);
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { sender, receivers, subject, content } = result.data as EmailContent;

    // Send email using Resend
    const response = await resend.emails.send({
      from: sender,
      to: receivers,
      subject: subject,
      react: content, // Pass the React component directly
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

export async function logOut() {
  try {
    await deleteSession();
  } catch (error) {
    console.log(error);
  }
}

export default async function makeEnquiry(
  prevState: unknown,
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

type Fields = {
  email: string;
  password: string;
};

export type FormState = {
  message: string;
  errors?: Record<keyof Fields, string> | undefined;
};

export async function login(prevState: unknown, formData: FormData) {
  try {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    console.log(formData);

    if (!result.success) {
      return {
        message: "Failed to login",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (!existingUser) {
      return {
        errors: {
          email: ["User not registered"],
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

    await createSession(existingUser.id);

    const { interest, createdAt, updatedAt, ...profileWithoutTimestamps } =
      existingUser;
    console.log(profileWithoutTimestamps);
    return {
      data: profileWithoutTimestamps,
      success: result?.success,
    };
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}

export async function register(prevState: unknown, formData: FormData) {
  try {
    const result = registerSchema.safeParse(Object.fromEntries(formData));
    console.log(formData);

    if (!result.success) {
      return {
        message: "Failed to register",
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password, interest } = result.data;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      throw new Error("User already exists")
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        interest,
      },
    });

    await createSession(newUser.id);

    const { createdAt, updatedAt, ...profileWithoutTimestamps } = newUser;
    console.log(profileWithoutTimestamps);
    return {
      data: profileWithoutTimestamps,
      success: result?.success,
    };
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }
    handleError(error);
  }
}
