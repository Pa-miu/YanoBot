const Discord = require('dicord.js');

module.exports.run = async (bot, message, args) => {
	let guidelines = '**Don\'t abuse the bot**\
			- #bot-jigoku is the anarcho-communist state of channels\
			- Dont\' spam memes anywhere outside of #bot-jigoku\
			- Spam is more than 1 meme per 30 seconds, roughly\
			- If a lot of people are posting memes maybe wait a bit\
			- If you give yourself a role you leave yourself open to pings\
			- Don\'t spam role pings, treat them like you would treat @everyone\
			- Bother @medjed#9811 about bot related stuff';

	message.channel.send(guidelines);
};

module.exports.help = {
	name: 'guidelines',
	description: 'How to not be annoying'
};