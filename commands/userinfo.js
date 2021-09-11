const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		console.log('userinfo')
		return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
	},
};