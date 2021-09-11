const Discord = require("discord.js");
import Router from "next/router";
const check_permission_array = async (
  guild_data: any[],
  permission: string
) => {
  console.log("Check permission array");

  try {
    const guilds = guild_data.filter(function (entry: { permissions: bigint }) {
      const perms = new Discord.Permissions(BigInt(entry.permissions));

      if (perms.has(permission)) {
        return true;
      } else {
        return false;
      }
    });
    return guilds;
  } catch (e) {
    return false;
  }
};

export default check_permission_array;
