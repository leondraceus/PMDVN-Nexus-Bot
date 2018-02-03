module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`Bạn phải mention một ai đó!`)
    message.channel.sendMessage(message.author.username + ' đã chọc ' + args[0] + ' 👉 ');
}

module.exports.help = {
    name: "poke"
}