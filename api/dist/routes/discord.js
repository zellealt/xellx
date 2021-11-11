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
const guild_1 = __importDefault(require("../hybrid-fetching/guild"));
const makeLog_1 = __importDefault(require("../lib/makeLog"));
const autoRole_1 = __importDefault(require("../set/autoRole"));
const checkGuild_1 = __importDefault(require("./templates/checkGuild"));
const checkSetGuild_1 = __importDefault(require("./templates/checkSetGuild"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send({ msg: "Discord" });
});
router.get("/server/:id/info", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield (0, checkGuild_1.default)(req, res);
    if (check.status === false)
        return check.returned;
    const guild = yield (0, guild_1.default)(BigInt(req.params.id));
    if (guild === false)
        return res.status(500).send({ msg: "Internal Server Error" });
    return res.status(200).json({ guild });
}));
router.post("/server/:id/set/auto-role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield (0, checkGuild_1.default)(req, res);
    if (check.status === false)
        return check.returned;
    const guild = yield (0, guild_1.default)(BigInt(req.params.id));
    if (guild === false)
        return res.status(500).send({ msg: "Internal Server Error" });
    return res.status(200).json({ guild });
}));
router.post("/server/:id/set/auto-role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.roleId) {
        const check = yield (0, checkSetGuild_1.default)(req, res);
        if (check.status === false)
            return check.returned;
        const createRecord = yield (0, autoRole_1.default)((_c = (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.roleId) === null || _c === void 0 ? void 0 : _c.toString(), (_e = (_d = req === null || req === void 0 ? void 0 : req.params) === null || _d === void 0 ? void 0 : _d.id) === null || _e === void 0 ? void 0 : _e.toString());
        if (createRecord === false) {
            return res.status(500).send({ msg: "Internal Server Error" });
        }
        const user = req === null || req === void 0 ? void 0 : req.user;
        const tag = (user === null || user === void 0 ? void 0 : user.username) + "#" + (user === null || user === void 0 ? void 0 : user.discriminator);
        (0, makeLog_1.default)(`Auto role changed to ${(_g = (_f = req === null || req === void 0 ? void 0 : req.query) === null || _f === void 0 ? void 0 : _f.roleId) === null || _g === void 0 ? void 0 : _g.toString()}`, tag, BigInt((_h = req === null || req === void 0 ? void 0 : req.params) === null || _h === void 0 ? void 0 : _h.id), user.avatar, "update_auto_role");
        return res.status(200).json({ msg: "OK" });
    }
    else {
        return res.status(400).send({ msg: "Bad Request" });
    }
}));
exports.default = router;
//# sourceMappingURL=discord.js.map