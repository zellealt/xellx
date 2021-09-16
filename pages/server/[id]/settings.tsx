import React, { useEffect } from "react";
import { useSession, getSession, GetSessionOptions } from "next-auth/client";
import ManageGuildLayer from "@/original/Server/Settings/Layer";
import discordGuild from "@/interfaces/discordGuild";
import fetch_manageable_guild from "@/lib/fetch_manageable_guild";
import Title from "@/modules/Meta/Title";
import Unauthorized from "@/original/Error/Unauthorized";
import check_session from "@/lib/check_session";
import invite_bot_specific_server from "@/lib/invite_bot_specific_server";

export default function ManageServer(props: {
  guild: discordGuild;
  id: number;
}) {
  const [session, loading] = useSession();

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
