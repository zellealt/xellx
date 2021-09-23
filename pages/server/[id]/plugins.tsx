import { useSession, getSession, GetSessionOptions } from "next-auth/client";
import React, { useEffect } from "react";
import ManageGuildLayer from "@/original/Server/Plugins/Layer";
import discordGuild from "@/interfaces/discordGuild";
import fetch_manageable_guild from "@/lib/fetch_manageable_guild";
import Title from "@/modules/Meta/Title";
import Unauthorized from "@/original/Error/Unauthorized";
import invite_bot_specific_server from "@/lib/invite_bot_specific_server";
import check_session from "@/lib/check_session";

export default function ManageServer(props: {
  guild: discordGuild;
  id: number;
}) {
  const [session, loading] = useSession();

  useEffect(() => {
    window.localStorage.clear();
  });

  // @ts-ignore
  if (props.guild === false) {
    useEffect(() => {
      invite_bot_specific_server(props.id);
    }, []);
    return <div></div>;
  }

  const sessioned = check_session(session, loading, false);

  if (props.guild === null) {
    return <Unauthorized />;
  }

  if (sessioned === true) {
    return (
      <>
        <Title title={"Managing " + props.guild.name} />

        <ManageGuildLayer guild={props.guild} />
      </>
    );
  } else {
    return sessioned;
  }
}

export const getServerSideProps = async (
  ctx: GetSessionOptions | undefined | any
) => {
  const session: any = await getSession(ctx);
  if (session) {
    const { id } = ctx.query;
    const guild = await fetch_manageable_guild(id, session.user.accessToken);

    return { props: { guild, id } };
  } else {
    return { props: {} };
  }
};
