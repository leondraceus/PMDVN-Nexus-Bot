﻿const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
    //.setColor(`#556a74`)
    .setDescription(`inventory của`+ args[0] +` đã bị xóa sạch!`);

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Tuổi lone gì mà đòi xóa ! Xóe !```");

}

module.exports.help = {
    name: "clearinventory"
}