import { GridColDef } from "@mui/x-data-grid";
import { Skeleton } from "@mui/material";

const shimmerColumns: GridColDef[] = [
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
        <Skeleton animation="wave" variant="circular" width={30} height={30} />
        <Skeleton animation="wave" height={25} width={70} />
      </div>
    ),
  },
  {
    field: "message",
    description: "The log message.",
    headerName: "Message",
    minWidth: 150,
    renderCell: (params) => (
      <Skeleton animation="wave" height={25} width={320} />
    ),
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    description: "The way the log was created.",
    width: 120,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          gap: 10,
          placeItems: "center",
        }}
      >
        <Skeleton animation="wave" width={30} height={50} />
        <Skeleton animation="wave" height={25} width={40} />
      </div>
    ),
  },
  {
    field: "date_created",
    headerName: "Date Created",
    description: "The date and time when the log was created.",
    width: 130,
    renderCell: (params) => (
      <Skeleton animation="wave" height={25} width={60} />
    ),
  },
];

export default shimmerColumns;
