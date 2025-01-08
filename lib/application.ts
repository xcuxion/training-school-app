import prisma from "./prisma";

export async function getApplications() {
    return await prisma.applicant.findMany()
}

