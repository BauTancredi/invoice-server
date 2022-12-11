/*
  Warnings:

  - Added the required column `FromCity` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FromCountry` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FromPostCode` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FromStreetAddress` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `InvoiceDate` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PaymentTerms` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProjectDescription` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ToCity` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ToCountry` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ToPostCode` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ToStreetAddress` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "FromCity" TEXT NOT NULL,
ADD COLUMN     "FromCountry" TEXT NOT NULL,
ADD COLUMN     "FromPostCode" TEXT NOT NULL,
ADD COLUMN     "FromStreetAddress" TEXT NOT NULL,
ADD COLUMN     "InvoiceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "PaymentTerms" INTEGER NOT NULL,
ADD COLUMN     "ProjectDescription" TEXT NOT NULL,
ADD COLUMN     "Status" TEXT NOT NULL,
ADD COLUMN     "ToCity" TEXT NOT NULL,
ADD COLUMN     "ToCountry" TEXT NOT NULL,
ADD COLUMN     "ToPostCode" TEXT NOT NULL,
ADD COLUMN     "ToStreetAddress" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "InvoiceItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
