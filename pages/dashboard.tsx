import { useSession, getSession, GetSessionOptions } from "next-auth/client";
import PageHeader from "@/original/Layout/PageHeader";
import { useState, useEffect } from "react";
import check_permission_array from "@/lib/check_permission_array";
import fetch_user_guilds from "@/lib/fetch_user_guilds_json";
import React from "react";
import Card from "@/original/Selector/CardsLayout";
import Title from "@/modules/Meta/Title";
import Router from "next/router";
import check_session from "@/lib/check_session";
import NoServers from "@/original/Error/NoServers";

interface discordGuildIndex {
  map(arg0: (guild: any) => JSX.Element): React.ReactNode;
  filter(
    arg0: (entry: handleKeyDownEvent) => boolean
  ): React.SetStateAction<discordGuildIndex>;
  [index: number]: { id: number; icon: string; name: string };
}

interface handleKeyDownEvent {
  name: string;
  key: string;
  target: { value: any };
}

export default function Index(props: { guilds: discordGuildIndex }) {
  const [session, loading] = useSession();

  const [guilds, setGuilds] = useState(props.guilds);

  // @ts-ignore
  if (guilds === false) {
    useEffect(() => {
      Router.reload();
    });
    return <div></div>;
  }

  const sessioned = check_session(session, loading, false);

  if (sessioned === true) {
    const handleKeyDown = (event: handleKeyDownEvent | any) => {
      if (event.key !== "Enter") {
        return;
      }
      const searchString = event.target.value;

      setGuilds(
        props.guilds.filter(function (entry: handleKeyDownEvent) {
          if (searchString == "") {
            return true;
          }

          if (
            !entry.name
              .toString()
              .toLowerCase()
              .includes(searchString.toString().toLowerCase())
          ) {
            return false;
          } else {
            return true;
          }
        })
      );
    };

    let servers: boolean = false;

    return (
      <>
        <Title title="Dashboard" />

        <PageHeader
          padding={true}
          fullWidth={false}
          rightContent={
            <input
              type="text"
              id="search"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:text-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-900"
              name="search"
              placeholder="Search"
              onKeyPress={handleKeyDown}
            />
          }
          leftTitle="Dashboard"
          leftContent={null}
          rightTitle={null}
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:justify-center">
            {guilds.map((guild) => {
              servers = true;
              return <Card guild={guild} key={guild.id} />;
            })}
            {servers ? "" : <NoServers />}
          </div>
        </PageHeader>
      </>
    );
  } else {
    return sessioned;
  }
}

export const getServerSideProps = async (
  ctx: GetSessionOptions | undefined
) => {
  const session: any = await getSession(ctx);
  if (session) {
    const guild_data = await fetch_user_guilds(session.user.accessToken);

    const guilds = await check_permission_array(guild_data, "MANAGE_GUILD");

    return { props: { guilds } };
  } else {
    return { props: {} };
  }
};
