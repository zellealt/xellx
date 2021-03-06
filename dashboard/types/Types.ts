export type Role = {
  id: number;
  name: string;
  permission_new: string;
  permission: number;
  color: number;
  managed: boolean;
};

export type Config = {
  guild_id: number;
};

export type Plugins = {
  guild_id: number;
  sticky_roles: number[];
  audit_log: any;
  auto_role: number;
};

type IObjectKeys = {
  [key: string]: boolean | number;
};

export interface Commands extends IObjectKeys {
  guild_id: number;
  ban: boolean;
  warn: boolean;
  kick: boolean;
  info: boolean;
}

export type Guild = {
  id: number;
  icon: string;
  name: string;
  roles: Role[];
  logs: Log[];
  approximate_member_count: number;
  approximate_presence_count: number;
  config: Config;
  commands: Commands;
  plugins: Plugins;
};

export type Log = {
  data?: JSON;
  date_created: string;
  guild_id: string;
  icon: string;
  id: string;
  message: string;
  type: string;
  user_avatar: string;
  user_tag: string;
};

export type Session = {
  discordId: string;
  username: string;
  discriminator: string;
  avatar: string;
  guilds: Guild[];
};

export type SessionContext = {
  session?: any;
  setSession: Function;
};

export type GuildContext = {
  guild?: any;
  setGuild: Function;
};

export type Page = {
  PageHeader: PageHeader;
};

export type PageHeader = {
  padding?: boolean;
  fullHeadWidth: boolean;
  left?: {
    title?: string;
    content?: any;
  };
  right?: {
    title?: string;
    content?: any;
  };
};
