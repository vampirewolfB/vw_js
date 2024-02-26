const Discord = require('discord.js');
const { getBalance, addBalance } = require('../../Database/databaseFunctions');
const client = require("path").join(__dirname, "../../index.js"); 

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('transfer')
        .setDescription('Shows your inventory.')
        .addUserOption(option => option.setName('target').setDescription('The user you want to transfer coins to').setRequired(true))
        .addIntegerOption(option => option.setName('amount').setDescription('The amount you want to transfer').setRequired(true))
        .setDMPermission(false),
    async execute(interaction)
    {
        const currentAmount = getBalance(interaction.user.id);
        const transferAmount = interaction.options.getInteger('amount');
        const transferTarget = interaction.options.getUser('user');

        if (transferAmount > currentAmount || ( currentAmount - transferAmount <= 0 )) {
            return interaction.reply(`Sorry ${interaction.user}, you only have ${currentAmount}`)
        }

        if (transferAmount <= 0) {
            return interaction.reply(`Please enter an amount greater than zero, ${interaction.user}`)
        }
        
        addBalance(interaction.user.id, -transferAmount);
        addBalance(transferTarget, transferAmount);

        return interaction.reply(`Succesfully transferred ${transferAmount}<:vw:722144064430014525> to ${transferTarget.tag}. Your current balance is ${getBalance(interaction.user.id)}<:vw:722144064430014525>`)
    }
}