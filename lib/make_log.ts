import prisma from "@/lib/prisma";
const make_log = async (
  action: any,
  name: string | null | undefined,
  guild_id: bigint,
  image: string | null | undefined,
  icon: string | null | undefined
) => {
  if (name === null) {
    return;
  }

  const currentDateTime = new Date().toISOString();

  const log = await prisma.logs.create({
    data: {
      id: Math.floor(Math.random() * 9999999999 + 1),
      guild_id: BigInt(guild_id),
      user_tag: name || "",
      message: action,
      date_created: currentDateTime,
      icon: icon || "",
      user_avatar: image || "",
      type: "DASHBOARD",
    },
  });

  console.log(log);
};

export default make_log;
