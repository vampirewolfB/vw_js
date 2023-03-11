const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    async execute(interaction) {
        await interaction.reply(`Pong!🏓`);
    }
}