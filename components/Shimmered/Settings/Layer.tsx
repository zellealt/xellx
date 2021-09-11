import React from "react";
import Seperator from "@/original/Layout/Seperator";
import Spacer from "@/original/Layout/Spacer";
import UserCard from "@/shimmeredModules/User/UserCard";
import ThemeSelection from "@/shimmeredModules/User/ThemeSelection";
import PageHeader from "@/original/Layout/PageHeader";
import DeleteAccount from "@/shimmeredModules/User/DeleteAccount";
const ShimmerdSetLayer1 = () => {
  return (
    <PageHeader
      padding={true}
      fullWidth={false}
      rightContent={null}
      leftTitle="Settings"
      content={
        <div>
          <UserCard />

          <Spacer px={12} />

          <Seperator />

          <ThemeSelection />

          <Spacer px={12} />

          <DeleteAccount />
        </div>
      }
      leftContent={undefined}
      rightTitle={null}
    />
  );
};

export default ShimmerdSetLayer1;
