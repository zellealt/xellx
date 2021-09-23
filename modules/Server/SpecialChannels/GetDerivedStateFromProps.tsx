function GetDerivedStateFromProps(props: any) {
  const res = props.guild.channels;

  let channels = [];

  for (let channel of res) {
    channel["color"] = 0;

    if (!channel["name"].startsWith("#")) {
      if (channel["id"] !== 0) {
        channel["name"] = "#" + channel["name"];
      }
    }

    channels.push(channel);
  }

  const noneRole = channels.findIndex((x) => x.id == 0);
  if (noneRole === -1) {
    channels.push({
      id: 0,
      name: "None",
      color: 0,
      permission_new: "0",
      permission: 0,
      managed: false,
    });
  }

  props.guild["channels"] = channels;

  return props;
}

export default GetDerivedStateFromProps;
