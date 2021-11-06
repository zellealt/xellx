import prisma from "../lib/prisma";
import passport from "passport";
import DiscordStrategy from "passport-discord";
import Discord from "discord.js";

passport.serializeUser((user: any, done) => {
  done(null, user.discordId);
});

passport.deserializeUser(async (discordId: any, done) => {
  try {
    const user = await prisma.auth_users.findUnique({
      where: { discordId: discordId },
    });
    return user ? done(null, user) : done(null, null);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DASHBOARD_CLIENT_ID,
      clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
      callbackURL: process.env.DASHBOARD_CALLBACK_URL,
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let { id, username, discriminator, avatar, guilds } = profile;

      avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}`;

      guilds = guilds.filter(function (entry) {
        const perms = new Discord.Permissions(BigInt(entry.permissions));

        if (perms.has("ADMINISTRATOR")) {
          return true;
        } else {
          return false;
        }
      });

      try {
        let newUser = await prisma.auth_users.upsert({
          where: {
            discordId: id,
          },
          update: {
            username: username,
            avatar: avatar,
            discriminator: discriminator,
            accessToken: accessToken,
            guilds: JSON.parse(JSON.stringify(guilds)),
          },
          create: {
            discordId: id,
            avatar: avatar,
            username: username,
            discriminator: discriminator,
            accessToken: accessToken,
            guilds: JSON.parse(JSON.stringify(guilds)),
          },
        });
        if (newUser) {
          console.log("User was found");
          return done(null, newUser);
        }
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  )
);
