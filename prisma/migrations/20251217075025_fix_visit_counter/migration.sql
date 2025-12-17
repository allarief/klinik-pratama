/*
  Warnings:

  - You are about to drop the column `createdAt` on the `WebsiteVisit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WebsiteVisit" DROP COLUMN "createdAt",
ADD COLUMN     "daily" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastHit" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "monthly" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "weekly" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "yearly" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "websitevisit_id_seq";
