import * as React from "react";
import { SessionContext } from "../../contexts/SessionContext";
import ReactTimeAgo from "react-time-ago";
import { Avatar } from "@mui/material";
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import randomMaterialColour from "../../client-lib/randomMaterialColour";
import { Guild, Role } from "../../types/Types";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import auditLogTypeIcon from "../../builders/auditLogTypeIcon";

const capitalize = (s: string | any[]) =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

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

  const columns: GridColDef[] = [
    {
      field: "executor",
      description: "The person who created this log.",
      headerName: "Executor",
      minWidth: 100,
      flex: 0.3,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            gap: 10,
            placeItems: "center",
          }}
        >
          <Avatar src={params.value.avatar} />
          {params.value.user}
        </div>
      ),
    },
    {
      field: "message",
      description: "The log message.",
      headerName: "Message",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      description: "The way the log was created.",
      width: 120,
      renderCell: (params) => {
        const Icon = auditLogTypeIcon(params.value);

        return (
          <>
            <Icon />
            <span
              style={{
                marginLeft: 3,
                marginTop: 1,
                fontWeight: 500,
              }}
            >
              {capitalize(params.value.toLowerCase())}
            </span>
          </>
        );
      },
    },
    {
      field: "date_created",
      headerName: "Date Created",
      description: "The date and time when the log was created.",
      width: 130,
      renderCell: (params) => (
        <ReactTimeAgo date={params.value} locale="en-US" />
      ),
    },
    {
      field: "id",
      headerName: "ID",
      description: "Log ID for support or developers.",
      hide: devMode ? false : true,
      width: 110,
    },
  ];

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

  return (
    <Box sx={{ height: { xs: 500, lg: "100%" }, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};
