import make_request from "./make_request";

const fetch_user_guilds = async (token: string) => {
  console.log("fetch_user_guilds");

  const guild_data = await make_request(
    `https://discord.com/api/users/@me/guilds`,
    {
      Authorization: "Bearer " + token,
    }
  );
  return guild_data;
};

export default fetch_user_guilds;
