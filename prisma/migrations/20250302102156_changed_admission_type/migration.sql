/*
  Warnings:

  - The values [fifty,seventyfive] on the enum `AdmissionType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AdmissionType_new" AS ENUM ('full', 'student', 'nonStudent');
ALTER TABLE "Applicant" ALTER COLUMN "admissionType" TYPE "AdmissionType_new" USING ("admissionType"::text::"AdmissionType_new");
ALTER TYPE "AdmissionType" RENAME TO "AdmissionType_old";
ALTER TYPE "AdmissionType_new" RENAME TO "AdmissionType";
DROP TYPE "AdmissionType_old";
COMMIT;
