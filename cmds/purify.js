const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(`#556a74`)
    .setDescription(args[0] +` đã được hoá giải khỏi sự hoá đá!`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

    var toPurify = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toPurify) return message.channel.sendMessage("```Hãy Mention một ai đó!```");

    var role = message.guild.roles.find(r => r.name === "Petrified");

    if(!toPurify.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện không bị hoá đá!```");

    await toPurify.removeRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "purify"
}