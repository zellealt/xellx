import { useRouter } from "next/router";
import React from "react";
import FetchServer from "./FetchServer";
import { ServerManageContext } from "../contexts/ServerManageContext";

const ServerComponentLoader = (props: { children: any }) => {
  const router = useRouter();

  const { page, setPage } = React.useContext(ServerManageContext);

  if (page === undefined) setPage("overview");

  return (
    <React.Fragment>
      {router.query.id && <FetchServer />}
      {props.children}
    </React.Fragment>
  );
};

export default ServerComponentLoader;
