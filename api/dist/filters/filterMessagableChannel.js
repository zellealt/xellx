"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discordChannel_1 = __importDefault(require("../types/discordChannel"));
const filterMessagableChannel = (channelType) => {
    let channelTypeString;
    if (typeof channelType === "string") {
        channelTypeString = channelType;
    }
    if (typeof channelType === "number") {
        channelTypeString = (0, discordChannel_1.default)(channelType);
    }
    if (channelTypeString === "GUILD_TEXT") {
        return true;
    }
    else {
        return false;
    }
};
exports.default = filterMessagableChannel;
//# sourceMappingURL=filterMessagableChannel.js.map