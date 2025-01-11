"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

export async function new_case() {
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
