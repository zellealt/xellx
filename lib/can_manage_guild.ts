import make_request from "./make_request";

const Discord = require("discord.js");

const can_manage_guild = async (guild_id: bigint, token: string) => {
  console.log("Called can manage guild");

  const guild_data = await make_request(
    "https://discord.com/api/users/@me/guilds",
    {
      Authorization: "Bearer " + token,
    }
  );
  try {
    const guilds = guild_data.filter(function (entry: {
      permissions: bigint;
      id: bigint;
    }) {
      const perms = new Discord.Permissions(BigInt(entry.permissions));

      if (!perms.has("MANAGE_GUILD")) return false;

      if (entry.id === guild_id) return true;
      else return false;
    });

    if (guilds.length === 0) return false;
    else return true;
  } catch {
    return "rate_limited";
  }
};

export default can_manage_guild;
