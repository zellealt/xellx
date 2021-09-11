import discordGuild from "@/interfaces/discordGuild";
import Custom from "@/modules/Modals/Custom";
import Modal from "@/modules/Modals/Modal";
import ResetServerData from "@/shimmeredModules/Server/ResetServerData";
import UserServerCard from "@/shimmeredModules/Server/UserServerCard";
import Seperator from "@/original/Layout/Seperator";
import Spacer from "@/original/Layout/Spacer";
import React, { useState } from "react";
import Text from "@/shimmered/Layout/Text";
const DashBoardGrid = () => {
  return (
    <div>
      <UserServerCard />
      <Spacer px={10} />
      <Seperator />
      <div className="space-y-4">
        {/* <div>
          <h2 className="mb-5 text-3xl font-semibold">General</h2>
        </div> */}
        <div>
          <div className="mb-5 text-3xl font-semibold">
            <Text text="Dangerous Actions" />
          </div>
          <ResetServerData />
        </div>
      </div>
    </div>
  );
};

export default DashBoardGrid;
