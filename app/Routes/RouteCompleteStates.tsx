const RouteCompleteStates = (that: any) => {
  that.setState({
    isPluginsLoading: false,
    isOverviewLoading: false,
    isHomeLoading: false,
    isStatsLoading: false,
    isAuditLogLoading: false,
    isSettingsLoading: false,
    isServerSettingsLoading: false,
    loading: false,
  });
};

export default RouteCompleteStates;
