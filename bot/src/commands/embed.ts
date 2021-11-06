import DiscordJS, {
  ButtonInteraction,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from "discord.js";
import { ICommand } from "wokcommands";
import colorNameToHex from "../utils/colorNameToHex";
import customError from "../utils/customError";

export default {
  category: "Admin",
  description: "Create your own embed",

  permissions: ["ADMINISTRATOR"],
  testOnly: true,
  slash: true,

  options: [
    {
      name: "content",
      description: "Embed Content",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
    {
      name: "title",
      description: "Embed Title",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },

    {
      name: "color",
      description: "Embed Color",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
    {
      name: "author",
      description: "Enable the author",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN,
    },
  ],

  callback: async ({ interaction: msgInt, channel }) => {
    await msgInt.reply({
      content: "** **",
    });

    const embed = new MessageEmbed();

    const content: string = msgInt.options.getString("content")!;
    const title: string | null = msgInt.options.getString("title");
    const color: any = msgInt.options.getString("color");
    const author: boolean | null = msgInt.options.getBoolean("author");

    if (title !== null) {
      embed.setTitle(title);
    }

    if (color !== null) {
      try {
        embed.setColor(color);
      } catch {
        try {
          const hex: any = colorNameToHex(color);
          embed.setColor(hex);
        } catch {
          customError({
            error: "Invalid color given",
            command: "embed",
            message: msgInt,
          });
        }
      }
    } else {
      const xellxColour: any = process.env.XELLX_COLOUR;
      embed.setColor(xellxColour);
    }

    if (author === true) {
      embed.setAuthor(
        msgInt.user.username,
        msgInt.user.avatarURL()?.toString()
      );
    }

    embed.setDescription(content);

    try {
      await channel.send({
        embeds: [embed],
      });
      await msgInt.deleteReply();
    } catch {
      customError({
        error: "Embed is over 6000 characters",
        command: "embed",
        message: msgInt,
      });
    }
  },
} as ICommand;
