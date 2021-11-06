import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import ban from "../functions/ban";

export default {
  category: "Moderation",
  description: "Bans the user specified",

  permissions: ["BAN_MEMBERS"],
  testOnly: true,
  slash: true,
  guildOnly: true,

  options: [
    {
      name: "member",
      description: "Member to ban",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
    },
    {
      name: "reason",
      description: "Reason for banning the member",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
  ],

  callback: async ({ interaction: msgInt, channel }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("ban_yes")
          .setLabel("Confirm")
          .setStyle("SUCCESS")
      )

      .addComponents(
        new MessageButton()
          .setCustomId("ban_no")
          .setLabel("Cancel")
          .setStyle("DANGER")
      );

    const member: any = msgInt.options.getMember("member");
    const reason: string | null = msgInt.options.getString("reason")!;

    const xellxColour: any = process.env.XELLX_COLOUR;

    const embed = new MessageEmbed()
      .setTitle("Are you sure?")
      .setDescription(
        `Would you like to ban **${member.user.username}**${
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
      if (collection.first()?.customId === "ban_yes") {
        await ban(msgInt, reason);
      }
      if (collection.first()?.customId === "ban_no") {
        await msgInt.editReply({
          content: "** **",
          components: [],
          embeds: [],
        });
      }
    });
  },
} as ICommand;
