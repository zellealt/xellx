import { CommandErrors } from "wokcommands";
import DiscordJS, { CommandInteraction, MessageEmbed } from "discord.js";
import { CheckMark } from "./emojis";

const customError = ({
  success,
  command,
  message,
  footer,
}: {
  success: string;
  command: string;
  message: CommandInteraction;

  footer?: string | null;
}) => {
  const xellxColour: any = process.env.XELLX_COLOUR;

  const embed = new MessageEmbed()
    .setDescription(CheckMark + " " + success)
    .setColor(xellxColour)
    .setFooter(footer ? footer : "");

  message.editReply({
    embeds: [embed],
    content: null,
    components: [],
  });
};

export default customError;
