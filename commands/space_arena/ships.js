const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Ships } = require('../../CommandFunctions/Space_Arena/ships.js');

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('ship')
        .setDescription('Shows the ships tier list')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Ships())
    }
}