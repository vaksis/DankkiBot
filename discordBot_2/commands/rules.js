module.exports = {
    name: 'rules',
    description: "please read this",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1167b1')
        .setTitle('Rules')
        .setDescription('Please read this')
        .attachFiles(['../discordBot_2/images/herramiehetCursed.jpg'])
        .setImage('attachment://discordBot_2/herramiehetCursed.jpg')
        .addFields(
            {name: '1.', value: 'Dont be a cunt and use your common sense'},
            {name: '2.', value: 'Dont use @ everyone ping pointlessly'},
            {name: '3.', value: 'NSFW content For NSFW channel ONLY.(this includes all the offensive shit too)'},
            {name: '4.', value: 'Dont request any admin roles (we will mention if we need more administrators, but you will need to be active user and do the separate application for it'},
            {name: '5.', value: 'Do not disturb server admins or owner without any specific reason!(Trust me you dont want to annoy admins)'},
            {name: '6.', value: 'Do not advertise your own server.'},
            {name: '7.', value: 'If there is dispute with someone, they should settle in DM'},
            {name: '8.', value: 'no unnecessary extra spam. Put all your content on its dedicated channels. For example all memes in the #memes channel'}
        )
        .setFooter('Server rules');
        message.channel.send(newEmbed);
    }
}