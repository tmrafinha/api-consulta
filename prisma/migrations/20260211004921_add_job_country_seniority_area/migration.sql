-- CreateEnum
CREATE TYPE "SeniorityLevel" AS ENUM ('JUNIOR', 'PLENO', 'SENIOR');

-- CreateEnum
CREATE TYPE "JobArea" AS ENUM ('FRONTEND', 'BACKEND', 'FULLSTACK', 'DEVOPS', 'INFRASTRUCTURE', 'AUTOMATION', 'DATA', 'MOBILE', 'QA', 'SECURITY', 'OTHER');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "area" "JobArea" NOT NULL DEFAULT 'OTHER',
ADD COLUMN     "country" TEXT,
ADD COLUMN     "seniorityLevel" "SeniorityLevel" NOT NULL DEFAULT 'JUNIOR';
