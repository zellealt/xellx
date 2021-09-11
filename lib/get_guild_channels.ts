import make_request from "./make_request";

const get_guild_channels = async (guild_id: bigint) => {
  console.log("get channels");

  const responseJson = await make_request(
    `https://discord.com/api/guilds/${guild_id}/channels`,
    {
      Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
    }
  );

  return responseJson;
};

export default get_guild_channels;
