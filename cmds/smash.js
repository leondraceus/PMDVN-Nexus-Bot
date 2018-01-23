module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã đập ' + args[0] + '! http://digitalspyuk.cdnds.net/16/31/480x240/landscape-1470312536-6mlbm.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used smash!`);
}

module.exports.help = {
    name: "smash"
}