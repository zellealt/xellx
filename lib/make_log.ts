import prisma from "@/lib/prisma";
const make_log = async (
  action: string,
  name: string | null | undefined,
  guild_id: bigint
) => {
  if (name === null) {
    return;
  }

  const currentDateTime = new Date().toISOString();

  const log = await prisma.logs.create({
    data: {
      id: Math.floor(Math.random() * 9999999999 + 1),
      guild_id: BigInt(guild_id),
      user: name || "",
      action: action,
      date: currentDateTime,
    },
  });

  console.log(log);
};

export default make_log;
