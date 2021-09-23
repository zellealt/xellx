function ComponentWillUnmount(window: WindowLocalStorage, that: any) {
  window.localStorage.setItem(
    "sticky_roles",
    JSON.stringify(that.state.selected)
  );
}

export default ComponentWillUnmount;
