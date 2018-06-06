const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    //.setColor(`#556a74`)
    .setDescription(`Inventory của `+ args[0] +` đã bị xóa sạch!`);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi lone gì mà đòi xóa ! Xóe !```");

    var toClearInv = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toClearInv) return message.channel.sendMessage("```Hãy Mention nạn nhân của bạn!```");
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "clearinventory"
}