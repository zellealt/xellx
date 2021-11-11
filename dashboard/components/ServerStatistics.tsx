import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SessionContext } from "../contexts/SessionContext";
import formatGuildIcon from "../client-lib/formatGuildIcon";
import { Box, Grid } from "@mui/material";
import randomMaterialColour from "../client-lib/randomMaterialColour";
import Link from "next/link";
import { Guild } from "../types/Types";
import { ServerCard } from "./ServerCard";
import StatCard from "./statistics/Card";

export const ServerStatistics = (props: { guild: Guild; section?: any }) => {
  const { session, setSession } = React.useContext(SessionContext);
  const { guild, section } = props;
  const offlineMembers =
    guild?.approximate_member_count - guild?.approximate_presence_count;
  const colour = randomMaterialColour()[500];

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gap: 10,
      }}
    >
      <ServerCard guild={guild} />
      <Grid container spacing={2}>
        <Grid xs={12} xl={6} item>
          <StatCard
            title="Current Online Members"
            value={guild?.approximate_presence_count?.toString()}
          />
        </Grid>
        <Grid item xs={12} xl={6}>
          <StatCard
            title="Current Offline Members"
            value={offlineMembers?.toString()}
          />
        </Grid>
      </Grid>
    </div>
  );
};
