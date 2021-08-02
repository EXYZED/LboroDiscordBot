const Discord = require('discord.js');
const disbut = require("discord-buttons");
const chalk = require('chalk');
const core = require('@actions/core'); // Github Actions Integration


const client = new Discord.Client({
    partials: ['MESSAGE']
});

require('dotenv').config();
require('discord-buttons')(client);

const log = console.log.bind(console);
client.login(process.env.BOT_TOKEN);

const programMode = (process.env.BUILD)||'release';  // Grab env.BUILD variable, if non-existant then provide with 'release' 


function MessageRaceParticipants (){
    /* 
    TODO:
        -   Grab all users under roleID
        -   Create recursive function to message all users using EMBED handler
    */
}

function CheckPermissions(senderMsg){
    /* Functionality:
        -   senderMsg parameter (msg // the user message)
        -   TODO : Perhaps change role names to actual IDs? Although it means it wont work on multiple servers...
    */
    if(senderMsg.member.roles.cache.some(r => r.name === "Admins")){
        return "Admin"
    }
    if(senderMsg.member.roles.cache.some(r => r.name === "Staff & Contributors")){
        return "Staff"
    }
}

function UserInputHandler(){
    /* Functionality:
        -   TODO : Convert strings to 
        -   TODO : Perhaps change role names to actual IDs? Although it means it wont work on multiple servers...
    */
}
// REMOTES BELOW

client.on("ready", () => {

    log('ProgramMode: ',programMode)

    if (programMode==='ActionTest') {
         // For Github Actions to return success code that the code is happy and ready.
        log('\n', chalk.bgBlue("Action success"));
        process.exit()
    }else{
        log(chalk.bgBlue("Echelon Bot is active..."));
    }
    
});

client.on("message", async msg => {
    if (msg.content === "ping") {
        msg.channel.send(`🏓 Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    if (msg.content === "sendEmbed") {
        // rules channel id
        const rulesChannel = client.channels.cache.find(ch => ch.id == 856142372977770506);

        // fill out with necessary fields and information
        const embed = new Discord.MessageEmbed()
        .setTitle('embed title')
        .setDescription('embed description')
        .setFooter('Loughborough Discord Bot')
        .setTimestamp();

        // add necessary buttons with emojis if needed
        // .setEmoji(emoji ID)
        const embedButton = new disbut.MessageButton()
        .setStyle('grey')
        .setLabel('First Button')
        .setID('embedButton')

        const embedButton2 = new disbut.MessageButton()
        .setStyle('grey')
        .setLabel('Second Button')
        .setID('embedButton2')

        // send embed with buttons attached
        msg.channel.send(
            embed, 
            {buttons: [embedButton, embedButton2]}
        );

        // ## Delete to send to #rules ##
        // (rulesChannel).send(embed);
    };

    if (msg.content === "terminate") {
        if (CheckPermissions(msg)!=='Admin'){
            msg.reply('**Invalid Permissions!**')
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Are you sure?')
            .setDescription('Terminating the bot can cause unexpected behaviour\n\n⚠️ If this bot is ran using nodemon, you will need to clear the batch process before restarting again.')
            .setFooter('Loughborough Discord Bot')
            .setTimestamp();

            const terminateButton = new disbut.MessageButton()
            .setStyle('4') //Danger
            .setLabel('Terminate')
            .setID('Terminate_Click')

            const ignoreButton = new disbut.MessageButton()
            .setStyle('2')
            .setLabel('Cancel')
            .setID('Ignore_Click')

            embedContainer = await msg.reply(
                embed, 
                {buttons: [terminateButton, ignoreButton]}
            );

            client.on('clickButton', async (button) => {

                if (button.id === 'Terminate_Click') {

                    await button.reply.think()
                    // 
                            var embedActionConfirm = await new Discord.MessageEmbed()
                            .setTitle('Terminated')
                            .setDescription('Process Terminated. You will need to manually start this process again')
                            .setFooter('Loughborough Discord Bot')
                            .setTimestamp();

                            var newterminateButton = new disbut.MessageButton()
                            .setStyle('4') //Danger
                            .setLabel('Terminate')
                            .setID('Terminate_Click')
                            newterminateButton = newterminateButton.setDisabled()
                    
                            var newignoreButton = new disbut.MessageButton()
                            .setStyle('2')
                            .setLabel('Cancel')
                            .setID('Ignore_Click')
                            newignoreButton = newignoreButton.setDisabled()
            
                            await embedContainer.edit(
                                embedActionConfirm,
                                {buttons: [newterminateButton, newignoreButton]}
                            );

                            await button.reply.edit('Action Complete')

                            process.exit();
                        // 

                        

                }

                if (button.id === 'Ignore_Click') {
                    await button.channel.send("Command to Terminate cancelled");
                    ;(await embedContainer).delete();
                    
                }

            
            });
        }
    }


        
});

// even listener for button click


/*

    try {
        button.channel.send(`${button.clicker.user} clicked the button: ${button.id}`);
        // if (button.id === 'embedButton') {
        //     button.channel.send(`${button.clicker.user} clicked the button: ${button.label}`);
        // };
    } catch (error) {
        log(error);
    };
*/

// NOTES :

// button.clicker = user that clicked
// user.id || user.tag || access user roles via id through guildRoles
// 'clickButton' is event listener for when button is clicked

// User is the user in itself with no relation to a server
// Member is in relation to the current server and allows for roles to be accessed

// If the bot is put offline and the buttons remain, It will only have PARTIAL functionality, For some reason, it cannot access user/member information ater a restart and the button object still exists.
// It still picks up the button click event on the remaining buttons, but does NOT have full functionality.

// ... Check if buttons exist somehow and replace the message on restart ??? : #doshithere

// E.G.

// Prior Bot Restart : Returns - 
// {"id":"326058698067804173","system":false,"locale":null,"flags":64,"username":"brendanprice","bot":false,"discriminator":"5419","avatar":"b954cd20679e225a11bb6ed1995e76a8","lastMessageChannelID":"864470107543044117","createdTimestamp":1497808851497,"defaultAvatarURL":"https://cdn.discordapp.com/embed/avatars/4.png%22,%22tag%22:%22brendanprice#5419%22,%22avatarURL%22:%22https://cdn.discordapp.com/avatars/326058698067804173/b954cd20679e225a11bb6ed1995e76a8.webp%22,%22displayAvatarURL%22:%22https://cdn.discordapp.com/avatars/326058698067804173/b954cd20679e225a11bb6ed1995e76a8.webp%22%7D

// After Bot Restart : Returns -
// {"id":"326058698067804173","user":null,"member":null}

// id is still returned but any user/member objects return null
// unkown if this occurs with more than one user
