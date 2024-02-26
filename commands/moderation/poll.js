const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Poll } = require("../../CommandFunctions/Moderation/poll.js")

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('poll')
		.setDescription('Put on a poll')
		.addStringOption(option => 
            option.setName('poll')
            .setDescription('The poll you want to start.')
            .setRequired(true))
        .setDMPermission(false),
	async execute(interaction) {
		const pollInput = interaction.options.getString('poll');
		
        const message = await interaction.reply({embeds: [Poll(pollInput)], fetchReply: true});
        message.react("723603472720723968");
        message.react("723603439623340032");
	},
};