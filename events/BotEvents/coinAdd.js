const { Sequelize } = require('sequelize');
const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js");
const { addBalance } = require('../../Database/databaseFunctions.js');

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot) return;
        addBalance(message.author.id, 1)
    },
};