import discordGuild from "@/interfaces/discordGuild";
import PageHeader from "@/original/Layout/PageHeader";
import GoBackBtn from "@/original/Buttons/GoBack";
import React from "react";
import SideNav from "@/original/Layout/ServerHeadNavigation/Subnav";
import Grid from "./Grid";

const Layer = (props: { guild: discordGuild }) => {
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
              padding={true}
              content={
                <div>
                  <Grid guild={props.guild} />
                </div>
              }
            />
          </>
        }
      />
    </>
  );
};

export default Layer;