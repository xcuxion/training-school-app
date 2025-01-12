"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const caseSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .trim(),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .trim(),
  responsibilities: z.array(z.string()),
});

export async function publicize_case() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function fetch_all_cases() {
  try {
    const cases = await prisma.case.findMany();
    return cases;
  } catch (error) {
    handleError(error);
  }
}

export async function edit_case() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function delete_case() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function new_case(prevState: unknown, formData: FormData) {
  try {
    const result = caseSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { title, description, responsibilities } =
      result.data;

    await prisma.case.create({
      data: { title, description, responsibilities},
    });

    redirect("/administrator-office/modules");
  } catch (error) {
    handleError(error);
  }
}

export async function show_pubic_case() {
  try {
  } catch (error) {
    handleError(error);
  }
}
export async function submit_report() {
  try {
  } catch (error) {
    handleError(error);
  }
}
