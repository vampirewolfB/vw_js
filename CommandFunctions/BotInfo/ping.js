function Ping(message) {
    return `Pong!🏓 Latency: ${message.client.ws.ping}ms.`;
}

module.exports = { Ping }