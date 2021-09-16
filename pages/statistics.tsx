import {
  useSession,
  signIn,
  getSession,
  GetSessionOptions,
} from "next-auth/client";
import React from "react";
import StatsLayer from "@/original/Stats/Layer";
import Title from "@/modules/Meta/Title";

export default function Index(props: {
  guilds: number;
  statusJson: any;
  globalStatusJson: any;
}) {
  return (
    <>
      <Title title="Statistics" />

      <StatsLayer
        guilds={props.guilds}
        statusJson={props.statusJson}
        globalStatusJson={props.globalStatusJson}
      />
    </>
  );
}

export const getServerSideProps = async (
  ctx: GetSessionOptions | undefined
) => {
  const resAdv = await fetch(`https://discord.com/api/users/@me/guilds`, {
    headers: {
      Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN,
    },
  });

  const status = await fetch(
    `https://kksvvbpgnjpv.statuspage.io/api/v2/components.json`
  );
  const globalStatus = await fetch(
    `https://kksvvbpgnjpv.statuspage.io/api/v2/status.json`
  );
  const guild = await resAdv.json();
  const statusJson = await status.json();
  const globalStatusJson = await globalStatus.json();
  const guilds = guild.length;
  return { props: { guilds, statusJson, globalStatusJson } };
};
