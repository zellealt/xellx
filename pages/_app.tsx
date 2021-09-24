import App from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import Header from "@/original/Layout/Header/Header";
import React, { Fragment } from "react";
import OverviewSkeletonLayer from "@/shimmered/Server/Overview/Layer";
import SelectorSkeletonLayer from "@/shimmered/Selector/Layer";
import PluginsSkeletonLayer from "@/shimmered/Server/Plugins/Layer";
import StatsSkeletonLayer from "@/shimmered/Stats/Layer";
import AuditLogSkeletonLayer from "@/shimmered/Server/AuditLog/Layer";
import ServerSettingsSkeletonLayer from "@/shimmered/Server/Settings/Layer";
import SettingsSkeletonLayer from "@/shimmered/Settings/Layer";
import LoadingBar from "react-top-loading-bar";
import "../styles/three-dots.min.css";
import componentDidMountMethod from "app/Methods/componentDidMount";
import Footer from "@/original/Layout/Footer/Footer";
class MyApp extends App {
  state = {
    isStatsLoading: false,
    isOverviewLoading: false,
    isPluginsLoading: false,
    isHomeLoading: false,
    isAuditLogLoading: false,
    isServerSettingsLoading: false,
    isSettingsLoading: false,
    loading: false,
  };

  componentDidMount() {
    componentDidMountMethod(document, window, this);
  }

  render() {
    const { Component, pageProps } = this.props;
    const {
      isStatsLoading,
      isOverviewLoading,
      isPluginsLoading,
      isHomeLoading,
      isAuditLogLoading,
      isSettingsLoading,
      isServerSettingsLoading,
      loading,
    } = this.state;
    return (
      <Fragment>
        <LoadingBar color="#7c48e5" progress={this.state.loading ? 30 : 100} />

        <AuthProvider session={pageProps.session}>
          <Header />
          {loading || <Component {...pageProps} />}
        </AuthProvider>

        {isHomeLoading && <SelectorSkeletonLayer />}
        {isOverviewLoading && <OverviewSkeletonLayer />}
        {isPluginsLoading && <PluginsSkeletonLayer />}
        {isStatsLoading && <StatsSkeletonLayer />}
        {isAuditLogLoading && <AuditLogSkeletonLayer />}
        {isSettingsLoading && <SettingsSkeletonLayer />}
        {isServerSettingsLoading && <ServerSettingsSkeletonLayer />}
      </Fragment>
    );
  }
}

export default MyApp;
