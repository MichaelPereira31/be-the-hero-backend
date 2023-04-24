/*
  Warnings:

  - You are about to drop the column `surname` on the `user` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "surname",
ADD COLUMN     "last_name" TEXT NOT NULL;
