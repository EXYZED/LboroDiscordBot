

const { Message, Client,  } = require("discord.js");
const {MessageEmbed} = require('discord.js')



module.exports = {
    name: "rules",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        var blockA = {}
        blockA['Title'] = "a";
        blockA['Description'] = "a";
        blockA['Footer'] = "a";
        

        async function clear() {
            message.delete();
            const fetched = await message.channel.messages.fetch({limit: 99});
            message.channel.bulkDelete(fetched);
        }
        

        const embedA = new MessageEmbed()
            .setColor('#361163')
            .setTitle('The Rules')
            .setURL('https://discord.gg/dbj5BepJst')
            //.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
            .setDescription(`Please note that moderators reserve the right to act reasonably beyond the scope of these rules and guidelines to ensure fair and safe discourse, as we can not exhaust all possible scenarios deemed disruptive or damaging.`)
            .setThumbnail('https://cdn.discordapp.com/attachments/876576861323399168/876586275803639838/lboro.png')
            .addFields(
                {   name: '1. Adhere to the Discord community guidelines', 
                    value: 'You must adhere to the Discord Community Guidelines and Terms of Service on this server, provided below:\nhttps://discord.com/guidelines and https://discord.com/terms\n' },
                {   name: '2. Do not try to circumvent moderation action', 
                    value: 'We emphasize to users that avoiding moderation action, such as leaving and re-joining the server or making new accounts, is not permitted as it violates the Discord Terms/Community Guidelines and will result in a non-negotiable ban.\n' },
                {   name: '3. Illegal, harmful and NSFW/NSFL content is prohibited', 
                    value: 'This includes sharing illegal content that violates laws such as copyright or laws to protect against indecency or discrimination. Do not post gore.'},
                {   name: '4. Do not send low-quality messages', 
                    value: `Spam, such as overuse of 'CAPS' and emojis is prohibited. Don't send multiple messages in a row, write your whole message, then send.`},
                {   name: '5. Be respectful and act in good faith', 
                value: 'Excessive or unprovoked use of explicit, obscene, racist or vulgar language is prohibited. Members should refrain from excessive non-dialogue messaging, trolling, disruptive, negative or toxic behaviour.'},
            
                    { name: '\u200B', value: '\u200B' },
          //      { name: 'Inline field title', value: 'Some value here', inline: true },
          //      { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Need help?', 'Ask a server mod/admin', true)
            //.setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter('Loughborough Discord Server', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');
        
        if(message.member.roles.cache.some(r => r.name === "Admin")){
            clear();

            //
/*             embedContainer = await message.channel.send(
                {embedA} 
            ); */
            //

            message.channel.send({ embeds: [embedA] });

            
        } else {
            message.channel.send(`Failed`);
        }

        
    },
};

//Block B To ensure a safe environment where our community can discuss and meet with each other, we've set some rules and guidelines to help us achieve these objectives.