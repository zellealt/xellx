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
const discord_js_1 = __importDefault(require("discord.js"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const checkGuildPermission = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guild_data_raw = yield (0, cross_fetch_1.default)("https://discord.com/api/users/@me/guilds", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const guild_data = yield guild_data_raw.json();
        const guilds = guild_data.filter(function (entry) {
            const perms = new discord_js_1.default.Permissions(BigInt(entry.permissions));
            if (!perms.has("MANAGE_GUILD")) {
                return false;
            }
            if (entry.id.toString() === id) {
                return true;
            }
            else {
                return false;
            }
        });
        let guild = guilds[0];
        if (guild === undefined) {
            return false;
        }
    }
    catch (_a) {
        return null;
    }
    return true;
});
exports.default = checkGuildPermission;
//# sourceMappingURL=guildPermissions.js.map