import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
  User,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildMemberRemove", async (member) => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_KICK",
    });

    const kickLog = fetchedLogs.entries.first();

    if (!kickLog) return;

    let { executor, reason } = kickLog;
    const target: any = kickLog.target;

    const exetctorTag = executor?.username + "#" + executor?.discriminator;

    const targetTag = target?.username + "#" + target?.discriminator;

    await make_log(
      `Kicked **${targetTag}**${reason ? ` for ${reason}` : ""}`,
      exetctorTag,
      BigInt(member.guild.id),
      executor?.displayAvatarURL(),
      "user_kick",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Kick Logs",

  dbName: "kicklogs",
};

export { config };
