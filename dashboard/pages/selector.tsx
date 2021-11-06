import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SessionContext } from "../contexts/SessionContext";
import formatGuildIcon from "../client-lib/formatGuildIcon";
import { Box } from "@mui/material";
import { ServerIcon } from "../server-manager-pages/components/ServerIcon";
import randomMaterialColour from "../client-lib/randomMaterialColour";
import Link from "next/link";
import { ServerCard } from "../server-manager-pages/components/ServerCard";

const Selector: NextPage = () => {
  const { session, setSession } = React.useContext(SessionContext);

  return (
    <Box sx={{ margin: "-10px" }}>
      <Grid container spacing={2}>
        {session?.guilds.map((guild) => {
          return (
            <Grid
              sx={{
                width: { xs: "100%", md: "50%", lg: "33%", xl: "25%" },
              }}
              item
            >
              <ServerCard
                section={
                  <Link href={`/manage/${guild?.id}/app`}>
                    <Button sx={{ width: "100%" }} size="medium">
                      Manage
                    </Button>
                  </Link>
                }
                guild={guild}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Selector;
