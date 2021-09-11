import make_request from "./make_request";

const check_if_channel_in_guild = async (guild_id: bigint, role_id: bigint) => {
  console.log("Check if channel is in guild");

  const guild_data = await make_request(
    `https://discord.com/api/guilds/${guild_id}/channels`,
    {
      Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
    }
  );

  const roles = guild_data.filter(function (entry: { id: bigint }) {
    if (entry.id == role_id) return true;
    else return false;
  });

  if (roles.length === 0) return false;
  else return roles[0].name;
};

export default check_if_channel_in_guild;
