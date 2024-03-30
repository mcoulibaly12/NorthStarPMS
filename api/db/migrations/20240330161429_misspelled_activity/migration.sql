/*
  Warnings:

  - You are about to drop the `ProposalActivitity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProposalActivitity" DROP CONSTRAINT "ProposalActivitity_proposalId_fkey";

-- DropTable
DROP TABLE "ProposalActivitity";

-- CreateTable
CREATE TABLE "ProposalActivity" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "proposalId" INTEGER NOT NULL,

    CONSTRAINT "ProposalActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProposalActivity" ADD CONSTRAINT "ProposalActivity_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
