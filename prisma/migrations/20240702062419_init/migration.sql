/*
  Warnings:

  - You are about to drop the column `lastCheckedUser` on the `Checkbox` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Checkbox` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Checkbox" DROP CONSTRAINT "Checkbox_userId_fkey";

-- AlterTable
ALTER TABLE "Checkbox" DROP COLUMN "lastCheckedUser",
DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";
