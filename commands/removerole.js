const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	// Check if the bot has role management permissions
	if (!message.channel.permissionsFor(bot.user).has('MANAGE_ROLES'))
		return message.channel.send('I don\'t have permission to assign roles');

	// Keep the author of the message for convenience
	let author = message.member;
	let authorName = `**${author.displayName}**`;

	// Check for the existence of a role removal
	let roleRequest = args.join(' ');
	if (!roleRequest) return message.channel.send(`Specify a role, ${authorName}`);

	// Check if the member actually has the role
	let role = message.guild.roles.find('name', roleRequest);
	if (!role) return message.channel.send(`You do not have this role, ${authorName}`);

	// Take their role
	try {
		await author.removeRole(role);
		return message.channel.send(`${authorName} no longer has the role ${role}`);
	}	catch (e) {
		return message.channel.send(`There was some problem in taking ${role} from ${authorName}: ${e}`);
	}
};

module.exports.help = {
	name: 'removerole',
	usage: '!removerole <role name>',
	description: 'Remove one of your roles, click your username on the right side bar to see your roles'
};