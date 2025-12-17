/*
  Warnings:

  - You are about to drop the column `total` on the `WebsiteVisit` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE websitevisit_id_seq;
ALTER TABLE "WebsiteVisit" DROP COLUMN "total",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DEFAULT nextval('websitevisit_id_seq');
ALTER SEQUENCE websitevisit_id_seq OWNED BY "WebsiteVisit"."id";
