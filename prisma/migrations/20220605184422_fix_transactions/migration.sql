/*
  Warnings:

  - You are about to drop the column `id_category` on the `transation` table. All the data in the column will be lost.
  - Added the required column `id_subCategory` to the `transation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transation" DROP CONSTRAINT "transation_id_category_fkey";

-- AlterTable
ALTER TABLE "transation" DROP COLUMN "id_category",
ADD COLUMN     "id_subCategory" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_id_subCategory_fkey" FOREIGN KEY ("id_subCategory") REFERENCES "subcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
