"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const auth_2 = __importDefault(require("./auth"));
const discord_1 = __importDefault(require("./discord"));
auth_1.default.use("/auth", auth_2.default);
auth_1.default.use("/discord", discord_1.default);
exports.default = auth_1.default;
//# sourceMappingURL=index.js.map