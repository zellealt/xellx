import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SessionContext } from "../contexts/SessionContext";
import formatGuildIcon from "../client-lib/formatGuildIcon";
import { Box } from "@mui/material";
import { ServerIcon } from "./ServerIcon";
import randomMaterialColour from "../client-lib/randomMaterialColour";
import Link from "next/link";
import { Guild } from "../types/Types";
import Skeleton from "@mui/material/Skeleton";

export const ServerCard = (props: { guild: Guild; section?: any }) => {
  const { session, setSession } = React.useContext(SessionContext);
  const { guild, section } = props;
  const loading = !guild?.name;
  const colour = randomMaterialColour()[500];

  return (
    <Card variant="outlined" sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ overflow: "hidden" }}>
        {loading ? (
          <Skeleton variant="rectangular" animation="wave" height={175} />
        ) : (
          <CardMedia
            component="img"
            height="140"
            alt=""
            sx={{
              height: 175,
              transform: "scale(1.2)",
              filter: "blur(5px)",
              bgcolor: colour,
            }}
            src={formatGuildIcon(guild?.id, guild?.icon)}
          />
        )}
      </Box>
      {!loading && (
        <ServerIcon
          guild={{
            name: guild?.name,
            icon: guild?.icon,
            id: guild?.id,
          }}
          explicitColour={colour}
          sx={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 30,
            left: 0,
            right: 0,
            width: 100,
            height: 100,
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            border: 2,
          }}
        />
      )}

      <CardContent>
        <Typography
          sx={{
            marginBottom: section ? 0 : -1,
            textAlign: "center",
          }}
          gutterBottom={section ? true : false}
          variant="h5"
          component="div"
        >
          {guild?.name}
          {loading && <Skeleton animation="wave" />}
        </Typography>
      </CardContent>
      {section && <CardActions>{section}</CardActions>}
    </Card>
  );
};
