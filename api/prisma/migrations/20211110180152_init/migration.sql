-- CreateEnum
CREATE TYPE "log_type" AS ENUM ('PUNISHMENT', 'DASHBOARD', 'DISCORD');

-- CreateTable
CREATE TABLE "config" (
    "guild_id" BIGINT NOT NULL,
    "sticky_roles" BIGINT[],
    "auto_role" BIGINT NOT NULL,
    "audit_log_channel" BIGINT NOT NULL,
    "welcome_messages_channel" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "commands" (
    "guild_id" BIGINT NOT NULL,
    "ban" BOOLEAN NOT NULL,
    "kick" BOOLEAN NOT NULL,
    "warn" BOOLEAN NOT NULL,
    "info" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "logs" (
    "id" BIGINT NOT NULL,
    "guild_id" BIGINT NOT NULL,
    "user_tag" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "user_avatar" TEXT NOT NULL,
    "type" "log_type" NOT NULL,
    "data" JSONB,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_users" (
    "discordId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "discriminator" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "guilds" JSONB[]
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "config_guild_id_key" ON "config"("guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "commands_guild_id_key" ON "commands"("guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_users_discordId_key" ON "auth_users"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");
