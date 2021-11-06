import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildBanRemove", async (ban) => {
    const { user, guild } = ban;
    const logs = await guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN_REMOVE",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    console.log(logs.entries.first());

    await make_log(
      `Removed **${user.tag}**'s ban`,
      exetctorTag,
      BigInt(guild.id),
      executor?.displayAvatarURL(),
      "user_remove_ban",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Ban Remove Logs",

  dbName: "banlogs",
};

export { config };
