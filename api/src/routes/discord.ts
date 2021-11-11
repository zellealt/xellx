import express from "express";
import fetchGuild from "../hybrid-fetching/guild";
import makeLog from "../lib/makeLog";
import autoRole from "../set/autoRole";
import checkGuild from "./templates/checkGuild";
import checkSetGuild from "./templates/checkSetGuild";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "Discord" });
});

router.get("/server/:id/info", async (req, res) => {
  const check = await checkGuild(req, res);
  if (check.status === false) return check.returned;

  const guild = await fetchGuild(BigInt(req.params.id));
  if (guild === false)
    return res.status(500).send({ msg: "Internal Server Error" });

  return res.status(200).json({ guild });
});

router.post("/server/:id/set/auto-role", async (req, res) => {
  const check = await checkGuild(req, res);
  if (check.status === false) return check.returned;

  const guild = await fetchGuild(BigInt(req.params.id));

  if (guild === false)
    return res.status(500).send({ msg: "Internal Server Error" });

  return res.status(200).json({ guild });
});

router.post("/server/:id/set/auto-role", async (req, res) => {
  if (req.query?.roleId) {
    const check = await checkSetGuild(req, res);
    if (check.status === false) return check.returned;

    const createRecord = await autoRole(
      req?.query?.roleId?.toString(),
      req?.params?.id?.toString()
    );

    if (createRecord === false) {
      return res.status(500).send({ msg: "Internal Server Error" });
    }

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
    return res.status(400).send({ msg: "Bad Request" });
  }
});

export default router;
