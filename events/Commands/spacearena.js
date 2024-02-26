const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        const prefix = '!';

        if (message.author.bot || !message.content.startsWith(prefix)) return;

        const command = message.content.toLowerCase();

        if (command.startsWith(prefix+'bonus')) {
            const { Bonus } = require("../../CommandFunctions/Space_Arena/bonus.js");

            message.channel.send(Bonus());
        }
        else if (command.startsWith(prefix+'combo')) {
            const { Combo } = require("../../CommandFunctions/Space_Arena/combo.js");

            message.channel.send(Combo());
        }
        else if (command.startsWith(prefix+'counter')) {
            const { Counter } = require("../../CommandFunctions/Space_Arena/counter.js");

            message.channel.send(Counter());
        }
        else if (command.startsWith(prefix+'event')) {
            const { Event } = require("../../CommandFunctions/Space_Arena/event.js")
            const answer = message.content.substr((prefix+"event").length)

            if (answer.length == 0) {
                message.channel.send("Can't pass answer forward. No answer given").then(
                    remove => { setTimeout(() => remove.delete(),5000)});
                return
            }

            Event(null, message, answer)
        }
        else if (command.startsWith(prefix+'galaxy')) {
            const { Galaxy } = require("../../CommandFunctions/Space_Arena/galaxy.js");
            message.channel.send(Galaxy());
        }
        else if (command.startsWith(prefix+'mod')) {
            const { Mod } = require("../../CommandFunctions/Space_Arena/mod.js");
            message.channel.send(Mod())
        }
        else if (command.startsWith(prefix+'ship')) {
            const { Ships } = require("../../CommandFunctions/Space_Arena/ships.js");
            message.channel.send(Ships())
        }
        else if (command.startsWith(prefix+'weap')) {
            const { Weapon } = require('../../CommandFunctions/Space_Arena/weapon.js');
            message.channel.send(Weapon())
        }
        else if (command.startsWith(prefix+'missiledps')) {
            const { MissileDps } = require('../../CommandFunctions/Space_Arena/missileDps.js');
            message.channel.send(MissileDps())
        }
    },
};
