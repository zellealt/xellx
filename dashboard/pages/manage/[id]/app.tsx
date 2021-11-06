import type { NextPage } from "next";
import * as React from "react";
import { GuildContext } from "../../../contexts/GuildContext";
import { ServerManageContext } from "../../../contexts/ServerManageContext";
import AutoRole from "../../../server-manager-pages/components/plugins/built-in/AutoRole";
import Overview from "../../../server-manager-pages/overview";
import Plugins from "../../../server-manager-pages/plugins";

const ServerManagerApp: NextPage = () => {
  const { guild, setGuild } = React.useContext(GuildContext);
  const { page, setPage } = React.useContext(ServerManageContext);

  return (
    <React.Fragment>
      {page === "overview" && <Overview />}
      {page === "plugins" && <Plugins />}
      {page === "auto-role-plugin" && <AutoRole guild={guild!} />}
    </React.Fragment>
  );
};

export default ServerManagerApp;
