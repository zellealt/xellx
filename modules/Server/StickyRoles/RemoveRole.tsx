const RemoveRole = (state: any, that: any) => {
  let filteredArray = that.state.selected.filter((role: any) => role !== state);
  that.setState({
    selected: filteredArray,
  });
};

export default RemoveRole;
