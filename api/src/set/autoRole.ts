import prisma from "../lib/prisma";

const autoRole = async (
  id: bigint | number | string,
  guildId: bigint | number | string
) => {
  try {
    const updateAutoRole = await prisma.config.upsert({
      where: {
        guild_id: BigInt(guildId),
      },
      update: {
        auto_role: BigInt(id),
      },
      create: {
        guild_id: BigInt(guildId),
        sticky_roles: [],
        auto_role: BigInt(id),
        audit_log_channel: 0,
        welcome_messages_channel: 0,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default autoRole;
