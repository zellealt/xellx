import express from "express";
import fetchGuild from "../fetch/guild";
import checkGuildPermission from "../check/guildPermissions";
import autoRole from "../set/autoRole";
import makeLog from "../lib/makeLog";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "Discord" });
});

router.get("/server/:id/info", async (req, res) => {
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
      const guild = await fetchGuild(BigInt(req.params.id));

      if (guild === false)
        return res.status(500).send({ msg: "Internal Server Error" });

      return res.status(200).json({ guild });
    } else {
      return res.status(401).send({ msg: "Unauthorized" });
    }
  } else {
    return res.status(401).send({ msg: "Unauthorized" });
  }
});

router.post("/server/:id/set/auto-role", async (req, res) => {
  if (req.query?.roleId) {
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
        const createRecord = await autoRole(
          req?.query?.roleId?.toString(),
          req?.params?.id?.toString()
        );

        if (createRecord === false) {
          return res.status(500).send({ msg: "Internal Server Error" });
        }

        console.log(req.user);
        const user: any = req?.user;
        const tag: string = user?.username + "#" + user?.discriminator;

        makeLog(
          `Auto role changed to ${req?.query?.roleId?.toString()}`,
          tag,
          BigInt(req?.params?.id),
          user.avatar,
          "update_auto_role"
        );

        return res.status(200).json({ msg: "OK" });
      } else {
        return res.status(401).send({ msg: "Unauthorized" });
      }
    } else {
      return res.status(401).send({ msg: "Unauthorized" });
    }
  } else {
    return res.status(400).send({ msg: "Bad Request" });
  }
});

export default router;
