"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import { createSession } from "../session";
import { Resend } from "resend";
import * as bcrypt from "bcrypt";
import XcuxionConfirmEmail from "@/emails/confirm.email";
import { sendMail } from "./user.action";
import BatchInformation from "@/emails/batch-information";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

const otpSchema = z.object({
  code: z.number({ message: "Invalid email address" }).max(6),
});

const newAdminSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
  permission: z.enum(["registrar", "head", "support", "librarian"]),
});

export async function new_admin(prevState: unknown, formData: FormData) {
  try {
    const result = newAdminSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const hashedPassword = await bcrypt.hash(result.data.password, 10);

    const admin = await prisma.schoolAdmin.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashedPassword,
        permissions: result.data.permission,
      },
    });
    await send_verification_email(admin.email);
    await createSession(admin.id);
    const { password, ...withoutPassword } = admin;
    return {
      message: "Admin created successfully",
      success: result.success,
      data: withoutPassword,
    };
  } catch (error) {
    handleError(error);
    return { message: "Failed to create admin" };
  }
}

export async function confirm_otp(id: string, code: number) {
  try {
    const admin = await prisma.schoolAdmin.findUnique({ where: { id } });
    if (!admin) {
      return { message: "Admin not found" };
    }
  } catch (error) {
    return { message: "Wrong OTP code" };
  }
}

export async function login_admin(prevState: unknown, formData: FormData) {
  try {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const admin = await prisma.schoolAdmin.findFirst({
      where: {
        email: result.data.email,
      },
    });
    if (!admin) {
      return { message: "Admin not found" };
    }
    const isMatch = await bcrypt.compare(result.data.password, admin?.password);
    if (!isMatch) {
      return { message: "Invalid credentials" };
    }

    await send_verification_email(admin.email);
    await createSession(admin.id);
    const { password, ...withoutPassword } = admin;
    return {
      message: "Login successfully",
      success: result.success,
      data: withoutPassword,
    };
  } catch (error) {
    handleError(error);
    return { message: "Failed to create admin" };
  }
}

export async function  sendBatchInformation() {
  try {
    // Fetch users from the database
    const users = await prisma.user.findMany({
      select: { email: true }, // Get only email addresses
    });

    console.log(users)

    // const users = [{email:"1serwise@gmail.com"}, {email:"solomonannanayisi@gmail.com"}, {email:"jessicaennor@gmail.com"}, {email:"yawoffeh123@gmail.com"}, {email:"mjnuvor@gmail.com"}]

    if (!users || users.length === 0) {
      return { message: "No users found to send newsletter" };
    }

    // Prepare formData
    const formData = new FormData();
    formData.append("sender", "school@xcuxion.org"); // Change to your sender email
    formData.append("receivers", users.map((user) => user.email).join(",")); // Convert array to comma-separated string
    formData.append("subject", "XCUXION School Batch'25");

    // Pass data to sendMail
    //@ts-ignore
    const response = await sendMail(null, formData,BatchInformation() );
    console.log(response)
    return response;
  } catch (error) {
    return { success: false, message: "Failed to send newsletter" };
  }
}
export async function generateCode(id: string) {
  try {
    const admin = await prisma.schoolAdmin.findFirst({ where: { id: id } });
    if (!admin) {
      throw new Error(`Could not find administrator`);
    }
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    await prisma.schoolAdmin.update({
      where: { id: id },
      data: { verificationCode: verificationCode },
    });
    return verificationCode;
  } catch (error) {}
}

export async function send_verification_email(email: string) {
  try {
    const admin = await prisma.schoolAdmin.findUnique({
      where: { email },
    });

    if (!admin) {
      return { message: "Admin not found" };
    }

    if (admin.verified) {
      return { message: "Admin already verified" };
    }

    // Check if an OTP was requested within the last 5 minutes
    // const fiveMinutesAgo = new Date(Date.now() - (5 * 60 * 1000));
    // if (admin.otpRequestedAt && admin.otpRequestedAt > fiveMinutesAgo) {
    //   return { message: "Please wait before requesting a new code." };
    // }

    // Generate a new verification code
    const verificationCode = await generateCode(admin.id);
    if (!verificationCode) {
      return { message: "Failed to generate verification code" };
    }

    // Update the timestamp for the latest OTP request
    await prisma.schoolAdmin.update({
      where: { email },
      data: { otpRequestedAt: new Date(), verificationCode: verificationCode },
    });

    // Send the email
    try {
      const response = await resend.emails.send({
        from: "headoffice@xcuxion.org",
        to: email,
        subject: "Email Confirmation",
        react: XcuxionConfirmEmail({ validationCode: verificationCode }),
      });
      // console.log(response);
      return { message: "Verification email sent successfully" };
    } catch (error) {
      // console.log(error);
      return { message: "Failed to send verification email" };
    }
  } catch (error) {
    // console.error(error);
    return { message: "An error occurred while processing your request." };
  }
}
