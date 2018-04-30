const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let guidelines = '**Don\'t abuse the bot**\n\
	- #bot-jigoku is the anarcho-communist state of channels\n\
	- Dont\' spam memes anywhere outside of #bot-jigoku\n\
	- Spam is more than 1 meme per 30 seconds, roughly\n\
	- If a lot of people are posting memes maybe wait a bit\n\
	- If you give yourself a role you leave yourself open to pings\n\
	- Don\'t spam role pings, treat them like you would treat @everyone\n\
	- Bother @medjed#9811 about bot related stuff';

	message.channel.send(guidelines);
};

module.exports.help = {
	name: 'guidelines',
	description: 'How to not be annoying'
};