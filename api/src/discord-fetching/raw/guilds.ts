import fetch from "cross-fetch";
import Discord from "discord.js";

const userGuilds = async (accessToken: string) => {
  try {
    const request = await fetch(`https://discord.com/api/users/@me/guilds`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });

    const requestJson = await request.json();

    const filteredRequestJson = requestJson.filter(function (entry: {
      permissions: string | number | bigint | boolean;
    }) {
      const perms = new Discord.Permissions(BigInt(entry.permissions));

      if (perms.has("ADMINISTRATOR")) {
        return true;
      } else {
        return false;
      }
    });

    return { allGuilds: requestJson, guilds: filteredRequestJson };
  } catch (e) {
    return null;
  }
};

export default userGuilds;
