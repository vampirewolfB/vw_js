const { timeStamp } = require('console');
const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js");

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
            
            let maxCellHit = Math.round(1.91+(1.53*radius)+(1.67*Math.sqrt(radius)));
            let maxDps180 = +(maxCellHit*(damage/3)*(fireRate)*(missilePerSalvo)).toFixed(2);
            let maxDps135 = +(maxCellHit/1.3333*(damage/3)*(fireRate)*(missilePerSalvo)).toFixed(2);
            let maxDps90 = +(maxCellHit/2*(damage/3)*(fireRate)*(missilePerSalvo)).toFixed(2);
            let dpsPerCell = +(maxDps135/totalCells).toFixed(2);
            let powerPerCell = +(powerUse/totalCells).toFixed(2);
            let powerDpsPerCell = +(dpsPerCell/powerPerCell).toFixed(2);

            const missileDpsEmbed = {
                color: 0xedd22c,
                title: "Missile dps:",
                fields: [
                    {
                        name: "Max Cells Hit:",
                        value: `${maxCellHit}`,
                        inline: false
                    },
                    {
                        name: "Max Dps 180°:",
                        value: `${maxDps180}`,
                        inline: true
                    },
                    {
                        name: "Max Dps 135°:",
                        value: `${maxDps135}0`,
                        inline: true
                    },
                    {
                        name: "Max Dps 90°:",
                        value: `${maxDps90}`,
                        inline: true
                    },
                    {
                        name: "Average Dps/Cell:",
                        value: `${dpsPerCell}`,
                        inline: true
                    },
                    {
                        name: "Power Per/Cell:",
                        value: `${powerPerCell}`,
                        inline: true
                    },
                    {
                        name: "Average Dps/Power",
                        value: `${powerDpsPerCell}`,
                        inline: true
                    }
                ],
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Formulas are made by a member from the community!! Which was done by a lot of testing.\n"
                }
            }

            interaction.reply({ embeds: [missileDpsEmbed]});
        }
}