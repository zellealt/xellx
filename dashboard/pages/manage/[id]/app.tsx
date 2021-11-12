import type { NextPage } from "next";
import * as React from "react";
import { ServerManageContext } from "../../../contexts/ServerManageContext";
import AutoRole from "../../../components/plugins/built-in/AutoRole";
import Overview from "../../../server-manager-pages/overview";
import Plugins from "../../../server-manager-pages/plugins";
import AuditLog from "../../../components/plugins/built-in/AuditLog";
import { GuildContext } from "../../../contexts/GuildContext";

const ServerManagerApp: NextPage = () => {
  const { page, setPage } = React.useContext(ServerManageContext);
  const { guild, setGuild } = React.useContext<any>(GuildContext);

  console.log(guild);

  // if (guild === undefined) return <div>False</div>;

  return (
    <React.Fragment>
      {page === "overview" && <Overview />}
      {page === "plugins" && <Plugins />}
      {page === "auto-role-plugin" && <AutoRole />}
      {page === "auditlog-plugin" && <AuditLog />}
    </React.Fragment>
  );
};

export default ServerManagerApp;
