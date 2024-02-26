const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Users } = require('../../Database/dbObjects.js');

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Shows your inventory.')
        .setDMPermission(false),
    async execute(interaction)
    {
        const target = interaction.options.getUser('user') ?? interaction.user;
        const user = await Users.findOne({ where: { user_id: target.id }});
        const items = await user.getItems();

        if (!items.lenght) return interaction.reply(`${target.tag} has nothing.`);

        return interaction.reply(`${target.tag} currently has:\n ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`)
    }
}