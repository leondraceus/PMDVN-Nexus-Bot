module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã ôm ' + args[0] + 'thật chặt! (づ｡◕‿‿◕｡)づ');
    console.log(`${message.author.username}#${message.author.discriminator} used hug!`);
}

module.exports.help = {
    name: "hug"
}