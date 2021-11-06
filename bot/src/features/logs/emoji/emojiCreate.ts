import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("emojiCreate", async (emoji) => {
    const logs = await emoji.guild.fetchAuditLogs({
      limit: 1,
      type: "EMOJI_CREATE",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    await make_log(
      `Created an ${emoji.animated ? "animated" : ""} emoji`,
      exetctorTag,
      BigInt(emoji.guild.id),
      executor?.displayAvatarURL(),
      "emoji_create",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Emoji Create",

  dbName: "createlogsemoji",
};

export { config };
