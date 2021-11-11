import getAllDatabase from "../database-fetching/getAllDatabase";
import getAllGuild from "../discord-fetching/getAllGuild";

const getGuild = async (guildId: bigint) => {
  try {
    const [discord_guild, database_guild] = await Promise.all([
      getAllGuild(guildId),
      getAllDatabase(guildId),
    ]);

    if (discord_guild === false) return false;

    return { ...discord_guild, ...database_guild };
  } catch (e) {
    return false;
  }
};

export default getGuild;
