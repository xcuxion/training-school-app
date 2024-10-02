import prisma from "./prisma";

export async function getApplications() {
    return await prisma.applicant.findMany()
}

export async function newApplication(data: {
    school: string;
    name: string;
    email: string;
    gender: string;
    contact: string;
}) {
    return await prisma.applicant.create({data})
}
