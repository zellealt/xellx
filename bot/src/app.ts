import DiscordJS, { Intents, Interaction } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INVITES,
  ],
});

client.on("ready", () => {
  console.log("the bot is ready");

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    featuresDir: path.join(__dirname, "features"),
    typeScript: true,
    testServers: "873527879563087882",
  });
});

client.login(process.env.TOKEN);
