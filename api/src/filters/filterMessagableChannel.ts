import ChannelTypes from "../types/discordChannel";

const FilterMessagableChannel = (channelType: string | number) => {
  let channelTypeString;

  if (typeof channelType === "string") {
    channelTypeString = channelType;
  }

  if (typeof channelType === "number") {
    channelTypeString = ChannelTypes(channelType);
  }

  if (channelTypeString === "GUILD_TEXT") {
    return true;
  } else {
    return false;
  }
};

export default FilterMessagableChannel;
