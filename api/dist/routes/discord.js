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
const auditLog_1 = __importDefault(require("../set/auditLog"));
const guild_1 = __importDefault(require("../hybrid-fetching/guild"));
const autoRole_1 = __importDefault(require("../set/autoRole"));
const checkGuild_1 = __importDefault(require("./templates/checkGuild"));
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
    const query = yield (0, autoRole_1.default)(req.query.roleId.toString(), BigInt(req.params.id));
    if (query === true)
        return res.status(200).send({ msg: "OK" });
    if (query === false)
        return res.status(500).send({ msg: "Internal Server Error" });
}));
router.post("/server/:id/set/audit-log", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield (0, checkGuild_1.default)(req, res);
    if (check.status === false)
        return check.returned;
    const guild = yield (0, guild_1.default)(BigInt(req.params.id));
    if (guild === false)
        return res.status(500).send({ msg: "Internal Server Error" });
    console.log(req.query.data);
    const query = yield (0, auditLog_1.default)(req.query.data, BigInt(req.params.id));
    if (query === true)
        return res.status(200).send({ msg: "OK" });
    if (query === false)
        return res.status(500).send({ msg: "Internal Server Error" });
}));
exports.default = router;
//# sourceMappingURL=discord.js.map