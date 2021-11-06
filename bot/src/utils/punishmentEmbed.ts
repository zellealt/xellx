import { MessageEmbed } from "discord.js";

const punishmentEmbed = (
  punishment: string,
  guildName: string,
  reason: string
) => {
  const xellxColour: any = process.env.XELLX_COLOUR;

  const embed = new MessageEmbed()
    .setTitle("🔨 " + punishment)
    .setDescription(
      "You have been " +
        punishment.toLowerCase() +
        " from " +
        guildName +
        " for:" +
        "```" +
        reason +
        "```"
    )
    .setColor(xellxColour);

  return embed;
};

export default punishmentEmbed;
