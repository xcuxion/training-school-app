"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newApplicationSchema = z.object({
  fname: z.string({ message: "field is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim(),
  gender: z.enum(["male", "female"]),
  nationality: z.string({ message: "field is required" }),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  contact: z.string({ message: "field is required" }).trim(),
  dob: z.date(),
  email: z.string().email({ message: "field is required" }).trim(),
  programme: z.string({ message: "field is required" }).min(2),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  reason: z.string(),
  balance: z.string(),
  statement: z.string(),
  scholarship: z.enum(["yes", "no"]),
  laptop: z.enum(["yes", "no"]),
});

export async function new_application(prevState: any, formData: FormData) {
  try {
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));
    console.log("reach 0");

    if (!result.success) {
      console.log("reach 0.1");
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    await prisma.applicant.create({ data: { ...result.data } });
    return JSON.parse(
      JSON.stringify({
        message: "Application sent successfully!",
      })
    );
  } catch (error) {
    handleError(error);
  }
}

export async function edit_application() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function delete_application() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function admit_applicant() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function reject_applicant() {
  try {
  } catch (error) {
    handleError(error);
  }
}
