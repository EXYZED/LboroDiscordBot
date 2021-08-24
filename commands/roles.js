

const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");


module.exports = {
    name: "roles",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {


        async function clear() {
            message.delete();
            const fetched = await message.channel.messages.fetch({ limit: 99 });
            message.channel.bulkDelete(fetched);
        }

        const rowA = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('register')
                    .setLabel('Register Now!')
                    .setStyle('PRIMARY'),
            );

        const embedA = new MessageEmbed()
            .setColor('#361163')
            .setTitle('Welcome to our community!')
            //.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
            .setDescription(
                `Welcome to the **Unofficial** Loughborough Community Discord Server!

            **To get full server access:**
            Please complete the registration to show where you belong in our community, and connect with the right people.
            
            We hope you enjoy your time here, please open up in our #lounge chat.

            `
            )
            .setThumbnail('https://cdn.discordapp.com/attachments/876576861323399168/876586275803639838/lboro.png')
            .addField('Need help?', 'Ask a server mod/admin', true)
            //.setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter('Loughborough Discord Server', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');

        //------------------- BLOCK

        const rowB = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('domestic')
                    .setLabel('Domestic')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('international')
                    .setLabel(`International`)
                    .setStyle('PRIMARY'),

            );

        const embedB = new MessageEmbed()
            .setColor('#361163')
            .setTitle('Are you an international or domestic UK student / applicant?')
            .setDescription(
                `Select your region, domestic applicants/students have a permanent address and right to reside and work in the UK, if you are overseas (originally) please select international.  
            `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');

        //------------------- BLOCK
        const rowC = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('student')
                    .setLabel(`Lboro' Student`)
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('appoff')
                    .setLabel('Applicant / Offer Holder')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('guest')
                    .setLabel('External / Guest')
                    .setStyle('PRIMARY'),
            );

        const embedC = new MessageEmbed()
            .setColor('#361163')
            .setTitle('What type of member are you?')
            .addFields(
                {
                    name: `🎓 Lboro' Student`,
                    value: `Select this if you confirmed your offer to study or you are currently studying at Lboro'`
                },
                {
                    name: `📜 Applicant / Offer Holder`,
                    value: `Select this if you are currently holding an offer with Lboro (conditional/unconditional)`
                },
                {
                    name: `External / Guest`,
                    value: `Select this if you are **not** going to Lboro\n
                        or haven't met the requirements of your offer for Lboro' \n
                        or considering to join Lboro but haven't applied yet`},
            )
            .setDescription(
                `Select your member type
            `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');

        //------------------- BLOCK
        const rowD = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('yrselect')
                    .setPlaceholder('Select your Year')
                    .addOptions([
                        {
                            label: 'Legacy',
                            description: 'Course starting before 2020',
                            value: 'legacy',
                        },
                        {
                            label: '2020',
                            description: 'Course starting 2020',
                            value: 'twnty',
                        },
                        {
                            label: '2021',
                            description: 'Course starting 2021',
                            value: 'twntyone',
                        },
                        {
                            label: '2022',
                            description: 'Course starting 2022',
                            value: 'twntytwo',
                        },
                    ]),
            );

        const embedD = new MessageEmbed()
            .setColor('#361163')
            .setTitle('Please enter your year of entry')
            .setDescription(
                `Please select your year of entry into University or Further education,

            If you have not joined yet, select the proposed year of entry that your course starts around September/October time.

            If your year is not listed here, please select 'Legacy' even if your year is in the future and not listed in which case please inform a moderator.
            `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');
        //------------------- BLOCK

        const rowE = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('dptselect')
                    .setPlaceholder('Subject area')
                    .addOptions([
                        {
                            label: `Aero' & Auto'`,
                            description: 'Aeronautical and Automotive Engineering',
                            value: 'aae',
                        },
                        {
                            label: `Arch' Build' Civil Eng`,
                            description: 'Architecture, Building and Civil Engineering',
                            value: 'abc',
                        },
                        {
                            label: 'Bio-Eng',
                            description: 'Bioengineering',
                            value: 'bioeng',
                        },
                        {
                            label: 'Bio-Sci',
                            description: 'Biosciences',
                            value: 'biosci',
                        },
                        {
                            label: `Business and Economics`,
                            description: 'Business and Economics',
                            value: 'business',
                        },
                        {
                            label: 'Chem-Eng',
                            description: 'Chemical Engineering',
                            value: 'chemical',
                        },
                        {
                            label: 'Chemistry',
                            description: 'Chemistry',
                            value: 'chemist',
                        },
                        {
                            label: 'Comms & Media',
                            description: 'Communication and Media',
                            value: 'comms',
                        },
                        {
                            label: 'CompSci',
                            description: 'Computer Science',
                            value: 'compsci',
                        },
                        {
                            label: 'Creative',
                            description: 'Creative Arts',
                            value: 'crea',
                        },
                        {
                            label: 'Crime',
                            description: 'Criminology, Sociology and Social Policy',
                            value: 'crim',
                        },
                        {
                            label: 'Design',
                            description: 'Design',
                            value: 'des',
                        },
                        {
                            label: 'English',
                            description: 'English',
                            value: 'eng',
                        },
                        {
                            label: 'Foundation',
                            description: 'Foundation Studies incl. International',
                            value: 'found',
                        },
                        {
                            label: 'Geography',
                            description: 'Geography and Environment',
                            value: 'geo',
                        },
                        {
                            label: `Intl' Relations`,
                            description: 'International Relations, Politics and History',
                            value: 'intrel',
                        },
                        {
                            label: `Materials`,
                            description: 'Materials',
                            value: 'mat',
                        },
                        {
                            label: `Math-Sci`,
                            description: 'Mathematical Sciences',
                            value: 'math',
                        },
                        {
                            label: `Mech'Elec'Manu' Eng`,
                            description: 'Mechanical, Electrical and Manufacturing Engineering',
                            value: 'mecheng',
                        },
                        {
                            label: `Nat-Sciences`,
                            description: 'Natural Sciences',
                            value: 'natsci',
                        },
                        {
                            label: `Physics`,
                            description: 'Physics',
                            value: 'phys',
                        },
                        {
                            label: `Psychology`,
                            description: 'Psychology',
                            value: 'psy',
                        },
                        {
                            label: `Sport-Sci`,
                            description: 'Sport Sciences',
                            value: 'sport',
                        },


                    ]),
            );

        const embedE = new MessageEmbed()
            .setColor('#361163')
            .setTitle('Please select your subject area')
            .setDescription(
                `
            To connect to the right communities, we've created chat-rooms for each subject area.

            These subject areas relate to the departments available at Loughborough, for more information visit:
            https://www.lboro.ac.uk/study/undergraduate/subjects/

            Each course page has a subject area attached to it - please try to find this if you're struggling to find which department you're in.
            `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');


        //------------------- BLOCK
        const rowF = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('accept')
                    .setLabel(`I agree`)
                    .setStyle(3),
                new MessageButton()
                    .setCustomId('decline')
                    .setLabel('Decline')
                    .setStyle(4),
            );

        const embedF = new MessageEmbed()
            .setColor('#361163')
            .setTitle('Conditions of the Server')
            .setDescription(
                `Upon entry to this server you agree to abide by the rules of the server, found in the #rules channel.

                You also agree to participate in healthy messaging and discourse that doesn't partake in slander of reputation of the server or Loughborough university 
        `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');

            const embedG = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Conditions of the Server')
            .setDescription(
                
                `
                ⚠️ **You must agree to these conditions to use the server**

                Upon entry to this server you agree to abide by the rules of the server, found in the #rules channel.

                You also agree to participate in healthy messaging and discourse that doesn't partake in slander of reputation of the server or Loughborough university 
        `)
            .setTimestamp()
            .setFooter('Registration Process', 'https://cdn.discordapp.com/avatars/872567132330799174/de93c7714b849f9271bde24c75a1c432.webp?size=128');
        //------------------- BLOCK
        /////////////////

        if (message.member.roles.cache.some(r => r.name === "Admin")) {
            clear();
            message.channel.send({ embeds: [embedA], components: [rowA] });
        } else {
            message.channel.send(`Failed, Likely due to insufficient perms`);
        }
        /////////////////

        client.on('interactionCreate', async interaction => {
            const user = await interaction.guild.members.fetch(interaction.user.id);

            async function PostCourse() {
                await interaction.reply({ ephemeral: true, embeds: [embedF], components: [rowF] });
            }

            async function EntryYrCheck() {
                await interaction.reply({ ephemeral: true, embeds: [embedD], components: [rowD] });
            }
            async function SelectCourse() {
                await interaction.reply({ ephemeral: true, embeds: [embedE], components: [rowE] });
            }

            if (interaction.isButton()) {
                if (interaction.customId == 'register') {
                    await interaction.reply({ content: `Hi ${interaction.user.username}!`, ephemeral: true, embeds: [embedB], components: [rowB] });
                }

                // Role Dependant commands
                if (interaction.customId == 'international') {
                    //843620244358037554 This is the international role
                    user.roles.add('843620244358037554');
                    await interaction.reply({ content: `We'll be supporting you by connecting you with other international students! So we've given you the @International role`, ephemeral: true, embeds: [embedC], components: [rowC] });
                }
                // Blck 1

                if (interaction.customId == 'student') {
                    user.roles.add('837425483154194493');
                    EntryYrCheck()
                }

                if (interaction.customId == 'appoff') {
                    user.roles.add('840988645792153660');
                    EntryYrCheck()
                }

                if (interaction.customId == 'guest') {
                    user.roles.add('837430318327136337');
                    EntryYrCheck()
                }
                // Check Entry Function
                if (interaction.customId == 'domestic') {
                    await interaction.reply({ content: `You reside in the UK, nice to meet you!`, ephemeral: true, embeds: [embedC], components: [rowC] });
                }
                if (interaction.customId == 'decline') {
                    await interaction.reply({ ephemeral: true, embeds: [embedG], components: [rowF] });
                }
                if (interaction.customId == 'accept') {
                    user.roles.add('877244871054872606');
                    await interaction.reply({ ephemeral: true, content: `Welcome to our server! You have been set-up, if you would like to change your roles please perform the registration process again.`})
                }


            } // Check if button.
            if (interaction.isSelectMenu()) {
                if (interaction.values == 'legacy') {
                    user.roles.add('877200412002885642');
                    SelectCourse()
                }
                if (interaction.values == 'twnty') {
                    user.roles.add('877200220885221416');
                    SelectCourse()
                }
                if (interaction.values == 'twntyone') {
                    user.roles.add('837425458856460308');
                    SelectCourse()
                }
                if (interaction.values == 'twntytwo') {
                    user.roles.add('877200316792197131');
                    SelectCourse()
                }
            }

            if (interaction.isSelectMenu()) {
                console.log(interaction.values)
                if (interaction.values == 'aae') {
                    user.roles.add('837444558538670183');
                    PostCourse()
                }
                if (interaction.values == 'abc') {
                    user.roles.add('837444689187700791');
                    PostCourse()
                }
                if (interaction.values == 'bioeng') {
                    user.roles.add('877161120413151263');
                    PostCourse()
                }
                if (interaction.values == 'biosci') {
                    user.roles.add('877215742754426910');
                    PostCourse()
                }
                if (interaction.values == 'business') {
                    user.roles.add('837444761446645791');
                    PostCourse()
                }
                if (interaction.values == 'chemical') {
                    user.roles.add('837444799526207508');
                    PostCourse()
                }
                if (interaction.values == 'chemist') {
                    user.roles.add('837444860491071528');
                    PostCourse()
                }
                if (interaction.values == 'comms') {
                    user.roles.add('837444890228162591');
                    PostCourse()
                }
                if (interaction.values == 'compsci') {
                    user.roles.add('837445069286932502');
                    PostCourse()
                }
                if (interaction.values == 'crea') {
                    user.roles.add('837445122995126412');
                    PostCourse()
                }
                if (interaction.values == 'crim') {
                    user.roles.add('877216471879663696');
                    PostCourse()
                }
                if (interaction.values == 'des') {
                    user.roles.add('837445163068162079');
                    PostCourse()
                }
                if (interaction.values == 'eng') {
                    user.roles.add('837445196014026775');
                    PostCourse()
                }
                if (interaction.values == 'found') {
                    user.roles.add('877209609042026516');
                    PostCourse()
                }
                if (interaction.values == 'geo') {
                    user.roles.add('837445264218128384');
                    PostCourse()
                }
                if (interaction.values == 'intrel') {
                    user.roles.add('837445519970271313');
                    PostCourse()
                }
                if (interaction.values == 'mat') {
                    user.roles.add('837445294442020945');
                    PostCourse()
                }
                if (interaction.values == 'math') {
                    user.roles.add('837445323513135164');
                    PostCourse()
                }
                if (interaction.values == 'mecheng') {
                    user.roles.add('837445429138161685');
                    PostCourse()
                }
                if (interaction.values == 'natsci') {
                    user.roles.add('877218609955500042');
                    PostCourse()
                }
                if (interaction.values == 'phys') {
                    user.roles.add('837445490182324244');
                    PostCourse()
                }
                if (interaction.values == 'psy') {
                    user.roles.add('877218122120192053');
                    PostCourse()
                }
                if (interaction.values == 'sport') {
                    user.roles.add('837445728771112971');
                    PostCourse()
                }
            }



        });

    },
};