const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    /* Slash Command Handling
    - Guarentee if the interaction is a slash command
    - Defer (50 minutes to respond to the message) and catch for any errors incase
    
    - If there is no command then 'followUp' with an error
    */
    if (interaction.isCommand()) {
        await interaction.defer({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occurred " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }

        cmd.run(client, interaction, args);
    }
});