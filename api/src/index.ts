import prisma from "./lib/prisma";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import "./strategies/discord";
import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import routes from "./routes/index";
const app = express();
const PORT = parseInt(process.env.PORT) || 3002;
const IP = process.env.IP || "127.0.0.1";

app.use(
  cors({
    origin: process.env.REDIRECT_HOST,
    credentials: true,
  })
);

app.use(
  session({
    secret: "swdfh89sdf9gu8",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", routes);

app.listen(PORT, IP, () => console.log(`Running on Port ${PORT}`));
