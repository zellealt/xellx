import { CommandInteraction } from "discord.js";
import make_log from "../database/make_log";
import customError from "../utils/customError";
import punishmentEmbed from "../utils/punishmentEmbed";
import success from "../utils/success";

const ban = async (msgInt: CommandInteraction, reason?: string | null) => {
  const member: any = msgInt.options.getMember("member");
  try {
    if (reason === null) {
      await msgInt?.guild?.bans?.create(member);
    } else {
      await msgInt?.guild?.bans?.create(member, { reason: reason });
    }
  } catch (e) {
    return customError({
      error: `The bot does not have permissions to ban **${member.user.username}**.`,
      command: "ban",
      message: msgInt,
    });
  }

  const embed = punishmentEmbed(
    "Banned",
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
    `Banned **${member.user.username}**${reason ? ` for **${reason}**` : ""}.`,
    member.user.tag,
    BigInt(msgInt.guildId!),
    msgInt.member?.user.avatar,
    "ban",
    "PUNISHMENT"
  );

  return success({
    success: `Banned **${member.user.username}**${
      reason ? ` for **${reason}**` : ""
    }.`,
    command: "ban",
    footer: sent ? null : "DM not sent to user",
    message: msgInt,
  });
};

export default ban;
