const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
        console.log('exec once method');
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
        console.log('exec on method')
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);