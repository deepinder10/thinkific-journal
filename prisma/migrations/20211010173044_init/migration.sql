-- AlterTable
ALTER TABLE `Post` ADD COLUMN `sentiment` ENUM('POSITIVE', 'NEGATIVE', 'NEUTRAL');

-- CreateIndex
CREATE INDEX `Post.createdAt_index` ON `Post`(`createdAt`);
