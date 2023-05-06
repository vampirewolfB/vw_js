const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const bonus = require("path").join(__dirname, "../../data/pictures/bonus.png")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('bonus')
        .setDescription('Shows the bonus module list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply({ files: [bonus]})
    }
}