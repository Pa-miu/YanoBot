const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let botFace = bot.user.displayAvatarURL;
	let botEmbed = new Discord.RichEmbed()
		.setDescription('__**Command List**__')
		.setColor('#e09f38')
		.setThumbnail(botFace);

	bot.commands.forEach(c => {
		let usage = (c.help.usage === undefined) ? `!${c.help.name}` : c.help.usage;
		let description = (c.help.description === undefined) ? 'No description' : c.help.description;
		botEmbed.addField(usage, description);
	});

	return message.channel.send(botEmbed);
};

module.exports.help = {
	name: 'help',
	description: '?'
};
