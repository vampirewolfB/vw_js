const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const weap = require("path").join(__dirname, "../../data/pictures/weap.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('weapon')
        .setDescription('Shows the weapon tier list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [weap]})
    }
}