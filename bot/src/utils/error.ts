import { CommandErrors } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js";

const error = ({
  error,
  command,
  message,
  info,
}: {
  error: CommandErrors;
  command: string;
  message: DiscordJS.Message;
  info: object;
}) => {
  const xellxColour: any = process.env.XELLX_COLOUR;

  const embed = new MessageEmbed().setTitle(error).setColor(xellxColour);
  console.log(message);
};

export default error;
