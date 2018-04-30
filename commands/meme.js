const Discord = require('discord.js');
const Fuse = require('fuse.js');
const botConfig = require('../botconfig.json');
const MEME_DB = botConfig.memeDB;
const FUSE_OPTIONS = botConfig.fuseoptions;

module.exports.run = async (bot, message, args) => {
	let meme = args.join(' ');

	if (!meme) return message.channel.send('?');

	let fuse = new Fuse(MEME_DB, FUSE_OPTIONS);
	let match = fuse.search(meme)[0];

	return message.channel.send(match.url);
};

module.exports.help = {
	name: 'meme',
	usage: '!meme <meme>',
	description: 'Send a meme, find all memes here: https://imgur.com/a/MHyUalQ'
};