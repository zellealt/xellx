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
CREATE TABLE "na_accounts" (
    "id" INTEGER NOT NULL,
    "compound_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "access_token_expires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "na_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "na_sessions" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires" TIMESTAMP(3),
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "na_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "na_users" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "na_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "na_verification_requests" (
    "id" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "na_verification_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "config_guild_id_key" ON "config"("guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "commands_guild_id_key" ON "commands"("guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "na_accounts_compound_id_key" ON "na_accounts"("compound_id");

-- CreateIndex
CREATE UNIQUE INDEX "na_accounts_user_id_key" ON "na_accounts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "na_accounts_provider_account_id_key" ON "na_accounts"("provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "na_accounts_refresh_token_key" ON "na_accounts"("refresh_token");

-- CreateIndex
CREATE UNIQUE INDEX "na_accounts_access_token_key" ON "na_accounts"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "na_sessions_user_id_key" ON "na_sessions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "na_sessions_session_token_key" ON "na_sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "na_sessions_access_token_key" ON "na_sessions"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "na_verification_requests_id_key" ON "na_verification_requests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "na_verification_requests_token_key" ON "na_verification_requests"("token");
