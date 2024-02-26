const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot || !message.content.startsWith('!')) return;

        const prefix = '!';

        if (message.content.startsWith(prefix+'poll')) {
            const { Poll } = require("../../CommandFunctions/Moderation/poll.js")
            const pollInput = message.content.substr((prefix+"poll ").length);

            if (pollInput.length == 0) {
                message.channel.send("Can't make a poll cause no input given.");
                return;
            }

            const reaction = await message.channel.send({ embeds: [Poll(pollInput)], fetchReply: true });
            reaction.react("723603472720723968");
            reaction.react("723603439623340032");
        }
    },
};