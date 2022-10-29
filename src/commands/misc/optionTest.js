const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');
const { MainClient } = require('../../structs/MainClient');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('optiontest')
      .setDescription('Just an test command for showing off addUserOption and addStringOption.')
      .addUserOption(option => option.setName('target').setDescription('Select a user').setRequired(true))
      .addStringOption(option => option.setName('string').setDescription('Enter a string').setRequired(true)),
    /**
     * @param {MainClient} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        await interaction.followUp({ content: `Hello!\nUser selected: ${interaction.options.getUser('target').tag}\nString given: ${interaction.options.getString('string')}` });
    }
}