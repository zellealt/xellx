import ChangeSystemDarkMode from "app/DarkMode/ChangeSystemDarkMode";
import ShimmeredRoutes from "app/Routes/ShimmeredRoutes";
import { Router } from "next/router";

const routeChangeStart = (that: any) => {
  Router.events.on("routeChangeStart", (page: any) => {
    ChangeSystemDarkMode(document, window);
    return ShimmeredRoutes(page, that);
  });
};

export default routeChangeStart;
