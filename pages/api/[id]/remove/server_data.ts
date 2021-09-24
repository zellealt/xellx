import check_if_role_in_guild from "@/lib/check_if_role_in_guild";
import can_manage_guild from "@/lib/can_manage_guild";
import prisma from "@/lib/prisma";
import make_log from "@/lib/make_log";
import { getSession } from "next-auth/client";

export default async function remove_sticky_role(
  req: { query: { id: any }; headers: { authorization: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string; status: string }): void; new (): any };
    };
  }
) {
  const { id } = req.query;
  const { authorization } = req.headers;

  const query = await prisma.config.findUnique({
    where: {
      guild_id: BigInt(id),
    },
  });

  if (query === null) {
    return res.status(406).json({
      message: "Server or user does not exist in the database",
      status: "red",
    });
  }

  const queryJson = JSON.parse(
    JSON.stringify(query, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  const guild = await can_manage_guild(queryJson["guild_id"], authorization);

  if (guild === false) {
    return res.status(401).json({
      message: "You lack permission to edit this server",
      status: "red",
    });
  }

  if (guild === "rate_limited") {
    return res
      .status(401)
      .json({ message: "You are being rate limited", status: "red" });
  }

  // alright now update the stuff

  const deleteConfig = await prisma.config.delete({
    where: {
      guild_id: BigInt(id),
    },
  });

  const logsConfig = await prisma.logs.deleteMany({
    where: {
      guild_id: BigInt(id),
    },
  });

  const message = `Removed all server data`;

  // @ts-ignore
  const session = await getSession({ req });

  await make_log(
    message,
    // @ts-ignore
    session?.user?.name + "#" + session?.user?.discriminator,
    BigInt(id),
    session?.user?.image,
    "removed_server_data"
  );

  res.status(200).json({
    message: message,
    status: "green",
  });
}
