# DiscordJS v14 Template

## Requirements

 * NodeJS v16.6 and higher

## Installation Guide

### Set it up

Go to the [Discord Dev Portal](https://discord.com/developers/applications) and create your own application, and make an bot. 
<br>
You will now want to copy the token and put it in config.json. Keep this secret and <b>do not</b> share it with anybody else.

#### Package Installation

NPM
```
npm install
```

Yarn
```
yarn install
```

#### Start the bot
```
npm start
```

## Packages Used

 * [DiscordJS](https://discord.js.org/) - The core of the Bot
 * [Glob](https://npmjs.com/glob) - Reading folders for commands and events
 * [cat-loggr](https://npmjs.com/cat-loggr) - Beautiful logging
 * [bufferutil](https://npmjs.com/bufferutil) - much faster WebSocket connection
 * [utf-8-validate](https://npmjs.com/utf-8-validate) - in combination with `bufferutil` for much faster WebSocket processing

## License

MIT © 2022 VenixDeveloper