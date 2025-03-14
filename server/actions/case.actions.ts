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
  makePublic: z.boolean(),
  module: z.string(),
});

export async function publicize_case(id: string) {
  try {
    const identifiedCase = await prisma.case.findFirst({where: {id}})
    if (!identifiedCase) {
      return { message: "Case not found." };
    }
    await prisma.case.update({
      where: { id },
      data: { isPublic: true },
    });
    return { message: "Case made public successfully." };
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

export async function edit_case(id: string, formData: FormData) {
  try {
    const result = caseSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { title, description, responsibilities } =
      result.data;

    await prisma.case.update({
      where: { id },
      data: { title, description, responsibilities },
    });

    redirect("/administrator-office/modules");
  } catch (error) {
    handleError(error);
  }
}

export async function delete_case(id: string) {
  try {
    await prisma.case.delete({ where: { id } });
    redirect("/administrator-office/modules");
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
    const getPublicCases = await prisma.case.findMany({where: {isPublic: true}})
    return getPublicCases
  } catch (error) {
    handleError(error);
  }
}
export async function submit_report(id: string) {
  try {

  } catch (error) {
    handleError(error);
  }
}
