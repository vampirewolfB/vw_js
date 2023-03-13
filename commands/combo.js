const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 
const combo = require("path").join(__dirname, "../data/pictures/combo.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('combo')
        .setDescription('Shows what weapon type matches')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [combo]})
    }
}