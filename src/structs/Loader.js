const path = require('path');
const {
    promisify
} = require('util');
const glob = promisify(require('glob'));
const Event = require('./Event')

class Loader {
    constructor(client) {
        this.client = client;
    }

    get directory() {
        return `${path.dirname(require.main.filename)}${path.sep}`;
    }

    isClass(input) {
        return typeof input === 'function' &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }

    async commands() {
        return glob(`${this.directory}commands/**/*.js`).then(commands => {
            for (const commandFile of commands) {
                delete require.cache[commandFile];
                const pull = require(commandFile);
                this.client.commands.set(pull.data.name, pull);
            }
        });
    }

    async events() {
        return glob(`${this.directory}events/*.js`).then(events => {
            for (const eventFile of events) {
                delete require.cache[eventFile];
                const {
                    name
                } = path.parse(eventFile);
                const File = require(eventFile);
                if (!this.isClass(File)) throw new TypeError(`Event ${name} doesn't export a class!`);
                const event = new File(this.client, name);
                if (!(event instanceof Event)) throw new TypeError(`Event ${name} doesn't belong in Events`);
                this.client.events.set(event.name, event);
                event.emitter[event.type](name, (...args) => event.run(...args));
            }
        });
    }
}

module.exports = {
    Loader
}