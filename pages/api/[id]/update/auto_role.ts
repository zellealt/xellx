import check_if_role_in_guild from "@/lib/check_if_role_in_guild";
import can_manage_guild from "@/lib/can_manage_guild";
import prisma from "@/lib/prisma";
import make_log from "@/lib/make_log";
import { getSession } from "next-auth/client";

export default async function update_config_data(
  req: { query: { id: any; data: any }; headers: { authorization: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string; status: string }): void; new (): any };
    };
  }
) {
  const { id, data } = req.query;
  const { authorization } = req.headers;
  // check can we update?

  const query = await prisma.config.findUnique({
    where: {
      guild_id: BigInt(id),
    },
  });

  if (query === null) {
    return res.status(406).json({
      message: "Server or user does not exist in the database",
      status: "error",
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
      status: "error",
    });
  }

  if (guild === "rate_limited") {
    return res
      .status(401)
      .json({ message: "You are being rate limited", status: "error" });
  }

  // alright now update the stuff

  // if they want to update eg, auto role, ...

  let is_role_in_guild = await check_if_role_in_guild(id, BigInt(data));

  if (!is_role_in_guild) {
    if (BigInt(data) !== BigInt(0)) {
      return res
        .status(401)
        .json({ message: "Specified role is not in guild", status: "error" });
    }
    is_role_in_guild = "None";
  } else {
    is_role_in_guild = "@" + is_role_in_guild;
  }

  const updateConfig = await prisma.config.update({
    where: {
      guild_id: BigInt(id),
    },
    data: {
      // @ts-ignore
      auto_role: BigInt(data),
    },
  });

  const message = `Updated the auto role to ${is_role_in_guild}`;

  // @ts-ignore
  const session = await getSession({ req });

  await make_log(
    message,
    // @ts-ignore
    session?.user?.name + "#" + session?.user?.discriminator,
    BigInt(id)
  );

  res.status(200).json({
    message,
    status: "success",
  });
}
