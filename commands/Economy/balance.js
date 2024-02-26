const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { getBalance } = require('../../Database/databaseFunctions.js');

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('balance')
        .setDescription('Gives your coin balance.')
        .setDMPermission(false),
    async execute(interaction)
    {
        const target = interaction.options.getUser('user') ?? interaction.user;

        return interaction.reply(`${target.tag} has ${getBalance(target.id)}<:vw:722144064430014525>`)
    }
}