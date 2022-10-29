const { MainClient } = require('./structs/MainClient');
const config = require('../config_test.json');

const bot = new MainClient(config)
bot.boot();