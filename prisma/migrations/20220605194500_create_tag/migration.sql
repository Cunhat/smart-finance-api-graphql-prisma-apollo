/*
  Warnings:

  - Added the required column `id_tag` to the `transation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transation" ADD COLUMN     "id_tag" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
