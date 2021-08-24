const { Client, CommandInteraction} = require("discord.js")
const {MessageEmbed} = require('discord.js')


// const { Message, Client } = require("discord.js"); Formerly, please note that the replaced Message constant is not a message.


module.exports = {
    name: "terminate",
    description: "Terminates the bot.",
    options: [
        {
            name: 'force',
            description: 'Forcibly close the program',
            required: false,
            type: 5
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction (not message)
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const Embed = new MessageEmbed()
            .setTitle('Are you sure?')
            .setDescription('Terminating the bot can cause unexpected behaviour\n\n⚠️ If this bot is ran using nodemon, you will need to clear the batch process before restarting again.')
            .setFooter('Loughborough Discord Server')
            .setTimestamp();
/*          DEPRECATED
            const terminateButton = new MessageButton()
            .setStyle('4') //Danger
            .setLabel('Terminate')
            .setID('Terminate_Click')

            const ignoreButton = new MessageButton()
            .setStyle('2')
            .setLabel('Cancel')
            .setID('Ignore_Click')
 */

            embedContainer = await interaction.followUp({
                embeds:  [Embed],
               
            });
        //interaction.followUp({ content: `Command has been disabled` });
    },
};


 /* 




 */

