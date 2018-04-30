const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	// Check if the bot has role management permissions
	if (!message.channel.permissionsFor(bot.user).has('MANAGE_ROLES'))
		return message.channel.send('I don\'t have permission to assign roles');

	// Keep the author of the message for convenience
	let author = message.member;
	let authorName = `**${author.displayName}**`;

	// Check for the existence of a role request
	let roleRequest = args.join(' ');
	if (!roleRequest) return message.channel.send(`Specify a role, ${authorName}`);

	// Check if the guild actually has the role
	let role = message.guild.roles.find('name', roleRequest);
	if (!role) return message.channel.send(`No such role exists, ${authorName}, bother ${message.guild.owner.displayName} or @medjed#9811 about it`);

	// Check if the member already has the role
	if (author.roles.has(role.id)) return message.channel.send(`You already have that role, ${authorName}`);

	// Check if the role belongs to the bot
	if (role.hasPermission('MANAGE_ROLES')) return message.channel.send('I cannot give you that role');

	// Give them the role
	try {
		await author.addRole(role);
		return message.channel.send(`${authorName} now has the role **${role.name}**`);
	}
	catch (e) {
		return message.channel.send(`There was some problem in giving ${authorName} the role **${role.name}**: ${e}`);
	}
};

module.exports.help = {
	name: 'addrole',
	usage: '!addrole <role name>',
	description: 'Add a role to your account, use !listroles to see what\'s available'
};