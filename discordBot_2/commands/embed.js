module.exports = {
    name: 'embed',
    description: "embeds",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#407294')
        .setTitle('Vaksis profile')
        .setURL('https://github.com/vaksis')
        .setDescription('this is vaksis profile')
        .addFields(
            {name: 'name', value: 'vaksis'},
            {name: 'age', value: '17'},
            {name: 'Gender', value: 'male'},
            {name: 'Languages', value: 'english, finnish, japan'},
            {name: 'Hobbys', value: 'eSports, Anime and manga stuff and computer stuff'},
            {name: 'Favorite game', value: 'overwatch'}
        )
        .addFields(
            {name: 'PC Specs:', value: 'my pc specs'},
            {name: 'GPU:', value: 'Nvidia GeForce RTX 2060 super'},
            {name: 'CPU:', value: 'Intel core I5 9400F'},
            {name: 'RAM:', value: '16 Gb DDR4 2666mhz'},
            {name: 'Mass storage:', value: '500Gb M.2 SSD, and 1TB HDD'},
            {name: 'MB:', value: 'Asus ROG STRIX B360-H'},
            {name: 'Case:', value: 'Fractal Design Define R6 ATX'}
        )
        .setImage('https://i.pinimg.com/originals/c8/74/35/c87435e43e1a26bc4009cbdc2077d652.jpg')
        .setFooter('copyrights what are they?');

        message.channel.send(newEmbed);
    }

}