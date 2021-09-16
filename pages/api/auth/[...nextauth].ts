import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next-auth/internals/utils";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";

interface user {
  accessToken: any;
  refreshToken: any;
  id: any;
  discriminator: any;
}

interface token {
  accessToken: any;
  refreshToken: any;
  id: any;
  discriminator: any;
}

const options = {
  site: process.env.NEXTAUTH_URL,

  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      scope: "guilds identify",
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    jwt: async (
      token: token | any,
      user: any,
      account:
        | {
            accessToken: any;
            refreshToken: any;
          }
        | any,
      profile: {
        id: any;
        discriminator: any;
      }
    ) => {
      if (user) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
        token.id = profile.id;
        token.discriminator = profile.discriminator;
      }
      return Promise.resolve(token);
    },
    session: async (session: { user: user } | any, token: token | any) => {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.id = token.id;
      session.user.discriminator = token.discriminator;

      return session;
    },
  },

  database: {
    type: "postgres",
    host: process.env.IP,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entityPrefix: "na_",
    synchronize: true,
  },
};

export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, options);
