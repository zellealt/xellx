import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import convertMessageType from "../../../utils/convertMessageType";

export default (client: Client, instance: WOKCommands) => {
  client.on("messageDelete", async (message) => {
    // TODO - discord deleted audits for messages - add content to data

    console.log(message.content);

    let messageType: string = convertMessageType(message);
    await make_log(
      `Deleted ${messageType!}`,
      message?.author?.tag,
      BigInt(message.guildId!),
      message?.author?.displayAvatarURL(),
      "message_delete",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Message Delete",

  dbName: "messagedeletelogs",
};

export { config };
