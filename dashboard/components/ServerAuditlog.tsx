import * as React from "react";
import { SessionContext } from "../contexts/SessionContext";
import ReactTimeAgo from "react-time-ago";
import { Avatar, Skeleton } from "@mui/material";
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import randomMaterialColour from "../client-lib/randomMaterialColour";
import { Guild, Role } from "../types/Types";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import auditLogTypeIcon from "../builders/auditLogTypeIcon";
import columns from "./audit-log/columns";
import shimmerColumns from "./audit-log/shimmerColumns";

export const convertIDToRoleName = (guild_roles: Role[], text: string) => {
  const id = text.replace(/[^0-9]/g, "");
  if (id === "") return text;
  if (id === "0") return text.replace("0", '"None"');

  const name = guild_roles.find((x) => x.id.toString() === id.toString())?.name;
  if (name) {
    const result = text.replace(id, '"' + name + '"');

    return result;
  } else {
    return text.replace(id, '"Deleted Role"');
  }
};

export const ServerAuditlog = (props: { guild: Guild; section?: any }) => {
  const [devMode, setDevMode] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDevMode(event.target.checked);
  };

  const { session, setSession } = React.useContext(SessionContext);
  const { guild, section } = props;
  const colour = randomMaterialColour()[500];

  let rows: {
    id: string;
    executor: { user: string | undefined; avatar: string | undefined };
    message: string;
    type: string;
    date_created: Date;
  }[] = [];

  guild?.logs?.map((log) =>
    rows.push({
      id: log.id,
      executor: { user: log.user_tag, avatar: log.user_avatar },
      message: convertIDToRoleName(guild?.roles, log.message),
      type: log.type,
      date_created: new Date(log.date_created),
    })
  );

  if (rows.length === 0)
    for (let i = 0; i < 10; i++) {
      rows.push({
        id: i.toString(),
        executor: { user: "", avatar: "" },
        message: "",
        type: "",
        date_created: new Date(),
      });
    }

  const loading = !guild?.name;

  return (
    <Box sx={{ height: { xs: 500, lg: "100%" }, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={loading ? shimmerColumns : columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};
