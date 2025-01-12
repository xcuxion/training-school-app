"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const resourceSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim(),
  type: z.enum(["video","audiobook","ebook"]),
  url: z.string().trim(),
  category: z.enum(["technology", "marketing", "entrepreneurship", "strategy"]),
})
export async function post_resource(prevState: unknown, formData: FormData) {
  try {
    const result = resourceSchema.safeParse(Object.fromEntries(formData))
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    const { name, description, type, url, category } = result.data;
    await prisma.resource.create({ data: { name, description, type, url, category } });
    redirect("/administrator-office/resources");
  } catch (error) {
    handleError(error);
  }
}

export async function remove_resource() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function edit_resource() {
  try {
  } catch (error) {
    handleError(error);
  }
}
