/*
  Warnings:

  - You are about to drop the column `custonmerId` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAdmin` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Proposal_custonmerId_key";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "custonmerId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adminCompanyId" INTEGER,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_customerId_key" ON "Proposal"("customerId");
