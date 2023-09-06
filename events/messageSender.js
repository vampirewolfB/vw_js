const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const rules = require("path").join(__dirname, "../data/pictures/rules.png");
const roles = require("path").join(__dirname, "../data/pictures/roles.png");
const platform = require("path").join(__dirname, "../data/pictures/platform.png");
const topClass = require("path").join(__dirname, "../data/pictures/topshipclass.png");
const chatMore = require("path").join(__dirname, "../data/pictures/chatmore.png");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.channel.id == "702909452789219389") {
            if (message.author.id != "301361809766744077") return
            const rulesChannel =  message.client.channels.cache.get('702909452789219389');

            message.delete();
            
            rulesChannel.send({ files: [ rules ]}).then(() => {
                rulesChannel.send({ content: "Welcome to the official Space Arena server! This is where you can find the most relevant information about the game, get tips from experienced players and get in touch with devs. We encourage you to participate actively in discussions, suggest ideas for the game’s improvement, and share experiences with other Discord users. Please abide by some simple rules and enjoy your stay here!\n \n 1\\. Be cool, kind, and civil. Treat all members with respect and express your thoughts in a constructive manner.\n \n 2\\. Please note that this Discord server is maintained in English, so we cannot guarantee responses in languages other than English. We urge you to communicate in English, but be considerate of all languages.\n \n 3\\. Use an appropriate name and avatar. Avoid special characters, emoji, obscenities, and impersonation. Usernames and profile pictures that are against the rules will be given a warning to change it, then kick/banned if they do not comply.\n \n 4\\. Do not spam. Stay on topic for each channel. Avoid excessive messages, images, formatting, emoji, commands, and @mentions when not needed.\n \n  5\\. Do not @mention or direct message HC Developers please respect their time. Serg has bravely opted out of this rule. We also have a team of dedicated moderators who are always willing to help you.\n \n 6\\. No self-promotion or advertisements. This includes unsolicited references and links to other social media, servers, communities, and services in chat or direct messages.\n \n 7\\. No personal information. Protect your privacy and the privacy of others.\n \n 8\\. Refrain from any content that is racist, sexist, anti-LGBTQ+, or otherwise offensive content. Do not incite hatred against any group of people.\n \n9\\. No piracy, sexual, NSFW, or otherwise suspicious content. We do not condone illegal or suspicious discussions and activity.\nㅤ"})
                rulesChannel.send({ content: "10\\. No political or religious topics in channels that are inappropriate for them. These complex subjects result in controversial and offensive posts. However, you can still discuss it in the #off-topic bearing in mind other rules.\n \n 11\\. Listen to the moderators you can always dispute a mute after or talk to a different moderator. Do not use bypassing mutes with alts or accidental perms.\n \n 12\\. Rules are subject to common sense. These rules are not comprehensive and the use of loopholes to violate the spirit of these rules is subject to enforcement.\n \n 13\\. Discord Terms of Service and Community Guidelines apply. You must be at least 13 years old to use Discord and abide by all other terms and guidelines."})    
                rulesChannel.send({ files: [ roles]}).then(() => {
                    rulesChannel.send({ content: "<@&583298424456216596> - HeroCraft Community Manager\n<@&520373554148147221> - HeroCraft Staff\n<@&525651478031892481> - Discord Server Head Admin\n<@&487045105799397391> - Discord Server Admin\n<@&577707621193351188> - Discord Server Moderator\n<@&746010699079090176> - Discord Server Moderator in the process of becoming a Admin or Moderator\n<@&765862129143382078> - These Commanders help devs to translate Space Arena in a proper way.\n<@&768879841293893693> - Commanders who provide Space Arena related video, memes, artworks\n<@&765862129143382078> - Commanders who joined the Space Arena Beta Program in Google Play. Feel free to contact <@&583298424456216596> to learn more about it.\n<@&506608874594238465> - Highest ranking player per season\n<@&502486891799773213> - Player in the top 10 of the ranking leaderboard per season"})
                    rulesChannel.send({ files: [ platform ]}).then(() => {
                        rulesChannel.send({ content: "<a:android:648546422383312906> <@&517175120431808523>\n<a:ios:648546440053915688> <@&515299388080390145>\n<a:pc:648546451777126412> <@&558226800296329216>"}).then(platformReact => {
                            platformReact.react("648546422383312906");
                            platformReact.react("648546440053915688");
                            platformReact.react("648546451777126412");
                        })
                        rulesChannel.send({ files: [ topClass ]}).then(() => {
                            rulesChannel.send({ content: "<a:corvette:648546484425326612> <@&515173171742244884>\n<a:frigate:648546513772871691> <@&506117736070381578>\n<a:cruiser:648546497092255754> <@&487742396914991114>\n<a:battleship:648546462816272415> <@&487947882238967820>\n<a:carrier:648546474749329410> <@&496090951056621591>\n<a:supercarrier:648546541061275658> <@&487052478760747019>\n<a:galacticcarrier:648546526360240140> <@&632508763844116490>"}).then(topClassReact => {
                                topClassReact.react("648546484425326612");
                                topClassReact.react("648546513772871691");
                                topClassReact.react("648546497092255754");
                                topClassReact.react("648546462816272415");
                                topClassReact.react("648546474749329410");
                                topClassReact.react("648546541061275658");
                                topClassReact.react("648546526360240140");
                            })
                            rulesChannel.send({ content: "ㅤ\n<:Bazaar_bidder:1146457198487142501> for <@&963452000442392646> so you get notified when there is a bazaar."}).then(bazaarReact => {
                                bazaarReact.react("1146457198487142501")
                            })
                            rulesChannel.send({ files: [ chatMore ]}).then(() => {
                                rulesChannel.send({ content: "Build Support channels section - on these channels you can find Commanders’ hints and builds according to the selected ship's class. You can also publish your own hints and builds.\n\n<#486870895978086402> - general discussion about the Space Arena. Feel free to ask any game-related question, Commander.\n\n<#566268214514941952> - The channel includes Commanders’ thoughts and hints about specific builds, strategies, hints which can help others.\n\n⁠<#768056458175971340> - Here devs tell about the game mechanics and secrets of the Space Arena.\n\n<#1059877794437419129> - Check this channel is case you want to join a clan.\n\n⁠<#875036469528522762> - Here you can take part in community contests and get in-game rewards!"})
                                rulesChannel.send({ content: "<:salute:610055695890644993>   Follow our social media pages!\nFacebook Page: https://www.facebook.com/SpaceshipBattlesGame\nReddit Page: https://www.reddit.com/r/SpaceArenaOfficial/\nVkontakte Page: https://vk.com/spacearenabuildandfight\nInstagram Page: https://www.instagram.com/spacearenaofficial/\nOur Tiktok: https://vm.tiktok.com/ZSJdAHGdA\nYoutube Channel:  https://www.youtube.com/channel/UC8nB3AQ5b5qIohGNQTranPw"})
                            })
                        })
                    })
                })
            })
        }
    },
};