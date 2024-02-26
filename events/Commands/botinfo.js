const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot || !message.content.startsWith('!')) return;

        const prefix = '!';

        if (message.content.toLowerCase().startsWith(prefix+'ping')) {
            const { Ping } = require("../../CommandFunctions/BotInfo/ping.js");

            message.channel.send(Ping(message))
        }        
    },
};