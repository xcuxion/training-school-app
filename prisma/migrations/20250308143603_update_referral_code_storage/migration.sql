/*
  Warnings:

  - You are about to drop the column `refereeCode` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralCode]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referralCode` to the `Applicant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_referredById_fkey";

-- DropIndex
DROP INDEX "User_refereeCode_key";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "referralCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "refereeCode";

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_referralCode_key" ON "Applicant"("referralCode");

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_referredById_fkey" FOREIGN KEY ("referredById") REFERENCES "Applicant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
