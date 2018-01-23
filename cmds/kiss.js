module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã hôn ' + args[0] + ':heart: ! http://i0.kym-cdn.com/photos/images/original/000/699/198/573.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used kiss!`);
}

module.exports.help = {
    name: "kiss"
}
