import getConfigData from "./configData";
import getCommandData from "./commandsData";
import generateServerData from "../generate/serverData";
import getLogs from "./logs";
import FilterMessagableChannel from "../filters/filterMessagableChannel";
import fetch from "cross-fetch";

const getGuild = async (guildId: bigint) => {
  try {
    const get_guild = await fetch(
      `https://discord.com/api/guilds/${guildId}?with_counts=true`,
      {
        headers: {
          Authorization: "Bot " + process.env.BOT_TOKEN,
        },
      }
    );

    const get_guild_res: any = await get_guild.json();

    get_guild_res["roles"] = get_guild_res["roles"].filter(function (
      entry: any
    ) {
      if (entry.name == "@everyone") return false;
      else return true;
    });

    const config = await getConfigData(BigInt(guildId));

    get_guild_res["config"] = await config;

    if (config?.status === "error") {
      await generateServerData(guildId);
    }

    const commands = await getCommandData(guildId);

    get_guild_res["commands"] = await commands;

    const logs = await getLogs(guildId);

    get_guild_res["logs"] = await logs;

    const channels = await fetch(
      `https://discord.com/api/guilds/${guildId}/channels`,
      {
        headers: {
          Authorization: "Bot " + process.env.BOT_TOKEN,
        },
      }
    );

    let channel_res: any = await channels.json();

    channel_res = channel_res.filter((entry: any) =>
      FilterMessagableChannel(entry.type)
    );

    get_guild_res["channels"] = channel_res;

    return get_guild_res;
  } catch (e) {
    return false;
  }
};

export default getGuild;
