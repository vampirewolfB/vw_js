const weap = require("path").join(__dirname, "../../data/pictures/weap.png")

function Weapon() {
    return {files: [weap]}
}

module.exports = { Weapon }