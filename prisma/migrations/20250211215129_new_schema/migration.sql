/*
  Warnings:

  - You are about to drop the column `profileId` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Facilitator` table. All the data in the column will be lost.
  - You are about to drop the column `feeId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `applicantId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `feeId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Fee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reference]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `batch` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerId` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fname` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outstandingFees` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `track` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Track" AS ENUM ('flutter', 'fullstack', 'backend');

-- CreateEnum
CREATE TYPE "AdmissionType" AS ENUM ('full', 'fifty', 'seventyfive');

-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Facilitator" DROP CONSTRAINT "Facilitator_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_feeId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_feeId_fkey";

-- DropIndex
DROP INDEX "Applicant_profileId_key";

-- DropIndex
DROP INDEX "Facilitator_profileId_key";

-- DropIndex
DROP INDEX "Student_applicantId_key";

-- DropIndex
DROP INDEX "Student_feeId_key";

-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "profileId",
ADD COLUMN     "admissionType" "AdmissionType",
ADD COLUMN     "batch" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "student" BOOLEAN NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "country" SET DEFAULT 'ghana',
ALTER COLUMN "school" DROP NOT NULL,
ALTER COLUMN "programme" DROP NOT NULL,
ALTER COLUMN "programme" SET DATA TYPE VARCHAR,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "reason" SET DATA TYPE TEXT,
ALTER COLUMN "balance" SET DATA TYPE TEXT,
ALTER COLUMN "statement" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Facilitator" DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "feeId",
ADD COLUMN     "payerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "applicantId",
DROP COLUMN "feeId",
ADD COLUMN     "contact" VARCHAR(10) NOT NULL,
ADD COLUMN     "country" "Countries" NOT NULL DEFAULT 'ghana',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dob" DATE NOT NULL,
ADD COLUMN     "fname" VARCHAR(255) NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "lname" VARCHAR(255) NOT NULL,
ADD COLUMN     "oname" VARCHAR(255),
ADD COLUMN     "outstandingFees" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "programme" VARCHAR,
ADD COLUMN     "school" "School",
ADD COLUMN     "track" "Track" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "year" VARCHAR(4);

-- DropTable
DROP TABLE "Fee";

-- DropTable
DROP TABLE "Profile";

-- CreateIndex
CREATE UNIQUE INDEX "Student_reference_key" ON "Student"("reference");

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Student"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
