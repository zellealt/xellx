import RouteErrorState from "app/Routes/RouteErrorStates";
import { Router } from "next/router";

const routeChangeError = (that: any) => {
  Router.events.on("routeChangeError", () => {
    RouteErrorState(that);
  });
};

export default routeChangeError;
