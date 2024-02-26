function RandomNumber(number) {
    let random = number[Math.floor(Math.random() * number.length)]

    const eightBallembed = {
        color: 0xFF0000,
        title: `Question: ${question}`,
        description: `${responses[random]}`
    }

    return {embeds: [eightBallembed]};
}

module.exports = { RandomNumber };