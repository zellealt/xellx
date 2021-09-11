import can_manage_guild from "../../lib/can_manage_guild";
import get_guild_channels from "../../lib/get_guild_channels";

export default async function get_guild_channels_(
  req: { query: any },
  res: any
) {
  console.log("api requested for get_guild_channels !!!!!!!!!!!! ");

  const { accessToken, guild_id } = req.query;

  const query = await get_guild_channels(guild_id);

  res.status(200).json(query);
}
