const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 

module.exports = 
{
	name: "interactionCreate",
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try 
        {
			await command.execute(interaction);
		} 
        catch (error)
        {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};