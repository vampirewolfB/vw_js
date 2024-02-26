const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.channelId == "1078015580398964886" || message.channelId == "") {
            if (message.author.bot == false) {
                if (message.content.startsWith("randomroll")) {

                }
            };
        };
    },
};