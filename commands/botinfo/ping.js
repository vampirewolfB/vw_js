const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js");
const { Ping } = require("../../CommandFunctions/BotInfo/ping.js")

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    async execute(interaction) {
        console.log(interaction)
        interaction.reply(Ping(interaction));
    }
}