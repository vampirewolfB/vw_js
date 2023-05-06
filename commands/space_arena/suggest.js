const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Suggest something')
        .addStringOption(option => 
            option.setName('suggestion')
                  .setDescription('Your suggestion')
                  .setRequired(true))
        .setDMPermission(false),
    async execute(interaction)
    {
        const suggestion = interaction.options.getString('suggestion');
        const suggsetChannel = await interaction.client.channels.cache.get('702909452789219389')
        const suggestLogChannel = await interaction.client.channels.cache.get('702909452789219389')

        const suggestEmbed = {
            color: 0xFF0000,
            title: 'Suggestion:',
            description: `${suggestion}`
        }

        interaction.reply({ content: 'Your suggestion has been past forward', ephemeral: true})
        suggestLogChannel.send({ content: `<@${interaction.user.id}>`, embeds: [suggestEmbed] })
        const message = suggsetChannel.send({ embeds: [suggestEmbed]}).then(sentMessage =>{
            sentMessage.react("723603472720723968")
            sentMessage.react("723603439623340032")
        })
    }
}