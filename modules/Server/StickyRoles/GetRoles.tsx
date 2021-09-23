function GetRoles(that: any) {
  const filteredArray = that.props.guild.roles.filter((x: any) => {
    return that.state.selected.indexOf(x) < 0;
  });

  const filteredRoles = filteredArray.filter((x: { id: number }) => {
    return x.id !== 0;
  });

  return filteredRoles;
}

export default GetRoles;
