import prisma from "./prisma";

export async function getApplications() {
    return await prisma.wright.findMany()
}

export async function newApplication(data: {
    school: string;
    name: string;
    gender: string;
    email: string;
    contact: string;
}) {
    return await prisma.wright.create({data})
}
