import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import kick from "../functions/kick";

export default {
  category: "Moderation",
  description: "Kicks the user specified",

  permissions: ["KICK_MEMBERS"],
  testOnly: true,
  slash: true,
  guildOnly: true,

  options: [
    {
      name: "member",
      description: "Member to kick",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
    },
    {
      name: "reason",
      description: "Reason for kicking the member",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
  ],

  callback: async ({ interaction: msgInt, channel }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("kick_yes")
          .setLabel("Confirm")
          .setStyle("SUCCESS")
      )

      .addComponents(
        new MessageButton()
          .setCustomId("kick_no")
          .setLabel("Cancel")
          .setStyle("DANGER")
      );

    const member: any = msgInt.options.getMember("member");
    const reason: string | null = msgInt.options.getString("reason")!;

    const xellxColour: any = process.env.XELLX_COLOUR;

    const embed = new MessageEmbed()
      .setTitle("Are you sure?")
      .setDescription(
        `Would you like to kick **${member.user.username}**${
          reason ? ` for **${reason}**` : ""
        }?`
      )
      .setColor(xellxColour);

    await msgInt.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true,
    });

    const collector = channel.createMessageComponentCollector({
      max: 1,
      time: 1000 * 15,
    });

    collector.on("end", async (collection) => {
      if (collection.first()?.customId === "kick_yes") {
        await kick(msgInt, reason);
      }
      if (collection.first()?.customId === "kick_no") {
        await msgInt.editReply({
          content: "** **",
          components: [],
          embeds: [],
        });
      }
    });
  },
} as ICommand;
