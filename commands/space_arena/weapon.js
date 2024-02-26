const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Weapon } = require('../../CommandFunctions/Space_Arena/weapon');

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('weapon')
        .setDescription('Shows the weapon tier list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Weapon())
    }
}