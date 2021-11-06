import client from "../prisma/client";

const make_log = async (
  message: any,
  user_tag: string | null | undefined,
  guild_id: bigint,
  user_avatar: string | null | undefined,
  icon: string | null | undefined,
  type: "DISCORD" | "PUNISHMENT",
  data?: any
) => {
  const currentDateTime = new Date().toISOString();

  const log = await client.logs.create({
    data: {
      id: Math.floor(Math.random() * 9999999999 + 1),
      guild_id: BigInt(guild_id),
      user_tag: user_tag!,
      message: message,
      date_created: currentDateTime,
      icon: icon || "",
      user_avatar: user_avatar || "",
      type: type,
      data: data,
    },
  });
};

export default make_log;
