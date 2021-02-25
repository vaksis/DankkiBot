module.exports = {
    name: 'help',
    description: "help",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#407294')
        .setTitle('Vaksis profile')
        .setDescription('bot commands')
        .addFields(
            {name: 'ping_command', value: '-ping'},
            {name: 'github', value: '-github'},
            {name: 'embed', value: '-embed'}
        )

        .setImage('https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png')
        .setFooter('these are bot commands');

        message.channel.send(newEmbed);
    }
}