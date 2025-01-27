"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient, Scholarship } from "@prisma/client";

const prisma = new PrismaClient();

const newApplicationSchema = z.object({
  fname: z.string({ message: "field is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim(),
  gender: z.enum(["male", "female"]),
  nationality: z.string({ message: "field is required" }),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  contact: z.string({ message: "field is required" }).trim(),
  dob: z.string(),
  email: z.string().email({ message: "field is required" }).trim(),
  programme: z.string({ message: "field is required" }).min(2),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  reason: z.string(),
  balance: z.string(),
  statement: z.string().optional(),
  scholarship: z.enum(["yes", "no"]),
  laptop: z.enum(["yes", "no"]),
});

const admissionSchema = z.object({
  scholarship: z.boolean(),
  outstandingBalance: z.number(),
});

export async function new_application(prevState: unknown, formData: FormData) {
  try {
    // Log the incoming formData for debugging
    console.log("FormData received:", Array.from(formData.entries()));

    // Parse and validate the input using the schema
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));
    console.log("Schema validation result:", result);

    if (!result.success) {
      console.log(
        "Validation failed with errors:",
        result.error.flatten().fieldErrors
      );
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    // If validation passes, proceed to create the applicant
    console.log("Validation successful. Parsed data:", result.data);

    // Convert dob to an ISO-8601 DateTime
    const dob = result.data.dob;
    const dobDateTime = new Date(dob).toISOString();

    // Check if member has a membership profile
    const existingProfile = await prisma.profile.findFirst({
      where: { email: result.data.email },
    });

    if (!existingProfile) {
      const profile = await prisma.profile.create({
        data: { email: result.data.email, password: "1234567890" },
      });

      await prisma.applicant.create({
        data: {
          ...result.data,
          dob: dobDateTime,
          profileId: profile.id,
        },
      });
    } else {
      await prisma.applicant.create({
        data: {
          ...result.data,
          dob: dobDateTime,
          profileId: existingProfile.id,
        },
      });
    }

    return JSON.parse(
      JSON.stringify({
        message: "Application sent successfully!",
      })
    );
  } catch (error) {
    console.error("Error during application submission:", error);

    // Use your error handling mechanism or throw the error
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

export async function admit_applicant(id: string, formData: FormData) {
  try {
    const result = admissionSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const { scholarship, outstandingBalance } = result.data;

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
      data: { status: "admitted" },
    });

    // Step 3: Create a Fee record
    const fee = await prisma.fee.create({
      data: {
        scholarship: scholarship,
        balance: outstandingBalance,
      },
    });

    // Step 4: Create a Student record
    await prisma.student.create({
      data: {
        reference: `25${Math.floor(Math.random() * 10000)}`, // Generate a unique reference
        applicantId: id, // Link the student to the applicant
        batch: "Batch'25",
        feeId: fee.id, // Link the fee record
      },
    });

    return {
      message: "Applicant admitted successfully!",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error admitting applicant.");
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
