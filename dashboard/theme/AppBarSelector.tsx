import { useRouter } from "next/router";
import React from "react";
import Selector from "./appbars-content/Selector";
import Server from "./appbars-content/Server";
import AppBar from "./AppBar";
import { GuildContext } from "../contexts/GuildContext";
import { Skeleton } from "@mui/material";

interface AppBarSelectorProps {
  onDrawerToggle: () => void;
}

export default function AppBarSelector(props: AppBarSelectorProps) {
  const router = useRouter();

  const { guild, setGuild } = React.useContext(GuildContext);

  let appBar: { title: any; page: any } = { title: "Error", page: "none" };

  if (router.asPath.includes("manage"))
    appBar = {
      title: guild?.name || <Skeleton width={300} animation="wave" />,
      page: "server",
    };
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
