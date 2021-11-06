const formatGuildIcon = (
  user_id: string | bigint | number | BigInt,
  icon_id: string | bigint | number | BigInt
) => `https://cdn.discordapp.com/avatars/${user_id}/${icon_id}.png?size=1024`;
export default formatGuildIcon;
