"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const guilds_1 = __importDefault(require("../discord-fetching/raw/guilds"));
const router = express_1.default.Router();
router.get("/discord", passport_1.default.authenticate("discord"));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        const user = req.user;
        const fetchUserGuildsRes = yield (0, guilds_1.default)(req.user.accessToken);
        if (fetchUserGuildsRes === null) {
            return res.status(500).send({ msg: "Rate limited" });
        }
        user.guilds = fetchUserGuildsRes === null || fetchUserGuildsRes === void 0 ? void 0 : fetchUserGuildsRes.guilds;
        user.allGuilds = fetchUserGuildsRes === null || fetchUserGuildsRes === void 0 ? void 0 : fetchUserGuildsRes.allGuilds;
        user.accessToken = "Hidden";
        return res.send(user);
    }
    else {
        return res.status(401).send({ msg: "Unauthorized" });
    }
}));
router.get("/discord/redirect", passport_1.default.authenticate("discord"), (req, res) => {
    res.redirect(process.env.REDIRECT_URL);
});
exports.default = router;
//# sourceMappingURL=auth.js.map