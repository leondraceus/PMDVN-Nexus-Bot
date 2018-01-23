module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã cắn ' + args[0] + ' :heart: https://31.media.tumblr.com/9698474b91588cdd9ded9c3d2eb85515/tumblr_inline_n34t5eNZ6t1r03dsk.gif ');
    console.log(`${message.author.username}#${message.author.discriminator} used bite!`);
}

module.exports.help = {
    name: "bite"
}