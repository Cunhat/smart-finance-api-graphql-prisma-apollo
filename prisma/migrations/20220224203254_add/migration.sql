/*
  Warnings:

  - Added the required column `id_category` to the `subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subcategory" ADD COLUMN     "id_category" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
