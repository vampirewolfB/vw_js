const Discord = require("discord.js");
const client = require("path").join(__filename, "index");

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Suggest something')
        .addStringOption(option => 
            option.setName('suggestion')
                  .setDescription('Your suggestion')
                  .setRequired(true))
        .setDMPermission(false),
    async execute(interaction)
    {
        const suggestion = interaction.options.getString('suggestion');
        interaction.reply(suggestion)
    }
}