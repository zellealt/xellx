interface IObjectKeys {
  [key: string]: boolean | number;
}

export default interface commands extends IObjectKeys {
  guild_id: number;
  ban: boolean;
  warn: boolean;
  kick: boolean;
  info: boolean;
}
