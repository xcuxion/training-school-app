"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const taskSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  summary: z
    .string()
    .min(10, { message: "Summary must be at least 10 characters" }),
  dueDate: z.date(),
  status: z.enum(["todo", "in_progress", "completed"]),
  priority: z.enum(["low", "medium", "high"]),
  assignees: z.array(z.string()).optional(),
  comments: z.array(z.string()).optional(),
});
export async function new_task(prevState: unknown, formData: FormData) {
  try {
    const result = taskSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { title, summary, dueDate, status, priority, assignees, comments } =
      result.data;
    await prisma.task.create({
      data: {
        title,
        summary,
        dueDate,
        status,
        priority,
        assignees: {
          connect: assignees?.map((id) => ({ reference: id })),
        },
        comments,
      },
    });
    return { message: "Task added successfully" };
  } catch (error) {
    handleError(error);
  }
}

export async function edit_task() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function delete_task() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function new_sprint() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function add_to_sprint() {
  try {
  } catch (error) {
    handleError(error);
  }
}
