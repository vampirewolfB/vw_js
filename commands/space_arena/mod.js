const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Mod } = require("../../CommandFunctions/Space_Arena/mod.js");

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('mods')
        .setDescription('Shows a list for mods')
        .setDMPermission(false),
    async execute(interaction)
    {
        interaction.reply(Mod())
    }
}