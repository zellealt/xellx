import discordGuild from "@/interfaces/discordGuild";
import React from "react";
import AuditLogX from "@/shimmeredModules/Server/AuditLogFullPage";

class DashBoardGrid extends React.Component {
  render() {
    return (
      <div>
        <AuditLogX />
      </div>
    );
  }
}

export default DashBoardGrid;
