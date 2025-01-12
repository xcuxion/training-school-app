/*
  Warnings:

  - Changed the type of `dob` on the `Applicant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "dob",
ADD COLUMN     "dob" DATE NOT NULL;
