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
  sticky_roles: number[];
  auto_role: number;
  audit_log_channel: number;
  member_messages_channel: number;
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
