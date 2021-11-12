import * as React from "react";
import Grid from "@mui/material/Grid";
import { GuildContext } from "../contexts/GuildContext";
import { ServerAuditlog } from "../components/ServerAuditlog";
import { ServerStatistics } from "../components/ServerStatistics";
import { ServerPlugins } from "../components/ServerPlugins";

const Overview = () => {
  const { guild, setGuild } = React.useContext(GuildContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={4}>
        <ServerStatistics guild={guild!} />
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <ServerAuditlog guild={guild!} />
      </Grid>
      {/* <Grid item xs={12} md={12} lg={4}>
        <ServerPlugins guild={guild!} />
      </Grid> */}
    </Grid>
  );
};

export default Overview;
