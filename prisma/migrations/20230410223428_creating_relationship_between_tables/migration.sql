/*
  Warnings:

  - Added the required column `donationId` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `voluntary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacancyId` to the `voluntary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "donationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "voluntary" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "vacancyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "donation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntary" ADD CONSTRAINT "voluntary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntary" ADD CONSTRAINT "voluntary_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "vacancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
