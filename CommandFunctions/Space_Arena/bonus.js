const bonus = require("path").join(__dirname, "../../data/pictures/bonus.png")

function Bonus() {
    return { files: [bonus] }
}

module.exports = { Bonus }