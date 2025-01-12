"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function post_resource(prevState: unknown, formData: FormData) {
  try {
    
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
