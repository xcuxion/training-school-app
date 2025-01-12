/*
  Warnings:

  - You are about to drop the column `category` on the `Module` table. All the data in the column will be lost.
  - Added the required column `url` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('todo', 'in_progress', 'completed');

-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('low', 'medium', 'high');

-- DropForeignKey
ALTER TABLE "Case" DROP CONSTRAINT "Case_moduleId_fkey";

-- AlterTable
ALTER TABLE "Case" ALTER COLUMN "moduleId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "url" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "comments" TEXT[],
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "moduleId" TEXT,
ADD COLUMN     "priority" "TaskPriority" NOT NULL DEFAULT 'medium',
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'todo';

-- DropEnum
DROP TYPE "Modules";

-- CreateTable
CREATE TABLE "_StudentTasks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StudentTasks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_StudentTasks_B_index" ON "_StudentTasks"("B");

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentTasks" ADD CONSTRAINT "_StudentTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Student"("reference") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentTasks" ADD CONSTRAINT "_StudentTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
