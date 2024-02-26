function Event(interaction, message, answer) {

    const eventEmbed = {
        color: 0xFF0000,
        title: "Answer: ",
        description: `${answer}`
    }

    if(interaction) {
        const answerChannel = interaction.client.channels.cache.get('702909452789219389')

        return interaction.reply({ content: 'Your answer has been passed forward', ephemeral: true}).then(
            answerChannel.send({ content: `From <@${interaction.user.id}>`, embeds: [eventEmbed]})
        )
    }
    else if(message) {
        const answerChannel = message.client.channels.cache.get('702909452789219389')

        message.delete()

        return message.channel.send({ content: 'Your answer has been passed forward'}).then(
            remove => { setTimeout(() => remove.delete(),2000)}
        ).then(
            answerChannel.send({ content: `From <@${message.author.id}>`, embeds: [eventEmbed]})
        )
    }
}

module.exports = { Event }