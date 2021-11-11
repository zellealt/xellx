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
const getAllDatabase_1 = __importDefault(require("../database-fetching/getAllDatabase"));
const getAllGuild_1 = __importDefault(require("../discord-fetching/getAllGuild"));
const getGuild = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [discord_guild, database_guild] = yield Promise.all([
            (0, getAllGuild_1.default)(guildId),
            (0, getAllDatabase_1.default)(guildId),
        ]);
        if (discord_guild === false)
            return false;
        return Object.assign(Object.assign({}, discord_guild), database_guild);
    }
    catch (e) {
        return false;
    }
});
exports.default = getGuild;
//# sourceMappingURL=guild.js.map