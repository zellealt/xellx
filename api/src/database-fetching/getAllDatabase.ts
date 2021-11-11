import getConfigData from "./raw/config";
import getCommandData from "../database-fetching/raw/commands";
import generateServerData from "../generate/serverData";
import getLogs from "./raw/logs";
import filterMessagableChannel from "../filters/filterMessagableChannel";
import fetch from "cross-fetch";
import fetchGuildData from "../discord-fetching/raw/guild";
import fetchGuildChannelData from "../discord-fetching/raw/guildChannel";
import getPlugins from "./raw/plugins";

const getAllDatabase = async (guildId: bigint) => {
  try {
    const commands = await getCommandData(guildId);
    const config = await getConfigData(BigInt(guildId));
    const logs = await getLogs(guildId);
    const plugins = await getPlugins(guildId);

    let appendedObject: any = {};

    appendedObject["config"] = await config;
    appendedObject["commands"] = await commands;
    appendedObject["logs"] = await logs;
    appendedObject["plugins"] = await plugins;

    if (config?.status === "error") {
      await generateServerData(guildId);

      // get config data from db again
      const config = await getConfigData(BigInt(guildId));

      appendedObject["config"] = await config;
    }

    return appendedObject;
  } catch (e) {
    return false;
  }
};

export default getAllDatabase;
