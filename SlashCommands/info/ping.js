const { Client, CommandInteraction } = require("discord.js");
// const { Message, Client } = require("discord.js"); Formerly, please note that the replaced Message constant is not a message.


module.exports = {
    name: "ping",
    description: "Returns program latency and websocket ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction (not message)
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `🏓 Pong! Latency is **${Date.now() - interaction.createdTimestamp}ms.** API Latency is **${Math.round(client.ws.ping)}ms**` });
    },
};
