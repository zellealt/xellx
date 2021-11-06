import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import convertChannelType from "../../../utils/convertChannelType";

export default (client: Client, instance: WOKCommands) => {
  client.on("channelDelete", async (channel) => {
    const anyChannel: any = channel;
    const guild = anyChannel.guild;

    const logs = await guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_DELETE",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    let channelType = convertChannelType(channel.type);
    let channelName: string = anyChannel.name;

    if (channelType === "text channel") {
      channelName = "#" + channelName;
    }

    await make_log(
      `Deleted a ${channelType} **${channelName}**`,
      exetctorTag,
      BigInt(anyChannel.guild.id),
      executor?.displayAvatarURL(),
      "channel_delete",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Delete Channel",

  dbName: "deletelogschannel",
};

export { config };
