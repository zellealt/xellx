const Discord = require("discord.js");
import get_config_data from "./get_config_data";
import get_commands_data from "./get_commands_data";
import get_logs from "./get_logs";
import generate_server_data from "./generate_server_data";
import make_request from "./make_request";

const fetch_manageable_guild = async (guild_id: bigint, token: string) => {
  try {
    console.log("fetch_manageable_guild");

    // Check if user is in guild and got perms

    const guild_data = await make_request(
      "https://discord.com/api/users/@me/guilds",
      {
        Authorization: "Bearer " + token,
      }
    );

    const guilds = guild_data.filter(function (entry: {
      permissions: bigint;
      id: bigint;
    }) {
      const perms = new Discord.Permissions(BigInt(entry.permissions));

      if (!perms.has("MANAGE_GUILD")) {
        return false;
      }

      if (entry.id === guild_id) {
        return true;
      } else {
        return false;
      }
    });

    let guild = guilds[0];

    if (guild === undefined) {
      return null; // return null if user is not in the guild with perms
    }
    // Presuming the user is in the guild with perms

    // Getting the user guild from the bot pov

    let resAdvJson = await make_request(
      `https://discord.com/api/guilds/${guild_id}?with_counts=true`,
      {
        Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
      }
    );

    resAdvJson["roles"] = resAdvJson["roles"].filter(function (entry: any) {
      if (entry.name == "@everyone") return false;
      else return true;
    });

    const config = await get_config_data(BigInt(guild_id));

    resAdvJson["config"] = await config;

    if (config === "Server or user does not exist in the database") {
      await generate_server_data(guild_id);
    }

    const commands = await get_commands_data(BigInt(guild_id));

    resAdvJson["commands"] = await commands;

    const logs = await get_logs(BigInt(guild_id));

    resAdvJson["logs"] = await logs;

    const channelsJson = await make_request(
      `https://discord.com/api/guilds/${guild_id}/channels`,
      {
        Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
      }
    );
    resAdvJson["channels"] = channelsJson;

    return resAdvJson;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default fetch_manageable_guild;
