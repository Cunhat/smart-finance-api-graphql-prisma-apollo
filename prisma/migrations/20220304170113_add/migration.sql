/*
  Warnings:

  - Added the required column `id_account` to the `transation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transation" ADD COLUMN     "id_account" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
