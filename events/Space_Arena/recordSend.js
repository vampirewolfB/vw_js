// const Discord = require('discord.js');
// const client = require("path").join(__dirname, "./index.js");
// const fs = require("fs");
// const suggestFile = require("path").join(__dirname, "../data/files/suggest.csv");
// const feedbackFile  = require("path").join(__dirname, "../data/files/feedback.csv")

// module.exports = {
//     name: "messageCreate",
//     async execute(message) {
//         if (message.channelId == "551580844289032202") {
//             if (message.author.bot == false) {
//                 if (message.author.id == "301361809766744077" || message.author.id == "324922454629810204") {
//                     if (message.content.startsWith("record")) {
//                         message.channel.send({ files: suggestFile })
//                     }
//                 }
//             };
//         };
//     },
// };