import { CommandInteraction } from "discord.js";
import make_log from "../database/make_log";
import customError from "../utils/customError";
import punishmentEmbed from "../utils/punishmentEmbed";
import success from "../utils/success";

const kick = async (msgInt: CommandInteraction, reason?: string | null) => {
  const member: any = msgInt.options.getMember("member");
  try {
    if (reason === null) {
      await member.kick();
    } else {
      await member.kick(reason);
    }
  } catch (e) {
    return customError({
      error: `The bot does not have permissions to kick **${member.user.username}**.`,
      command: "kick",
      message: msgInt,
    });
  }

  const embed = punishmentEmbed(
    "Kicked",
    msgInt.guild?.name.toString()!,
    reason || "Unspecified Reason"
  );

  let sent = true;
  try {
    await member.send({
      embeds: [embed],
    });
  } catch {
    sent = false;
  }

  await make_log(
    `Kicked **${member.user.username}**${reason ? ` for **${reason}**` : ""}.`,
    member.user.tag,
    BigInt(msgInt.guildId!),
    msgInt.member?.user.avatar,
    "kick",
    "PUNISHMENT"
  );

  return success({
    success: `Kicked **${member.user.username}**${
      reason ? ` for **${reason}**` : ""
    }.`,
    command: "kick",
    footer: sent ? null : "DM not sent to user",
    message: msgInt,
  });
};

export default kick;
