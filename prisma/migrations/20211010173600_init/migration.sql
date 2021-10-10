/*
  Warnings:

  - You are about to alter the column `sentiment` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Enum("Post_sentiment")` to `Int`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `sentiment` INTEGER;
