const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 

module.exports =
{
    name: Discord.Events.ClientReady,
    once: true,
    execute(client)
    {
        console.log(`Ready! Logged in as ${client.user.tag}`)
    }
}