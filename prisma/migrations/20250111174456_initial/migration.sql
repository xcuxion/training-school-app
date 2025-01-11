/*
  Warnings:

  - You are about to drop the column `accepted` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Applicant` table. All the data in the column will be lost.
  - You are about to alter the column `programme` on the `Applicant` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `question` on the `Enquiry` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to drop the column `contact` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `Facilitator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `balance` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fname` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scholarship` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `Applicant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `school` on the `Applicant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `bio` to the `Facilitator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `Facilitator` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "School" AS ENUM ('knust', 'ug', 'ashesi', 'none');

-- CreateEnum
CREATE TYPE "Scholarship" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('video', 'audiobook', 'ebook');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('marketing', 'technology', 'entrepreneurship', 'strategy');

-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "accepted",
DROP COLUMN "createdAt",
DROP COLUMN "dateOfBirth",
DROP COLUMN "email",
DROP COLUMN "level",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "balance" VARCHAR(255) NOT NULL,
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fname" VARCHAR(255) NOT NULL,
ADD COLUMN     "lname" VARCHAR(255) NOT NULL,
ADD COLUMN     "nationality" VARCHAR(255) NOT NULL,
ADD COLUMN     "oname" VARCHAR(255),
ADD COLUMN     "profileId" TEXT,
ADD COLUMN     "reason" VARCHAR(255) NOT NULL,
ADD COLUMN     "scholarship" "Scholarship" NOT NULL,
ADD COLUMN     "statement" VARCHAR(255),
ADD COLUMN     "year" VARCHAR(4) NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL,
DROP COLUMN "school",
ADD COLUMN     "school" "School" NOT NULL,
ALTER COLUMN "programme" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Enquiry" ALTER COLUMN "question" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Facilitator" DROP COLUMN "contact",
DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "gender",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "bio" VARCHAR(255) NOT NULL,
ADD COLUMN     "moduleId" TEXT NOT NULL,
ADD COLUMN     "profileId" TEXT;

-- DropTable
DROP TABLE "Member";

-- CreateTable
CREATE TABLE "Student" (
    "reference" TEXT NOT NULL,
    "feeId" TEXT NOT NULL,
    "batch" VARCHAR(255) NOT NULL,
    "applicantId" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("reference")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" TEXT NOT NULL,
    "scholarship" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentMode" VARCHAR(255) NOT NULL,
    "feeId" TEXT,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "responsibilities" TEXT[],
    "moduleId" TEXT NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "type" "ResourceType" NOT NULL,
    "category" "Category" NOT NULL,
    "moduleId" TEXT,
    "caseId" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(255) NOT NULL,
    "sprintId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sprint" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Sprint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_feeId_key" ON "Student"("feeId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_applicantId_key" ON "Student"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_profileId_key" ON "Applicant"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Facilitator_profileId_key" ON "Facilitator"("profileId");

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "Fee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facilitator" ADD CONSTRAINT "Facilitator_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facilitator" ADD CONSTRAINT "Facilitator_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "Fee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint"("id") ON DELETE SET NULL ON UPDATE CASCADE;
