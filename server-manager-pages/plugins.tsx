import type { NextPage } from "next";
import * as React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { GuildContext } from "../contexts/GuildContext";
import { ServerAuditlog } from "./components/ServerAuditlog";
import { ServerStatistics } from "./components/ServerStatistics";
import { ServerPlugins } from "./components/ServerPlugins";
import PluginCard from "./components/PluginCard";
import PluginName from "./components/PluginName";
import BuiltInComponents from "./components/plugins/built-in/Components";

const Plugins = () => {
  const { guild, setGuild } = React.useContext(GuildContext);

  return (
    <Grid container spacing={2}>
      <BuiltInComponents />
    </Grid>
  );
};

export default Plugins;
