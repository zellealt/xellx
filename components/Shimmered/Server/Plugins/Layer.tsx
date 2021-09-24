import PageHeader from "@/original/Layout/PageHeader";
import DashBoardGrid from "./Grid";
import GoBackBtn from "@/original/Buttons/GoBack";
import React from "react";
import SideNav from "@/shimmered/Layout/ServerHeadNavigation/Subnav";

function PluginsSkeletonLayer() {
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
          <SideNav currentPage="plugins" padding={true}>
            <DashBoardGrid />
          </SideNav>
        </>
      </PageHeader>
    </>
  );
}

export default PluginsSkeletonLayer;
