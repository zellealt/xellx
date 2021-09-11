import config from "./config";
import role from "./role";
import commands from "./commands";

export default interface discordGuild {
  id: number;
  icon: string;
  name: string;
  roles: role[];
  logs: any;
  approximate_member_count: number;
  approximate_presence_count: number;
  config: config;
  commands: commands;
}
