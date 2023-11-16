const Discord = require('discord.js');
const client = require("path").join(__dirname, "./index.js"); 
const fs = require("fs");
const moment = require("moment")
const anomaliesFile = require("path").join(__dirname, "../data/files/anomalies.csv")
let check = true

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (!message.author.bot) {
            if (message.channelId == "702909452789219389") {
                if (message.author.id == "301361809766744077" || message.author.id ==  "662301178775994400") {
                    if (message.content.toLowerCase() == "anomalies prediction start" && !check) {
                        check = true;
                        
                        message.reply({ content: "Prediction recording started."})
                        return;
                    }
                    else if (message.content.toLowerCase() == "anomalies prediction start" && check){
                        message.reply({ content: "Prediction recording already ongoing."});
                        return;
                    }
                    else if (message.content.toLowerCase() == "anomalies prediction end" && check) {
                        const user = message.client.users.cache.get("301361809766744077")
                        check = false;

                        message.reply({ content: "Prediction recording ended."});
                        user.send({ files: [anomaliesFile]}).then( () =>{
                            fs.unlinkSync(anomaliesFile, err => { if(err) throw err});
                            fs.writeFileSync(anomaliesFile, "UserName;Content;Time\n", err => { if(err) throw err})
                        })
                        return;
                    }
                    else if (message.content.toLowerCase() == "anomalies prediction end" && !check) {
                        message.reply({content: "No prediction started yet."})
                        return;
                    }
                }

                if (check) {
                    const messageContent = message.content;
                    const checks = ["place: ", "place:", "place ", "place", "th"];

                    function writeFile() {
                        let data = `${message.author.username+'#'+message.author.discriminator};${messageContent};${moment().format("HH:mm:ss")}`
                        data = data.replace(/\n|\r/g, ' ')
                        fs.appendFile(anomaliesFile, data+"\n", (error) =>{ if (error) throw error})
                    }

                    function hasNumber(check) {
                        var regex = /\d/g;
                        return regex.test(check);
                    }

                    if (messageContent.trim === '' || messageContent === "" || messageContent === null) {
                        return;
                    }
                    
                    if (messageContent.toLowerCase().match(new RegExp(`\\b(${checks.join("|")})\\b`), "g") && hasNumber(messageContent)) {
                        writeFile();
                        message.react("✅")
                    }
                    else if(!isNaN(messageContent)) {
                        writeFile();
                        message.react("✅")
                    }
                }
            }
        }
    }
};