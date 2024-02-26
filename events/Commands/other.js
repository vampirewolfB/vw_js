const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");
const { Avatar } = require("../../CommandFunctions/Other/avatar.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot || !message.content.startsWith('!')) return;

        const prefix = '!';

        if (message.content.startsWith(prefix+'avatar')) {
            message.channel.send(Avatar(null, null, message))
        }        
    },
};