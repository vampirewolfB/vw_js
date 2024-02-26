const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot || !message.content.startsWith('!')) return;

        const prefix = '!';

        if (message.content.startsWith(prefix+'8ball')) {
            const { EightBall } = require("../../CommandFunctions/Fun/8ball.js");
            const question = message.content.substr((prefix+"8ball ").length);

            if (question.length == 0) {
                message.channel.send("Can't send a prediction if you don't ask a question.");
                return;
            }

            message.channel.send(EightBall(question))
        }
        else if (message.content.startsWith(prefix+'randomnumber')) {
            const { RandomNumber } = require("../../CommandFunctions/Fun/RandomNumber.js");
            var regex = /\d/g;
            const number = message.content.substr((prefix+"8ball ").length);

            if (number.length == 0) {
                message.channel.send("Can't roll if you don't send a number.");
                return;
            }
            else if (!regex.test(number)) {
                message.channel.send("Please send a number.");
            }

            message.channel.send(RandomNumber(parseInt(number)))
        }
    },
};