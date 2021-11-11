"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./lib/prisma"));
const prisma_session_store_1 = require("@quixo3/prisma-session-store");
require("./strategies/discord");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT) || 3002;
const IP = process.env.IP || "127.0.0.1";
app.use((0, cors_1.default)({
    origin: process.env.REDIRECT_HOST,
    credentials: true,
}));
app.use((0, express_session_1.default)({
    secret: "swdfh89sdf9gu8",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    store: new prisma_session_store_1.PrismaSessionStore(prisma_1.default, {
        checkPeriod: 2 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
    }),
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/api", index_1.default);
app.listen(PORT, IP, () => console.log(`Running on Port ${PORT}`));
//# sourceMappingURL=index.js.map