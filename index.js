const { token } = require('./config.json');
const dotenv = require('dotenv')

dotenv.config();

console.log(token);
console.log();
console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN)