module.exports = {
    name: 'help',
    description: "help",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#407294')
        .setTitle('Help')
        .setDescription('bot commands')
        .addFields(
            {name: 'ping command', value: '_ping'},
            {name: 'github command', value: '_github'},
            {name: 'embed command', value: '_embed'},
            {name: 'play command', value: '_play {song link}/{song name}'},
            {name: 'leave command', value: '_leave'},
            {name: 'Rules command', value: '_rules'},
            {name: 'Button command', value: '_button'}

        )

        .setImage('https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png')
        .setFooter('these are bot commands');

        message.channel.send(newEmbed);
    }
}