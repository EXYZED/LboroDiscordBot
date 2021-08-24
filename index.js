const { Client, Collection } = require("discord.js")

const client = new Client({
    intents: 32767,
});
module.exports = client
require('dotenv').config();

// Global Variables
client.commands = new Collection()
client.slashCommands = new Collection()
client.config = require("./config.json")

// Initializing the project
require("./handler")(client)
client.on("ready", () => {
    client.user.setActivity("w/ the right server.", {
        type: "PLAYING",
        url: "https://github.com/EXYZED/LboroDiscordBot"
      });
    
});

client.login(process.env.BOT_TOKEN)


