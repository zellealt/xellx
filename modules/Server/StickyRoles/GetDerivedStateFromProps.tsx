export default function GetDerivedStateFromProps(
  props: any,
  state: any,
  window: WindowLocalStorage
) {
  let discord_roles = props.guild.roles;

  discord_roles = discord_roles.filter((role: any) => role.id !== 0);

  discord_roles = discord_roles.filter((role: any) => role.managed === false);

  props.guild.roles = discord_roles;

  return { props, state };
}
