const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Galaxy } = require("../../CommandFunctions/Space_Arena/galaxy.js");

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('galaxy')
        .setDescription('Shows the galaxy list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Galaxy());
    }
}