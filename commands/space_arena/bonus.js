const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Bonus } = require("../../CommandFunctions/Space_Arena/bonus.js")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('bonus')
        .setDescription('Shows the bonus module list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Bonus())
    }
}