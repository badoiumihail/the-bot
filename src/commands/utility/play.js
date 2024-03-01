const { SlashCommandBuilder } = require('discord.js');
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');

const player = createAudioPlayer({
  behaviors: {
    noSubscriber: NoSubscriberBehavior.Pause,
  },
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .addStringOption((option) =>
      option
        .setName('url')
        .setDescription('The url for the youtube video')
        .setRequired(true)
    )
    .setDescription('Play youtube video in voice channel.'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
