import prisma from "./prisma";
import make_log from "./make_log";

const generate_server_data = async (guild_id: BigInt) => {
  const configQuery = await prisma.config.create({
    data: {
      guild_id: BigInt(guild_id.toString()),
      sticky_roles: [],
      auto_role: 0,
      audit_log_channel: 0,
      welcome_messages_channel: 0,
    },
  });

  const commandsQuery = await prisma.commands.create({
    data: {
      guild_id: BigInt(guild_id.toString()),
      ban: true,
      kick: true,
      warn: true,
      info: true,
    },
  });

  await make_log(
    "Created essential database querys",
    "Xellx Configurator",
    BigInt(guild_id.toString()),
    "/default.png",
    "updated_channel"
  );
};

export default generate_server_data;
