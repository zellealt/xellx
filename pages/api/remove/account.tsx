import check_if_role_in_guild from "@/lib/check_if_role_in_guild";
import can_manage_guild from "@/lib/can_manage_guild";
import prisma from "@/lib/prisma";
import make_log from "@/lib/make_log";
import { getSession } from "next-auth/client";

export default async function remove_account(
  req: { headers: { authorization: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string; status: string }): void; new (): any };
    };
  }
) {
  const { authorization } = req.headers;

  // @ts-ignore
  const session: any = await getSession({ req });

  console.log(session?.user.id.toString());

  const query = await prisma.na_accounts.findUnique({
    where: {
      provider_account_id: session?.user.id.toString(),
    },
  });

  const id = query?.["id"];

  try {
    const delete_account = await prisma.na_accounts.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {}

  try {
    const delete_session = await prisma.na_sessions.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {}

  try {
    const delete_user = await prisma.na_users.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {}

  try {
    const delete_verify_req = await prisma.na_verification_requests.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {}

  if (query === null) {
    return res.status(406).json({
      message: "User does not exist in the database",
      status: "error",
    });
  }

  const message = `Removed all user data`;

  res.status(200).json({
    message: message,
    status: "success",
  });
}
