-- CreateTable
CREATE TABLE "Wright" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "school" VARCHAR(255) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "contact" VARCHAR(10) NOT NULL,

    CONSTRAINT "Wright_pkey" PRIMARY KEY ("id")
);
