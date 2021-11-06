import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("presenceUpdate", async (oldPresence, newPresence) => {
    console.log("presence later");
  });
};

// Configuration for this feature
const config = {
  displayName: "Presence Update",

  dbName: "presenceupdatelogs",
};

export { config };
