const RouteErrorState = (that: any) => {
  that.setState({
    isPluginsLoading: false,
    isHomeLoading: false,
    isOverviewLoading: false,
    isAuditLogLoading: false,
    isSettingsLoading: false,
    isServerSettingsLoading: false,
    loading: false,
  });
};

export default RouteErrorState;
