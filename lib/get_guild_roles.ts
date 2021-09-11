import make_request from "./make_request";

const get_guild_roles = async (guild_id: bigint) => {
  console.log("get guild roles");

  const responseJson = await make_request(
    `https://discord.com/api/guilds/${guild_id}/roles`,
    {
      Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
    }
  );

  const curatedRoles = responseJson.filter(
    (value: { name: string }) => value.name != "@everyone"
  );

  return curatedRoles;
};

export default get_guild_roles;
