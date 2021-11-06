import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import convertChannelType from "../../../utils/convertChannelType";
import inviteBuilder from "../../../builder/invite";

export default (client: Client, instance: WOKCommands) => {
  client.on("inviteCreate", async (invite) => {
    const inviterTag = invite.inviter?.tag;
    const inviter = invite.inviter;

    const data = inviteBuilder(
      invite.code,
      inviterTag!,
      inviter?.displayAvatarURL()!,
      inviterTag!,
      inviter?.displayAvatarURL()!,
      invite.channel.name,
      invite.channel.type
    );

    await make_log(
      `Created an invite`,
      inviterTag,
      BigInt(invite?.guild?.id!),
      inviter?.displayAvatarURL(),
      "invite_create",
      "DISCORD",
      data
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Create Invite",

  dbName: "createlogsinvite",
};

export { config };
