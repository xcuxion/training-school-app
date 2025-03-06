-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "School" ADD VALUE 'uhas';
ALTER TYPE "School" ADD VALUE 'uds';
ALTER TYPE "School" ADD VALUE 'ucc';
ALTER TYPE "School" ADD VALUE 'uew';
ALTER TYPE "School" ADD VALUE 'aamusted';
