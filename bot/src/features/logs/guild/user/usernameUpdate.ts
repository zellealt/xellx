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
    if (oldMember.user?.tag !== newMember.user?.tag) {
      const userTag: string = newMember.user?.tag;

      await make_log(
        `Updated their tag from **${oldMember.user?.tag}** to **${newMember.user?.tag}**`,
        userTag,
        BigInt(newMember.guild.id),
        newMember.user?.displayAvatarURL(),
        "tag_update",
        "DISCORD"
      );
    }
  });
};

// Configuration for this feature
const config = {
  displayName: "Tag Update",

  dbName: "tagupdatelogs",
};

export { config };
