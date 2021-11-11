import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { exportedTheme } from "../theme/Paperbase";
import getUserDetails from "../client-lib/getUserDetails";
import { GuildContextProvider } from "../contexts/GuildContext";
import { SessionContextProvider } from "../contexts/SessionContext";
import ServerComponentLoader from "../client-loader-components/ServerComponentLoader";
import { ServerManageContextProvider } from "../contexts/ServerManageContext";
import { SnackbarProvider } from "notistack";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

const _provider = (props: { children: any }) => {
  React.useEffect(() => {
    TimeAgo.addDefaultLocale(en);

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
            <SnackbarProvider maxSnack={1}>
              <ServerComponentLoader>{props.children}</ServerComponentLoader>
            </SnackbarProvider>
          </ThemeProvider>
        </ServerManageContextProvider>
      </GuildContextProvider>
    </SessionContextProvider>
  );
};

export default _provider;
