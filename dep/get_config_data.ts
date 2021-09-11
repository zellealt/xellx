import can_manage_guild from "../../lib/can_manage_guild";
import prisma from "../../lib/prisma";

export default async function get_config_data(req: { query: any }, res: any) {
  console.log("api requested for get_config_data !!!!!!!!!!!! ");

  const { accessToken, guild_id } = req.query;
  const query = await prisma.config.findUnique({
    where: {
      guild_id: BigInt(guild_id),
    },
  });

  if (query === null) {
    return res
      .status(406)
      .json({ message: "Server or user does not exist in the database" });
  }

  const queryJson = JSON.parse(
    JSON.stringify(query, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  const guild = await can_manage_guild(queryJson["guild_id"], accessToken);

  if (guild === false) {
    return res
      .status(401)
      .json({ message: "You lack permission to view this server" });
  }

  if (guild === "rate_limited") {
    return res
      .status(401)
      .json({ message: "You are being rate limited", status: "red" });
  }

  res.status(200).json(queryJson);
}
