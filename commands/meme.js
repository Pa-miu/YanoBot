const Discord = require('discord.js');
const Fuse = require('fuse.js');
const MEME_DB = require('../memes.json');
const FUSE_OPTIONS = {
	shouldSort: true,
	threshold: 0.3,
	maxPatternLength: 32,
	minMatchCharLength: 3,
	keys: ['meme']
};

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