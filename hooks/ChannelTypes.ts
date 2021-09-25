const ChannelTypes = (channelType: number) => {
  switch (channelType) {
    case 0:
      return "GUILD_TEXT";
    case 1:
      return "DM";
    case 2:
      return "GUILD_VOICE";
    case 3:
      return "GROUP_DM";
    case 4:
      return "GUILD_CATEGORY";
    case 5:
      return "GUILD_NEWS";
    case 6:
      return "GUILD_STORE";
    case 10:
      return "GUILD_NEWS_THREAD";
    case 11:
      return "GUILD_PUBLIC_THREAD";
    case 12:
      return "GUILD_PRIVATE_THREAD";
    case 13:
      return "GUILD_STAGE_VOICE";
    default:
      return false;
  }
};

export default ChannelTypes;
