import { useSession } from "next-auth/client";
import PageHeader from "@/original/Layout/PageHeader";
import React from "react";
import Seperator from "@/original/Layout/Seperator";
import Spacer from "@/original/Layout/Spacer";
import UserCard from "modules/User/UserCard";
import ThemeSelection from "@/modules/User/ThemeSelection";
import Title from "@/modules/Meta/Title";
import DeleteAccount from "@/modules/User/DeleteAccount";
import check_session from "@/lib/check_session";

export default function Settings() {
  const [session, loading] = useSession();

  const sessioned = check_session(session, loading, false);

  if (sessioned === true) {
    return (
      <>
        <Title title="User Settings" />
        <PageHeader
          padding={true}
          fullWidth={false}
          rightContent={null}
          leftTitle="Settings"
          content={
            <div className="p-3 sm:p-0">
              <UserCard />

              <Spacer px={12} />

              <Seperator />

              <ThemeSelection />
              <Spacer px={12} />

              <DeleteAccount />
            </div>
          }
          leftContent={null}
          rightTitle={null}
        />
      </>
    );
  } else {
    return sessioned;
  }
}
