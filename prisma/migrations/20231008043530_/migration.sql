/*
  Warnings:

  - You are about to drop the column `ongId` on the `event` table. All the data in the column will be lost.
  - Added the required column `userId` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_ongId_fkey";

-- AlterTable
ALTER TABLE "event" DROP COLUMN "ongId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
