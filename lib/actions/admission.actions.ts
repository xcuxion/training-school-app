"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

const newApplicationSchema = z.object({
  fname: z.string({ message: "field is required" }).trim(),
  oname: z.string().trim().optional(),
  lname: z.string({ message: "field is required" }).trim(),
  gender: z.enum(["male", "female"]),
  country: z.enum(["ghana"]),
  school: z.enum(["knust", "ug", "ashesi", "none"]),
  contact: z.string({ message: "field is required" }).trim().min(10).max(10),
  dob: z.string(),
  email: z.string().email({ message: "field is required" }).trim(),
  programme: z.string({ message: "field is required" }).min(2),
  year: z.enum(["1", "2", "3", "4", "5", "6"]),
  reason: z.string().max(300),
  balance: z.string().max(300),
  statement: z.string().max(300).optional(),
  scholarship: z.enum(["yes", "no"]),
  laptop: z.enum(["yes", "no"]),
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

    const dob = result.data.dob;
    const dobDateTime = new Date(dob).toISOString();

    const existingProfile = await prisma.profile.findFirst({
      where: { email: result.data.email },
    });
    const hashedPassword = await bcrypt.hash("1234567890", 10);
    if (!existingProfile) {
      const profile = await prisma.profile.create({
        data: { email: result.data.email, password: hashedPassword },
      });
      console.log(profile);

      const { email, ...remainingFields } = result.data;
      await prisma.applicant.create({
        data: {
          ...remainingFields,
          dob: dobDateTime,
          profileId: profile.id,
          laptop: remainingFields.laptop === "yes" ? true : false,
          scholarship: remainingFields.scholarship === "yes" ? true : false,
        },
      });
    } else {
      const { email, ...remainingFields } = result.data;

      await prisma.applicant.create({
        data: {
          ...remainingFields,
          dob: dobDateTime,
          laptop: remainingFields.laptop === "yes" ? true : false,
          scholarship: remainingFields.scholarship === "yes" ? true : false,
          profileId: existingProfile.id,
        },
      });
    }
    try {
      const response = await resend.emails.send({
        from: "onboard@resend.dev",
        to: result.data.email,
        subject: "New Application Received",
        html: "<h1>Application submitted successfully</h1>",
      });
      // console.log(response)
    } catch (error) {
      console.log(error);
    } finally {
      console.log(result);
      return { success: result.success, data: result.data };
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
      include: {
        profile: true,
      },
    });

    if (!applicant) return null;

    // Exclude `password` and `id` fields from `profile`
    const { profile, ...applicantData } = applicant;
    const filteredProfile = profile
      ? {
          email: profile.email,
          createdAt: profile.createdAt,
          updatedAt: profile.updatedAt,
        }
      : null;

    return {
      ...applicantData,
      profile: filteredProfile,
    };
  } catch (error) {
    handleError(error);
  }
}


export async function fetch_all_applications() {
  try {
    const applications = await prisma.applicant.findMany({
      include: {
        profile: true, 
      },
    });
    
    return applications;
  } catch (error) {
    handleError(error);
  }
}

export async function edit_application(id: string, formData: FormData) {
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
