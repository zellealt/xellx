import discordGuild from "@/interfaces/discordGuild";
import PageHeader from "@/original/Layout/PageHeader";
import DashBoardGrid from "./Grid";
import GoBackBtn from "@/original/Buttons/GoBack";
import React from "react";
import SideNav from "@/shimmered/Layout/ServerHeadNavigation/Subnav";

const AuditLogLayer = () => {
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
          <SideNav currentPage="auditlog" padding={false}>
            <DashBoardGrid />
          </SideNav>
        </>
      </PageHeader>
    </>
  );
};

export default AuditLogLayer;
