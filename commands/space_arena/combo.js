const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Combo } = require("../../CommandFunctions/Space_Arena/combo.js")

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('combo')
        .setDescription('Shows what weapon type matches')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Combo())
    }
}