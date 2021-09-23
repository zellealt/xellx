function AddRole(state: any, that: any) {
  that.setState((prevState: { selected: any }, props: any) => ({
    selected: [...prevState.selected, state],
  }));
}

export default AddRole;
