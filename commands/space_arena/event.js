const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Event } = require("../../CommandFunctions/Space_Arena/event.js")

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

        Event(interaction, null, answer)
    }
}

