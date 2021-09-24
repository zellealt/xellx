const ShimmeredRoutes = (page: any, that: any) => {
  if (page.includes("overview")) {
    that.setState({ isOverviewLoading: true, loading: true });
  } else if (page.includes("server") && page.includes("plugins")) {
    that.setState({ isPluginsLoading: true, loading: true });
  } else if (page.includes("stat")) {
    that.setState({ isStatsLoading: true, loading: true });
  } else if (page.includes("server") && page.includes("settings")) {
    that.setState({ isServerSettingsLoading: true, loading: true });
  } else if (page.includes("settings")) {
    that.setState({ isSettingsLoading: true, loading: true });
  } else if (page.includes("server") && page.includes("auditlog")) {
    that.setState({ isAuditLogLoading: true, loading: true });
  } else if (page.includes("home")) {
    return;
  } else if (page.includes("commands")) {
    return;
  } else {
    that.setState({ isHomeLoading: true, loading: true });
  }
};

export default ShimmeredRoutes;
