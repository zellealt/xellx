const formatGuildIcon = (
  guild_id: string | bigint | number | BigInt,
  icon_id: string | bigint | number | BigInt
) => `https://cdn.discordapp.com/icons/${guild_id}/${icon_id}.png?size=1024`;
export default formatGuildIcon;
