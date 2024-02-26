-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'POC');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "addressOne" TEXT NOT NULL,
    "addressTwo" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "dunsNumber" INTEGER,
    "cageNumber" INTEGER,
    "websiteUrl" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocioEconDesignation" (
    "sedID" SERIAL NOT NULL,
    "sedDescription" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "SocioEconDesignation_pkey" PRIMARY KEY ("sedID")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "companyId" INTEGER,
    "roles" "Role"[],
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPointOfContact_email_key" ON "CustomerPointOfContact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerPointOfContact_customerId_key" ON "CustomerPointOfContact"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_proposalCode_key" ON "Proposal"("proposalCode");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_custonmerId_key" ON "Proposal"("custonmerId");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocioEconDesignation" ADD CONSTRAINT "SocioEconDesignation_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerPointOfContact" ADD CONSTRAINT "CustomerPointOfContact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalActivitity" ADD CONSTRAINT "ProposalActivitity_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
