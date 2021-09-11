import React from "react";
import PremadeServerCard from "@/modules/Server/ServerCard";
import discordGuild from "../../../../../interfaces/discordGuild";

import Spacer from "@/original/Layout/Spacer";

const Column1 = (props: { guild: discordGuild }) => {
  return (
    <div>
      <PremadeServerCard guild={props.guild} />

      <Spacer px={16} />
    </div>
  );
};

export default Column1;
