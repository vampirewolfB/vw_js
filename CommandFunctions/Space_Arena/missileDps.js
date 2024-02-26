function MissileDps(radius, damage, fireRate, missilePerSalvo, totalCells, powerUse) {
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
    
    return {embeds: [missileDpsEmbed]};
}

module.exports = { MissileDps }