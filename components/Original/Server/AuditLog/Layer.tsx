import discordGuild from "@/interfaces/discordGuild";
import PageHeader from "@/original/Layout/PageHeader";
import DashBoardGrid from "./Grid";
import GoBackBtn from "@/original/Buttons/GoBack";
import React from "react";
import SideNav from "@/original/Layout/ServerHeadNavigation/Subnav";

const AuditLogLayer = (props: { guild: discordGuild }) => {
  return (
    <>
      <PageHeader
        padding={false}
        fullWidth={true}
        leftContent={<GoBackBtn />}
        leftTitle="Manage Server"
        rightContent={null}
        rightTitle={null}
      >
        <>
          <SideNav padding={false}>
            <DashBoardGrid guild={props.guild} />
          </SideNav>
        </>
      </PageHeader>
    </>
  );
};

export default AuditLogLayer;
