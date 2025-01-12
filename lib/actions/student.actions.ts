"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function retrieve_profile(reference: string) {
  try {
    const student = await prisma.student.findUnique({
      where: { reference },
    });
    if (!student) {
      return {message: "Student not found"}
    }
    return student;
  } catch (error) {
    handleError(error);
  }
}

export async function get_reward_points(reference: string) {
  try {
    const student = await prisma.student.findUnique({where: {reference}})
    if (!student) {
      return {message: "Student not found"}
    }
    const rewardPoints = student.rewardPoints
    return rewardPoints
  } catch (error) {
    handleError(error);
  }
}


