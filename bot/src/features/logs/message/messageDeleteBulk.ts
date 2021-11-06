import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("messageDeleteBulk", async (message) => {
    const logs = await message.first()?.guild?.fetchAuditLogs({
      limit: 1,
      type: "MESSAGE_BULK_DELETE",
    });
    const executor = logs?.entries.first()?.executor;
    const executorTag = executor?.tag;

    // show array in database
    await make_log(
      `Deleted Multiple Messages`,
      executorTag,
      BigInt(message?.first()?.guildId!),
      executor?.displayAvatarURL(),
      "message_bulk_delete",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Message Bulk Delete",

  dbName: "messagebulkdeletelogs",
};

export { config };
