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
        content={
          <>
            <SideNav
              currentPage="plugins"
              padding={true}
              content={<DashBoardGrid />}
            />
          </>
        }
      />
    </>
  );
}

export default PluginsSkeletonLayer;
