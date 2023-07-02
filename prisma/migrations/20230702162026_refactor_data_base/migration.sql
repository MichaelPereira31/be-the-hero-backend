/*
  Warnings:

  - You are about to drop the column `userId` on the `employee` table. All the data in the column will be lost.
  - The `status` column on the `item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `voluntaryId` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('completed', 'canceled', 'opened');

-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_userId_fkey";

-- AlterTable
ALTER TABLE "complaint" ALTER COLUMN "file" DROP NOT NULL;

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "userId",
ADD COLUMN     "voluntaryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "item" DROP COLUMN "status",
ADD COLUMN     "status" "ItemStatus" NOT NULL DEFAULT 'opened';

-- DropEnum
DROP TYPE "ItemStutus";

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_voluntaryId_fkey" FOREIGN KEY ("voluntaryId") REFERENCES "voluntary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
