/*
  Warnings:

  - You are about to drop the column `audit_log_channel` on the `config` table. All the data in the column will be lost.
  - You are about to drop the column `auto_role` on the `config` table. All the data in the column will be lost.
  - You are about to drop the column `sticky_roles` on the `config` table. All the data in the column will be lost.
  - You are about to drop the column `welcome_messages_channel` on the `config` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "config" DROP COLUMN "audit_log_channel",
DROP COLUMN "auto_role",
DROP COLUMN "sticky_roles",
DROP COLUMN "welcome_messages_channel";

-- CreateTable
CREATE TABLE "plugins" (
    "guild_id" BIGINT NOT NULL,
    "audit_log" JSONB,
    "sticky_roles" BIGINT[],
    "auto_role" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "plugins_guild_id_key" ON "plugins"("guild_id");
