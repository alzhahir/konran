/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        console.log("creating interaction");
		if (!interaction.isCommand()) return;

	    const command = client.commands.get(interaction.commandName);

	    if (!command) return;

	    try {
		    command.execute(interaction);
	    } catch (error) {
		    console.error(error);
		    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	    }
	},
}