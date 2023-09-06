const Discord = require('discord.js');
const client = require("path").join(__dirname, "../../index.js"); 
const { Readable  } = require('stream');

module.exports =
{
    data: new Discord.SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Suggest something')
        .addStringOption(option => 
            option.setName('suggestion')
                  .setDescription('Your suggestion')
                  .setRequired(true))
        .addAttachmentOption(option =>
            option.setName('image')
                  .setDescription('option to add a image to your suggestion')
                  .setRequired(false))
        .setDMPermission(false),
    async execute(interaction)
    {
        const suggestion = interaction.options.getString('suggestion');
        const attachment = interaction.options.getAttachment('image');
        const suggsetChannel = await interaction.client.channels.cache.get('702909452789219389');
        const suggestLogChannel = await interaction.client.channels.cache.get('702909452789219389');

        if (attachment && ![".jpg", ".png"].some(test => attachment.url.endsWith(test))) {
            interaction.reply({ content: "Please send either a `.jpg` or `.png` file.", ephemeral: true});
            return;
        }

        var suggestEmbed = {
                color: 0xFF0000,
                title: 'Suggestion:',
                description: `${suggestion}`
            };

        if (attachment) suggestEmbed.image = attachment;

        interaction.reply({ content: 'Your suggestion has been passed forward', ephemeral: true});
        suggestLogChannel.send({ content: `<@${interaction.user.id}>`, embeds: [suggestEmbed]});
        suggsetChannel.send({ embeds: [suggestEmbed]}).then(sentMessage =>{
            sentMessage.react("723603472720723968");
            sentMessage.react("723603439623340032");
        });
    }
}