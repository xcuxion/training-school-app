"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Resend } from "resend";
import { createSession } from "../session";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

const newApplicationSchema = z.object({
  fname: z.string({ message: "First name is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "Last name is required" }).trim(),
  gender: z.enum(["male", "female"], {message: "Select your gender"}),
  country: z.enum(["ghana"], {message: "Select your country of residence" }),
  school: z.enum(["knust", "ug", "ashesi", "none"],{message: "Select your school"}).optional(),
  batch: z.enum(["batch25"], {message: "Select the batch of interest" }),
  track: z.enum(["web","mobile","dataanalysis","backend"], {message: "Select your preferred track" }),
  contact: z.string({ message: "Phone number is required" }).trim().min(10).max(15),
  dob: z.string(),
  email: z.string().email({ message: "field is required" }).trim().optional(),
  programme: z.string({ message: "field is required" }).min(2).optional(),
  year: z.enum(["1", "2", "3", "4", "5", "6"], {message: "Select your current year"}).optional(),
  reason: z.string(),
  balance: z.string(),
  statement: z.string().optional(),
  scholarship: z.enum(["yes", "no"], {message: "Select an option"}),
  student: z.enum(["yes", "no"], {message: "Select an option"}),
  laptop: z.enum(["yes", "no"], {message: "Select an option"}),
});

const editApplicationSchema = z.object({
  fname: z.string({ message: "field is required" }).trim().optional(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim().optional(),
  gender: z.enum(["male", "female"]),
  country: z.enum(["ghana"]),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  track: z.enum(["web","mobile","dataanalysis","backend"], {message: "Select your preferred track" }),
  contact: z
    .string({ message: "field is required" })
    .trim()
    .min(10)
    .max(10)
    .optional(),
  dob: z.string().optional(),
  email: z.string().email({ message: "field is required" }).trim().optional(),
  programme: z.string({ message: "field is required" }).min(2).optional(),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  reason: z.string().optional(),
  balance: z.string().optional(),
  statement: z.string().optional(),
  scholarship: z.enum(["yes", "no"]).optional(),
  laptop: z.enum(["yes", "no"]).optional(),
});

const admissionSchema = z.object({
  scholarship: z.boolean(),
  outstandingBalance: z.number(),
});

export async function new_application(prevState: unknown, formData: FormData) {
  try {
    console.log(formData);
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      console.log(
        "Validation failed with errors:",
        result.error.flatten().fieldErrors
      );
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const user =  await prisma.user.findFirst({where: {email: result.data.email}})
    if(!user) {
      throw new Error("Register an account to proceed")
    }
    const dob = result.data.dob;
    const dobDateTime = new Date(dob).toISOString();

    const applicant = await prisma.applicant.create({
      data: {
        ...result.data,
        userId: user.id,
        dob: dobDateTime,
        laptop: result.data.laptop === "yes" ? true : false,
        scholarship: result.data.scholarship === "yes" ? true : false,
        student: result.data.scholarship === "yes" ? true : false,
      },
    });
    console.log(applicant);
    await createSession(applicant.id);

    const { createdAt, ...profileWithoutTimestamps } = applicant;
    try {
      const response = await resend.emails.send({
        from: "admission@xcuxion.org",
        to: result.data.email? result.data.email : user.email,
        subject: "New Application Received",
        html: "<h1>Application submitted successfully</h1>",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(result);
      return { success: result.success, data: profileWithoutTimestamps };
    }
  } catch (error) {
    console.error("Error during application submission:", error);

    handleError(error);
  }
}

export async function fetch_applicant_data(id: string) {
  try {
    const applicant = await prisma.applicant.findFirst({
      where: { id },
    });

    if (!applicant) return null;

    return applicant;
  } catch (error) {
    handleError(error);
  }
}

export async function fetch_all_applications() {
  try {
    const applications = await prisma.applicant.findMany();

    return applications;
  } catch (error) {
    handleError(error);
  }
}

export async function edit_application(id: string, formData: FormData) {
  try {
    const applicant = await prisma.applicant.findFirst({ where: { id: id } });
    if (!applicant) {
      return { message: "Application not found" };
    }
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      console.log(
        "Validation failed with errors:",
        result.error.flatten().fieldErrors
      );
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
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

export async function admit_applicant(
  id: string,
  admissionType: "full" | "fifty" | "seventyfive"
) {
  try {
    // Step 1: Fetch the applicant's data
    const applicant = await prisma.applicant.findUnique({
      where: { id },
    });

    if (!applicant) {
      throw new Error("Applicant not found.");
    }

    // Step 2: Update the applicant's status to "admitted"
    await prisma.applicant.update({
      where: { id },
      data: { status: "admitted", admissionType: admissionType },
    });

    return {
      message: "Applicant admitted successfully!",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error admitting applicant.");
  }
}

export async function accept_admission(
  id: string,
) {
  try {
    //Step 1: Find the applicant
    const applicant = await prisma.applicant.findUnique({ where: { id: id } });
    if (!applicant) {
      throw new Error("Applicant not found.");
    }

    //Step 2: remove unwanted fields from applicant data to use in creating student data
    const { scholarship, laptop, status, statement, reason, ...studentData } =
      applicant;

    let outstandingBalance;
    switch (applicant.admissionType) {
      case "full":
        outstandingBalance = 200;
        break;
      case "fifty":
        outstandingBalance = 700;
        break;
      case "seventyfive":
        outstandingBalance = 500;
        break;
      default:
        outstandingBalance = 1500;
        break;
    }

    // Step 3: Create student based n their applicant data
    const newStudent = await prisma.student.create({
      data: {
        ...studentData,
        reference: "",
        outstandingFees: outstandingBalance,
      },
    });
  } catch (error) {
    throw new Error("Error accepting admission");
  }
}

export async function reject_applicant(id: string) {
  try {
    // Step 1: Fetch the applicant's data
    const applicant = await prisma.applicant.findUnique({
      where: { id },
    });

    if (!applicant) {
      throw new Error("Applicant not found.");
    }

    // Step 2: Update the applicant's status to "admitted"
    await prisma.applicant.update({
      where: { id },
      data: { status: "rejected" },
    });
  } catch (error) {
    handleError(error);
  }
}
