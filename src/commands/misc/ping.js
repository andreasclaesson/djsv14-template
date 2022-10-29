const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');
const { MainClient } = require('../../structs/MainClient');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Shows the current latency of the bot.'),
    /**
     * @param {MainClient} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        await interaction.followUp({ content: 'Pong!' });
    }
}