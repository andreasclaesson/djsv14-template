const Event = require('../structs/Event');

module.exports = class extends Event {
    constructor(...args) {
        super(...args, {
            once: true
        });
    }

    run() {
		this.client.logger.info(`Successfully started as ${this.client.user.tag}`);
	}
}