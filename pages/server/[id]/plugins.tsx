import { useSession, getSession, GetSessionOptions } from "next-auth/client";
import React, { useEffect } from "react";
import ManageGuildLayer from "@/original/Server/Plugins/Layer";
import discordGuild from "@/interfaces/discordGuild";
import fetch_manageable_guild from "@/lib/fetch_manageable_guild";
import Title from "@/modules/Meta/Title";

export default function ManageServer(props: { guild: discordGuild }) {
  const [session, loading] = useSession();

  if (props.guild === null) {
    return <h1>placeholder: no permission</h1>;
  }

  useEffect(() => {
    sessionStorage.clear();
  });

  if (!loading) {
    if (session) {
      return (
        <>
          <Title title={"Managing " + props.guild.name} />

          <ManageGuildLayer guild={props.guild} />
        </>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}

export const getServerSideProps = async (
  ctx: GetSessionOptions | undefined | any
) => {
  const session: any = await getSession(ctx);
  if (session) {
    const { id } = ctx.query;
    const guild = await fetch_manageable_guild(id, session.user.accessToken);

    return { props: { guild } };
  } else {
    return { props: {} };
  }
};
