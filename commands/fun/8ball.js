const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { EightBall } = require("../../CommandFunctions/Fun/8ball.js");

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the bot a question')
		.addStringOption(option => 
            option.setName('question')
            .setDescription('The question you want to ask the bot.')
            .setRequired(true))
        .setDMPermission(false),
	async execute(interaction) {
		const question = interaction.options.getString('question');
		
        interaction.reply(EightBall(question))
	},
};