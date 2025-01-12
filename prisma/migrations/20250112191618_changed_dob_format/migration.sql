/*
  Warnings:

  - The `scholarship` column on the `Fee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AdmissionStatus" AS ENUM ('pending', 'admitted', 'rejected');

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "status" "AdmissionStatus" NOT NULL DEFAULT 'pending',
ALTER COLUMN "dob" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Fee" DROP COLUMN "scholarship",
ADD COLUMN     "scholarship" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "rewardPoints" INTEGER NOT NULL DEFAULT 0;
