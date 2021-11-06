import { createContext } from "react";

type ServerManageContextType = {
  page?: string;
  setPage: Function;
};

export const ServerManageContext = createContext<ServerManageContextType>({
  page: undefined,
  setPage: () => {},
});

export const ServerManageContextProvider = ServerManageContext.Provider;
