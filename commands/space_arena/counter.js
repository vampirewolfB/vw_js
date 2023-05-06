const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const counter = require("path").join(__dirname, "../../data/pictures/counter.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('counter')
        .setDescription('Shows the counter image')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [counter]})
    }
}