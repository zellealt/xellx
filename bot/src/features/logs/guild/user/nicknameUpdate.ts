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
    if (oldMember.displayName !== newMember.displayName) {
      console.log(newMember.roles);

      const userTag = newMember.user.tag;

      await make_log(
        `Updated their nickname from **${oldMember.displayName}** to **${newMember.displayName}**`,
        userTag,
        BigInt(newMember.guild.id),
        newMember.user?.displayAvatarURL(),
        "nickname_update",
        "DISCORD"
      );
    }
  });
};

// Configuration for this feature
const config = {
  displayName: "Nickname Update",

  dbName: "nicknameupdatelogs",
};

export { config };
