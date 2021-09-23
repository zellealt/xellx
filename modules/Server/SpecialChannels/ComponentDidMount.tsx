async function ComponentDidMount(that: any, window: WindowSessionStorage) {
  let jsonRes: any;
  if (window.sessionStorage.getItem(that.props.id) === null) {
    jsonRes = that.props.guild.config;

    if (jsonRes[that.props.id] == null) {
      jsonRes[that.props.id] = 0;
    }

    jsonRes = jsonRes[that.props.id];
  } else {
    jsonRes = window.sessionStorage.getItem(that.props.id);
  }
  const { session, loading } = that.props;

  const index = that.props.guild.channels.findIndex(
    (x: any) => x.id == jsonRes
  );

  that.setState({
    selected: that.props.guild.channels[index],
  });
  that.props.setShimmer(false);
}

export default ComponentDidMount;
