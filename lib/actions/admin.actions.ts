"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import { createSession } from "../session";
import { Resend } from "resend";
import * as bcrypt from "bcrypt";
import XcuxionConfirmEmail from "@/emails/confirm.email";
import { loginSchema } from "./user.action";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

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
    await resend_admin_verification_email(admin.email);
    await createSession(admin.id);
    return { message: "Admin created successfully" };
  } catch (error) {
    handleError(error);
    return { message: "Failed to create admin" };
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

    await resend_admin_verification_email(admin.email);
    await createSession(admin.id);
    const {password, ...withoutPassword} = admin
    return {
      message: "Login successfully",
      success: result.success,
      data: withoutPassword
    };
  } catch (error) {
    handleError(error);
    return { message: "Failed to create admin" };
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
export async function resend_admin_verification_email(email: string) {
  try {
    const admin = await prisma.schoolAdmin.findUnique({ where: { email } });
    if (!admin) {
      return { message: "Admin not found" };
    }

    if (admin.verified) {
      return { message: "Admin already verified" };
    }

    const verificationCode = await generateCode(admin.id);
    if (!verificationCode) {
      return { message: "Failed to generate verification code" };
    }
    try {
      const response = await resend.emails.send({
        from: "headoffice@xcuxion.org",
        to: email,
        subject: "Email Confirmation",
        react: XcuxionConfirmEmail({ validationCode: verificationCode }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      return { message: "Verification email sent successfully" };
    }
  } catch (error) {
    handleError(error);
    return { message: "Failed to resend verification email" };
  }
}
