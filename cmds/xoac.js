module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải gạ xoạc một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã gạ xoạc với ' + args[0] + ':heart: ! http://2.bp.blogspot.com/-DMmg9d0YRVg/UGLoofj9UUI/AAAAAAAACas/kTPkU7EJX_I/s1600/bellsprout+wiggle.gif');
}

module.exports.help = {
    name: "xoạc"
}
