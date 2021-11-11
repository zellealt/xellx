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
const configData_1 = __importDefault(require("./configData"));
const commandsData_1 = __importDefault(require("./commandsData"));
const serverData_1 = __importDefault(require("../generate/serverData"));
const logs_1 = __importDefault(require("./logs"));
const filterMessagableChannel_1 = __importDefault(require("../filters/filterMessagableChannel"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const getGuild = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const get_guild = yield (0, cross_fetch_1.default)(`https://discord.com/api/guilds/${guildId}?with_counts=true`, {
            headers: {
                Authorization: "Bot " + process.env.BOT_TOKEN,
            },
        });
        const get_guild_res = yield get_guild.json();
        get_guild_res["roles"] = get_guild_res["roles"].filter(function (entry) {
            if (entry.name == "@everyone")
                return false;
            else
                return true;
        });
        const config = yield (0, configData_1.default)(BigInt(guildId));
        get_guild_res["config"] = yield config;
        if ((config === null || config === void 0 ? void 0 : config.status) === "error") {
            yield (0, serverData_1.default)(guildId);
        }
        const commands = yield (0, commandsData_1.default)(guildId);
        get_guild_res["commands"] = yield commands;
        const logs = yield (0, logs_1.default)(guildId);
        get_guild_res["logs"] = yield logs;
        const channels = yield (0, cross_fetch_1.default)(`https://discord.com/api/guilds/${guildId}/channels`, {
            headers: {
                Authorization: "Bot " + process.env.BOT_TOKEN,
            },
        });
        let channel_res = yield channels.json();
        channel_res = channel_res.filter((entry) => (0, filterMessagableChannel_1.default)(entry.type));
        get_guild_res["channels"] = channel_res;
        return get_guild_res;
    }
    catch (e) {
        return false;
    }
});
exports.default = getGuild;
//# sourceMappingURL=guild.js.map