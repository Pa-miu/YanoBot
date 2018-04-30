const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let roles = message.guild.roles.array().slice(1);
	let roleList = roles.join(', ');
	return message.channel.send(roleList);
};

module.exports.help = {
	name: 'listroles',
	description: 'Prints the list of roles'
};