module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã tát sml ' + args[0] + '! http://gifsstore.com/public/upload/gifs/15343399831534339977.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used slap!`);
}

module.exports.help = {
    name: "slap"
}