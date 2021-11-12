import type { NextPage } from "next";
import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SessionContext } from "../contexts/SessionContext";
import { Box } from "@mui/material";
import Link from "next/link";
import { ServerCard } from "../components/ServerCard";

const Selector: NextPage = () => {
  const { session, setSession } = React.useContext(SessionContext);

  return (
    <Box sx={{ margin: "-10px" }}>
      <Grid container spacing={2}>
        {session?.guilds.map((guild) => {
          return (
            <Grid
              key={guild?.name}
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
