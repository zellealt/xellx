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
const log = (action, name, guild_id, image, icon) => __awaiter(void 0, void 0, void 0, function* () {
    if (name === null) {
        return;
    }
    const currentDateTime = new Date().toISOString();
    const log = yield prisma_1.default.logs.create({
        data: {
            id: Math.floor(Math.random() * 9999999999 + 1),
            guild_id: BigInt(guild_id),
            user_tag: name || "",
            message: action,
            date_created: currentDateTime,
            icon: icon || "",
            user_avatar: image || "",
            type: "DASHBOARD",
        },
    });
});
exports.default = log;
//# sourceMappingURL=log.js.map