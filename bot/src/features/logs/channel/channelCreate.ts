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
  client.on("channelCreate", async (channel) => {
    const anyChannel: any = channel;

    const logs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_CREATE",
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
      `Created a ${channelType} **${channelName}**`,
      exetctorTag,
      BigInt(anyChannel.guild.id),
      executor?.displayAvatarURL(),
      "channel_create",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Create Channel",

  dbName: "createlogschannel",
};

export { config };
