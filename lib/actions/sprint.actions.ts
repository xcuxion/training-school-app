"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function new_task(prevState: unknown, formData: FormData) {
  try {
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
