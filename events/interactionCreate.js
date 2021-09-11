/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */
const fs = require('fs');
const path = require('path');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.data.name, command);
}
module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
		if (!interaction.isCommand()) return;

	    const command = client.commands.get(interaction.commandName);

	    if (!command) return;

	    try {
		    await command.execute(interaction);
	    } catch (error) {
		    console.error(error);
		    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	    }
	},
}