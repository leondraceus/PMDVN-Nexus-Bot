module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.server.detailsOf(message.author).nick;
    console.log(`${message.author.username}#${message.author.discriminator} used smash!`);
}

module.exports.help = {
    name: "smash"
}