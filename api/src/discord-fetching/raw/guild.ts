import fetch from "cross-fetch";

const fetchGuildData = async (guildId: string | bigint | BigInt | number) =>
  await fetch(`https://discord.com/api/guilds/${guildId}?with_counts=true`, {
    headers: {
      Authorization: "Bot " + process.env.BOT_TOKEN,
    },
  });

export default fetchGuildData;
