function ComponentWillUnmount(that: any, window: WindowSessionStorage) {
  window.sessionStorage.setItem("auto_role", that.state.selected.id);
}

export default ComponentWillUnmount;
