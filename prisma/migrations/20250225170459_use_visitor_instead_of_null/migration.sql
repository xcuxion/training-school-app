-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'visitor';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'visitor';
