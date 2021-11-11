import prisma from "../../lib/prisma";

const getConfigData = async (guildId: bigint) => {
  const query = await prisma.config.findUnique({
    where: {
      guild_id: guildId,
    },
  });

  if (query === null) {
    return {
      status: "error",
      message: "Server or user does not exist in the database",
    };
  }

  const queryJson = JSON.parse(
    JSON.stringify(query, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  return queryJson;
};

export default getConfigData;
