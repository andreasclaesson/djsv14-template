const Event = require('../structs/Event');

module.exports = class extends Event {
    constructor(...args) {
        super(...args, {
            once: false
        });
    }

    async run(interaction) {
		if (!interaction.isCommand()) return;
        await interaction.deferReply().catch(err => {})

        const { commandName } = interaction;
        const command = this.client.commands.get(commandName)
        if(!command) return interaction.followUp("The following command does not seem to exist.")

        try {
            if(command) await command.run(this.client, interaction)
        } catch (err) {
            console.log(err)
            return interaction.followUp(`Something went wrong while executing the command.`)
        }
	}
}