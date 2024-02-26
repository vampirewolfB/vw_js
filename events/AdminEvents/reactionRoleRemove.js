const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js");

module.exports = {
    name: 'messageReactionRemove',
    async execute(reaction, user) {
        if (reaction.message.channel.id != `702909452789219389`) return

        if (reaction.partial) {
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                return;
            }
        }

        const role = reaction.message.guild.roles.cache.find(r => r.name === reaction._emoji.name);
        const roleUser = reaction.message.guild.members.cache.get(`${user.id}`)
        roleUser.roles.remove(role);
    },
};