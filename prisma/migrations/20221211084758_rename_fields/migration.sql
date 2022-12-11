/*
  Warnings:

  - You are about to drop the column `ClientEmail` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ClientName` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `FromCity` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `FromCountry` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `FromPostCode` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `FromStreetAddress` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `InvoiceDate` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `PaymentTerms` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ProjectDescription` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ToCity` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ToCountry` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ToPostCode` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ToStreetAddress` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `clientEmail` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientName` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromCity` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromCountry` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromPostCode` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromStreetAddress` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceDate` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentTerms` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectDescription` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toCity` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toCountry` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toPostCode` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toStreetAddress` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "ClientEmail",
DROP COLUMN "ClientName",
DROP COLUMN "FromCity",
DROP COLUMN "FromCountry",
DROP COLUMN "FromPostCode",
DROP COLUMN "FromStreetAddress",
DROP COLUMN "InvoiceDate",
DROP COLUMN "PaymentTerms",
DROP COLUMN "ProjectDescription",
DROP COLUMN "Status",
DROP COLUMN "ToCity",
DROP COLUMN "ToCountry",
DROP COLUMN "ToPostCode",
DROP COLUMN "ToStreetAddress",
ADD COLUMN     "clientEmail" TEXT NOT NULL,
ADD COLUMN     "clientName" TEXT NOT NULL,
ADD COLUMN     "fromCity" TEXT NOT NULL,
ADD COLUMN     "fromCountry" TEXT NOT NULL,
ADD COLUMN     "fromPostCode" TEXT NOT NULL,
ADD COLUMN     "fromStreetAddress" TEXT NOT NULL,
ADD COLUMN     "invoiceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paymentTerms" INTEGER NOT NULL,
ADD COLUMN     "projectDescription" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "toCity" TEXT NOT NULL,
ADD COLUMN     "toCountry" TEXT NOT NULL,
ADD COLUMN     "toPostCode" TEXT NOT NULL,
ADD COLUMN     "toStreetAddress" TEXT NOT NULL;
