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
const config_1 = __importDefault(require("./raw/config"));
const commands_1 = __importDefault(require("../database-fetching/raw/commands"));
const serverData_1 = __importDefault(require("../generate/serverData"));
const logs_1 = __importDefault(require("./raw/logs"));
const plugins_1 = __importDefault(require("./raw/plugins"));
const getAllDatabase = (guildId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commands = yield (0, commands_1.default)(guildId);
        const config = yield (0, config_1.default)(BigInt(guildId));
        const logs = yield (0, logs_1.default)(guildId);
        const plugins = yield (0, plugins_1.default)(guildId);
        let appendedObject = {};
        appendedObject["config"] = yield config;
        appendedObject["commands"] = yield commands;
        appendedObject["logs"] = yield logs;
        appendedObject["plugins"] = yield plugins;
        if ((config === null || config === void 0 ? void 0 : config.status) === "error") {
            yield (0, serverData_1.default)(guildId);
            // get config data from db again
            const config = yield (0, config_1.default)(BigInt(guildId));
            appendedObject["config"] = yield config;
        }
        return appendedObject;
    }
    catch (e) {
        return false;
    }
});
exports.default = getAllDatabase;
//# sourceMappingURL=getAllDatabase.js.map