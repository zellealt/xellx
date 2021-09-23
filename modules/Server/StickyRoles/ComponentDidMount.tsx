async function ComponentDidMount(that: any) {
  const sticky_roles_storage_item = window.localStorage
    .getItem("sticky_roles")
    ?.toString();

  const roles = that.props.guild.roles;

  let includes;

  if (sticky_roles_storage_item) {
    includes = roles.filter((x: any) =>
      sticky_roles_storage_item.includes(x.id)
    );
  } else {
    includes = roles.filter((x: any) =>
      that.props.guild.config.sticky_roles.includes(x.id)
    );
  }

  const filteredRoles = includes.filter((x: { id: number }) => {
    return x.id !== 0;
  });

  that.setState({
    selected: filteredRoles,
    alert: false,
    rateLimited: false,
  });
}

export default ComponentDidMount;
