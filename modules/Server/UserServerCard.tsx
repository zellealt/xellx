import React from "react";
import discordGuild from "@/interfaces/discordGuild";

export default function UserCard(props: { guild: discordGuild }) {
  let icon = "";
  if (props.guild.icon === null) {
    icon = "/default.png";
  } else {
    icon = `https://cdn.discordapp.com/icons/${props.guild.id}/${props.guild.icon}`;
  }

  return (
    <>
      <div className="flex place-items-center gap-5 rounded-md">
        <img src={icon} className="h-20 rounded-full" />
        <h3 className="dark:text-white text-3xl font-semibold">
          {props.guild.name}
        </h3>
      </div>
    </>
  );
}
