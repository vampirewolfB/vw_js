const counter = require("path").join(__dirname, "../../data/pictures/counter.png")

function Counter() {
    return { files: [counter] }
}

module.exports = { Counter }