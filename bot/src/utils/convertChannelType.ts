const convertChannelType = (
  channelType:
    | "DM"
    | "GUILD_CATEGORY"
    | "GUILD_NEWS"
    | "GUILD_NEWS_THREAD"
    | "GUILD_PRIVATE_THREAD"
    | "GUILD_PUBLIC_THREAD"
    | "GUILD_STAGE_VOICE"
    | "GUILD_STORE"
    | "GUILD_TEXT"
    | "GUILD_VOICE"
) => {
  switch (channelType) {
    case "DM":
      return "direct message";
    case "GUILD_CATEGORY":
      return "category";
    case "GUILD_NEWS":
      return "news channel";
    case "GUILD_NEWS_THREAD":
      return "news thread";
    case "GUILD_PRIVATE_THREAD":
      return "private thread";
    case "GUILD_PUBLIC_THREAD":
      return "thread";
    case "GUILD_STAGE_VOICE":
      return "stage";
    case "GUILD_STORE":
      return "store channel";
    case "GUILD_TEXT":
      return "text channel";
    case "GUILD_VOICE":
      return "voice channel";
  }
};

export default convertChannelType;
