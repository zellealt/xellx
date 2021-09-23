function ComponentWillUnmount(that: any, window: WindowSessionStorage) {
  window.sessionStorage.setItem(that.props.id, that.state.selected.id);
}

export default ComponentWillUnmount;
