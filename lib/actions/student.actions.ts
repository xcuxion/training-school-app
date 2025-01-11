"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function retrieve_profile() {
  try {
  } catch (error) {
    handleError(error);
  }
}

export async function get_points() {
  try {
  } catch (error) {
    handleError(error);
  }
}
