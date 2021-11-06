import { useRouter } from "next/router";
import React from "react";
import Selector from "./appbars-content/Selector";
import Server from "./appbars-content/Server";
import AppBar from "./AppBar";
import { GuildContext } from "../contexts/GuildContext";

interface AppBarSelectorProps {
  onDrawerToggle: () => void;
}

export default function AppBarSelector(props: AppBarSelectorProps) {
  const router = useRouter();

  const { guild, setGuild } = React.useContext(GuildContext);

  let appBar = { title: "Error", page: "none" };

  if (router.asPath.includes("manage"))
    appBar = { title: guild?.name || "Managing Server", page: "server" };
  if (router.asPath.includes("selector"))
    appBar = { title: "Selector", page: "selector" };

  return (
    <React.Fragment>
      <AppBar title={appBar.title} onDrawerToggle={props.onDrawerToggle}>
        {appBar.page === "server" && (
          <Server onDrawerToggle={props.onDrawerToggle} />
        )}
        {appBar.page === "selector" && (
          <Selector onDrawerToggle={props.onDrawerToggle} />
        )}
      </AppBar>
    </React.Fragment>
  );
}
