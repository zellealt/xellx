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
const prisma_1 = __importDefault(require("../lib/prisma"));
const log_1 = __importDefault(require("./log"));
const serverData = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    const configQuery = yield prisma_1.default.config.create({
        data: {
            guild_id: guildId,
        },
    });
    const commandsQuery = yield prisma_1.default.commands.create({
        data: {
            guild_id: BigInt(guildId.toString()),
            ban: true,
            kick: true,
            warn: true,
            info: true,
        },
    });
    const pluginsQuery = yield prisma_1.default.plugins.create({
        data: {
            guild_id: BigInt(guildId.toString()),
            auto_role: 0,
        },
    });
    yield (0, log_1.default)("Created essential database querys", "Xellx Configurator", guildId, "/default.png", "updated_channel");
});
exports.default = serverData;
//# sourceMappingURL=serverData.js.map