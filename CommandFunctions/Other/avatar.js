function Avatar(interaction, user, message) {
    if (interaction) {
        if (user){
            return `${user.username}'s avatar: ${user.displayAvatarURL()}`
        }
        else {
            return `Your avatar: ${interaction.user.displayAvatarURL()}`
        }
    }
    else if(message) {
        if (message.mentions.users.size) {
            const userMessage = message.mentions.users.first();
            return `${userMessage.username}'s avatar: ${userMessage.displayAvatarURL()}`
        }
        else {
            return `Your avatar: ${message.author.displayAvatarURL()}`;
        }
    }
}

module.exports = { Avatar }