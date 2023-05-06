// imports and such
const fs = require('node:fs');
const path = require('node:path');
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Discord.Client({ 
    intents: [Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent],
        
        partials:
        [Discord.Partials.Channel]
    });


client.commands = new Discord.Collection();

const subdir = ["fun", "botinfo", "moderation", "dominus", "other", "space_arena"]
const subdirs = subdir.values();

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const dir of subdirs) {
    const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"))
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        client.commands.set(command.data.name, command)
    }
}

for (const file of eventFiles)
{
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once)
    {
		client.once(event.name, (...args) => event.execute(...args));
	}
    else
    {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Log in to Discord with client token
client.login(token);