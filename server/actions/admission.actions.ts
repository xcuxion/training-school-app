"use server";
import { z } from "zod";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { createSession } from "../session";
import ApplicationSubmitted from "@/emails/application-received";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY);

const newApplicationSchema = z.object({
  fname: z.string().trim().min(1, { message: "First name is required" }),
  oname: z.string().trim().optional(),
  lname: z.string().trim().min(1, { message: "Last name is required" }),
  gender: z.enum(["male", "female"], { message: "Select your gender" }),
  country: z.string().refine((val) => val === "ghana", {
    message: "Select your country of residence",
  }),
  school: z
    .enum([
      "knust",
      "ug",
      "ashesi",
      "none",
      "uew",
      "ucc",
      "aamusted",
      "uds",
      "uhas",
    ])
    .optional(),
  batch: z.enum(["batch25"], { message: "Select the batch of interest" }),
  track: z.enum(["web", "mobile", "dataanalysis", "backend"], {
    message: "Select a track",
  }),
  contact: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" }),
  dob: z.string().min(1, { message: "Date of birth is required" }),
  email: z.string().trim().email({ message: "Enter a valid email" }).optional(),
  programme: z
    .string()
    .trim()
    .min(2, { message: "Programme is required" })
    .optional(),
  year: z
    .enum(["1", "2", "3", "4", "5", "6"], {
      message: "Select your current year",
    })
    .optional(),
  reason: z.string().trim().min(1, { message: "Reason is required" }),
  balance: z.string().trim().min(1, { message: "Balance is required" }), // Consider changing to `z.number()`
  statement: z.string().trim().optional(),
  scholarship: z.enum(["yes", "no"], { message: "Select an option" }),
  student: z.enum(["yes", "no"], { message: "Select an option" }),
  laptop: z.enum(["yes", "no"], { message: "Select an option" }),
  referralCode: z.string().trim().optional(),
});

const editApplicationSchema = z.object({
  fname: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .optional(),
  oname: z.string().trim().optional(),
  lname: z
    .string()
    .trim()
    .min(1, { message: "Last name is required" })
    .optional(),
  gender: z.enum(["male", "female"], { message: "Select your gender" }),
  country: z.string().refine((val) => val === "ghana", {
    message: "Select your country of residence",
  }),
  school: z.enum(["knust", "ug", "ashesi", "none"]).optional(),
  track: z.enum(["web", "mobile", "dataanalysis", "backend"], {
    message: "Select your preferred track",
  }).optional(),
  contact: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" })
    .optional(),
  dob: z.string().optional(),
  email: z.string().trim().email({ message: "Enter a valid email" }).optional(),
  programme: z
    .string()
    .trim()
    .optional(),
  year: z.enum(["1", "2", "3", "4", "5", "6"], {
    message: "Select your current year",
  }).optional(),
  reason: z.string().trim().optional(),
  balance: z.string().trim().optional(),
  statement: z.string().trim().optional(),
  scholarship: z
    .enum(["yes", "no"], { message: "Select an option" })
    .optional(),
  laptop: z.enum(["yes", "no"], { message: "Select an option" }).optional(),
});

const admissionSchema = z.object({
  scholarship: z.boolean(),
  outstandingBalance: z.number(),
});

export async function new_application(prevState: unknown, formData: FormData) {
  try {
    const result = newApplicationSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
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
        email: result.data.email?.toLocaleLowerCase(),
        laptop: result.data.laptop === "yes" ? true : false,
        scholarship: result.data.scholarship === "yes" ? true : false,
        student: result.data.scholarship === "yes" ? true : false,
        referralCode: await generateReferralCode(user.id),
      },
    });

    if (
      result.data.referralCode !== "") {
      const personReferring = await prisma.applicant.findUnique({
        where: { referralCode: result.data.referralCode },
      });
      if (!personReferring) {
        return { message: "Invalid referral code" };
      }
      await prisma.applicant.update({
        where: { id: personReferring.id },
        data: {
          referredApplicants: {
            connect: {
              id: applicant.id,
            },
          },
        },
      });
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { role: "applicant" },
    });

    await createSession(user.id);

    const { createdAt, ...profileWithoutTimestamps } = applicant;
    try {
      await resend.emails.send({
        from: "admission@xcuxion.org",
        to: result.data.email ? result.data.email : user.email,
        subject: "New Application Received",
        attachments: [
          {
            filename: "xcuxion-batch25.jpg",
            path: "https://res.cloudinary.com/dskdr2jxd/image/upload/v1741377530/batch25info_zturve.jpg",
          },
        ],
        react: ApplicationSubmitted({ userFirstname: result.data.fname }),
      });
      
    } catch (error) {
      console.log(error);
    } finally {
      return { success: result.success, data: profileWithoutTimestamps };
    }
  } catch (error) {
    console.error("Error during application submission:", error);

    handleError(error);
  }
}

async function generateReferralCode(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  const referralCode = `XCX-${user.id.substring(0, 4).toUpperCase()}`;
  console.log(referralCode);
  return referralCode;
}

async function getReferrals(userId: string) {
  return await prisma.applicant.findUnique({
    where: { id: userId },
    include: { referredApplicants: true },
  });
}

async function getReferralDiscount(userId: string) {
  const user = await prisma.applicant.findUnique({
    where: { id: userId },
    include: { referredApplicants: true },
  });

  const numReferrals = user?.referredApplicants.length || 0;

  if (numReferrals >= 5) return "50% discount";
  if (numReferrals >= 3) return "30% discount";
  if (numReferrals >= 1) return "10% discount";

  return "No discount";
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
    const applications = await prisma.applicant.findMany({
      where: {
        status: "pending"
      }
    });

    return applications;
  } catch (error) {
    handleError(error);
  }
}

export async function edit_application(id: string, formData: FormData) {
  try {
    const applicant = await prisma.applicant.findFirst({
      where: { userId: id },
    });
    console.log(applicant)
    if (!applicant) {
      return { message: "Application not found" };
    }
    const result = editApplicationSchema.safeParse(
      Object.fromEntries(formData)
    );

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
    if (dob) {
      const dobDateTime = new Date(dob).toISOString();

      await prisma.applicant.updateMany({
        where: { id: applicant.id },
        data: {
          ...result.data,
          dob: dobDateTime,
          laptop: result.data.laptop === "yes" ? true : false,
          scholarship: result.data.scholarship === "yes" ? true : false,
          student: result.data.scholarship === "yes" ? true : false,
        },
      });
    }
    console.log(applicant);
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

    return { message: "Application was rejected" };
  } catch (error) {
    handleError(error);
  }
}

function generateStudentRef(
  name: string,
  batch: number,
  existingRefs: Set<string>
): string {
  const namePart = name.replace(/\s+/g, "").slice(0, 4).toUpperCase(); // First 4 letters, no spaces
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
    const { scholarship, laptop, status, statement, reason, ...studentData } =
      applicant;

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
    const studentReference = generateStudentRef(
      applicant.lname,
      batchYear,
      existingRefs
    );

    // Step 4: Create student using applicant data
    await prisma.student.create({
      data: {
        ...studentData,
        reference: studentReference,
        outstandingFees: outstandingBalance as number,
        admissionOffer: applicant.admissionType as
          | "full"
          | "student"
          | "nonStudent",
      },
    });

    return { message: "Application acceptance was successful" };
  } catch (error) {
    return { message: "Error accepting admission" };
  }
}
