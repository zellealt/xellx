import fetch from "cross-fetch";
import filterMessagableChannel from "../filters/filterMessagableChannel";
import fetchGuildData from "./raw/guild";
import fetchGuildChannelData from "./raw/guildChannel";

const getAllGuild = async (guildId: bigint | BigInt | string | number) => {
  try {
    // get guild as bot from discord
    const get_guild_res: any = await fetchGuildData(guildId).then((final) =>
      final.json()
    );

    // filter @everyone role
    get_guild_res["roles"] = get_guild_res["roles"].filter(function (
      entry: any
    ) {
      if (entry.name == "@everyone") return false;
      else return true;
    });

    // get guild channels as bot
    const channels = await fetch(
      `https://discord.com/api/guilds/${guildId}/channels`,
      {
        headers: {
          Authorization: "Bot " + process.env.BOT_TOKEN,
        },
      }
    );

    // get guild channels as bot
    let channel_res: any = await fetchGuildChannelData(guildId).then((final) =>
      final.json()
    );

    // filter those channels to check if you can message in them
    channel_res = channel_res.filter((entry: any) =>
      filterMessagableChannel(entry.type)
    );

    get_guild_res["channels"] = channel_res;

    return get_guild_res;
  } catch (e) {
    return false;
  }
};

export default getAllGuild;
