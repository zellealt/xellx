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

  const query = await autoRole(
    req.query.roleId.toString(),
    BigInt(req.params.id)
  );

  if (query === true) return res.status(200).send({ msg: "OK" });
  if (query === false)
    return res.status(500).send({ msg: "Internal Server Error" });
});

export default router;
