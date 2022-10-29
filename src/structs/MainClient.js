const {
    Client,
    Collection,
    GatewayIntentBits
} = require('discord.js');
const {
    Loader
} = require('./Loader');
const CatLoggr = require('cat-loggr');

class MainClient extends Client {
    constructor(options = {}) {
        super({
            intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
        });
        this.checkSettings(options)
        this.loader = new Loader(this);
        this.logger = new CatLoggr;

        this.commands = new Collection();
        this.events = new Collection();
    }

    async boot() {
        await this.loader.events()
        await this.loader.commands()
        this.login(this.token);
    }

    checkSettings(options) {
        if (typeof options !== 'object') throw new TypeError('Options should be a object.');
        if (!options.token) throw new Error('You need to provide the token for the client.');
        this.token = options.token;
    }
}

module.exports = {
    MainClient
};