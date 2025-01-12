"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const caseShema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }).trim(),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }).trim(),
  status: z.enum(["open", "closed", "pending"]),
  reporter: z.string().min(5, { message: "Reporter must be at least 5 characters" }).trim(),
  priority: z.enum(["low", "medium", "high"]),
  module: z.enum(["crime", "health", "education", "environment", "other"]),
})

export async function publicize_case() {
  try {
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
