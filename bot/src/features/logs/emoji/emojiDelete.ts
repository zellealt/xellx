import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("emojiDelete", async (emoji) => {
    const logs = await emoji.guild.fetchAuditLogs({
      limit: 1,
      type: "EMOJI_DELETE",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    await make_log(
      `Deleted an ${emoji.animated ? "animated" : ""} emoji`,
      exetctorTag,
      BigInt(emoji.guild.id),
      executor?.displayAvatarURL(),
      "emoji_delete",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Emoji Delete",

  dbName: "deletelogsemoji",
};

export { config };
