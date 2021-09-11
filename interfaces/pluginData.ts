import command from "./command";

export default interface pluginData {
  name: string;
  config: any;
  short_desc: string;
  long_desc: string;
  id: string;
  commands: command;
}
