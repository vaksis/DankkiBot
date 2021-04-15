const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const fs = require('fs');

const prefix = "-";

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

    if(command === 'ping'){
        client.command.get('ping').execute(message, args);
    } else if (command === 'github'){
        client.command.get('github').execute(message, args);
    } else if (command === 'embed') {
        client.command.get('embed').execute(message, args, Discord);
    } else if(command === 'help') {
        client.command.get('help').execute(message,args,Discord);
    } else if(command === 'rules') {
        client.command.get('rules').execute(message,args,Discord);
    }

});

client.login(config.token);