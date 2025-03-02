"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Resend } from "resend";
import { createSession } from "../session";
import ApplicationSubmitted from "@/emails/application-received";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

const newApplicationSchema = z.object({
  fname: z.string({ message: "First name is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "Last name is required" }).trim(),
  gender: z.enum(["male", "female"], { message: "Select your gender" }),
  country: z.enum(["ghana"], { message: "Select your country of residence" }),
  school: z.enum(["knust", "ug", "ashesi", "none"]).optional(),
  batch: z.enum(["batch25"], { message: "Select the batch of interest" }),
  track: z.enum(["web", "mobile", "dataanalysis", "backend"]),
  contact: z
    .string({ message: "Phone number is required" })
    .trim()
    .min(10)
    .max(15),
  dob: z.string(),
  email: z.string().email({ message: "field is required" }).trim().optional(),
  programme: z.string({ message: "field is required" }).min(2).optional(),
  year: z
    .enum(["1", "2", "3", "4", "5", "6"], {
      message: "Select your current year",
    })
    .optional(),
  reason: z.string(),
  balance: z.string(),
  statement: z.string().optional(),
  scholarship: z.enum(["yes", "no"], { message: "Select an option" }),
  student: z.enum(["yes", "no"], { message: "Select an option" }),
  laptop: z.enum(["yes", "no"], { message: "Select an option" }),
});

const editApplicationSchema = z.object({
  fname: z.string({ message: "field is required" }).trim().optional(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim().optional(),
  gender: z.enum(["male", "female"]),
  country: z.enum(["ghana"]),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  track: z.enum(["web", "mobile", "dataanalysis", "backend"], {
    message: "Select your preferred track",
  }),
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
    // console.log(formData);
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      // console.log(
      //   "Validation failed with errors:",
      //   result.error.flatten().fieldErrors
      // );
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const user = await prisma.user.findFirst({
      where: { email: result.data.email },
    });
    if (!user) {
      return { message: "Register an account to proceed", noAccount: true };
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
    await prisma.user.update({
      where: { id: user.id }, // Ensure we target the correct user
      data: { role: "applicant" }, // Update role to "applicant"
    });
    // console.log(applicant);
    await createSession(user.id);

    const { createdAt, ...profileWithoutTimestamps } = applicant;
    try {
      const response = await resend.emails.send({
        from: "admission@xcuxion.org",
        to: result.data.email ? result.data.email : user.email,
        subject: "New Application Received",
        react: ApplicationSubmitted({userFirstname: result.data.fname}),
      });
      // console.log(response);
    } catch (error) {
      // console.log(error);
    } finally {
      // console.log(result);
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
      where: { userId: id },
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
    const applicant = await prisma.applicant.findFirst({ where: { userId: id } });
    if (!applicant) {
      return { message: "Application not found" };
    }
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      // console.log(
      //   "Validation failed with errors:",
      //   result.error.flatten().fieldErrors
      // );
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const dob = result.data.dob;
    const dobDateTime = new Date(dob).toISOString();
    await prisma.applicant.updateMany({
      where: {id: applicant.id},
      data: {...result.data,
        dob: dobDateTime,
        laptop: result.data.laptop === "yes" ? true : false,
        scholarship: result.data.scholarship === "yes" ? true : false,
        student: result.data.scholarship === "yes" ? true : false,
       }
    })
    // console.log(applicant);
    return { success: result.success, data: applicant };
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
  admissionType: "full" | "student" | "nonStudent"
) {
  try {
    // Step 1: Fetch the applicant's data
    const applicant = await prisma.applicant.findUnique({
      where: { id },
    });

    if (!applicant) {
      return { message: "Applicant not found." };
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
    return { message: "Error admitting applicant." };
  }
}

function generateStudentRef(name: string, batch: number, existingRefs: Set<string>): string {
  const namePart = name.replace(/\s+/g, '').slice(0, 4).toUpperCase(); // First 4 letters, no spaces
  const batchPart = batch.toString().slice(-2); // Last 2 digits of the batch year
  let uniqueId: string;
  let counter = 0;

  do {
      const randomDigits = Math.floor(100 + Math.random() * 900); // 3 random digits
      uniqueId = `${namePart}${batchPart}${randomDigits}`;
      counter++;
  } while (existingRefs.has(uniqueId) && counter < 1000);

  if (counter >= 1000) {
      throw new Error("Unable to generate a unique reference number");
  }

  existingRefs.add(uniqueId); // Add to existing references
  return uniqueId;
}

export async function accept_admission(id: string) {
  try {
    // Step 1: Find the applicant
    const applicant = await prisma.applicant.findUnique({ where: { id: id } });
    if (!applicant) {
      return { message: "Applicant not found." };
    }

    // Step 2: Remove unwanted fields from applicant data
    const { scholarship, laptop, status, statement, reason, ...studentData } = applicant;

    let outstandingBalance;
    switch (applicant.admissionType) {
      case "full":
        outstandingBalance = 300;
        break;
      case "student":
        outstandingBalance = 700;
        break;
      case "nonStudent":
        outstandingBalance = 1500;
        break;
    }

    // Step 3: Generate a unique student reference number
    const existingRefs = new Set<string>();
    const batchYear = new Date().getFullYear(); // Assuming batch is the current year
    const studentReference = generateStudentRef(applicant.lname, batchYear, existingRefs);

    // Step 4: Create student using applicant data
   await prisma.student.create({
      data: {
        ...studentData,
        reference: studentReference,
        outstandingFees: outstandingBalance as number,
        admissionOffer: applicant.admissionType as "full" | "student" | "nonStudent"
      },
    });

    return { message: "Application acceptance was successful" };
  } catch (error) {
    return { message: "Error accepting admission" };
  }
}

export async function reject_applicant(id: string) {
  try {
    // Step 1: Fetch the applicant's data
    const applicant = await prisma.applicant.findUnique({
      where: { id },
    });

    if (!applicant) {
      return { message: "Applicant not found." };
    }

    // Step 2: Update the applicant's status to "admitted"
    await prisma.applicant.update({
      where: { id },
      data: { status: "rejected" },
    });

    return {message: "Application was rejected"}
  } catch (error) {
    handleError(error);
  }
}
