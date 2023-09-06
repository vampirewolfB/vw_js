const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 

client.guild
module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('event')
        .setDescription('Send your answer of the current event')
        .addStringOption(option => 
            option.setName('answer')
                  .setDescription('Your answer')
                  .setRequired(true))
        .setDMPermission(false),
    async execute(interaction)
    {
        const answer = interaction.options.getString('answer');
        const answerChannel = await interaction.client.channels.cache.get('702909452789219389')

        const eventEmbed = {
            color: 0xFF0000,
            title: "Answer: ",
            description: `${answer}`
        }

        interaction.reply({ content: 'Your answer has been passed forward', ephemeral: true})
        answerChannel.send({ content: `From <@${interaction.user.id}>`, embeds: [eventEmbed]})
    }
}