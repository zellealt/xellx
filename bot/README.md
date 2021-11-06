![Xellx Logo](https://github.com/zelxd/xellx/blob/mui/logo.png?raw=true)

# Xellx Bot

### A Discord.JS Bot built with Typescript connecting to a PostgreSQL Database using prisma. The package manager is NPM.

## Prerequisites

- [nodemon](https://www.npmjs.com/package/nodemon)
- [ts-node](https://www.npmjs.com/package/ts-node)

## Setup

1. Install Dependencies
   `npm i`
2. Edit `.env` and replace:
   `DISCORD_BOT_TOKEN` - Token for your Discord Bot, created on the [Discord Developer Portal](https://discord.com/developers)
   `DATABASE_URL` - PostgreSQL Database Connection URL, example: `postgresql://USERNAME:PASSWORD@HOSTNAME:5432/DATABASE_NAME`
3. Generate prisma
   `npx prisma generate`
4. Migrate database
   `npx prisma migrate dev --name init`
5. Start the Bot
   `npm run start`
