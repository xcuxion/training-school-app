/*
  Warnings:

  - You are about to drop the column `school` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the `Wright` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Facilitator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Facilitator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facilitator" DROP COLUMN "school",
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "gender" VARCHAR(8) NOT NULL;

-- DropTable
DROP TABLE "Wright";

-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "question" VARCHAR NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "gender" VARCHAR(8) NOT NULL,
    "school" VARCHAR(255) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "contact" VARCHAR(10) NOT NULL,
    "programme" VARCHAR NOT NULL,
    "level" VARCHAR NOT NULL,
    "dateOfBirth" TIME NOT NULL,
    "accepted" BOOLEAN NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "gender" VARCHAR(8) NOT NULL,
    "school" VARCHAR(255) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "contact" VARCHAR(10) NOT NULL,
    "batch" VARCHAR NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
