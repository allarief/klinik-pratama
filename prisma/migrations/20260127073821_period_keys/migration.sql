/*
  Warnings:

  - You are about to drop the column `lastHit` on the `WebsiteVisit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WebsiteVisit" DROP COLUMN "lastHit",
ADD COLUMN     "dailyDate" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "monthlyKey" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "weeklyKey" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "yearlyKey" TEXT NOT NULL DEFAULT '';
