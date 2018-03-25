const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
       .setColor(`#923200`)
       .setDescription(args[0] +` đã được nhả ra!`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

    var toVomit = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toVomit) return message.channel.sendMessage("```Hãy Mention một ai đó!```");

    var role = message.guild.roles.find(r => r.name === "Eaten");

    if(!toVomit.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện không ở trong bụng!```");

    await toVomit.removeRole(role);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "vomit"
}