-- CreateTable
CREATE TABLE "transation" (
    "id" TEXT NOT NULL,
    "descrition" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "transation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transation" ADD CONSTRAINT "transation_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
