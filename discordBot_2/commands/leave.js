module.exports = {
    name: 'leave',
    description: 'stop command to the bot',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You have to be in the voice channel to stop playing the music');
        await voiceChannel.leave();
        await message.channel.send('leaving the voice channel');
    }

}