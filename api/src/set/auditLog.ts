import prisma from "../lib/prisma";

const auditLog = async (data: any, guildId: bigint | number | string) => {
  try {
    const updateAuditLog = await prisma.plugins.upsert({
      where: {
        guild_id: BigInt(guildId),
      },
      update: {
        audit_log: data,
      },
      create: {
        guild_id: BigInt(guildId),
        audit_log: data,
        auto_role: 0,
      },
    });

    return true;
  } catch (e) {
    return false;
  }
};

export default auditLog;
