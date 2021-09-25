import React from "react";
import router from "next/router";

const check_session = (
  session: any,
  loading: boolean,
  shallLogin: string | boolean
) => {
  const empty = React.createElement("div", {});

  if (!loading) {
    if (!session) {
      if (shallLogin == "do not redirect") {
        return empty;
      }
      if (shallLogin) {
        router.push({
          pathname: "/login",
        });
      }
      if (!shallLogin) {
        router.push({
          pathname: "/",
        });
      }
      return empty;
    } else {
      return true;
    }
  } else {
    return empty;
  }
};

export default check_session;
