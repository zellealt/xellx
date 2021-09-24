import prisma from "@/lib/prisma";

export default async function logs(
  req: null,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { logs: string }): void; new (): any };
    };
  }
) {
  const logs = await prisma.logs.aggregate({
    _count: {
      id: true,
    },
  });

  res.status(200).json({ logs: logs._count.id.toString() });
}
