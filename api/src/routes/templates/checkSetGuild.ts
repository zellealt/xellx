import checkGuildPermission from "../../check/guildPermissions";

const checkSetGuild = async (req: any, res: any) => {
  if (req.user) {
    const user: any = req.user;

    let guildPermission;
    while (true) {
      guildPermission = await checkGuildPermission(
        user.accessToken,
        req.params.id.toString()
      );
      if (guildPermission !== null) break;
    }

    if (guildPermission === true) {
      return { status: true };
    } else {
      return {
        status: false,
        returned: res.status(401).send({ msg: "Unauthorized" }),
      };
    }
  } else {
    return {
      status: false,
      returned: res.status(401).send({ msg: "Unauthorized" }),
    };
  }
};

export default checkSetGuild;
