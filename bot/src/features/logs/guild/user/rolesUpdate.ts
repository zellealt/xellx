import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../../database/make_log";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildMemberUpdate", async (oldMember, newMember) => {
    if (oldMember.roles !== newMember.roles) {
      const logs = await newMember.guild.fetchAuditLogs({
        limit: 1,
        type: "MEMBER_ROLE_UPDATE",
      });
      const executor = logs.entries.first()?.executor;

      await make_log(
        `**${executor}** updated **${newMember.user.tag}** roles`,
        executor?.tag,
        BigInt(newMember.guild.id),
        executor?.displayAvatarURL(),
        "roles_update",
        "DISCORD"
      );
    }
  });
};

// Configuration for this feature
const config = {
  displayName: "Roles Update",

  dbName: "rolesupdatelogs",
};

export { config };
