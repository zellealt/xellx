import discordGuild from "@/interfaces/discordGuild";
import Custom from "@/modules/Modals/Custom";
import Modal from "@/modules/Modals/Modal";
import ResetServerData from "@/modules/Server/ResetServerData";
import UserServerCard from "@/modules/Server/UserServerCard";
import Seperator from "@/original/Layout/Seperator";
import Spacer from "@/original/Layout/Spacer";
import React, { useState } from "react";

const DashBoardGrid = (props: { guild: discordGuild }) => {
  return (
    <div>
      <UserServerCard guild={props.guild} />
      <Spacer px={10} />
      <Seperator />
      <div className="space-y-4">
        {/* <div>
          <h2 className="mb-5 text-3xl font-semibold">General</h2>
        </div> */}
        <div>
          <h2 className="mb-5 text-3xl font-semibold">Dangerous Actions</h2>
          <ResetServerData guild={props.guild} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardGrid;
