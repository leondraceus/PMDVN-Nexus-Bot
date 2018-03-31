const Discord = module.require("discord.js");

module.exports.run = async (pw, message, args) => {
    var embed = new Discord.RichEmbed()
       .setColor(`#676666`)
       .setDescription(args[0] +` đã được hồi sinh !`);

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("```Bạn không đủ quyền hành để thực hiện việc này!```");

var toRevive = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!toRevive) return message.channel.sendMessage("```Hãy Mention một ai đó!```");

var role = message.guild.roles.find(r => r.name === "Died");

if(!toRevive.roles.has(role.id)) return message.channel.sendMessage("```Pokémon này hiện vẫn sống dai vl ra!```");

await toRevive.removeRole(role);
message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "revive"
}// JavaScript source code
