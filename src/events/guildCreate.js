const Event = require('../structs/Event');

module.exports = class extends Event {
    constructor(...args) {
        super(...args);
    }

    async run(guild) {
		await guild.commands.set([...this.client.commands].map(x => x[1].data));
        this.client.logger.info(`I successfully joined the guild "${guild.name}" and registered commands!`);
	}
}