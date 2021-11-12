import type { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";
import Providers from "../_app/Providers";
import ThemeBoilerplate from "../_app/ThemeBoilerplate";
import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  return (
    <Providers>
      <ThemeBoilerplate>
        <Component {...pageProps} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeBoilerplate>
    </Providers>
  );
};

export default MyApp;
