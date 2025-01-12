/*
  Warnings:

  - Added the required column `category` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Modules" AS ENUM ('productManagement', 'softwareEngineering', 'marketing', 'strategy', 'startup', 'uiDesigning', 'appDevelopment');

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "category" "Modules" NOT NULL;
