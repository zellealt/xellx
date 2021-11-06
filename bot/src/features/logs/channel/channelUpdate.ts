import {
  Client,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  TextChannel,
} from "discord.js";
import WOKCommands from "wokcommands";
import make_log from "../../../database/make_log";
import convertChannelType from "../../../utils/convertChannelType";
import formatDiscordMessage from "../../../utils/formatDiscordMessage";

export default (client: Client, instance: WOKCommands) => {
  client.on("channelUpdate", async (channel) => {
    const anyChannel: any = channel;

    const logs = await anyChannel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_UPDATE",
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
      `Updated a ${channelType} **${channelName}**`,
      exetctorTag,
      BigInt(anyChannel.guild.id),
      executor?.displayAvatarURL(),
      "channel_update",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Update Channel",

  dbName: "updatelogschannel",
};

export { config };
