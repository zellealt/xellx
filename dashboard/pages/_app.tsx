import type { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";
import Providers from "../_app/Providers";
import ThemeBoilerplate from "../_app/ThemeBoilerplate";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <ThemeBoilerplate>
      <Component {...pageProps} />
    </ThemeBoilerplate>
  </Providers>
);

export default MyApp;
