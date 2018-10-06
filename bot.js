const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    bot.user.setStatus('Online');
    bot.user.setGame('Nxb Ninja Voltage');
});

client.on('message', message => {
    if ("@Naruto Uzumaki#5732 " in message.content) {
    	message.reply('Dattebayo!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
