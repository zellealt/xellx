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
const autoRole = (id, guildId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateAutoRole = yield prisma_1.default.plugins.upsert({
            where: {
                guild_id: BigInt(guildId),
            },
            update: {
                auto_role: BigInt(id),
            },
            create: {
                guild_id: BigInt(guildId),
                auto_role: BigInt(id),
            },
        });
        return true;
    }
    catch (e) {
        return false;
    }
});
exports.default = autoRole;
//# sourceMappingURL=autoRole.js.map