import * as React from "react";
import Grid from "@mui/material/Grid";
import { GuildContext } from "../contexts/GuildContext";
import BuiltInComponents from "../components/plugins/built-in/Components";

const Plugins = () => {
  const { guild, setGuild } = React.useContext(GuildContext);

  return (
    <Grid container spacing={2}>
      <BuiltInComponents />
    </Grid>
  );
};

export default Plugins;
