/*
  Warnings:

  - You are about to drop the column `author` on the `ItemStats` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `log` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ItemStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `log` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemStats" DROP CONSTRAINT "ItemStats_itemId_fkey";

-- DropForeignKey
ALTER TABLE "PackItem" DROP CONSTRAINT "PackItem_packId_fkey";

-- DropForeignKey
ALTER TABLE "PackPrice" DROP CONSTRAINT "PackPrice_packId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeItem" DROP CONSTRAINT "RecipeItem_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "SynergyItem" DROP CONSTRAINT "SynergyItem_synergyId_fkey";

-- AlterTable
ALTER TABLE "ItemStats" DROP COLUMN "author",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "log" DROP COLUMN "author",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "RecipeItem" ADD CONSTRAINT "RecipeItem_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackItem" ADD CONSTRAINT "PackItem_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackPrice" ADD CONSTRAINT "PackPrice_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemStats" ADD CONSTRAINT "ItemStats_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemStats" ADD CONSTRAINT "ItemStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SynergyItem" ADD CONSTRAINT "SynergyItem_synergyId_fkey" FOREIGN KEY ("synergyId") REFERENCES "Synergy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
