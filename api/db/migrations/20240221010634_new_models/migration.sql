/*
  Warnings:

  - You are about to drop the `PointOfContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'POC');

-- DropForeignKey
ALTER TABLE "PointOfContact" DROP CONSTRAINT "PointOfContact_companyId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Role"[];

-- DropTable
DROP TABLE "PointOfContact";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "csz" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerPointOfContact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "CustomerPointOfContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" SERIAL NOT NULL,
    "proposalCode" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "solicitationNumber" INTEGER NOT NULL,
    "bidApprovalDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3) NOT NULL,
    "questionsDueDate" TIMESTAMP(3) NOT NULL,
    "sourceOfRfp" TEXT NOT NULL,
    "naics" TEXT NOT NULL,
    "setAside" BOOLEAN NOT NULL,
    "contractType" TEXT NOT NULL,
    "competition" TEXT[],
    "specialSkills" TEXT NOT NULL,
    "clearenceRequirements" TEXT NOT NULL,
    "custonmerId" INTEGER NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalActivitity" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "proposalId" INTEGER NOT NULL,

    CONSTRAINT "ProposalActivitity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPointOfContact_email_key" ON "CustomerPointOfContact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPointOfContact_customerId_key" ON "CustomerPointOfContact"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_proposalCode_key" ON "Proposal"("proposalCode");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_custonmerId_key" ON "Proposal"("custonmerId");

-- AddForeignKey
ALTER TABLE "CustomerPointOfContact" ADD CONSTRAINT "CustomerPointOfContact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalActivitity" ADD CONSTRAINT "ProposalActivitity_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
