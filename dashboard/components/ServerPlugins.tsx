import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SessionContext } from "../contexts/SessionContext";
import { Grid } from "@mui/material";
import { Guild } from "../types/Types";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { green, red } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
export const ServerPlugins = (props: { guild: Guild; section?: any }) => {
  const { session, setSession } = React.useContext(SessionContext);
  const { guild, section } = props;

  return (
    <Card variant="outlined">
      <Typography
        sx={{ textAlign: "center", paddingTop: 2 }}
        variant="h5"
        component="div"
      >
        Plugins
      </Typography>
      <CardContent>
        <div
          style={{
            width: "100%",
            display: "grid",
            gap: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} xl={6} item>
              <Card variant="outlined">
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 5,
                    }}
                  >
                    <NoteAddIcon fontSize="small" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      placeItems: "center",
                      gap: 8,
                    }}
                  >
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="h6"
                      component="div"
                    >
                      Audit Log
                    </Typography>
                    <CheckIcon color="success" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} xl={6} item>
              <Card variant="outlined">
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 5,
                    }}
                  >
                    <LocalOfferIcon fontSize="small" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      placeItems: "center",
                      gap: 8,
                    }}
                  >
                    <Typography
                      sx={{ textAlign: "center" }}
                      variant="h6"
                      component="div"
                    >
                      Sticky Roles
                    </Typography>
                    <ClearIcon color="error" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};
