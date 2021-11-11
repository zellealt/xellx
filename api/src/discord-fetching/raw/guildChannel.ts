import fetch from "cross-fetch";

const fetchGuildChannelData = async (
  guildId: string | bigint | BigInt | number
) =>
  await fetch(`https://discord.com/api/guilds/${guildId}/channels`, {
    headers: {
      Authorization: "Bot " + process.env.BOT_TOKEN,
    },
  });

export default fetchGuildChannelData;
