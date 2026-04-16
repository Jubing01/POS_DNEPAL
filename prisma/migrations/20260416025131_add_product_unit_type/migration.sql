/*
  Warnings:

  - Changed the type of `unit` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProductUnitType" AS ENUM ('KG', 'PIECE', 'LITER', 'METER');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "unit",
ADD COLUMN     "unit" "ProductUnitType" NOT NULL;
