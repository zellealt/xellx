import { createContext } from "react";
import { Guild } from "../types/Types";

type GuildContextType = {
  guild?: Guild;
  setGuild: Function;
};

export const GuildContext = createContext<GuildContextType>({
  guild: undefined,
  setGuild: () => {},
});

export const GuildContextProvider = GuildContext.Provider;
