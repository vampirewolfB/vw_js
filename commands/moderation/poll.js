const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 

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
		const poll = interaction.options.getString('poll');

        const pollEmbed = {
            color: 0x0015CF,
            title: `Poll:`,
            description: `${poll}`
        };
		
        const message = await interaction.reply({embeds: [pollEmbed], fetchReply: true})
        message.react("723603472720723968")
        message.react("723603439623340032")
	},
};