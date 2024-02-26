const Discord = require('discord.js');
const client = require("path").join(__dirname, "../index.js"); 
const cron = require("cron");
const nodeCron = require("node-cron")
const fs = require("fs");
const suggestFile = require("path").join(__dirname, "../data/files/suggest.csv");
const { Users } = require('../../Database/dbObjects.js');
const { currency } = require('../../Database/databaseFunctions.js');

module.exports =
{
    name: "ready",
    async execute(client)
    {
        const storedBalance = await Users.findAll();
        storedBalance.forEach(b => currency.set(b.user_id, b))
        //Start up message
        console.log(`Ready! Logged in as ${client.user.tag}`)

        // //Rant open and close schedules
        // const rantChannel = client.channels.cache.get('702909452789219389');

        // let rantOpen = new cron.CronJob('00 26 16 * * mon', () => {
        //     rantChannel.permissionOverwrites.create(rantChannel.guild.roles.everyone, { ViewChannel: true})
        // })
        // let rantClose = new cron.CronJob('00 25 16 * * sun', () => {
        //     rantChannel.permissionOverwrites.create(rantChannel.guild.roles.everyone, { ViewChannel: false})
        // })
        
        // //Suggest dm send

        // function sleep(ms) {
        //     return new Promise(resolve => setTimeout(resolve, ms))
        // }

        // async function fileUpdate() {
        //     await new Promise(resolve => setTimeout(resolve, 10000));
        //     fs.unlink(suggestFile, err => { if(err) throw err})
        //     fs.writeFile(suggestFile, "Author;Suggestion;Image Attached;Send day;MessageLink\n", err => { if (err) throw err})
        // }

        // async function dmSend() {
        //     client.users.send('301361809766744077', { files: [suggestFile]}).then(() => {
        //         fs.unlinkSync(suggestFile, err => { if(err) throw err})
        //         fs.writeFileSync(suggestFile,  "Author;Suggestion;Image Attached;Send day;MessageLink\n", err => { if (err) throw err})
        //     })
        // }

        // const CRON_TIMING = "* * * * *";
        // nodeCron.schedule(CRON_TIMING, dmSend)

        // //Timers starting
        // rantOpen.start()
        // rantClose.start()

    }
}