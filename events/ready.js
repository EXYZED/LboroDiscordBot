const client = require("../index");

client.on("ready", () =>
    console.log(`\n\n\n\n${client.user.tag} is up and ready to go!`)
);