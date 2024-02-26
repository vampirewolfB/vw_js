function EightBall(question) {
    const responses = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Dont count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ];

    const random = Math.floor(Math.random() * responses.length)

    const eightBallembed = {
        color: 0xFF0000,
        title: `Question: ${question}`,
        description: `${responses[random]}`
    }

    return {embeds: [eightBallembed]};
}

module.exports = { EightBall };