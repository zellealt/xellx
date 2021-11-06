import { useRouter } from "next/router";
import React, { useEffect } from "react";
import makeRequest from "../client-lib/makeRequest";
import { GuildContext } from "../contexts/GuildContext";

const FetchServer = () => {
  const { guild, setGuild } = React.useContext(GuildContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id !== undefined) {
      if (guild?.id?.toString() !== router.query.id) {
        setGuild(null);
        makeRequest(
          "http://" +
            process.env.NEXT_PUBLIC_API_URI! +
            "/api/discord/server/" +
            router.query.id +
            "/info",
          {},
          true
        )
          .then((data) => {
            setGuild(data.guild);
          })
          .catch((data) => {
            setGuild(false);
          });
      }
    }
  }, []);

  return <div></div>;
};

export default FetchServer;
