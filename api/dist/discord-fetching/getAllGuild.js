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
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const filterMessagableChannel_1 = __importDefault(require("../filters/filterMessagableChannel"));
const guild_1 = __importDefault(require("./raw/guild"));
const guildChannel_1 = __importDefault(require("./raw/guildChannel"));
const getAllGuild = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get guild as bot from discord
        const get_guild_res = yield (0, guild_1.default)(guildId).then((final) => final.json());
        // filter @everyone role
        get_guild_res["roles"] = get_guild_res["roles"].filter(function (entry) {
            if (entry.name == "@everyone")
                return false;
            else
                return true;
        });
        // get guild channels as bot
        const channels = yield (0, cross_fetch_1.default)(`https://discord.com/api/guilds/${guildId}/channels`, {
            headers: {
                Authorization: "Bot " + process.env.BOT_TOKEN,
            },
        });
        // get guild channels as bot
        let channel_res = yield (0, guildChannel_1.default)(guildId).then((final) => final.json());
        // filter those channels to check if you can message in them
        channel_res = channel_res.filter((entry) => (0, filterMessagableChannel_1.default)(entry.type));
        get_guild_res["channels"] = channel_res;
        return get_guild_res;
    }
    catch (e) {
        return false;
    }
});
exports.default = getAllGuild;
//# sourceMappingURL=getAllGuild.js.map