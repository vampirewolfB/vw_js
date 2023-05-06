const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('sheet')
        .setDescription('Send your sheet link.')
        .addStringOption(option => 
            option.setName('sheet')
                  .setDescription('Your sheet link')
                  .setRequired(true))
        .setDMPermission(false),
    async execute(interaction)
    {
        const sheet = interaction.options.getString('sheet');
        const sheetLinkChannel = await interaction.client.channels.cache.get('702909452789219389')

        interaction.reply({ content: 'Your suggestion has been past forward', ephemeral: true})
        sheetLinkChannel.send({ content: `Sheet link from <@${interaction.user.id}>:\n ${sheet}` })
    }
}