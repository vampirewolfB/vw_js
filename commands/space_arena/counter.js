const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Counter } = require("../../CommandFunctions/Space_Arena/counter.js")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('counter')
        .setDescription('Shows the counter image')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Counter())
    }
}