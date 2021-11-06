import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "General",
  description: "Replies with pong",

  slash: true,
  testOnly: true,

  callback: async ({ interaction, message, channel }) => {
    const xellxColour: any = process.env.XELLX_COLOUR;
    const pingingEmbed = new MessageEmbed()
      .setTitle("🕘 Tik-tok")
      .setDescription("Pinging...")
      .setColor(xellxColour);

    await interaction.reply({ embeds: [pingingEmbed] });
    const ping: string = Date.now() - interaction.createdTimestamp + " ms";

    const pingEmbed = new MessageEmbed()
      .setTitle("🕘 Tik-tok")
      .setDescription("Xellx's latency is " + ping)
      .setColor(xellxColour);

    await interaction.editReply({ embeds: [pingEmbed] });
  },
} as ICommand;
