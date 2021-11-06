import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import messageEditBuilder from "../../../builder/messageEdit";

export default (client: Client, instance: WOKCommands) => {
  client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (
      oldMessage.content?.toString() === "" &&
      oldMessage.embeds?.toString() === ""
    )
      return;

    if (oldMessage.content === newMessage.content)
      if (oldMessage.embeds === newMessage.embeds) return;

    const data = messageEditBuilder(
      oldMessage.content || "",
      oldMessage.embeds,
      newMessage.content || "",
      newMessage.embeds,
      newMessage.member?.user.tag || "Unknown#0001",
      newMessage.member?.user.displayAvatarURL() || "/default.png",
      newMessage.url
    );

    await make_log(
      `Edited message`,
      newMessage.member?.user.tag,
      BigInt(newMessage.guildId!),
      newMessage.member?.user?.displayAvatarURL(),
      "message_edit",
      "DISCORD",
      data
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Message Edit",

  dbName: "messageeditlogs",
};

export { config };
