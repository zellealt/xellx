![Xellx Logo](https://github.com/zelxd/xellx/blob/mui/logo.png?raw=true)

# Xellx API

### An express built API using prisma for Xellx Discord Bot. The package manager is NPM.

## Prerequisites

- [nodemon](https://www.npmjs.com/package/nodemon) - `npm i nodemon -g`
- [tsc](https://www.npmjs.com/package/tsc) - `npm i tsc -g`

## Setup

1. Install Dependencies
   `npm i`
2. Edit `.env` and replace:
   `http://localhost:3000` - Dashboard URL
   `DISCORD_BOT_ID` - ID for your Discord Bot, created on the [Discord Developer Portal](https://discord.com/developers)
   `DISCORD_BOT_SECRET` - Secret for your Discord Developer App, created on the [Discord Developer Portal]
   `DISCORD_BOT_TOKEN` - Token for your Discord Bot, created on the [Discord Developer Portal](https://discord.com/developers)
   `DATABASE_URL` - PostgreSQL Database Connection URL, example: `postgresql://USERNAME:PASSWORD@HOSTNAME:5432/DATABASE_NAME`
3. Generate prisma
   `npx prisma generate`
4. Migrate database
   `npx prisma migrate dev --name init`
5. Start the API
   `npm run dev` or `npm run start`
