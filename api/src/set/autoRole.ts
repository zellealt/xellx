import prisma from "../lib/prisma";

const autoRole = async (
  id: bigint | number | string,
  guildId: bigint | number | string
) => {
  try {
    const updateAutoRole = await prisma.plugins.upsert({
      where: {
        guild_id: BigInt(guildId),
      },
      update: {
        auto_role: BigInt(id),
      },
      create: {
        guild_id: BigInt(guildId),
        auto_role: BigInt(id),
      },
    });

    return true;
  } catch (e) {
    return false;
  }
};

export default autoRole;
