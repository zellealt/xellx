import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import { ServerManageContext } from "../../../contexts/ServerManageContext";
import { GuildContext } from "../../../contexts/GuildContext";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";

const AuditLog = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [role, setRole] = React.useState<any>(null);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const { guild, setGuild } = React.useContext(GuildContext);
  const { page, setPage } = React.useContext(ServerManageContext);

  let selection: {
    label: string;
    id: number;
  }[] = [];

  guild?.roles?.map((role) =>
    selection.push({
      label: role.name,
      id: role.id,
    })
  );

  React.useEffect(() => {
    const role = guild?.roles?.find((x) => x.id === guild?.config?.auto_role);
    console.log({ label: role! ? role.name : "", id: role! ? role.id : 0 });
    setRole({ label: role! ? role.name : "", id: role! ? role.id : 0 });
  }, []);

  const saveChanges = () => {
    setFetching(true);

    let roleId: number = role?.id ? role?.id : 0;

    const url =
      "http://" +
      process.env.NEXT_PUBLIC_API_URI +
      "/api/discord/server/" +
      guild?.id +
      "/set/auto-role?roleId=" +
      roleId;

    fetch(url, {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        const modifiedGuild = guild!;
        modifiedGuild.config.auto_role = roleId;
        setGuild(modifiedGuild);
        enqueueSnackbar("Successfully updated", { variant: "success" });
      } else {
        enqueueSnackbar(res.statusText, { variant: "error" });
      }
      setFetching(false);
    });
  };

  return (
    <Stack alignItems="center" spacing={2}>
      <IconButton
        onClick={() => setPage("plugins")}
        color="primary"
        aria-label="go back"
        component="span"
      >
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h4" component="div">
        Audit Log
      </Typography>
      <Typography variant="subtitle1" component="div">
        Audit all significant actions to the logs
      </Typography>

        

      <LoadingButton
        color="primary"
        onClick={saveChanges}
        loading={fetching}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default AuditLog;
