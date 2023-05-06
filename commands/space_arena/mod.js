const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const mod = require("path").join(__dirname, "../../data/pictures/mod.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('mods')
        .setDescription('Shows a list for mods')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [mod]})
    }
}