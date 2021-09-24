import check_if_role_in_guild from "@/lib/check_if_role_in_guild";
import can_manage_guild from "@/lib/can_manage_guild";
import prisma from "@/lib/prisma";
import make_log from "@/lib/make_log";
import { getSession } from "next-auth/client";

export default async function update_config_data(
  req: {
    query: {
      id: any;
      ban: any;
      kick: any;
      warn: any;
      info: any;
      infoMessage: any;
    };
    headers: { authorization: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string; status: string }): void; new (): any };
    };
  }
) {
  let { id, ban, kick, warn, info, infoMessage } = req.query;
  const { authorization } = req.headers;
  // check can we update?

  const query = await prisma.commands.findUnique({
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

  if (ban === null) ban = query.ban;
  if (kick === null) kick = query.kick;
  if (warn === null) warn = query.warn;
  if (info === null) info = query.info;

  if (ban !== null) ban = ban === "true";
  if (kick !== null) kick = kick === "true";
  if (warn !== null) warn = warn === "true";
  if (info !== null) info = info === "true";

  const updateCommands = await prisma.commands.update({
    where: {
      guild_id: BigInt(id),
    },
    data: {
      ban: ban,
      kick: kick,
      warn: warn,
      info: info,
    },
  });

  if (infoMessage === null) {
    infoMessage = "";
  }

  const markdownMessage = `Sucessfully updated the **${infoMessage}** commands`;
  const message = `Sucessfully updated the ${infoMessage} commands`;

  // @ts-ignore
  const session = await getSession({ req });

  await make_log(
    markdownMessage,
    // @ts-ignore
    session?.user?.name + "#" + session?.user?.discriminator,
    BigInt(id),
    session?.user?.image,
    "updated_command"
  );

  res.status(200).json({
    message,
    status: "success",
  });
}
