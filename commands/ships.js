const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 
const ship = require("path").join(__dirname, "../data/pictures/ship.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('ship')
        .setDescription('Shows the ships tier list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [ship]})
    }
}