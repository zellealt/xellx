import PluginCard from "../../PluginCard";
import PluginName from "../../PluginName";
import AutoRole from "./AutoRole";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { ServerManageContext } from "../../../contexts/ServerManageContext";
import { GuildContext } from "../../../contexts/GuildContext";

const BuiltIn = () => {
  const { page, setPage } = React.useContext(ServerManageContext);
  const { guild, setGuild } = React.useContext(GuildContext);

  return (
    <React.Fragment>
      <Grid item>
        <PluginCard
          type="Built-in"
          name={<PluginName name="Audit Log" activated={true} />}
          version="Alpha 0.0.1"
          description="Quickly review actions on your server"
          onClick={() => setPage("auditlog-plugin")}
        />
      </Grid>
      <Grid item>
        <PluginCard
          type="Built-in"
          name={
            <PluginName
              name="Auto Role"
              activated={guild?.config?.auto_role !== 0}
            />
          }
          version="Release 0.1"
          description="Assign all new members a role"
          onClick={() => setPage("auto-role-plugin")}
        />
      </Grid>
    </React.Fragment>
  );
};

export default BuiltIn;
