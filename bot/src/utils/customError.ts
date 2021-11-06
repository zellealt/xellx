import { CommandErrors } from "wokcommands";
import DiscordJS, { CommandInteraction, MessageEmbed } from "discord.js";

const customError = ({
  error,
  command,
  message,
}: {
  error: string;
  command: string;
  message: CommandInteraction;
}) => {
  const xellxColour: any = process.env.XELLX_COLOUR;

  const embed = new MessageEmbed()
    .setTitle("Uh oh, an error has occured")
    .setDescription(error)
    .setColor(xellxColour);
  message.editReply({
    embeds: [embed],
    content: null,
    components: [],
  });
};

export default customError;
