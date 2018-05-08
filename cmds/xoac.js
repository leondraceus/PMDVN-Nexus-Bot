module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải gạ xoạc một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã gạ xoạc với ' + args[0] + ':heart: ! https://vignette.wikia.nocookie.net/degrassi/images/8/89/Funny-pokemon-gif-piplup-steal.gif/revision/latest?cb=20150526155747');
}

module.exports.help = {
    name: "xoac"
}
