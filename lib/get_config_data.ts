import can_manage_guild from './can_manage_guild';
import prisma from './prisma';

export default async function get_config_data(guild_id: bigint) {

    console.log("getconfig data")

    const query = await prisma.config.findUnique({
        where: {
          guild_id: BigInt(guild_id)
        }
    });
    
    if (query === null) {
        return "Server or user does not exist in the database"
    }

    const queryJson = JSON.parse(JSON.stringify(query, (key, value) =>
    typeof value === 'bigint'
        ? value.toString()
        : value
    ))
  
    return queryJson
}