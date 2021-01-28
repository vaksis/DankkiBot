module.exports = {
    name: 'github',
    description: "gives vaksis's github profile",
    execute(message, args){
        message.channel.send('https://github.com/vaksis');
    }
}