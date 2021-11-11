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
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPluginsData = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield prisma_1.default.plugins.findUnique({
        where: {
            guild_id: guildId,
        },
    });
    if (query === null) {
        return {
            status: "error",
            message: "Server or user does not exist in the database",
        };
    }
    const queryJson = JSON.parse(JSON.stringify(query, (key, value) => typeof value === "bigint" ? value.toString() : value));
    return queryJson;
});
exports.default = getPluginsData;
//# sourceMappingURL=plugins.js.map