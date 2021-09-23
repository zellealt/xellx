function GetDerivedStateFromProps(props: any) {
  function removeManaged(entry: { managed: boolean }) {
    return !entry.managed;
  }

  const filteredManaged = props.guild.roles.filter(removeManaged);

  let roles = [];

  for (let channel of filteredManaged) {
    if (!channel["name"].startsWith("@")) {
      if (channel["id"] !== 0) {
        channel["name"] = "@" + channel["name"];
      }
    }

    roles.push(channel);
  }

  const noneRole = roles.findIndex((x) => x.id == 0);
  if (noneRole === -1) {
    roles.push({
      id: 0,
      name: "None",
      color: 0,
      permission_new: "0",
      permission: 0,
      managed: false,
    });
  }

  props.guild.roles = roles;

  return props;
}

export default GetDerivedStateFromProps;
