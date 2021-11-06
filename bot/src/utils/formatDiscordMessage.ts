const formatDiscordMessage = (
  guild_id: number,
  channel_id: number,
  msg_id: number
) => {
  let channelsLink = "https://discord.com/channels/";

  channelsLink += guild_id.toString();
  channelsLink += "/";
  channelsLink += channel_id.toString();
  channelsLink += "/";
  channelsLink += msg_id.toString();

  return channelsLink;
};

export default formatDiscordMessage;
