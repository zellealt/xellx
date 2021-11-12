import { GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import auditLogTypeIcon from "../../builders/auditLogTypeIcon";
import ReactTimeAgo from "react-time-ago";
import { Guild, Role } from "../../types/Types";

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
    renderCell: (params) => <ReactTimeAgo date={params.value} locale="en-US" />,
  },
];

export default columns;
