// imports and such
const Sequelize = require("sequelize");
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
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.MessageContent
    ],
        
    partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.Reaction
    ]
});

client.commands = new Discord.Collection();

const commandDirectories = fs.readdirSync('./Commands', { withFileTypes: true })
                             .filter(dirent => dirent.isDirectory())
                             .map(dirent => dirent.name);

for (const dir of commandDirectories) {
    const commandFiles = fs.readdirSync(path.join('./Commands', dir))
                           .filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
        const command = require(path.join(__dirname, 'Commands', dir, file));
        client.commands.set(command.data.name, command)
    }
}

const eventDirectories = fs.readdirSync('./Events', { withFileTypes: true})
                           .filter(dirent => dirent.isDirectory())
                           .map(direct => direct.name);

for (const dir of eventDirectories) {
  const eventFiles = fs.readdirSync(path.join('./Events', dir))
                       .filter(file => file.endsWith('.js'))

  for (const file of eventFiles){
    const eventPath = path.join(__dirname, 'Events', dir, file);
    const event = require(eventPath);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args))
    }
    else {
      client.on(event.name, (...args) => event.execute(...args));
    };
  };
};

// Log in to Discord with client token
client.login(token);