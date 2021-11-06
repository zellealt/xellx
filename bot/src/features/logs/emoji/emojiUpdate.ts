import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("emojiUpdate", async (emoji) => {
    const logs = await emoji.guild.fetchAuditLogs({
      limit: 1,
      type: "EMOJI_UPDATE",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    await make_log(
      `Updated an ${emoji.animated ? "animated" : ""} emoji`,
      exetctorTag,
      BigInt(emoji.guild.id),
      executor?.displayAvatarURL(),
      "emoji_update",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Emoji Update",

  dbName: "updatelogsemoji",
};

export { config };
