import React, { useEffect } from "react";
import { useSession, getSession, GetSessionOptions } from "next-auth/client";
import ManageGuildLayer from "@/original/Server/Settings/Layer";
import discordGuild from "@/interfaces/discordGuild";
import fetch_manageable_guild from "@/lib/fetch_manageable_guild";
import Title from "@/modules/Meta/Title";
import Unauthorized from "@/original/Error/Unauthorized";

export default function ManageServer(props: {
  guild: discordGuild;
  id: number;
}) {
  const [session, loading] = useSession();

  // @ts-ignore
  if (props.guild === false) {
    useEffect(() => {
      window.location.href =
        "https://discord.com/oauth2/authorize?client_id=870400020757745694&scope=bot%20applications.commands&guild_id=" +
        props.id +
        "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fapi%2Fget_server&permissions=2134207679";
    }, []);
    return <div></div>;
  }

  if (props.guild === null) {
    return <Unauthorized />;
  }

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

    return { props: { guild, id } };
  } else {
    return { props: {} };
  }
};
