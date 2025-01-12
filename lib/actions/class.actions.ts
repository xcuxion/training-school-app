"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const scheduleSchema = z.object({
  facilitator: z.string().trim(),
  time: z.date(),
  module: z.string().trim(),
});
export async function schedule_class_session(
  prevState: unknown,
  formData: FormData
) {
  try {
    const result = scheduleSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  } catch (error) {
    handleError(error);
  }
}
