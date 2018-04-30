const FileSys = require('fs');
const Discord = require('discord.js');
const botConfig = require('./botconfig.json');
const tokenFile = require('./token.json');
const COMMANDS_DIR = './commands/';

// Start a discord bot
const bot = new Discord.Client({disableEveryone: true});
const prefix = botConfig.prefix;

// Fetch all local command modules
bot.commands = new Discord.Collection();
FileSys.readdir('./commands/', (err, files) => {
	if (err) console.log(err);

	let jsFile = files.filter(f => f.split('.').pop() === 'js');

	if (jsFile.length <= 0){
		console.log('Couldn\'t find commands');
		return;
	}

	// Load each local command and print their names
	jsFile.forEach(f => {
		let props = require(`${COMMANDS_DIR}${f}`);
		bot.commands.set(props.help.name, props);
		console.log(`${f} loaded`);
	});
});

// Log in the bot
bot.on('ready', async () => {
	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers`);
	bot.user.setActivity('high-speed guitar solo', {type: 'PLAYING'});
});

// Event for reading commands
bot.on('message', async message => {
	// Prevents bot responding to bots
	if (message.author.bot) return;
	// Ignores messages that don't begin with command prefix
	if (message.content.indexOf(prefix) !== 0) return;
	// Prevents bot responding to DMs
	if (message.channel.type === 'dm') return;

	// Split the command into an array,
	// separate the command from the args,
	// and run the desired command
	let messageArray = message.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let commandFile = bot.commands.get(cmd.slice(prefix.length));
	if (commandFile) commandFile.run(bot, message, args);
});

bot.login(tokenFile.token);

/*Resources:
 {TheSourceCode}: https://www.youtube.com/channel/UCNXt2MrZaqfIBknamqwzeXA
 Discord.js docs: https://discord.js.org/#/docs/main/stable/general/welcome
 The Perfect Lil' Bot: https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
 Idiot's Guide to Discord Bots: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/
*/
