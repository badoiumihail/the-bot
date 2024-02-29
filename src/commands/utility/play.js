const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play the provided youtube url'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
