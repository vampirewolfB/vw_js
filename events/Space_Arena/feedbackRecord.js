// const Discord = require('discord.js');
// const client = require("path").join(__dirname, "./index.js");
// const fs = require("fs");
// const moment = require("moment")
// moment.locale("ru")

// module.exports = {
//     name: "messageCreate",
//     async execute(message) {
//         if (message.channelId == "702909452789219389") {
//             if (message.author.bot == false) {
//                 const attachment = message.attachments.map(attachment => attachment.attachment);
//                 let attachmentCheck = false;

//                 if (attachment.length > 0) attachmentCheck = true;

//                 let data = `${message.author.username+"#"+message.author.discriminator};${message.content};${attachmentCheck};${moment().format("D MMMM")};https://discord.com/channels/584779116428132381/702909452789219389/${message.id}`;
//                 data = data.replace(/\n|\r/g, ' ')

//                 fs.appendFile("./data/files/feedback.csv", data+"\n", (error) => { if(error) throw error})
//             };
//         };
//     },
// };