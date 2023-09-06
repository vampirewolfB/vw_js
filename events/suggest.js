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
//                 const suggestChannel =  message.client.channels.cache.get('702909452789219389');
//                 const LogChannel = message.client.channels.cache.get('702909452789219389');
//                 const attachment = message.attachments.map(attachment => attachment.attachment);
//                 let attachmentCheck = false;
//                 let attachmentCheckFileType = false
//                 let messageLink;

//                 message.delete()

//                 if (message.content.trim() === '' || message.content === "" || message.content === null)  {
//                     suggestChannel.send({ content: `<@${message.author.id}> Please send a message for your suggestion.`}).then(test =>{
//                         setTimeout(() => test.delete(), 1000)
//                     });
//                     return;
//                 };

//                 if (attachment.length > 1) {
//                     suggestChannel.send({ content: `<@${message.author.id}> Please send only 1 file.`}).then(test =>{
//                         setTimeout(() => test.delete(), 1000)
//                     });
//                     return;
//                 } 

//                 attachment.forEach(element => {
//                     if (![".jpg", ".png"].some(attachmentCheck => element.endsWith(attachmentCheck))) {
//                         attachmentCheckFileType = true
//                         return;
//                     };
//                 });

//                 if (attachmentCheckFileType) {
//                     suggestChannel.send({ content: `<@${message.author.id}> Please send either a .jpg or .png file.`}).then(test =>{
//                         setTimeout(() => test.delete(), 1000)
//                     });
//                     return;
//                 };

//                 let suggestEmbed = {
//                     color: 0xFF0000,
//                     title: "Suggestion",
//                     description: message.content
//                 };
//                 if (attachment) suggestEmbed.image = message.attachments.first();

//                 if (attachment.length > 0) attachmentCheck = true;

//                 await suggestChannel.send({ embeds: [suggestEmbed]}).then(sentMessage =>{
//                     sentMessage.react("723603472720723968");
//                     sentMessage.react("723603439623340032");
//                     messageLink = `https://discord.com/channels/584779116428132381/702909452789219389/${sentMessage.id}`;
//                 });
//                 LogChannel.send({ content: `<@${message.author.id}>`, embeds: [suggestEmbed]});

//                 let data = `${message.author.username+"#"+message.author.discriminator};${message.content};${attachmentCheck};${moment().format("D MMMM")};${messageLink}`;
//                 data = data.replace(/\n|\r/g, ' ')

//                 fs.appendFile("./data/files/suggest.csv", data+"\n", (error) => { if(error) throw error})
//             };
//         };
//     },
// };