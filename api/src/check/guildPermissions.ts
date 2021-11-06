import Discord from "discord.js";
import fetch from "cross-fetch";

const checkGuildPermission = async (token: string, id: string) => {
  try {
    const guild_data_raw = await fetch(
      "https://discord.com/api/users/@me/guilds",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const guild_data = await guild_data_raw.json();

    const guilds = guild_data.filter(function (entry: {
      permissions: bigint;
      id: bigint;
    }) {
      const perms = new Discord.Permissions(BigInt(entry.permissions));

      if (!perms.has("MANAGE_GUILD")) {
        return false;
      }

      if (entry.id.toString() === id) {
        return true;
      } else {
        return false;
      }
    });

    let guild = guilds[0];

    if (guild === undefined) {
      return false;
    }
  } catch {
    return null;
  }

  return true;
};

export default checkGuildPermission;
