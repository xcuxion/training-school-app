/*
  Warnings:

  - Added the required column `laptop` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `scholarship` on the `Applicant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "laptop" BOOLEAN NOT NULL,
DROP COLUMN "scholarship",
ADD COLUMN     "scholarship" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "Scholarship";

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "instructorId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "moduleId" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Facilitator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
