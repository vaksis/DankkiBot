const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const fs = require('fs');

const prefix = ".";

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}

client.once('ready', () =>{
    console.log('onee-san is online!');
});


client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.command.get('help').execute(message, args);
    } else if(command === 'button') {
        client.command.get('button').execute(message,args,Discord);
    } else if(command === 'play') {
        client.command.get('play').execute(message, args, Discord);
    } else if(command === 'leave') {
        client.command.get('leave').execute(message, args, Discord);
    }
});

client.login(config.token);