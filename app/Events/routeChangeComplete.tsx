import { Router } from "next/router";
import SetRouteState from "app/Routes/RouteCompleteStates";

const routeChangeComplete = (that: any) => {
  Router.events.on("routeChangeComplete", () => {
    SetRouteState(that);
  });
};

export default routeChangeComplete;
