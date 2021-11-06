import { createContext } from "react";
import { Session } from "../types/Types";

type SessionContextType = {
  session?: Session;
  setSession: Function;
};

export const SessionContext = createContext<SessionContextType>({
  session: undefined,
  setSession: () => {},
});

export const SessionContextProvider = SessionContext.Provider;
