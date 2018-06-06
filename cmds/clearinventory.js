module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi lone gì ! Xóe !```");
    message.channel.sendMessage(message.author.username + ' đã xóa sạch item của ' + args[0]);
console.log(`${message.author.username}#${message.author.discriminator} used clearinventory!`);
}

module.exports.help = {
    name: "clearinventory"

