const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// Remove commands!
(async () => {
	try {
		// for guild-based commands
		rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
			.then(() => console.log('Successfully deleted all guild commands.'))
			.catch(console.error);

		// for global commands
		rest.put(Routes.applicationCommands(clientId), { body: [] })
			.then(() => console.log('Successfully deleted all application commands.'))
			.catch(console.error);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();