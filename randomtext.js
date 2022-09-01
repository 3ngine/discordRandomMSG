const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tfler example')
        .setDescription('tfler example'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const msgs = [ 'tfler1', 'tfler2', 'tfler3' ]
        const rmsg = msgs[Math.floor(Math.random() * msgs.length)];
        const smsg = rmsg
        await interaction.editReply({
            content: smsg
        });
    }
}