import React, { useState } from "react";
import discordGuild from "@/interfaces/discordGuild";
import Channel from "./Channel";

const SpeicalChannels = (props: { guild: discordGuild }) => {
  const [shimmer, setShimmer] = useState(true);

  return (
    <div>
      {shimmer && (
        <div className="mb-3 h-3 w-80 rounded-sm bg-gray-200 animate-pulse"></div>
      )}
      <div className="flex justify-center place-items-center md:flex-row flex-col gap-4">
        <Channel
          setShimmer={setShimmer}
          guild={props.guild}
          id="audit_log_channel"
          friendlyName="Audit Log"
        />
        <Channel
          setShimmer={setShimmer}
          guild={props.guild}
          id="welcome_messages_channel"
          friendlyName="Welcome Messages"
        />
      </div>
    </div>
  );
};

export default SpeicalChannels;
