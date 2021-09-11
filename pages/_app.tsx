import App from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Header from "@/original/Layout/Header/Header";
import Router from "next/router";
import OverviewSkeletonLayer from "@/shimmered/Server/Overview/Layer";
import React, { Fragment } from "react";
import SelectorSkeletonLayer from "@/shimmered/Selector/Layer";
import PluginsSkeletonLayer from "@/shimmered/Server/Plugins/Layer";
import StatsSkeletonLayer from "@/shimmered/Stats/Layer";
import AuditLogSkeletonLayer from "@/shimmered/Server/AuditLog/Layer";
import ServerSettingsSkeletonLayer from "@/shimmered/Server/Settings/Layer";
import SettingsSkeletonLayer from "@/shimmered/Settings/Layer";
import LoadingBar from "react-top-loading-bar";

function changeSystemDarkMode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const changeSystemDarkModeScript = `
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
`;

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
    // Logging to prove _app.js only mounts once,
    // but initializing router events here will also accomplishes
    // goal of setting state on route change

    const body = document.getElementsByTagName("body")[0];
    body.className = "dark:bg-gray-900";

    changeSystemDarkMode();

    // On change system dark mode
    var s = document.createElement("script");
    s.type = "text/javascript";
    var code = `
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      ${changeSystemDarkModeScript}
    });
    `;
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }

    Router.events.on("routeChangeStart", (page: any) => {
      if (page.includes("overview")) {
        this.setState({ isOverviewLoading: true, loading: true });
      } else if (page.includes("server") && page.includes("plugins")) {
        this.setState({ isPluginsLoading: true, loading: true });
      } else if (page.includes("stat")) {
        this.setState({ isStatsLoading: true, loading: true });
      } else if (page.includes("server") && page.includes("settings")) {
        this.setState({ isServerSettingsLoading: true, loading: true });
      } else if (page.includes("settings")) {
        this.setState({ isSettingsLoading: true, loading: true });
      } else if (page.includes("server") && page.includes("auditlog")) {
        this.setState({ isAuditLogLoading: true, loading: true });
      } else {
        this.setState({ isHomeLoading: true, loading: true });
      }
      changeSystemDarkMode();
    });

    Router.events.on("routeChangeComplete", () => {
      this.setState({
        isPluginsLoading: false,
        isOverviewLoading: false,
        isHomeLoading: false,
        isStatsLoading: false,
        isAuditLogLoading: false,
        isSettingsLoading: false,
        isServerSettingsLoading: false,
        loading: false,
      });
    });

    Router.events.on("routeChangeError", () => {
      this.setState({
        isPluginsLoading: false,
        isHomeLoading: false,
        isOverviewLoading: false,
        isAuditLogLoading: false,
        isSettingsLoading: false,
        isServerSettingsLoading: false,
        loading: false,
      });
    });
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

        <Provider session={pageProps.session}>
          <Header />
          {loading || <Component {...pageProps} />}
        </Provider>
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
