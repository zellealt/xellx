import type { AppProps } from "next/app";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "../theme/Navigator";
import Content from "../theme/Content";
import { drawerWidth, exportedTheme, Copyright } from "../theme/Paperbase";
import AppBar from "../theme/AppBarSelector";
import getUserDetails from "../client-lib/getUserDetails";
import { GuildContextProvider } from "../contexts/GuildContext";
import { SessionContextProvider } from "../contexts/SessionContext";
import "../styles/globals.css";
import ServerComponentLoader from "../client-loader-components/ServerComponentLoader";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { ServerManageContextProvider } from "../contexts/ServerManageContext";
import { SnackbarProvider } from "notistack";
TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(exportedTheme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    getUserDetails()
      .then((data) => {
        if (data?.msg === "Unauthorized") {
          setSession(false);
        } else {
          setSession(data);
        }
      })
      .catch(() => {
        setSession(false);
      });
  }, []);

  const [session, setSession] = React.useState<any>(undefined);
  const [guild, setGuild] = React.useState<any>(undefined);
  const [page, setPage] = React.useState<any>(undefined);

  return (
    <SessionContextProvider value={{ session, setSession }}>
      <GuildContextProvider value={{ guild, setGuild }}>
        <ServerManageContextProvider value={{ page, setPage }}>
          <ThemeProvider theme={exportedTheme}>
            <SnackbarProvider maxSnack={3}>
              <ServerComponentLoader>
                <Box sx={{ display: "flex", minHeight: "100vh" }}>
                  <CssBaseline />
                  <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                  >
                    {isSmUp ? null : (
                      <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                      />
                    )}
                    <Navigator
                      PaperProps={{ style: { width: drawerWidth } }}
                      sx={{ display: { sm: "block", xs: "none" } }}
                    />
                  </Box>
                  <Box
                    sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                  >
                    <AppBar onDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={{ flex: 1, py: 6, px: 4 }}>
                      <Component {...pageProps} />
                    </Box>
                    <Box component="footer" sx={{ p: 2 }}>
                      <Copyright />
                    </Box>
                  </Box>
                </Box>
              </ServerComponentLoader>
            </SnackbarProvider>
          </ThemeProvider>
        </ServerManageContextProvider>
      </GuildContextProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
