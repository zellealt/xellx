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
const passport_1 = __importDefault(require("passport"));
const passport_discord_1 = __importDefault(require("passport-discord"));
const discord_js_1 = __importDefault(require("discord.js"));
passport_1.default.serializeUser((user, done) => {
    done(null, user.discordId);
});
passport_1.default.deserializeUser((discordId, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.auth_users.findUnique({
            where: { discordId: discordId },
        });
        return user ? done(null, user) : done(null, null);
    }
    catch (err) {
        done(err, null);
    }
}));
passport_1.default.use(new passport_discord_1.default({
    clientID: process.env.DASHBOARD_CLIENT_ID,
    clientSecret: process.env.DASHBOARD_CLIENT_SECRET,
    callbackURL: process.env.DASHBOARD_CALLBACK_URL,
    scope: ["identify", "guilds"],
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, username, discriminator, avatar, guilds } = profile;
    avatar = `https://cdn.discordapp.com/avatars/${id}/${avatar}`;
    guilds = guilds.filter(function (entry) {
        const perms = new discord_js_1.default.Permissions(BigInt(entry.permissions));
        if (perms.has("ADMINISTRATOR")) {
            return true;
        }
        else {
            return false;
        }
    });
    try {
        let newUser = yield prisma_1.default.auth_users.upsert({
            where: {
                discordId: id,
            },
            update: {
                username: username,
                avatar: avatar,
                discriminator: discriminator,
                accessToken: accessToken,
                guilds: JSON.parse(JSON.stringify(guilds)),
            },
            create: {
                discordId: id,
                avatar: avatar,
                username: username,
                discriminator: discriminator,
                accessToken: accessToken,
                guilds: JSON.parse(JSON.stringify(guilds)),
            },
        });
        if (newUser) {
            console.log("User was found");
            return done(null, newUser);
        }
    }
    catch (err) {
        console.log(err);
        return done(err, null);
    }
})));
//# sourceMappingURL=discord.js.map