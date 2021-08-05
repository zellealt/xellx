import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      scope: "guilds identify",
    }),
  ],

  database: {
    type: 'postgresql',
    host: '127.0.0.1',
    port: 3306,
    username: 'zel',
    password: 'MangoLovesJacob',
    database: 'dashboard_login',
    entityPrefix: 'nextauth_',
    synchronize: true
  }
}

export default (req, res) => NextAuth(req, res, options)