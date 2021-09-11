import can_manage_guild from "../../lib/can_manage_guild";
import prisma from "../../lib/prisma";

export default async function get_users_data(req: { query: any }, res: any) {
  console.log("api requested for get_users_data !!!!!!!!!!!! ");
  const { accessToken, guild_id } = req.query;

  if (accessToken == null) {
    return res.status(401).json({ message: "accessToken is null" });
  } else if (guild_id == null) {
    return res.status(401).json({ message: "guild_id is null" });
  }

  const query: any = await prisma.users.findMany({
    where: {
      // @ts-ignore
      guild_id: BigInt(guild_id),
    },
  });

  const queryString = JSON.parse(
    JSON.stringify(query, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  if (Object.keys(queryString).length === 0) {
    return res
      .status(406)
      .json({ message: "Guild does not exist in database" });
  }

  const guild = await can_manage_guild(queryString, accessToken);

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

  res.status(200).json(queryString);
}
