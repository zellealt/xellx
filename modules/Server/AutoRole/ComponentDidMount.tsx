async function ComponentDidMount(that: any, window: WindowSessionStorage) {
  let jsonRes: any;

  if (sessionStorage.getItem("auto_role") === null) {
    jsonRes = that.props.guild.config;

    if (jsonRes.auto_role == null) {
      jsonRes.auto_role = 0;
    }

    jsonRes = jsonRes.auto_role;
  } else {
    jsonRes = window.sessionStorage.getItem("auto_role");
  }

  const index = that.props.guild.roles.findIndex((x: any) => x.id == jsonRes);

  that.setState({
    selected: that.props.guild.roles[index],
    alert: false,
    rateLimited: false,
  });
}

export default ComponentDidMount;
