import express from "express";
import passport from "passport";
import fetchUserGuilds from "../fetch/userGuilds";

const router = express.Router();

router.get("/discord", passport.authenticate("discord"));

router.get("/", async (req: any, res) => {
  if (req.user) {
    const user = req.user;
    const fetchUserGuildsRes = await fetchUserGuilds(req.user.accessToken);

    if (fetchUserGuildsRes === null) {
      return res.status(500).send({ msg: "Rate limited" });
    }

    user.guilds = fetchUserGuildsRes?.guilds;
    user.allGuilds = fetchUserGuildsRes?.allGuilds;
    user.accessToken = "Hidden";
    return res.send(user);
  } else {
    return res.status(401).send({ msg: "Unauthorized" });
  }
});

router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.redirect(process.env.REDIRECT_URL);
  }
);

export default router;
