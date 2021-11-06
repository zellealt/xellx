import { CommandInteraction } from "discord.js";
import customError from "../utils/customError";
import success from "../utils/success";
import client from "../prisma/client";
import databaseWarn from "../database/warn";
import punishmentEmbed from "../utils/punishmentEmbed";
import make_log from "../database/make_log";

const warn = async (msgInt: CommandInteraction, reason?: string | null) => {
  const member: any = msgInt.options.getMember("member");

  const embed = punishmentEmbed(
    "Warned",
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
    `Warned **${member.user.username}**${reason ? ` for **${reason}**` : ""}.`,
    member.user.tag,
    BigInt(msgInt.guildId!),
    msgInt.member?.user.avatar,
    "warn",
    "PUNISHMENT"
  );

  return success({
    success: `Warned **${member.user.username}**${
      reason ? ` for **${reason}**` : ""
    }.`,
    command: "warn",
    footer: sent ? null : "DM not sent to user",
    message: msgInt,
  });
};

export default warn;
