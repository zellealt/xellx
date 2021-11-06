import router from "./auth";
import auth from "./auth";
import discord from "./discord";

router.use("/auth", auth);
router.use("/discord", discord);

export default router;
