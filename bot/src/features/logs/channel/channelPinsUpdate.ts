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
  client.on("channelPinsUpdate", async (channel) => {
    const anyChannel: any = channel;

    const logs = await anyChannel.guild.fetchAuditLogs({
      limit: 1,
      type: "MESSAGE_PIN",
    });
    const executor = logs.entries.first()?.executor;
    const exetctorTag: string =
      executor?.username + "#" + executor?.discriminator;

    let channelType = convertChannelType(channel.type);
    let channelName: string = anyChannel.name;

    if (channelType === "text channel") {
      channelName = "#" + channelName;
    }

    const discordLink = formatDiscordMessage(
      anyChannel.guild.id,
      anyChannel.id,
      anyChannel.lastMessageId
    );

    console.log(discordLink);

    await make_log(
      `Pinned a message to **${channelName}**`,
      exetctorTag,
      BigInt(anyChannel.guild.id),
      executor?.displayAvatarURL(),
      "pin",
      "DISCORD"
    );
  });
};

// Configuration for this feature
const config = {
  displayName: "Update Channel Pins",

  dbName: "updatelogschannelpins",
};

export { config };
