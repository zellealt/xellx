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
const discord_js_1 = __importDefault(require("discord.js"));
const userGuilds = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield (0, cross_fetch_1.default)(`https://discord.com/api/users/@me/guilds`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        const requestJson = yield request.json();
        const filteredRequestJson = requestJson.filter(function (entry) {
            const perms = new discord_js_1.default.Permissions(BigInt(entry.permissions));
            if (perms.has("ADMINISTRATOR")) {
                return true;
            }
            else {
                return false;
            }
        });
        return { allGuilds: requestJson, guilds: filteredRequestJson };
    }
    catch (e) {
        return null;
    }
});
exports.default = userGuilds;
//# sourceMappingURL=guilds.js.map