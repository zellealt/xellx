import {
  Client,
  Guild,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import convertChannelType from "../../../utils/convertChannelType";
import inviteBuilder from "../../../builder/invite";

export default (client: Client, instance: WOKCommands) => {
  client.on("inviteDelete", async (invite) => {
    const anyGuild: any = invite.guild;
    const guild: Guild = anyGuild;
    const logs = await guild.fetchAuditLogs({
      limit: 1,
      type: "INVITE_DELETE",
    });
    const executor = logs.entries.first()?.executor;
    const executorTag = executor?.tag;

    const data = inviteBuilder(
      invite.code,
      "Unknown#0000",
      "/default.png",

      "Unknown#0000",
      "/default.png",

      invite.channel.name,
      invite.channel.type
    );

    await make_log(
      `Deleted an invite`,
      executorTag,
      BigInt(invite?.guild?.id!),
      executor?.displayAvatarURL(),
      "invite_delete",
      "DISCORD",
      data
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Delete Invite",

  dbName: "deletelogsinvite",
};

export { config };
