import React from "react";
import ServerCard from "@/original/Cards/ServerCard";
import discordGuild from "@/interfaces/discordGuild";
import Description from "@/original/Layout/Description";

const PremadeServerCard = (props: { guild: discordGuild }) => {
  return (
    <ServerCard
      section={
        <Description
          text={`${props.guild.approximate_member_count} Members • ${props.guild.approximate_presence_count} Online`}
        />
      }
      icon={
        "https://cdn.discordapp.com/icons/" +
        props.guild.id +
        "/" +
        props.guild.icon
      }
      id={props.guild.id}
      isNull={props.guild.icon}
      name={props.guild.name}
    />
  );
};

export default PremadeServerCard;
