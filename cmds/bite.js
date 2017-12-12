module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã cắn ' + args[0] + ' :heart: ');
    console.log(`${message.author.username}#${message.author.discriminator} used bite!`);
}

module.exports.help = {
    name: "bite"
}