import prisma from "../lib/prisma";
import log from "./log";

const serverData = async (guildId: bigint) => {
  const configQuery = await prisma.config.create({
    data: {
      guild_id: guildId,
      sticky_roles: [],
      auto_role: 0,
      audit_log_channel: 0,
      welcome_messages_channel: 0,
    },
  });

  const commandsQuery = await prisma.commands.create({
    data: {
      guild_id: BigInt(guildId.toString()),
      ban: true,
      kick: true,
      warn: true,
      info: true,
    },
  });

  await log(
    "Created essential database querys",
    "Xellx Configurator",
    guildId,
    "/default.png",
    "updated_channel"
  );
};

export default serverData;
