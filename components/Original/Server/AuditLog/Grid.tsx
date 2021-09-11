import discordGuild from "@/interfaces/discordGuild";
import React from "react";
import AuditLogX from "@/modules/Server/AuditLogFullPage";

class DashBoardGrid extends React.Component<{ guild: discordGuild }> {
  render() {
    return (
      <div>
        <AuditLogX guild={this.props.guild} />
      </div>
    );
  }
}

export default DashBoardGrid;
