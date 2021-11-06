import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildBanAdd", async (ban) => {
    const { user, guild, reason } = await ban.fetch();
    const logs = await guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN_ADD",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    await make_log(
      `Banned **${user.tag}**${reason ? ` for ${reason}` : " "}`,
      exetctorTag,
      BigInt(guild.id),
      executor?.displayAvatarURL(),
      "user_add_ban",
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
