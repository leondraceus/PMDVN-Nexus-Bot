module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã liếm ' + args[0] + ' (๑>◡<๑) ! https://pa1.narvii.com/6415/99af997dbefc5885ebe12e497c5a4cfdc4b03843_hq.gif ');
console.log(`${message.author.username}#${message.author.discriminator} used lick!`);
}

module.exports.help = {
    name: "lick"
}
