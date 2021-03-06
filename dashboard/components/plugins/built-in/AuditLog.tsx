import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Collapse, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import { ServerManageContext } from "../../../contexts/ServerManageContext";
import { GuildContext } from "../../../contexts/GuildContext";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { TransitionGroup } from "react-transition-group";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Zoom from "@mui/material/Zoom";

const default_audits = [
  { name: "Deleted Messages", catagory: "Messages" },
  { name: "Edited Messages", catagory: "Messages" },
  { name: "User Bans", catagory: "Punishments" },
  { name: "User Unbans", catagory: "Punishments" },
  { name: "User Kicks", catagory: "Punishments" },
  { name: "Channel Create", catagory: "Channels" },
  { name: "Channel Delete", catagory: "Channels" },
  { name: "Channel Pins Update", catagory: "Channels" },
  { name: "Channel Update", catagory: "Channels" },
  { name: "Emoji Create", catagory: "Emoji" },
  { name: "Emoji Delete", catagory: "Emoji" },
  { name: "Emoji Update", catagory: "Emoji" },
  { name: "Nickname Update", catagory: "User" },
  { name: "Activity Update", catagory: "User" },
  { name: "Roles Update", catagory: "User" },
  { name: "Username Update", catagory: "User" },
  { name: "Invite Create", catagory: "Invite" },
  { name: "Invite Delete", catagory: "Invite" },
];

const AuditLog = () => {
  let categorys = default_audits.map((x) => x?.catagory);
  categorys = categorys.filter(function (item, pos) {
    return categorys.indexOf(item) == pos;
  });

  const [activeCategorys, setActiveCategorys] = React.useState(
    categorys.map((category_name) => ({
      name: category_name,
      active: false,
    }))
  );

  const [audits, setAudits] = React.useState(
    default_audits.map((audit) => ({
      name: audit?.name,
      catagory: audit?.catagory,
      active: false,
    }))
  );

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [fetching, setFetching] = React.useState<boolean>(false);
  const { guild, setGuild } = React.useContext(GuildContext);
  const { page, setPage } = React.useContext(ServerManageContext);

  let selection: {
    label: string;
    id: number;
  }[] = [];

  React.useEffect(() => {
    if (guild?.plugins?.audit_log !== null)
      setAudits(JSON.parse(guild?.plugins?.audit_log));
  }, []);

  const saveChanges = () => {
    setFetching(true);

    const url =
      "http://" +
      process.env.NEXT_PUBLIC_API_URI +
      "/api/discord/server/" +
      guild?.id +
      "/set/audit-log?data=" +
      JSON.stringify(audits);

    fetch(url, {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        const modifiedGuild = guild!;
        modifiedGuild.plugins.audit_log = JSON.stringify(audits);
        setGuild(modifiedGuild);
        enqueueSnackbar("Successfully updated", { variant: "success" });
      } else {
        enqueueSnackbar(res.statusText, { variant: "error" });
      }
      setFetching(false);
    });
  };

  return (
    <Stack justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      <IconButton
        sx={{
          bgcolor: "rgba(135, 194, 112, 0.055)",
        }}
        onClick={() => setPage("plugins")}
        color="secondary"
        aria-label="go back"
        component="div"
      >
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h4" component="div">
        Audit Log
      </Typography>
      <Typography variant="subtitle1" component="div">
        Audit all significant actions to the logs
      </Typography>

      <Stack spacing={1}>
        {activeCategorys.map((category) => (
          <div key={category.name}>
            <Stack direction="row" alignItems="center" gap={1}>
              <IconButton
                onClick={() => {
                  let localActiveCategorys = activeCategorys.slice();
                  const i = localActiveCategorys.findIndex(
                    (x) => x.name === category.name
                  );
                  localActiveCategorys[i].active =
                    localActiveCategorys[i].active != true;

                  setActiveCategorys(localActiveCategorys);
                }}
                sx={{
                  width: 40,
                  height: 40,
                }}
                aria-label="delete"
              >
                <Zoom
                  in={category.active}
                  style={{ position: "absolute" }}
                  {...(category.active ? { timeout: 500 } : {})}
                >
                  <ArrowDropDown />
                </Zoom>
                <Zoom
                  in={!category.active}
                  style={{ position: "absolute" }}
                  {...(!category.active ? { timeout: 500 } : {})}
                >
                  <ArrowDropUp />
                </Zoom>
              </IconButton>
              {category.name}
            </Stack>
            <TransitionGroup>
              {category.active && (
                <Collapse key={category.name}>
                  {audits.map(
                    (audit) =>
                      category.name === audit.catagory && (
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Switch
                                onClick={() => {
                                  let localAudits = audits.slice();
                                  const i = localAudits.findIndex(
                                    (x) => x.name === audit.name
                                  );
                                  localAudits[i].active =
                                    localAudits[i].active != true;

                                  setAudits(localAudits);
                                }}
                                color="secondary"
                                checked={audit.active}
                              />
                            }
                            label={audit.name}
                          />
                        </FormGroup>
                      )
                  )}
                </Collapse>
              )}
            </TransitionGroup>
          </div>
        ))}
      </Stack>

      <LoadingButton
        color="secondary"
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
