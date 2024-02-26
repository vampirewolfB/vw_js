const Discord = require('discord.js');
const { Avatar } = require('../../CommandFunctions/Other/avatar.js')

module.exports = 
{
	data: new Discord.SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');

		interaction.reply(Avatar(interaction, user, null))
	},
};
