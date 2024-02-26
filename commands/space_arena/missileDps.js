const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js");
const { MissileDps } = require('../../CommandFunctions/Space_Arena/missileDps.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('missiledps')
        .setDescription("Missile dps calculator")
        .addNumberOption(option => 
            option.setName('radius')
                  .setDescription('The explosion radius of the weapon.')
                  .setRequired(true))
        .addNumberOption(option =>
            option.setName('damage')
                  .setDescription("The damage of the weapon.")
                  .setRequired(true))
        .addNumberOption(option =>
            option.setName('firerate')
                  .setDescription("The firerate of the weapon.")
                  .setRequired(true))
        .addNumberOption(option =>
            option.setName('missile')
                  .setDescription("The amount of missiles fired per salvo.")
                  .setRequired(true)
                  .addChoices(
                    { name: '1', value: 1},
                    { name: '2', value: 2},
                    { name: '3', value: 3},
                    { name: '6', value: 6}
                  ))
        .addNumberOption(option =>
            option.setName('totalcells')
                  .setDescription("The amount of cells of the weapon.")
                  .setRequired(true))
        .addNumberOption(option =>
            option.setName('power')
                  .setDescription("The power use of the weapon.")
                  .setRequired(true))
        .setDMPermission(false),
        async execute(interaction){
            let radius = interaction.options.getNumber("radius");
            let damage = interaction.options.getNumber("damage");
            let fireRate = interaction.options.getNumber("firerate");
            let missilePerSalvo = interaction.options.getNumber("missile");
            let totalCells = interaction.options.getNumber("totalcells");
            let powerUse = interaction.options.getNumber("power");
            
            interaction.reply(MissileDps(radius, damage, fireRate, missilePerSalvo, totalCells, powerUse));
        }
}