import * as React from "react";
import MUIAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GoBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import formatUserIcon from "../client-lib/formatUserIcon";
import { SessionContext } from "../contexts/SessionContext";
import AccountPopup from "./AccountPopup";
const lightColor = "rgba(255, 255, 255, 0.7)";

interface AppBarProps {
  onDrawerToggle: () => void;
  title: any;
  children: any;
}

export default function AppBar(props: AppBarProps) {
  const { onDrawerToggle, title } = props;
  const { session, setSession } = React.useContext(SessionContext);

  const router = useRouter();

  return (
    <React.Fragment>
      <MUIAppBar
        enableColorOnDark={true}
        color="primary"
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="https://github.com/zelxd/xellx"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: lightColor,
                  "&:hover": {
                    color: "common.white",
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Xellx Github
              </Link>
            </Grid>
            <Grid item>
              <AccountPopup />
            </Grid>
          </Grid>
        </Toolbar>
      </MUIAppBar>
      <MUIAppBar
        enableColorOnDark={true}
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Go back">
                <IconButton color="inherit">
                  <GoBackIcon onClick={() => router.back()} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Setup
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </MUIAppBar>
      {props.children}
    </React.Fragment>
  );
}
