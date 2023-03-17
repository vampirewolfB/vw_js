const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 
const galaxy = require("path").join(__dirname, "../data/pictures/galaxy.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('galaxy')
        .setDescription('Shows the galaxy list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [galaxy]})
    }
}